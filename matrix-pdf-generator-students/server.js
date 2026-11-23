const express = require("express");
const path = require("path");
const { calculateMatrix } = require("./calculations/matrixCalculations");
const { renderMatrixChartHTML } = require("./data/matrixChart");
const { renderCoverHTML } = require("./data/cover");
const fs = require("fs");
const { renderHowToWorkHTML, getDefaultHowToWork } = require("./data/howToWork");
const { renderStudentExplanationHTML } = require("./data/studentExplanation");
const { renderKarmicTailHTML } = require("./data/karmicTails");
const { findCommunication, renderCommunicationHTML } = require("./data/communication");
const { findPersonalQualities, renderPersonalQualitiesHTML } = require("./data/personalQualities");
const { findTalents, renderTalentsHTML } = require("./data/talents");
const { renderLifeScenarioHTML } = require("./data/lifeScenario");
const { findPrograms, renderProgramsHTML } = require("./data/programs");
const { renderSexualityProgramHTML } = require("./data/sexualityProgram");
const { renderPurposeHTML } = require("./data/purpose");
const { renderFinancialChannelHTML } = require("./data/financialChannel");
const { renderFinancialFlowHTML } = require("./data/financialFlow");
const { renderRelationshipChannelHTML } = require("./data/relationshipChannel");
const { renderIdealPartnerHTML } = require("./data/idealPartner");
const { renderLifeGuideHTML } = require("./data/lifeGuide");
const { renderPeriodForecastHTML } = require("./data/forecastBlock");
const { renderHealthHTML } = require("./data/health");
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(express.static(path.join(__dirname, "public")));

// ===== Uložené nastavení první strany (Jak pracovat s rozborem) =====
const SETTINGS_DIR = path.join(__dirname, "nastaveni");
const FIRST_PAGE_FILE = path.join(SETTINGS_DIR, "prvni-strana.json");

function loadFirstPage() {
  try {
    const data = JSON.parse(fs.readFileSync(FIRST_PAGE_FILE, "utf8"));
    if (data && Array.isArray(data.steps)) return data;
  } catch (e) {}
  return getDefaultHowToWork();
}

function saveFirstPage(data) {
  const clean = {
    heading: String((data && data.heading) || "").slice(0, 300),
    steps: (Array.isArray(data && data.steps) ? data.steps : []).slice(0, 20).map(function(step) {
      return {
        title: String((step && step.title) || "").slice(0, 500),
        text: String((step && step.text) || "").slice(0, 5000)
      };
    })
  };
  fs.mkdirSync(SETTINGS_DIR, { recursive: true });
  fs.writeFileSync(FIRST_PAGE_FILE, JSON.stringify(clean, null, 2), "utf8");
  return clean;
}

app.get("/api/first-page", function (req, res) {
  res.json({ settings: loadFirstPage(), defaults: getDefaultHowToWork() });
});

app.post("/api/first-page", function (req, res) {
  try {
    res.json({ ok: true, settings: saveFirstPage(req.body) });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
});

app.post("/api/first-page/reset", function (req, res) {
  try {
    if (fs.existsSync(FIRST_PAGE_FILE)) fs.unlinkSync(FIRST_PAGE_FILE);
  } catch (e) {}
  res.json({ ok: true, settings: getDefaultHowToWork() });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "formular.html"));
});

