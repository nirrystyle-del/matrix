// =========================
// PROGRAMS ENGINE
// Hledá programy v matici a připojuje dlouhé výklady z programTexts.js
// =========================

const { programTexts } = require("./programTexts");

const CENTER_MODE = "specific";

const CENTER_ALLOWED_COMBINATIONS = [
  [18, 6, 12]
];

const programDatabase = Object.keys(programTexts).map(function(key) {
  return {
    name: programTexts[key].title,
    combination: key.split("-").map(Number),
    type: key.split("-").length === 2 ? "pair" : "triple",
    zone: "all"
  };
});

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function reduceNumber(num) {
  while (num > 22) {
    num = String(num).split("").reduce(function(acc, digit) {
      return acc + parseInt(digit, 10);
    }, 0);
  }

  return num;
}

function normalizeCombination(arr) {
  return arr.map(Number).sort(function(a, b) {
    return a - b;
  }).join("-");
}

function isCenterCombinationAllowed(segment) {
  if (CENTER_MODE === "all") return true;
  if (CENTER_MODE === "none") return false;

  const key = normalizeCombination(segment);

  return CENTER_ALLOWED_COMBINATIONS.some(function(combo) {
    return normalizeCombination(combo) === key;
  });
}

function getAllSegments(values, circular) {
  const segments = [];

  if (!Array.isArray(values) || values.length < 2) return segments;

  for (let len = 2; len <= 3; len++) {
    if (!circular) {
      for (let i = 0; i <= values.length - len; i++) {
        segments.push({
          values: values.slice(i, i + len)
        });
      }
    } else {
      const n = values.length;

      if (n >= len) {
        for (let i = 0; i < n; i++) {
          const seg = [];

          for (let j = 0; j < len; j++) {
            seg.push(values[(i + j) % n]);
          }

          segments.push({
            values: seg
          });
        }
      }
    }
  }

  return segments;
}

function buildProgramZones(result) {
  const zones = [];

  zones.push({
    id: "main_left_horizontal",
    label: "hlavní matice - levá horizontální větev",
    values: [result.A, result.A2, result.A1, result.E5],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "main_right_horizontal",
    label: "hlavní matice - pravá horizontální větev",
    values: [result.E1, result.E2, result.C1, result.C2, result.C],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "main_top_vertical",
    label: "hlavní matice - horní vertikální větev",
    values: [result.B, result.B2, result.B1, result.E4],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "main_upper_left_diagonal",
    label: "hlavní matice - levá horní diagonála",
    values: [result.F, result.F2, result.F1],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "main_upper_right_diagonal",
    label: "hlavní matice - pravá horní diagonála",
    values: [result.P, result.P2, result.P1],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "main_lower_left_diagonal",
    label: "hlavní matice - levá dolní diagonála",
    values: [result.X, result.X2, result.X1],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "main_lower_right_diagonal",
    label: "hlavní matice - pravá dolní diagonála",
    values: [result.Y, result.Y2, result.Y1],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "outer_circle",
    label: "hlavní matice - obvodový kruh",
    values: [result.A, result.F, result.B, result.P, result.C, result.Y, result.D, result.X],
    circular: true,
    isCenter: false
  });

  zones.push({
    id: "relationship_line",
    label: "linie vztahů",
    values: [result.X, result.X2, result.X1, result.E, result.P1, result.P2, result.P],
    circular: false,
    isCenter: true
  });

  zones.push({
    id: "money_line",
    label: "linie peněz",
    values: [result.F, result.F2, result.F1, result.E, result.Y1, result.Y2, result.Y],
    circular: false,
    isCenter: true
  });

  if (CENTER_MODE !== "none") {
    zones.push({
      id: "center_horizontal",
      label: "střed - horizontální linie",
      values: [result.E5, result.E, result.E1, result.E2],
      circular: false,
      isCenter: true
    });

    zones.push({
      id: "center_vertical",
      label: "střed - vertikální linie",
      values: [result.E4, result.E, result.D1],
      circular: false,
      isCenter: true
    });
  }

  zones.push({
    id: "chakra_sahasrara",
    label: "čakra Sahasrára",
    values: result.chakras.sahasrara,
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "chakra_ajna",
    label: "čakra Ádžna",
    values: result.chakras.ajna,
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "chakra_vishuddha",
    label: "čakra Višuddha",
    values: result.chakras.vishuddha,
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "chakra_anahata",
    label: "čakra Anáhata",
    values: result.chakras.anahata,
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "chakra_manipura",
    label: "čakra Manipura",
    values: result.chakras.manipura,
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "chakra_svadhisthana",
    label: "čakra Svádhišthána",
    values: result.chakras.svadhisthana,
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "chakra_muladhara",
    label: "čakra Muládhára",
    values: result.chakras.muladhara,
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "male_line",
    label: "mužská rodová linie",
    values: [result.F, result.Y, result.E],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "female_line",
    label: "ženská rodová linie",
    values: [result.P, result.X, result.E],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "hledani_sebe",
    label: "Hledání sebe",
    values: [result.nebo, result.zemlya, reduceNumber(result.nebo + result.zemlya)],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "socializace",
    label: "Socializace",
    values: [result.M_line, result.Zh_line, reduceNumber(result.M_line + result.Zh_line)],
    circular: false,
    isCenter: false
  });

    zones.push({
    id: "financial_channel_local",
    label: "finanční kanál",
    values: [result.C, result.C1, result.M, result.L],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "financial_flow_local",
    label: "finanční tok",
    values: [result.C, result.C1, result.C2, result.M],
    circular: false,
    isCenter: false
  });

  zones.push({
    id: "relationship_channel_local",
    label: "vztahový kanál",
    values: [result.R, result.L, result.D1],
    circular: false,
    isCenter: false
  });

  if (Array.isArray(result.totalEnergies)) {
    zones.push({
      id: "health_total",
      label: "celkové energetické pole",
      values: result.totalEnergies,
      circular: false,
      isCenter: false
    });
  }
  return zones;
}

