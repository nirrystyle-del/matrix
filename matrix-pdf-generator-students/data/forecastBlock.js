// =========================
// FORECAST BLOCK ENGINE
// Spojuje výpočet období + texty prognózy
// Zobrazuje aktuální období + dvě následující období
// PDF layout: jedna energie = jedna A4 stránka
// =========================

const { getThreePeriodForecasts } = require("./periodForecast");
const { renderForecastTextHTML } = require("./forecastTexts");

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderForecastEnergyPage(period, energyNumber, energyIndex, periodIndex, gender) {
  const forecastHTML = renderForecastTextHTML(energyNumber, gender);

  const isFirstEnergyInPeriod = energyIndex === 0;
  const isFirstPageOverall = periodIndex === 0 && energyIndex === 0;

  return (
    '<section class="period-forecast-print-page period-forecast-page-energy period-forecast-density-balanced">' +
      '<div class="period-forecast-print-inner">' +

        (isFirstPageOverall
          ? '<div class="period-forecast-main-title">' +
              '<h2>Životní období a prognóza</h2>' +
            '</div>'
          : ''
        ) +

        (isFirstEnergyInPeriod
          ? '<div class="period-forecast-period-title">' +
              '<div class="program-title">Období: ' + escapeHtml(period.agePeriod) + '</div>' +
            '</div>'
          : ''
        ) +

        forecastHTML +

      '</div>' +
    '</section>'
  );
}

function renderOneForecastPeriodHTML(period, gender, periodIndex) {
  const energies = [period.E1, period.E2, period.E3];

  return energies.map(function(energyNumber, energyIndex) {
    return renderForecastEnergyPage(period, energyNumber, energyIndex, periodIndex, gender);
  }).join('');
}

function renderPeriodForecastHTML(birthDate, gender, targetDate) {
  const periods = getThreePeriodForecasts(birthDate, targetDate || new Date());

  const periodsHTML = periods.map(function(period, periodIndex) {
    return renderOneForecastPeriodHTML(period, gender, periodIndex);
  }).join('');

  return (
    '<div class="period-forecast-print-card">' +
      periodsHTML +
    '</div>'
  );
}

module.exports = {
  renderPeriodForecastHTML
};