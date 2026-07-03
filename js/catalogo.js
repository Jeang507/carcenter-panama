(function () {
  const cards = Array.from(document.querySelectorAll(".auto-card"));
  const search = document.getElementById("buscador");
  const filters = Array.from(document.querySelectorAll(".filter-button"));
  const empty = document.getElementById("empty-message");
  const count = document.getElementById("catalog-count");
  const toast = document.getElementById("toast");

  let currentFilter = "todos";
  let toastTimer;

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function getGarage() {
    try {
      const items = JSON.parse(localStorage.getItem("carcenterGarage"));
      return Array.isArray(items) ? items : [];
    } catch (_) {
      return [];
    }
  }

  function saveGarage(items) {
    localStorage.setItem("carcenterGarage", JSON.stringify(items));
    if (typeof window.carcenterUpdateGarageCount === "function") {
      window.carcenterUpdateGarageCount();
    }
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
  }

  function filterCards() {
    const term = normalizeText(search ? search.value : "");
    let visible = 0;

    cards.forEach((card) => {
      const categories = normalizeText(card.dataset.category).split(/\s+/);
      const searchableText = normalizeText(card.dataset.search);
      const matchesFilter = currentFilter === "todos" || categories.includes(currentFilter);
      const matchesSearch = term === "" || searchableText.includes(term);
      const show = matchesFilter && matchesSearch;

      card.hidden = !show;
      if (show) visible += 1;
    });

    if (empty) empty.hidden = visible !== 0;
    if (count) {
      count.textContent = visible === 1
        ? "1 modelo encontrado"
        : `${visible} modelos encontrados`;
    }
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter || "todos";
      filters.forEach((item) => item.classList.toggle("active", item === button));
      filterCards();
    });
  });

  if (search) search.addEventListener("input", filterCards);

  document.querySelectorAll(".btn-garage").forEach((button) => {
    button.addEventListener("click", () => {
      const item = {
        id: button.dataset.id,
        name: button.dataset.name,
        brand: button.dataset.brand,
        image: button.dataset.image
      };

      const items = getGarage();
      if (items.some((saved) => saved.id === item.id)) {
        showToast(`${item.name} ya está en Mi Garage.`);
        return;
      }

      items.push(item);
      saveGarage(items);
      showToast(`${item.name} se agregó a Mi Garage.`);
    });
  });

  filterCards();
})();