function programMatchesSegment(program, segmentValues, zone) {
  const expectedLength = program.type === "pair" ? 2 : 3;

  if (segmentValues.length !== expectedLength) return false;

  if (zone.isCenter && CENTER_MODE === "specific") {
    if (!isCenterCombinationAllowed(segmentValues)) {
      return false;
    }
  }

  if (program.zone && program.zone !== "all") {
    if (program.zone !== zone.id) return false;
  }

  return normalizeCombination(program.combination) === normalizeCombination(segmentValues);
}

function findPrograms(result) {
  const zones = buildProgramZones(result);
  const found = [];

  zones.forEach(function(zone) {
    const segments = getAllSegments(zone.values, zone.circular);

    segments.forEach(function(segment) {
      programDatabase.forEach(function(program) {
        if (programMatchesSegment(program, segment.values, zone)) {
          const key = program.combination.join("-");
          const textItem = programTexts[key];

          found.push({
            key: key,
            name: textItem ? textItem.title : program.name,
            text: textItem ? textItem.text : "",
            combination: key,
            zone: zone.label,
            zoneId: zone.id,
            foundSegment: segment.values.join("-")
          });
        }
      });
    });
  });

  return found;
}

// =========================
// PROGRAMS PRINT ENGINE
// Страничная нарезка программ по логике Word/PDF
// =========================

const PROGRAM_SECTION_GROUPS = {
  strengths: [
    "Silné stránky",
    "Vaše silné stránky",
    "Silné stránky programu",
    "Silné stránky této programy",
    "Silné stránky této kombinace"
  ],

  problems: [
    "Možné problémy",
    "Možné problémy programu",
    "Možné problémy této programy",
    "Možné problémy této kombinace",
    "Stinná stránka",
    "Stinná stránka programu",
    "Negativní projevy"
  ],

  recommendations: [
    "Doporučení",
    "Doporučení programu",
    "Doporučení této programy",
    "Doporučení této kombinace",
    "Doporučení a úkoly",
    "Úkoly",
    "Co dělat"
  ]
};

