// =========================
// FULL REPORT ENGINE
// Собирает весь разбор в одну HTML-страницу
// =========================

const { findPersonalQualities, renderPersonalQualitiesHTML } = require("./personalQualities");
const { renderPurposeHTML } = require("./purpose");
const { renderFinancialChannelHTML } = require("./financialChannel");
const { renderRelationshipChannelHTML } = require("./relationshipChannel");
const { renderLifeGuideHTML } = require("./lifeGuide");
const { renderHealthHTML } = require("./health");
const { renderPeriodForecastHTML } = require("./forecastBlock");

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderCoverHTML(result) {
  return `
    <section class="report-page cover-page">
      <div class="cover-inner">
        <div class="cover-kicker">Matice osudu</div>
        <h1>Osobní rozbor</h1>
        <p class="cover-subtitle">Výklad podle data narození</p>

        <div class="cover-data">
          <div>
            <span>Datum narození</span>
            <strong>${escapeHtml(result.birthDate || "")}</strong>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTableOfContentsHTML() {
  return `
    <section class="report-page toc-page">
      <h2>Obsah</h2>

      <div class="toc-list">
        <div><span>Osobní vlastnosti</span><span></span></div>
        <div><span>Vaše poslání</span><span></span></div>
        <div><span>Průvodce životem pro vás</span><span></span></div>
        <div><span>Finanční kanál</span><span></span></div>
        <div><span>Vztahový kanál</span><span></span></div>
        <div><span>Zdraví</span><span></span></div>
        <div><span>Životní období a prognóza</span><span></span></div>
      </div>
    </section>
  `;
}

function renderFullReportHTML(result, gender) {
  const personalQualities = findPersonalQualities(result, gender);

  return `
    <div class="full-report">

      ${renderCoverHTML(result)}

      <div class="page-break"></div>

      ${renderTableOfContentsHTML()}

      <div class="page-break"></div>

      <section class="report-section">
        <h2>Osobní vlastnosti</h2>
        ${renderPersonalQualitiesHTML(personalQualities)}
      </section>

      <div class="page-break"></div>

      <section class="report-section">
        ${renderPurposeHTML(result, gender)}
      </section>

      <div class="page-break"></div>

      <section class="report-section">
        ${renderLifeGuideHTML(result)}
      </section>

      <div class="page-break"></div>

      <section class="report-section">
        ${renderFinancialChannelHTML(result, gender)}
      </section>

      <div class="page-break"></div>

      <section class="report-section">
        ${renderRelationshipChannelHTML(result, gender)}
      </section>

      <div class="page-break"></div>

      <section class="report-section">
        ${renderHealthHTML(result)}
      </section>

      <div class="page-break"></div>

      <section class="report-section">
        ${renderPeriodForecastHTML(result.birthDate, gender)}
      </section>

    </div>
  `;
}

module.exports = {
  renderFullReportHTML
};