(function () {
  const form = document.getElementById("form-reserva");
  const success = document.getElementById("form-success");
  const date = document.getElementById("fecha");

  if (date) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    date.min = tomorrow.toISOString().split("T")[0];
  }

  if (!form || !window.jQuery || !success) return;

  const parsley = window.jQuery(form).parsley({
    errorsWrapper: '<ul class="parsley-errors-list"></ul>',
    errorTemplate: "<li></li>"
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!parsley.isValid()) return;

    const name = document.getElementById("nombre").value.trim();
    const vehicle = document.getElementById("modelo").value;
    success.replaceChildren();

    const title = document.createElement("strong");
    title.textContent = "Solicitud recibida.";
    success.append(title, document.createTextNode(` Gracias, ${name}. Te contactaremos para brindarte información sobre ${vehicle}.`));
    success.style.display = "block";

    form.reset();
    parsley.reset();
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();