function normalizeProgramHeading(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/[：:]\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function detectProgramHeadingType(text) {
  const clean = normalizeProgramHeading(text);

  for (const [type, headings] of Object.entries(PROGRAM_SECTION_GROUPS)) {
    if (
      headings.some(function(heading) {
        return clean === normalizeProgramHeading(heading);
      })
    ) {
      return type;
    }
  }

  return null;
}

function findInlineProgramHeading(line) {
  const rawLine = String(line || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const normalizedLine = normalizeProgramHeading(rawLine);

  for (const [type, headings] of Object.entries(PROGRAM_SECTION_GROUPS)) {
    for (const heading of headings) {
      const cleanHeading = normalizeProgramHeading(heading);

      if (normalizedLine === cleanHeading) {
        return {
          type,
          title: cleanHeading,
          rest: ""
        };
      }

      if (rawLine.startsWith(cleanHeading + ":")) {
        return {
          type,
          title: cleanHeading,
          rest: rawLine.slice((cleanHeading + ":").length).trim()
        };
      }

      if (rawLine.startsWith(cleanHeading + " :")) {
        return {
          type,
          title: cleanHeading,
          rest: rawLine.slice((cleanHeading + " :").length).trim()
        };
      }
    }
  }

  return null;
}

function splitProgramRawIntoBlocks(raw) {
  const lines = String(raw || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n");

  const blocks = [];
  let currentLines = [];
  let blankCount = 0;
  let pendingBlankCount = 0;

  function pushCurrent() {
    const text = currentLines.join("\n").trim();

    if (!text) return;

    blocks.push({
      text,
      blankCountBefore: pendingBlankCount,
      forcePageBreak: pendingBlankCount >= 5,
      strongPageBreak: pendingBlankCount >= 8
    });

    currentLines = [];
    pendingBlankCount = 0;
  }

  lines.forEach(function(line) {
    if (line.trim() === "") {
      blankCount++;

      if (currentLines.length > 0) {
        pushCurrent();
      }

      pendingBlankCount = blankCount;
      return;
    }

    blankCount = 0;
    currentLines.push(line);
  });

  pushCurrent();

  return blocks;
}

function splitProgramBlockByHeadings(block) {
  const text = String(block.text || "").trim();

  if (!text) return [];

  const lines = text
    .split("\n")
    .map(function(line) {
      return line.trim();
    })
    .filter(Boolean);

  if (lines.length === 0) return [];

  const result = [];
  let currentText = "";
  let currentBlock = {
    ...block,
    text: "",
    isHeading: false,
    headingType: null
  };

  function pushCurrentText() {
    const cleanText = String(currentText || "").trim();

    if (!cleanText) return;

    result.push({
      ...currentBlock,
      text: cleanText,
      isHeading: false,
      headingType: null
    });

    currentText = "";
  }

  lines.forEach(function(line, index) {
    const foundHeading = findInlineProgramHeading(line);

    if (foundHeading) {
      pushCurrentText();

      result.push({
        text: foundHeading.title,
        blankCountBefore: index === 0 ? block.blankCountBefore : 2,
        forcePageBreak: index === 0 ? block.forcePageBreak : false,
        strongPageBreak: index === 0 ? block.strongPageBreak : false,
        isHeading: true,
        headingType: foundHeading.type
      });

      currentBlock = {
        ...block,
        blankCountBefore: 0,
        forcePageBreak: false,
        strongPageBreak: false,
        isHeading: false,
        headingType: null
      };

      if (foundHeading.rest) {
        currentText = foundHeading.rest;
      }

      return;
    }

    currentText += (currentText ? "\n" : "") + line;
  });

  pushCurrentText();

  return result.length > 0 ? result : [block];
}

function splitProgramIntoSections(raw) {
  const intro = [];
  const sections = [];
  let current = null;

  const expandedBlocks = [];

  splitProgramRawIntoBlocks(raw).forEach(function(block) {
    expandedBlocks.push(...splitProgramBlockByHeadings(block));
  });

  expandedBlocks.forEach(function(block) {
    if (block.isHeading) {
      if (current) {
        sections.push(current);
      }

      current = {
        type: block.headingType,
        title: normalizeProgramHeading(block.text),
        blocks: [],
        forcePageBreak: block.forcePageBreak,
        strongPageBreak: block.strongPageBreak
      };

      return;
    }

    if (current) {
      current.blocks.push(block);
    } else {
      intro.push(block);
    }
  });

  if (current) {
    sections.push(current);
  }

  return {
    intro,
    sections
  };
}

function programBlocksLength(blocks) {
  return (blocks || []).reduce(function(sum, block) {
    return sum + String(block.text || "").length;
  }, 0);
}

function programSectionLength(section) {
  if (!section) return 0;

  return String(section.title || "").length + programBlocksLength(section.blocks || []);
}

function makeProgramPage(kind, program, sections, options = {}) {
  const length = sections.reduce(function(sum, section) {
    if (section.kind === "intro") {
      return sum + programBlocksLength(section.blocks);
    }

    return sum + programSectionLength(section);
  }, 0);

  let density = "balanced";

  if (length < 1500) {
    density = "center";
  } else if (length > 4100) {
    density = "dense";
  }

  return {
    kind,
    density,
    program,
    sections,
    showTitle: Boolean(options.showTitle)
  };
}

function splitLongProgramSection(section, maxChars) {
  const parts = [];
  let currentBlocks = [];
  let currentLength = 0;

  (section.blocks || []).forEach(function(block) {
    const blockLength = String(block.text || "").length;

    if (
      currentBlocks.length > 0 &&
      (currentLength + blockLength > maxChars || block.strongPageBreak)
    ) {
      parts.push({
        ...section,
        blocks: currentBlocks
      });

      currentBlocks = [];
      currentLength = 0;
    }

    currentBlocks.push(block);
    currentLength += blockLength;
  });

  if (currentBlocks.length > 0) {
    parts.push({
      ...section,
      blocks: currentBlocks
    });
  }

  return parts.length > 0 ? parts : [section];
}

function buildProgramPages(program) {
  const parsed = splitProgramIntoSections(program.text || "");

  const introBlocks = parsed.intro || [];
  const sections = parsed.sections || [];

  const allSections = [];

  if (introBlocks.length > 0) {
    allSections.push({
      kind: "intro",
      title: "",
      blocks: introBlocks
    });
  }

  sections.forEach(function(section) {
    allSections.push(section);
  });

  const pages = [];
  let currentSections = [];
  let currentLength = 0;

  function pushPage(showTitle) {
    if (currentSections.length === 0) return;

    pages.push(
      makeProgramPage(showTitle ? "title" : "continue", program, currentSections, {
        showTitle: showTitle
      })
    );

    currentSections = [];
    currentLength = 0;
  }

  allSections.forEach(function(section, index) {
    const sectionLength = section.kind === "intro"
      ? programBlocksLength(section.blocks)
      : programSectionLength(section);

    const isFirstSection = index === 0;

    /*
      Мягкая нарезка:
      - первая страница программы может быть крупнее, потому что там заголовок;
      - если блоки помещаются вместе, не разрываем их;
      - длинные секции всё равно можно делить по абзацам.
    */
    const maxChars = pages.length === 0 ? 4700 : 5200;

    if (sectionLength > 5200 && section.kind !== "intro") {
      if (currentSections.length > 0) {
        pushPage(pages.length === 0);
      }

      const parts = splitLongProgramSection(section, 4300);

      parts.forEach(function(part, partIndex) {
        pages.push(
          makeProgramPage(
            pages.length === 0 ? "title" : "continue",
            program,
            [part],
            { showTitle: pages.length === 0 }
          )
        );
      });

      return;
    }

    if (
      currentSections.length > 0 &&
      currentLength + sectionLength > maxChars
    ) {
      pushPage(pages.length === 0);
    }

    currentSections.push(section);
    currentLength += sectionLength;
  });

  if (currentSections.length > 0) {
    pushPage(pages.length === 0);
  }

  return mergeTinyProgramPages(pages);
}

function getProgramPageLength(page) {
  if (!page || !page.sections) return 0;

  return page.sections.reduce(function(sum, section) {
    if (section.kind === "intro") {
      return sum + programBlocksLength(section.blocks);
    }

    return sum + programSectionLength(section);
  }, 0);
}

function mergeTinyProgramPages(pages) {
  const result = [];

  pages.forEach(function(page) {
    const pageLen = getProgramPageLength(page);
    const previous = result[result.length - 1];
    const previousLen = getProgramPageLength(previous);

    if (
      previous &&
      !page.showTitle &&
      !previous.showTitle &&
      pageLen < 900 &&
      previousLen < 3600
    ) {
      previous.sections.push(...page.sections);

      const mergedLen = previousLen + pageLen;

      if (mergedLen < 1500) {
        previous.density = "center";
      } else if (mergedLen > 4100) {
        previous.density = "dense";
      } else {
        previous.density = "balanced";
      }

      return;
    }

    result.push(page);
  });

  return result;
}

function isProgramBulletLine(line) {
  const clean = String(line || "").trim();

  return (
    clean.startsWith("•") ||
    clean.startsWith("·") ||
    clean.startsWith("- ") ||
    /^\d+\)/.test(clean)
  );
}

function renderProgramInlineText(text) {
  let safe = escapeHtml(text);

  safe = safe.replace(
    /^\((\d{1,2})\)\s*/,
    '<span class="energy-marker">($1)</span> '
  );

  return safe;
}

function renderProgramBlock(block) {
  const text = String(block.text || "").trim();
  if (!text) return "";

  const lines = text
    .split("\n")
    .map(function(line) {
      return line.trim();
    })
    .filter(Boolean);

  if (lines.length > 1 && lines.every(isProgramBulletLine)) {
    const items = lines.map(function(line) {
      const cleaned = line.replace(/^(•|·|-|\d+\))\s*/, "");
      return "<li>" + renderProgramInlineText(cleaned) + "</li>";
    }).join("");

    return '<ul class="program-print-list">' + items + "</ul>";
  }

  if (lines.length > 1 && lines.some(isProgramBulletLine)) {
    return lines.map(function(line) {
      if (isProgramBulletLine(line)) {
        const cleaned = line.replace(/^(•|·|-|\d+\))\s*/, "");
        return '<ul class="program-print-list single"><li>' + renderProgramInlineText(cleaned) + "</li></ul>";
      }

      return "<p>" + renderProgramInlineText(line) + "</p>";
    }).join("");
  }

  const compact = text.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();

  return "<p>" + renderProgramInlineText(compact) + "</p>";
}

