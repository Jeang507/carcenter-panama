(function () {
  const zone = document.getElementById("drop-zone");
  const clear = document.getElementById("clear-garage");
  const cards = document.querySelectorAll(".drag-card");
  const toast = document.getElementById("toast");
  let toastTimer;
  if (!zone) return;

  function read() {
    try {
      const items = JSON.parse(localStorage.getItem("carcenterGarage"));
      return Array.isArray(items) ? items : [];
    } catch (_) {
      return [];
    }
  }

  function save(items) {
    localStorage.setItem("carcenterGarage", JSON.stringify(items));
    if (typeof window.carcenterUpdateGarageCount === "function") {
      window.carcenterUpdateGarageCount();
    }
  }

  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2500);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function render() {
    const items = read();
    if (!items.length) {
      zone.innerHTML = '<div class="drop-empty"><i class="fa-solid fa-car-side fa-2x" aria-hidden="true"></i><p>Arrastra un vehículo aquí para crear tu selección.</p></div>';
      return;
    }

    zone.innerHTML = items.map((item) => `
      <article class="garage-item">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
        <strong>${escapeHtml(item.name)}<br><small>${escapeHtml(item.brand)}</small></strong>
        <button class="remove-favorite" type="button" data-id="${escapeHtml(item.id)}" aria-label="Quitar ${escapeHtml(item.name)}"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
      </article>`).join("");

    zone.querySelectorAll(".remove-favorite").forEach((button) => {
      button.addEventListener("click", () => {
        save(read().filter((item) => item.id !== button.dataset.id));
        render();
      });
    });
  }

  function info(card) {
    return {
      id: card.dataset.id,
      name: card.dataset.name,
      brand: card.dataset.brand,
      image: card.dataset.image
    };
  }

  function add(item) {
    const items = read();
    if (items.some((saved) => saved.id === item.id)) {
      notify(`${item.name} ya está en tu selección.`);
      return;
    }
    items.push(item);
    save(items);
    render();
    notify(`${item.name} se agregó a Mi Garage.`);
  }

  cards.forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("application/json", JSON.stringify(info(card)));
      event.dataTransfer.effectAllowed = "copy";
    });
  });

  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("drag-over");
  });

  zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    zone.classList.remove("drag-over");
    try {
      add(JSON.parse(event.dataTransfer.getData("application/json")));
    } catch (_) {
      notify("No se pudo agregar el vehículo. Inténtalo nuevamente.");
    }
  });

  if (clear) {
    clear.addEventListener("click", () => {
      localStorage.removeItem("carcenterGarage");
      render();
      if (typeof window.carcenterUpdateGarageCount === "function") {
        window.carcenterUpdateGarageCount();
      }
    });
  }

  render();
})();
