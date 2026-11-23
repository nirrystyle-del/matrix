// =========================
// MATRIX CHART ENGINE
// SVG verze podle původního Tilda canvas kalkulátoru
// Verze pro PDF rozbor: bez technických písmen v kruzích
// =========================

function renderMatrixChartHTML(result) {
  const width = 860;
  const height = 860;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 135;

  const BIG = 36;
  const MEDIUM = 24;
  const SMALL = 18;
  const CENTER = 38;

  function pos() {
    return {
      A: { x: centerX - radius, y: centerY, r: BIG, value: result.A, fill: "#8a46a3", text: "#fff" },
      B: { x: centerX, y: centerY - radius, r: BIG, value: result.B, fill: "#8a46a3", text: "#fff" },
      C: { x: centerX + radius, y: centerY, r: BIG, value: result.C, fill: "#ef4141", text: "#fff" },
      D: { x: centerX, y: centerY + radius, r: BIG, value: result.D, fill: "#ef4141", text: "#fff" },
      E: { x: centerX, y: centerY, r: CENTER, value: result.E, fill: "#ffed47", text: "#111" },

      A1: { x: centerX - radius + 125, y: centerY, r: SMALL, value: result.A1, fill: "#45cfe1", text: "#fff" },
      A2: { x: centerX - radius + 62, y: centerY, r: MEDIUM, value: result.A2, fill: "#526df8", text: "#fff" },

      B1: { x: centerX, y: centerY - radius + 125, r: SMALL, value: result.B1, fill: "#45cfe1", text: "#fff" },
      B2: { x: centerX, y: centerY - radius + 62, r: MEDIUM, value: result.B2, fill: "#526df8", text: "#fff" },

      C1: { x: centerX + radius - 125, y: centerY, r: SMALL, value: result.C1, fill: "#ffae34", text: "#111" },
      C2: { x: centerX + radius - 62, y: centerY, r: MEDIUM, value: result.C2, fill: "#fff", text: "#111" },

      D1: { x: centerX, y: centerY + radius - 128, r: SMALL, value: result.D1, fill: "#ffae34", text: "#111" },
      D2: { x: centerX, y: centerY + radius - 82, r: MEDIUM, value: result.D2, fill: "#fff", text: "#111" },

      E1: { x: centerX + 62, y: centerY, r: MEDIUM, value: result.E1, fill: "#fff", text: "#111" },
      E2: { x: centerX + 112, y: centerY, r: SMALL, value: result.E2, fill: "#fff", text: "#111" },
      E4: { x: centerX, y: centerY - 62, r: SMALL, value: result.E4, fill: "#afde61", text: "#fff" },
      E5: { x: centerX - 62, y: centerY, r: SMALL, value: result.E5, fill: "#afde61", text: "#fff" },

      F: { x: centerX - radius * 0.71, y: centerY - radius * 0.71, r: BIG, value: result.F, fill: "#fff", text: "#111" },
      F2: { x: centerX - radius * 0.71 + 52, y: centerY - radius * 0.71 + 52, r: MEDIUM, value: result.F2, fill: "#fff", text: "#111" },
      F1: { x: centerX - radius * 0.71 + 105, y: centerY - radius * 0.71 + 105, r: SMALL, value: result.F1, fill: "#fff", text: "#111" },

      P: { x: centerX + radius * 0.71, y: centerY - radius * 0.71, r: BIG, value: result.P, fill: "#fff", text: "#111" },
      P2: { x: centerX + radius * 0.71 - 52, y: centerY - radius * 0.71 + 52, r: MEDIUM, value: result.P2, fill: "#fff", text: "#111" },
      P1: { x: centerX + radius * 0.71 - 105, y: centerY - radius * 0.71 + 105, r: SMALL, value: result.P1, fill: "#fff", text: "#111" },

      X: { x: centerX - radius * 0.71, y: centerY + radius * 0.71, r: BIG, value: result.X, fill: "#fff", text: "#111" },
      X2: { x: centerX - radius * 0.71 + 52, y: centerY + radius * 0.71 - 52, r: MEDIUM, value: result.X2, fill: "#fff", text: "#111" },
      X1: { x: centerX - radius * 0.71 + 105, y: centerY + radius * 0.71 - 105, r: SMALL, value: result.X1, fill: "#fff", text: "#111" },

      Y: { x: centerX + radius * 0.71, y: centerY + radius * 0.71, r: BIG, value: result.Y, fill: "#fff", text: "#111" },
      Y2: { x: centerX + radius * 0.71 - 52, y: centerY + radius * 0.71 - 52, r: MEDIUM, value: result.Y2, fill: "#fff", text: "#111" },
     Y1: { x: centerX + radius * 0.71 - 84, y: centerY + radius * 0.71 - 84, r: SMALL, value: result.Y1, fill: "#fff", text: "#111" }
        };
  }

  const p = pos();

  // Linie peněz / vztahů uvnitř pravé spodní části.
  // Rozmístěno ručně, aby se kruhy nepřekrývaly.
function pointBetween(a, b, t) {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t
  };
}