function renderProgramBlocks(blocks) {
  return (blocks || []).map(renderProgramBlock).join("");
}

function renderProgramSection(section) {
  if (!section) return "";

  if (section.kind === "intro") {
    return (
      '<div class="program-print-section program-print-section-intro">' +
        '<div class="program-print-text">' +
          renderProgramBlocks(section.blocks) +
        "</div>" +
      "</div>"
    );
  }

  const title = section.title
    ? '<h3 class="program-print-subtitle program-print-subtitle-' + escapeHtml(section.type) + '">' + escapeHtml(section.title) + "</h3>"
    : "";

  return (
    '<div class="program-print-section program-print-section-' + escapeHtml(section.type) + '">' +
      title +
      '<div class="program-print-text">' +
        renderProgramBlocks(section.blocks) +
      "</div>" +
    "</div>"
  );
}

function renderProgramPage(page) {
  const program = page.program;

  const titleHTML = page.showTitle
    ? (
      '<div class="program-print-title-block">' +
        '<h2>' + escapeHtml(program.name) + "</h2>" +
        '<div class="program-print-combination">' + escapeHtml(program.combination) + "</div>" +
        program.repeatHTML +
      "</div>"
    )
    : "";

  const sectionsHTML = page.sections.map(renderProgramSection).join("");

  return (
    '<section class="program-print-page program-page-' + escapeHtml(page.kind) + " program-density-" + escapeHtml(page.density) + '">' +
      '<div class="program-print-inner">' +
        titleHTML +
        sectionsHTML +
      "</div>" +
    "</section>"
  );
}

