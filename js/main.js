document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");

  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length && "IntersectionObserver" in window) {
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

  const header = document.querySelector("header");
  if (header) {
    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll("input[required], textarea[required]")];
    const invalid = fields.find((field) => !field.value.trim() || (field.type === "email" && !field.validity.valid));

    if (invalid) {
      invalid.focus();
      return;
    }

    alert("Demonstração concluída: o formulário não envia dados para um servidor.");
    form.reset();
  });
});