app.post("/generate", function (req, res) {
 const { name, birthDate, gender, printMode, outputType, explanationSections } = req.body;
 const readingType = "classic";
 const bwClass = printMode === "bw" ? " bw-mode" : "";
 const bwCssLink = printMode === "bw"
  ? '<link rel="stylesheet" href="/print-bw.css" media="print">'
  : "";
  const cleanFileName = String(name || "klient")
  .trim()
  .replace(/[\\/:*?"<>|]/g, "")
  .replace(/\s+/g, " ");

const filePrefix = printMode === "bw" ? "TISK - " : "";
  if (outputType === "explanation") {
    return res.send(`
      <!DOCTYPE html>
      <html lang="cs">
      <head>
        <meta charset="UTF-8" />
        <title>${filePrefix}Vysvětlení rozboru - ${cleanFileName}</title>
        <link rel="stylesheet" href="/styles.css">
        <link rel="stylesheet" href="/print.css" media="print">
        ${bwCssLink}
      </head>
      <body class="explanation-pdf-body${bwClass}">
        ${renderStudentExplanationHTML({ name, birthDate, gender, sections: explanationSections })}
      </body>
      </html>
    `);
  }

  const matrix = calculateMatrix(birthDate);
  const matrixChartHTML = renderMatrixChartHTML(matrix);
   const coverHTML = renderCoverHTML({ name, birthDate, gender, readingType, matrixChartHTML });  const howToWorkHTML = renderHowToWorkHTML(loadFirstPage());
  const karmicTailHTML = renderKarmicTailHTML(matrix);
  const communicationItems = findCommunication(matrix, gender);
const communicationHTML = renderCommunicationHTML(communicationItems, matrix);
const personalQualities = findPersonalQualities(matrix, gender);
const personalQualitiesHTML = renderPersonalQualitiesHTML(personalQualities);
const personalBlockHTML = `
  <div class="energy-item programs-card personal-section-card">
    <h2>Osobní vlastnosti</h2>

   <div class="energy-text intro-note">
      <p>Člověk může svůj život prožívat ve dvou základních stavech: v plusu nebo v mínusu.</p>

      <p>Když je v pozitivním stavu, cítí se v pohodě a vnitřně stabilně. Život jde lehčeji, má pocit, že ví, kam směřuje. Je spokojenější, klidnější a dokáže přijímat to, co přichází, bez zbytečného odporu.</p>

      <p>Když se dostane do negativního stavu, obvykle to znamená, že ztrácí jistotu, oporu nebo směr. V takové fázi se mohou častěji objevovat komplikace, tlak, nepříjemné situace nebo pocit, že se věci nedaří.</p>

      <p>Důležité je, že jakmile se člověk vrátí zpět do „plusu“, situace se začnou postupně uvolňovat a život se znovu zlepší.</p>
    </div>

    ${communicationHTML}

    ${personalQualitiesHTML}
  </div>
`;
const talents = findTalents(matrix);
const talentsHTML = renderTalentsHTML(talents);
const lifeScenarioHTML = renderLifeScenarioHTML(matrix);
const foundPrograms = findPrograms(matrix);
const programsHTML = renderProgramsHTML(foundPrograms);
const sexualityProgramHTML = renderSexualityProgramHTML(matrix);
const purposeHTML = renderPurposeHTML(matrix, gender);
const financialChannelHTML = renderFinancialChannelHTML(matrix, gender);
const financialFlowHTML = renderFinancialFlowHTML(matrix);
const relationshipChannelHTML = renderRelationshipChannelHTML(matrix, gender);
const idealPartnerHTML = renderIdealPartnerHTML(matrix, gender);
const lifeGuideHTML = renderLifeGuideHTML(matrix);
const periodForecastHTML = renderPeriodForecastHTML(birthDate, gender);
const healthHTML = renderHealthHTML(matrix);

  res.send(`
    <!DOCTYPE html>
    <html lang="cs">
    <head>
      <meta charset="UTF-8" />
 <title>${filePrefix}Rozbor Matice osudu - ${cleanFileName}</title>
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/print.css" media="print">
${bwCssLink}
    </head>
    <body class="main-pdf-body${bwClass}">
      <div class="report-wrapper">
        ${coverHTML}

        ${howToWorkHTML}

        ${karmicTailHTML}

${personalBlockHTML}

        ${talentsHTML}

        ${lifeScenarioHTML}

        ${programsHTML}

        ${sexualityProgramHTML}

        ${purposeHTML}

        ${financialChannelHTML}

        ${financialFlowHTML}

        ${relationshipChannelHTML}

        ${idealPartnerHTML}

        ${lifeGuideHTML}

        ${periodForecastHTML}

        ${healthHTML}
      </div>
    </body>
    </html>
  `);
});
app.listen(PORT, function () {
  console.log("Server běží na adrese: http://localhost:" + PORT);
});
