function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderCoverFrame() {
  return `
    <svg class="cover-frame" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 600 800" aria-hidden="true">
      <rect x="2" y="2" width="596" height="796" fill="none" stroke="#9C7838" stroke-width="0.7" opacity="0.7"/>
      <rect x="10" y="10" width="580" height="780" fill="none" stroke="#9C7838" stroke-width="0.4" opacity="0.5"/>
      <g fill="#9C7838" opacity="0.85">
        <circle cx="2" cy="2" r="2.2"/>
        <circle cx="598" cy="2" r="2.2"/>
        <circle cx="2" cy="798" r="2.2"/>
        <circle cx="598" cy="798" r="2.2"/>
      </g>
      <g stroke="#9C7838" stroke-width="0.5" fill="none" opacity="0.6">
        <path d="M 2,22 L 22,22 L 22,2"/>
        <path d="M 598,22 L 578,22 L 578,2"/>
        <path d="M 2,778 L 22,778 L 22,798"/>
        <path d="M 598,778 L 578,778 L 578,798"/>
      </g>
    </svg>
  `;
}

function renderVignette() {
  return `
    <svg class="cover-vignette" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" aria-hidden="true">
      <line x1="10" y1="10" x2="38" y2="10" stroke="#9C7838" stroke-width="0.6"/>
      <path d="M 50,5 L 51,9 L 55,10 L 51,11 L 50,15 L 49,11 L 45,10 L 49,9 Z" fill="#9C7838"/>
      <line x1="62" y1="10" x2="90" y2="10" stroke="#9C7838" stroke-width="0.6"/>
    </svg>
  `;
}

function renderCoverHTML({ name, birthDate, gender, readingType, matrixChartHTML }) {
  const nameHTML = name
    ? `
      <div class="cover-name-row">
        <svg class="cover-name-flourish" viewBox="0 0 60 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="0" y1="6" x2="48" y2="6" stroke="#9C7838" stroke-width="0.8"/>
          <circle cx="55" cy="6" r="2" fill="#9C7838"/>
        </svg>
        <span class="cover-name-text">${escapeHtml(name)}</span>
        <svg class="cover-name-flourish" viewBox="0 0 60 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="5" cy="6" r="2" fill="#9C7838"/>
          <line x1="12" y1="6" x2="60" y2="6" stroke="#9C7838" stroke-width="0.8"/>
        </svg>
      </div>
    `
    : "";

  // Отдельная обложка для файла объяснения: без крыльев, без матрицы.
  if (readingType === "deep-explanation") {
    return `
      <section class="cover-section cover-section--explanation">
        <div class="cover-inner">
          <div class="cover-label">Matice osudu</div>
          <h1>Vysvětlení k rozboru</h1>

          ${renderVignette()}
          <p class="cover-tagline">Hluboký výklad vašich energií</p>

          ${renderVignette()}

          <div class="cover-client">
            ${nameHTML}
            ${birthDate ? `<p class="cover-date">${escapeHtml(birthDate)}</p>` : ""}
          </div>
        </div>
      </section>
    `;
  }

  return `
   <section class="cover-section">
      ${renderCoverFrame()}
      <img src="/images/wings_blue.png" alt="" class="cover-wings" aria-hidden="true" />
  
      <div class="cover-inner">
        <div class="cover-label">Matice osudu</div>
        <h1>Osobní rozbor</h1>

        ${renderVignette()}
        <p class="cover-tagline">Váš osobní kód a cesta duše</p>

        ${matrixChartHTML || ""}

        ${renderVignette()}

        <div class="cover-client">
          ${nameHTML}
          ${birthDate ? `<p class="cover-date">${escapeHtml(birthDate)}</p>` : ""}
        </div>
      </div>
    </section>
  `;
}

module.exports = {
  renderCoverHTML
};