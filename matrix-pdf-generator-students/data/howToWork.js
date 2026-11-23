const HOW_TO_WORK_STEPS = [
  {
    number: 1,
    title: "Nečtěte vše najednou.",
    text: "Informací je zde hodně, proto doporučuji procházet rozbor postupně, po menších částech."
  },
  {
    number: 2,
    title: "Vezměte si papír a tužku.",
    text: "U každého bodu si všímejte, nakolik se Vás týká v negativním projevu, a zkuste si ohodnotit od 1 do 10, jak silně cítíte negativní vliv dané zóny. Zapisujte si pouze to, co Vás skutečně oslabuje, omezuje nebo se ve Vašem životě opakuje."
  },
  {
    number: 3,
    title: "Co s Vámi nerezonuje, to nyní neberte do práce.",
    text: "Vyberte si jen 1 až 2 hlavní oblasti, kterým se chcete věnovat jako prvním. Není potřeba uchopit vše najednou."
  }
];

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const DEFAULT_HOW_TO_WORK = {
  heading: "Jak pracovat s rozborem",
  steps: HOW_TO_WORK_STEPS.slice(0, 3).map(function(step) {
    return { title: step.title, text: step.text };
  })
};

function getDefaultHowToWork() {
  return JSON.parse(JSON.stringify(DEFAULT_HOW_TO_WORK));
}

// Text se zachová, odstavce oddělené prázdným řádkem, jednotlivé řádky jako <br>.
function renderStepText(text) {
  return String(text || "")
    .replace(/\r/g, "")
    .split(/\n\s*\n/)
    .map(function(part) { return part.trim(); })
    .filter(Boolean)
    .map(function(part) { return "<p>" + escapeHtml(part).replace(/\n/g, "<br>") + "</p>"; })
    .join("");
}

function renderHowToWorkHTML(settings) {
  const data = settings && Array.isArray(settings.steps) ? settings : DEFAULT_HOW_TO_WORK;
  const heading = String(data.heading || "").trim() || DEFAULT_HOW_TO_WORK.heading;
  const steps = data.steps.filter(function(step) {
    return String(step.title || "").trim() || String(step.text || "").trim();
  });

  const stepsHTML = steps.map(function(step, index) {
    const title = String(step.title || "").trim();
    return `
      <div class="how-step">
        <div class="how-number">${index + 1}</div>
        <div class="how-content">
          ${title ? `<h3>${escapeHtml(title)}</h3>` : ""}
          ${renderStepText(step.text)}
        </div>
      </div>
    `;
  }).join("");

  return `
    <section class="reading-section how-to-work">
      <div class="how-page-center">
        <div class="how-heading">
          <h2>${escapeHtml(heading)}</h2>
        </div>

        <div class="how-list">
          ${stepsHTML}
        </div>
      </div>
    </section>
  `;
}

module.exports = {
  renderHowToWorkHTML,
  getDefaultHowToWork
};
