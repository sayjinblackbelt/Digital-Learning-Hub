document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".valor-item, .oficina, .oficina-detalhe, .showcase-card, .system-meta div");

  if (!reduceMotion) {
    revealItems.forEach((item) => item.classList.add("motion-reveal"));

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  }

  const header = document.querySelector("header");
  if (header) {
    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  const form = document.querySelector("form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll("input[required], textarea[required]")];
    const invalid = fields.find((field) => !field.value.trim() || !field.validity.valid);

    if (invalid) {
      if (status) status.textContent = "Revise os campos destacados antes de continuar.";
      invalid.focus();
      return;
    }

    if (status) status.textContent = "Demonstração concluída: nenhum dado foi enviado para um servidor.";
    form.reset();
  });
});