(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  function setMenuState(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.innerHTML = open
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => setMenuState(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenuState(false)));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1020) setMenuState(false);
    });
  }

  function getGarage() {
    try {
      const items = JSON.parse(localStorage.getItem("carcenterGarage"));
      return Array.isArray(items) ? items : [];
    } catch (_) {
      return [];
    }
  }

  function updateGarageCount() {
    document.querySelectorAll("#garage-count").forEach((item) => {
      item.textContent = String(getGarage().length);
    });
  }

  window.carcenterUpdateGarageCount = updateGarageCount;
  updateGarageCount();

  const days = document.getElementById("count-days");
  if (!days) return;

  const fields = {
    days,
    hours: document.getElementById("count-hours"),
    minutes: document.getElementById("count-minutes"),
    seconds: document.getElementById("count-seconds")
  };

  function updateCountdown() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    const difference = Math.max(0, end.getTime() - now.getTime());

    const values = {
      days: Math.floor(difference / 86400000),
      hours: Math.floor((difference % 86400000) / 3600000),
      minutes: Math.floor((difference % 3600000) / 60000),
      seconds: Math.floor((difference % 60000) / 1000)
    };

    Object.entries(values).forEach(([key, value]) => {
      if (fields[key]) fields[key].textContent = String(value).padStart(2, "0");
    });
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