// Канал денег и отношений.
// Ставим числа прямо на диагональ между 18 и 15, чтобы они не съезжали вниз.
const channelM = pointBetween(p.C1, p.D1, 0.28);
const channelL = pointBetween(p.C1, p.D1, 0.52);
const channelR = pointBetween(p.C1, p.D1, 0.76);

p.M = {
  x: channelM.x + 8,
  y: channelM.y - 4,
  r: SMALL,
  value: result.M,
  fill: "#fff",
  text: "#111"
};

p.L = {
  x: channelL.x,
  y: channelL.y,
  r: MEDIUM,
  value: result.L,
  fill: "#fff",
  text: "#111"
};

p.R = {
  x: channelR.x - 8,
  y: channelR.y + 4,
  r: SMALL,
  value: result.R,
  fill: "#fff",
  text: "#111"
};

  return `
    <section class="matrix-chart-section">
      <div class="matrix-chart-wrap">
        <svg class="matrix-svg" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">

          ${line(p.A, p.C)}
          ${line(p.B, p.D)}

          ${line(p.F, p.P)}
          ${line(p.X, p.Y)}

          ${line(p.A, p.D)}
          ${line(p.B, p.C)}
          ${line(p.F, p.X)}
          ${line(p.P, p.Y)}
          ${line(p.A, p.B)}
          ${line(p.C, p.D)}

          ${line(p.E, p.A)}
          ${line(p.E, p.B)}
          ${line(p.E, p.C)}
          ${line(p.E, p.D)}

          ${line(p.F, p.E, "#4E7BCB")}
          ${line(p.P, p.E, "#D85A5A")}
          ${line(p.X, p.E, "#D85A5A")}
          ${line(p.Y, p.E, "#4E7BCB")}

          ${line(p.D1, p.C1)}
          ${line(p.L, p.R, "#3F51C7")}
          ${line(p.L, p.M, "#3F51C7")}

          ${circleRing(centerX, centerY, radius)}

          ${node(p.A)}
          ${node(p.B)}
          ${node(p.C)}
          ${node(p.D)}
          ${node(p.E)}

          ${node(p.F)}
          ${node(p.P)}
          ${node(p.Y)}
          ${node(p.X)}

          ${node(p.A2)}
          ${node(p.A1)}
          ${node(p.B2)}
          ${node(p.B1)}
          ${node(p.C1)}
          ${node(p.C2)}
          ${node(p.D1)}
          ${node(p.D2)}

          ${node(p.E1)}
          ${node(p.E2)}
          ${node(p.E4)}
          ${node(p.E5)}

          ${node(p.F2)}
          ${node(p.F1)}
          ${node(p.P2)}
          ${node(p.P1)}
          ${node(p.X2)}
          ${node(p.X1)}
          ${node(p.Y2)}
          ${node(p.Y1)}

          ${node(p.L)}
          ${node(p.M)}
          ${node(p.R)}

<text x="${centerX + 80}" y="${centerY + 160}" class="matrix-symbol matrix-heart">❤</text>
<text x="${centerX + 145}" y="${centerY + 90}" class="matrix-symbol matrix-money">$</text>

          <text x="${centerX}" y="${centerY - radius - 62}" class="matrix-age">20 let</text>
          <text x="${centerX + radius + 62}" y="${centerY + 5}" class="matrix-age">40 let</text>
          <text x="${centerX}" y="${centerY + radius + 72}" class="matrix-age">60 let</text>
          <text x="${centerX - radius - 62}" y="${centerY + 5}" class="matrix-age">0 let</text>

          <text x="${p.F.x - 42}" y="${p.F.y - 58}" class="matrix-age">10 let</text>
          <text x="${p.P.x + 42}" y="${p.P.y - 58}" class="matrix-age">30 let</text>
          <text x="${p.Y.x + 42}" y="${p.Y.y + 72}" class="matrix-age">50 let</text>
          <text x="${p.X.x - 42}" y="${p.X.y + 72}" class="matrix-age">70 let</text>
        </svg>
      </div>
    </section>
  `;
}

function line(a, b, color) {
  return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" class="matrix-line" ${color ? `stroke="${color}"` : ""} />`;
}

function circleRing(cx, cy, r) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" class="matrix-ring" />`;
}

function node(p) {
  return `
    <g class="matrix-node">
      <circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="${p.fill}" class="matrix-node-circle" />
      <text x="${p.x}" y="${p.y + 2}" fill="${p.text}" class="matrix-node-number">${escapeHtml(p.value)}</text>
    </g>
  `;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

module.exports = {
  renderMatrixChartHTML
};