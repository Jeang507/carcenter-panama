(function () {
  const autos = {
    "city": { name: "Honda City EX 2024", brand: "Honda", year: "2024", label: "Sedán", engine: "1.5 L", transmission: "Automática", fuel: "Gasolina", color: "Plata", price: "Consultar" },
    "civic-type-r": { name: "Honda Civic Type R", brand: "Honda", year: "2015", label: "Sedán deportivo", engine: "2.0 L Turbo", transmission: "Manual", fuel: "Gasolina", color: "Rojo", price: "Consultar" },
    "crv": { name: "Honda CR-V EX-L Hybrid", brand: "Honda", year: "2024", label: "SUV híbrida", engine: "2.0 L híbrido", transmission: "Automática", fuel: "Híbrido", color: "Azul profundo", price: "B/. 30,995" },
    "brv": { name: "Honda BR-V 2026", brand: "Honda", year: "2026", label: "SUV familiar", engine: "1.5 L", transmission: "Automática", fuel: "Gasolina", color: "Negro", price: "Consultar" },
    "pilot": { name: "Honda Pilot LX 2026", brand: "Honda", year: "2026", label: "SUV familiar", engine: "3.5 L V6", transmission: "Automática", fuel: "Gasolina", color: "Azul acero", price: "B/. 57,490" },
    "hrv": { name: "Honda HR-V 2026", brand: "Honda", year: "2026", label: "SUV compacta", engine: "1.5 L", transmission: "Automática", fuel: "Gasolina", color: "Negro", price: "Consultar" },
    "grand-i10": { name: "Hyundai Grand i10", brand: "Hyundai", year: "2026", label: "Compacto", engine: "1.2 L", transmission: "Manual / automática", fuel: "Gasolina", color: "Azul", price: "Consultar" },
    "accent": { name: "Hyundai Accent", brand: "Hyundai", year: "2026", label: "Sedán", engine: "1.6 L", transmission: "Automática", fuel: "Gasolina", color: "Plata", price: "Consultar" },
    "creta": { name: "Hyundai Creta 2026", brand: "Hyundai", year: "2026", label: "SUV", engine: "1.5 L", transmission: "Automática", fuel: "Gasolina", color: "Azul", price: "Consultar" },
    "creta-grand": { name: "Hyundai Creta Grand 2026", brand: "Hyundai", year: "2026", label: "SUV familiar", engine: "1.5 L", transmission: "Automática", fuel: "Gasolina", color: "Verde", price: "Consultar" },
    "kona": { name: "Hyundai Kona 2026", brand: "Hyundai", year: "2026", label: "SUV", engine: "Consultar versión", transmission: "Automática", fuel: "Consultar", color: "Verde", price: "Consultar" },
    "venue": { name: "Hyundai Venue 2026", brand: "Hyundai", year: "2026", label: "SUV compacta", engine: "1.0 L Turbo", transmission: "Manual", fuel: "Gasolina", color: "Azul", price: "B/. 16,541" },
    "k3": { name: "Kia K3 Sedán 2024", brand: "Kia", year: "2024", label: "Sedán", engine: "1.4 L", transmission: "Automática", fuel: "Gasolina", color: "Blanco", price: "B/. 17,995" },
    "picanto": { name: "Kia Picanto 2024", brand: "Kia", year: "2024", label: "Compacto", engine: "1.2 L", transmission: "Manual / automática", fuel: "Gasolina", color: "Blanco", price: "Consultar" },
    "soluto": { name: "Kia Soluto 2024", brand: "Kia", year: "2024", label: "Sedán", engine: "1.4 L", transmission: "Automática", fuel: "Gasolina", color: "Azul", price: "Consultar" },
    "sonet": { name: "Kia Sonet 2024", brand: "Kia", year: "2024", label: "SUV compacta", engine: "1.5 L", transmission: "Automática", fuel: "Gasolina", color: "Rojo", price: "Consultar" },
    "sportage": { name: "Kia Sportage 2026", brand: "Kia", year: "2026", label: "SUV", engine: "2.0 L", transmission: "Automática", fuel: "Gasolina", color: "Gris", price: "B/. 28,560" },
    "xtrail": { name: "Nissan X-Trail 2025", brand: "Nissan", year: "2025", label: "SUV familiar", engine: "2.5 L", transmission: "Automática", fuel: "Gasolina", color: "Gris", price: "B/. 27,000" },
    "kait": { name: "Nissan Kait Sense CVT 2026", brand: "Nissan", year: "2026", label: "SUV compacta", engine: "Consultar versión", transmission: "CVT", fuel: "Gasolina", color: "Blanco", price: "Consultar" },
    "kicks-exclusive": { name: "Nissan Kicks Exclusive 2026", brand: "Nissan", year: "2026", label: "SUV", engine: "2.0 L", transmission: "Automática CVT", fuel: "Gasolina", color: "Blanco bitono", price: "B/. 30,600" },
    "magnite": { name: "Nissan Magnite Advance CVT 2025", brand: "Nissan", year: "2025", label: "SUV compacta", engine: "1.0 L Turbo", transmission: "CVT", fuel: "Gasolina", color: "Rojo", price: "Consultar" },
    "kicks-sense": { name: "Nissan Kicks Sense CVT 2026", brand: "Nissan", year: "2026", label: "SUV", engine: "2.0 L", transmission: "CVT", fuel: "Gasolina", color: "Blanco", price: "Consultar" },
    "pathfinder": { name: "Nissan Pathfinder Advance 2026", brand: "Nissan", year: "2026", label: "SUV familiar", engine: "Consultar versión", transmission: "Automática", fuel: "Gasolina", color: "Celeste", price: "Consultar" },
    "innova": { name: "Toyota Innova", brand: "Toyota", year: "2026", label: "Movilidad familiar", engine: "Consultar versión", transmission: "Automática", fuel: "Gasolina", color: "Gris", price: "Consultar" },
    "yaris": { name: "Toyota Yaris", brand: "Toyota", year: "2026", label: "Sedán", engine: "1.5 L", transmission: "Automática", fuel: "Gasolina", color: "Gris", price: "Consultar" },
    "agya": { name: "Toyota Agya", brand: "Toyota", year: "2026", label: "Compacto", engine: "1.0 L", transmission: "Manual / automática", fuel: "Gasolina", color: "Rojo", price: "Consultar" },
    "hilux-gr": { name: "Toyota Hilux GR Sport", brand: "Toyota", year: "2026", label: "Pickup", engine: "Consultar versión", transmission: "Automática", fuel: "Diésel / gasolina", color: "Negro", price: "Consultar" },
    "prado": { name: "Toyota Land Cruiser Prado", brand: "Toyota", year: "2026", label: "Todo terreno", engine: "Consultar versión", transmission: "Automática", fuel: "Consultar", color: "Gris", price: "Consultar" },
    "raize": { name: "Toyota Raize 2026", brand: "Toyota", year: "2026", label: "SUV compacta", engine: "1.2 L", transmission: "Automática", fuel: "Gasolina", color: "Negro", price: "B/. 17,600" },
    "yaris-cross": { name: "Toyota Yaris Cross", brand: "Toyota", year: "2026", label: "SUV compacta", engine: "Consultar versión", transmission: "Automática", fuel: "Consultar", color: "Rojo", price: "Consultar" },
    "coaster": { name: "Toyota Coaster", brand: "Toyota", year: "2026", label: "Comercial", engine: "Consultar versión", transmission: "Manual / automática", fuel: "Diésel", color: "Blanco", price: "Consultar" },
    "hilux": { name: "Toyota Hilux", brand: "Toyota", year: "2026", label: "Pickup", engine: "Consultar versión", transmission: "Manual / automática", fuel: "Diésel / gasolina", color: "Blanco", price: "Consultar" },
    "corolla": { name: "Toyota Corolla 2026", brand: "Toyota", year: "2026", label: "Sedán", engine: "1.8 L", transmission: "Automática", fuel: "Gasolina", color: "Blanco", price: "B/. 23,000" }
  };

  const a = document.getElementById("auto-a");
  const b = document.getElementById("auto-b");
  const button = document.getElementById("compare-button");
  const body = document.getElementById("comparison-body");
  if (!a || !b || !button || !body) return;

  a.value = "corolla";
  b.value = "sportage";

  const rows = [
    ["Modelo", "name"],
    ["Marca", "brand"],
    ["Año", "year"],
    ["Categoría", "label"],
    ["Motor", "engine"],
    ["Transmisión", "transmission"],
    ["Combustible", "fuel"],
    ["Color", "color"],
    ["Precio desde", "price"]
  ];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function draw() {
    const left = autos[a.value];
    const right = autos[b.value];
    if (!left || !right) return;

    body.innerHTML = rows.map(([label, key]) => `
      <tr>
        <th scope="row">${label}</th>
        <td class="${key === "name" ? "comparison-auto" : ""}">${escapeHtml(left[key])}</td>
        <td class="${key === "name" ? "comparison-auto" : ""}">${escapeHtml(right[key])}</td>
      </tr>`).join("");
  }

  button.addEventListener("click", draw);
  a.addEventListener("change", draw);
  b.addEventListener("change", draw);
  draw();
})();
