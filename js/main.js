document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js");

  const motionStyle = document.createElement("style");
  motionStyle.textContent = `
    .js .motion-reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s cubic-bezier(.2,.8,.2,1)}
    .js .motion-reveal.is-visible{opacity:1;transform:none}
    .js .motion-reveal:nth-child(2){transition-delay:.06s}.js .motion-reveal:nth-child(3){transition-delay:.12s}.js .motion-reveal:nth-child(4){transition-delay:.18s}
    .form-status{min-height:1.5em;margin:0;color:var(--muted);font-size:.82rem}
    @media(prefers-reduced-motion:reduce){.js .motion-reveal{opacity:1;transform:none;transition:none}}
  `;
  document.head.appendChild(motionStyle);

  const revealItems = document.querySelectorAll(".valor-item, .oficina, .oficina-detalhe, .showcase-card, .system-meta div");
  revealItems.forEach((item) => item.classList.add("motion-reveal"));

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