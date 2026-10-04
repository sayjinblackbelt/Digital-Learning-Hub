document.addEventListener("DOMContentLoaded", () => {
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