function groupFoundPrograms(foundPrograms) {
  const grouped = {};

  foundPrograms.forEach(function(item) {
    const groupKey = item.name + "|" + item.combination;

    if (!grouped[groupKey]) {
      grouped[groupKey] = {
        key: item.key,
        name: item.name,
        combination: item.combination,
        text: item.text,
        zones: [],
        foundSegments: []
      };
    }

    grouped[groupKey].zones.push(item.zone);
    grouped[groupKey].foundSegments.push(item.foundSegment);
  });

  return Object.values(grouped);
}

function renderProgramsHTML(foundPrograms) {
  if (!foundPrograms || foundPrograms.length === 0) {
    return (
      '<div class="energy-item programs-card programs-full-card">' +
        "<h2>Programy ve vaší matici</h2>" +
        "<p>Podle aktuálně nahrané databáze nebyl nalezen žádný odpovídající program.</p>" +
      "</div>"
    );
  }

  const groupedPrograms = groupFoundPrograms(foundPrograms);

  const sectionTitleHTML =
    '<section class="programs-main-title-page">' +
      '<div class="programs-main-title-inner">' +
        '<div class="programs-main-overline">PROGRAMY</div>' +
        '<h2>Programy ve vaší matici</h2>' +
        '<p>Tyto programy ukazují důležité vzorce, které se mohou projevovat v různých oblastech vašeho života.</p>' +
      '</div>' +
    '</section>';

  const pagesHTML = groupedPrograms.map(function(item) {
    const repeatCount = item.zones.length;

    const repeatHTML = repeatCount > 1
      ? '<div class="program-print-repeat">Tento program se ve vaší matici opakuje ' + repeatCount + "&times;.</div>"
      : '<div class="program-print-repeat single">Tento program se ve vaší matici objevuje jednou.</div>';

    const program = {
      key: item.key,
      name: item.name,
      combination: item.combination,
      text: item.text,
      repeatHTML
    };

    return buildProgramPages(program).map(renderProgramPage).join("");
  }).join("");

  return (
    '<div class="energy-item programs-card programs-full-card programs-print-card">' +
      sectionTitleHTML +
      pagesHTML +
    "</div>"
  );
}
// =========================
// LOKÁLNÍ POZNÁMKY PROGRAMŮ
// pouze pro zdraví, finance a vztahy
// =========================

