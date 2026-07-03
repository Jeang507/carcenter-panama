(function () {
  const canvas = document.getElementById('driveCanvas');
  const summary = document.getElementById('canvas-summary');
  const buttons = document.querySelectorAll('.drive-mode');
  if (!canvas || !summary) return;
  const context = canvas.getContext('2d');
  const modes = {
    eco: { label: 'ECO', speed: 55, accent: '#7ac69d', text: 'Modo ECO activo: la respuesta del tablero prioriza una conducción más suave y eficiente.' },
    normal: { label: 'NORMAL', speed: 85, accent: '#e5e7eb', text: 'Modo NORMAL activo: una respuesta equilibrada para la rutina diaria.' },
    sport: { label: 'SPORT', speed: 125, accent: '#e53935', text: 'Modo SPORT activo: el tablero muestra una respuesta más ágil al acelerar.' }
  };
  let current = 'eco';
  function resize() {
    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(320, Math.round(rect.width * ratio));
    canvas.height = Math.round(rect.height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    return { width: rect.width, height: rect.height };
  }
  function draw() {
    const { width, height } = resize();
    const mode = modes[current];
    context.clearRect(0, 0, width, height);
    const bg = context.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, '#0b0f14'); bg.addColorStop(1, '#1f2937');
    context.fillStyle = bg; context.fillRect(0, 0, width, height);
    const centerX = width * .5, centerY = height * .57;
    const radius = Math.min(width, height) * .30;
    context.strokeStyle = 'rgba(255,255,255,.12)'; context.lineWidth = 17; context.beginPath(); context.arc(centerX, centerY, radius, Math.PI * .76, Math.PI * 2.24); context.stroke();
    const max = 180; const arcStart = Math.PI * .76; const arcEnd = Math.PI * 2.24;
    const angle = arcStart + (mode.speed / max) * (arcEnd - arcStart);
    context.strokeStyle = mode.accent; context.lineWidth = 17; context.lineCap = 'round'; context.beginPath(); context.arc(centerX, centerY, radius, arcStart, angle); context.stroke();
    for (let speed = 0; speed <= max; speed += 20) {
      const t = arcStart + (speed / max) * (arcEnd - arcStart);
      const outer = radius + 25; const inner = radius + 13;
      const x1 = centerX + Math.cos(t) * outer, y1 = centerY + Math.sin(t) * outer;
      const x2 = centerX + Math.cos(t) * inner, y2 = centerY + Math.sin(t) * inner;
      context.strokeStyle = 'rgba(255,255,255,.52)'; context.lineWidth = 2; context.beginPath(); context.moveTo(x1, y1); context.lineTo(x2, y2); context.stroke();
    }
    const needleX = centerX + Math.cos(angle) * (radius - 17); const needleY = centerY + Math.sin(angle) * (radius - 17);
    context.strokeStyle = '#fff'; context.lineWidth = 4; context.lineCap = 'round'; context.beginPath(); context.moveTo(centerX, centerY); context.lineTo(needleX, needleY); context.stroke();
    context.fillStyle = mode.accent; context.beginPath(); context.arc(centerX, centerY, 8, 0, Math.PI * 2); context.fill();
    context.textAlign = 'center'; context.fillStyle = '#ffffff'; context.font = '800 17px Arial'; context.fillText(mode.label, centerX, centerY - 28);
    context.font = '800 62px Arial'; context.fillText(String(mode.speed), centerX, centerY + 33);
    context.fillStyle = 'rgba(255,255,255,.68)'; context.font = '700 13px Arial'; context.fillText('km/h', centerX, centerY + 57);
    context.textAlign = 'left'; context.fillStyle = 'rgba(255,255,255,.78)'; context.font = '700 13px Arial'; context.fillText('CARCENTER DRIVE', 24, 34);
    context.textAlign = 'right'; context.fillStyle = mode.accent; context.font = '800 13px Arial'; context.fillText('MODO ' + mode.label, width - 24, 34);
    summary.innerHTML = `<strong>${mode.label}:</strong> ${mode.text}`;
  }
  buttons.forEach((button) => button.addEventListener('click', () => {
    current = button.dataset.mode;
    buttons.forEach((item) => item.classList.toggle('active', item === button));
    draw();
  }));
  window.addEventListener('resize', draw);
  draw();
})();