function findLocalProgramsInValues(values) {
  if (!Array.isArray(values) || values.length < 2) return [];

  const found = [];
  const segments = getAllSegments(values, false);

  for (const segment of segments) {
    for (const program of programDatabase) {
      const expectedLength = program.type === "pair" ? 2 : 3;
      if (segment.values.length !== expectedLength) continue;

      if (normalizeCombination(program.combination) === normalizeCombination(segment.values)) {
        found.push({
          name: program.name,
          combination: program.combination.join("-"),
          foundSegment: segment.values.join("-")
        });
      }
    }
  }

  const unique = {};

  found.forEach(function(item) {
    const key = item.name + "|" + item.combination;

    if (!unique[key]) {
      unique[key] = item;
    }
  });

  return Object.values(unique);
}

function renderLocalProgramNoteHTML(programs) {
  if (!programs || programs.length === 0) return "";

  if (programs.length === 1) {
    const program = programs[0];

    return (
      '<div class="local-program-note">' +
        '<p><strong>Program</strong></p>' +
        '<p>' +
          escapeHtml(program.name) +
          ' <span class="program-combination">(' + escapeHtml(program.combination) + ')</span>' +
        '</p>' +
        '<p>ovlivňuje tuto část.</p>' +
      '</div>'
    );
  }

  const programsHTML = programs.map(function(program) {
    return (
      '<p>' +
        escapeHtml(program.name) +
        ' <span class="program-combination">(' + escapeHtml(program.combination) + ')</span>' +
      '</p>'
    );
  }).join("");

  return (
    '<div class="local-program-note">' +
      '<p><strong>Programy</strong></p>' +
      programsHTML +
      '<p>ovlivňují tuto část.</p>' +
    '</div>'
  );
}
module.exports = {
  findPrograms,
  renderProgramsHTML,
  findLocalProgramsInValues,
  renderLocalProgramNoteHTML
};