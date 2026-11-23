// =========================
// SEXUALITY PROGRAM ENGINE
// Hledá program sexuality podle středu matice
// A4 print layout engine
// =========================

const { sexualityProgramTexts } = require("./sexualityProgramTexts");

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSexualityProgramKey(result) {
  return [result.E, result.E1, result.E2].map(String).join("-");
}

function findSexualityProgram(result) {
  const key = getSexualityProgramKey(result);

  return {
    key: key,
    item: sexualityProgramTexts[key] || null
  };
}

/* =========================
   STRUCTURE / SPLITTING
   ========================= */

const SEXUALITY_SECTION_GROUPS = {
  positive: [
    "Pozitivní projevy",
    "Vaše silné stránky",
    "Silné stránky",
    "Silné stránky programu"
  ],

  negative: [
    "Negativní projevy",
    "Možné problémy",
    "Možné problémy programu",
    "Stinné projevy",
    "Stinná stránka"
  ],

  recommendations: [
    "Doporučení",
    "Doporučení programu",
    "Úkoly",
    "Co dělat"
  ]
};

function normalizeSexualityHeading(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/[：:]\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function findInlineSexualityHeading(line) {
  const rawLine = String(line || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const normalizedLine = normalizeSexualityHeading(rawLine);

  for (const [type, headings] of Object.entries(SEXUALITY_SECTION_GROUPS)) {
    for (const heading of headings) {
      const cleanHeading = normalizeSexualityHeading(heading);

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

function splitSexualityRawIntoBlocks(raw) {
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

function splitSexualityBlockByHeadings(block) {
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
    const foundHeading = findInlineSexualityHeading(line);

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

function splitSexualityIntoSections(raw) {
  const intro = [];
  const sections = [];
  let current = null;

  const expandedBlocks = [];

  splitSexualityRawIntoBlocks(raw).forEach(function(block) {
    expandedBlocks.push(...splitSexualityBlockByHeadings(block));
  });

  expandedBlocks.forEach(function(block) {
    if (block.isHeading) {
      if (current) sections.push(current);

      current = {
        type: block.headingType,
        title: normalizeSexualityHeading(block.text),
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

  if (current) sections.push(current);

  return { intro, sections };
}

/* =========================
   PAGE BUILDING
   ========================= */

function sexualityBlocksLength(blocks) {
  return (blocks || []).reduce(function(sum, block) {
    return sum + String(block.text || "").length;
  }, 0);
}

function sexualitySectionLength(section) {
  if (!section) return 0;
  return String(section.title || "").length + sexualityBlocksLength(section.blocks || []);
}

function makeSexualityPage(kind, program, sections, options = {}) {
  const length = sections.reduce(function(sum, section) {
    if (section.kind === "intro") {
      return sum + sexualityBlocksLength(section.blocks);
    }

    return sum + sexualitySectionLength(section);
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

function splitLongSexualitySection(section, maxChars) {
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

function buildSexualityPages(program) {
  const parsed = splitSexualityIntoSections(program.text || "");

  const introBlocks = parsed.intro || [];
  const sections = parsed.sections || [];

  const positiveSections = sections.filter(function(section) {
    return section.type === "positive";
  });

  const negativeSections = sections.filter(function(section) {
    return section.type === "negative";
  });

  const recommendationSections = sections.filter(function(section) {
    return section.type === "recommendations";
  });

  const otherSections = sections.filter(function(section) {
    return (
      section.type !== "positive" &&
      section.type !== "negative" &&
      section.type !== "recommendations"
    );
  });

  const pages = [];

  /*
    1. Первая страница:
    название + вступление + positive,
    но только если оно не становится огромной простынёй.
  */

  const firstPageSections = [];

  if (introBlocks.length > 0) {
    firstPageSections.push({
      kind: "intro",
      title: "",
      blocks: introBlocks
    });
  }

  otherSections.forEach(function(section) {
    firstPageSections.push(section);
  });

  let firstPageLength = firstPageSections.reduce(function(sum, section) {
    if (section.kind === "intro") {
      return sum + sexualityBlocksLength(section.blocks);
    }

    return sum + sexualitySectionLength(section);
  }, 0);

  positiveSections.forEach(function(section) {
    const parts = splitLongSexualitySection(section, 3300);

    parts.forEach(function(part) {
      const partLength = sexualitySectionLength(part);

      if (firstPageLength + partLength <= 3600) {
        firstPageSections.push(part);
        firstPageLength += partLength;
      } else {
        pages.push(
          makeSexualityPage("positive", program, [part], {
            showTitle: pages.length === 0 && firstPageSections.length === 0
          })
        );
      }
    });
  });

  if (firstPageSections.length > 0) {
    pages.unshift(
      makeSexualityPage("title", program, firstPageSections, {
        showTitle: true
      })
    );
  }

  /*
    2. Negative:
    лучше отдельной страницей, чтобы не было кирпича.
  */

  negativeSections.forEach(function(section) {
    const parts = splitLongSexualitySection(section, 3600);

    parts.forEach(function(part) {
      pages.push(
        makeSexualityPage("negative", program, [part], {
          showTitle: pages.length === 0
        })
      );
    });
  });

  /*
    3. Doporučení:
    отдельная страница, но короткое doporučení можно приклеить
    к предыдущей не перегруженной странице.
  */

  recommendationSections.forEach(function(section) {
    const sectionLength = sexualitySectionLength(section);
    const previous = pages[pages.length - 1];
    const previousLength = getSexualityPageLength(previous);

    if (
      previous &&
      !previous.showTitle &&
      previousLength + sectionLength <= 3900
    ) {
      previous.sections.push(section);

      const mergedLength = previousLength + sectionLength;

      if (mergedLength < 1500) {
        previous.density = "center";
      } else if (mergedLength > 4100) {
        previous.density = "dense";
      } else {
        previous.density = "balanced";
      }

      return;
    }

    const parts = splitLongSexualitySection(section, 3600);

    parts.forEach(function(part) {
      pages.push(
        makeSexualityPage("recommendations", program, [part], {
          showTitle: pages.length === 0
        })
      );
    });
  });

  return pages;
}

function getSexualityPageLength(page) {
  if (!page || !page.sections) return 0;

  return page.sections.reduce(function(sum, section) {
    if (section.kind === "intro") {
      return sum + sexualityBlocksLength(section.blocks);
    }

    return sum + sexualitySectionLength(section);
  }, 0);
}

function mergeTinySexualityPages(pages) {
  const result = [];

  pages.forEach(function(page) {
    const pageLen = getSexualityPageLength(page);
    const previous = result[result.length - 1];
    const previousLen = getSexualityPageLength(previous);

    if (
      previous &&
      !page.showTitle &&
      !previous.showTitle &&
      pageLen < 900 &&
      previousLen < 3900
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

/* =========================
   RENDERING
   ========================= */

function isSexualityBulletLine(line) {
  const clean = String(line || "").trim();

  return (
    clean.startsWith("•") ||
    clean.startsWith("·") ||
    clean.startsWith("- ") ||
    /^\d+\)/.test(clean)
  );
}

function renderSexualityInlineText(text) {
  let safe = escapeHtml(text);

  safe = safe.replace(
    /^\((\d{1,2})\)\s*/,
    '<span class="energy-marker">($1)</span> '
  );

  return safe;
}

function renderSexualityBlock(block) {
  const text = String(block.text || "").trim();
  if (!text) return "";

  const lines = text
    .split("\n")
    .map(function(line) {
      return line.trim();
    })
    .filter(Boolean);

  if (lines.length > 1 && lines.every(isSexualityBulletLine)) {
    const items = lines.map(function(line) {
      const cleaned = line.replace(/^(•|·|-|\d+\))\s*/, "");
      return "<li>" + renderSexualityInlineText(cleaned) + "</li>";
    }).join("");

    return '<ul class="sexuality-print-list">' + items + "</ul>";
  }

  if (lines.length > 1 && lines.some(isSexualityBulletLine)) {
    return lines.map(function(line) {
      if (isSexualityBulletLine(line)) {
        const cleaned = line.replace(/^(•|·|-|\d+\))\s*/, "");
        return '<ul class="sexuality-print-list single"><li>' + renderSexualityInlineText(cleaned) + "</li></ul>";
      }

      return "<p>" + renderSexualityInlineText(line) + "</p>";
    }).join("");
  }

  const compact = text.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();

  return "<p>" + renderSexualityInlineText(compact) + "</p>";
}

function renderSexualityBlocks(blocks) {
  return (blocks || []).map(renderSexualityBlock).join("");
}

function renderSexualitySection(section) {
  if (!section) return "";

  if (section.kind === "intro") {
    return (
      '<div class="sexuality-print-section sexuality-print-section-intro">' +
        '<div class="sexuality-print-text">' +
          renderSexualityBlocks(section.blocks) +
        "</div>" +
      "</div>"
    );
  }

  const title = section.title
    ? '<h3 class="sexuality-print-subtitle sexuality-print-subtitle-' + escapeHtml(section.type) + '">' + escapeHtml(section.title) + "</h3>"
    : "";

  return (
    '<div class="sexuality-print-section sexuality-print-section-' + escapeHtml(section.type) + '">' +
      title +
      '<div class="sexuality-print-text">' +
        renderSexualityBlocks(section.blocks) +
      "</div>" +
    "</div>"
  );
}

function renderSexualityPage(page) {
  const program = page.program;

  const titleHTML = page.showTitle
    ? (
      '<div class="sexuality-print-title-block">' +
        '<h2>' + escapeHtml(program.title) + "</h2>" +
        '<div class="sexuality-print-combination">' + escapeHtml(program.key) + "</div>" +
      "</div>"
    )
    : "";

  const sectionsHTML = page.sections.map(renderSexualitySection).join("");

  return (
    '<section class="sexuality-print-page sexuality-page-' + escapeHtml(page.kind) + " sexuality-density-" + escapeHtml(page.density) + '">' +
      '<div class="sexuality-print-inner">' +
        titleHTML +
        sectionsHTML +
      "</div>" +
    "</section>"
  );
}

function renderSexualityProgramHTML(result) {
  const found = findSexualityProgram(result);

  if (!found.item) {
    return (
      '<div class="energy-item programs-card sexuality-program-card sexuality-print-card">' +
        '<section class="sexuality-main-title-page">' +
          '<div class="sexuality-main-title-inner">' +
            '<div class="sexuality-main-overline">SEXUALITA</div>' +
            '<h2>Program sexuality</h2>' +
            '<p>Pro kombinaci ' + escapeHtml(found.key) + ' zatím není v databázi nahraný výklad programu sexuality.</p>' +
          "</div>" +
        "</section>" +
      "</div>"
    );
  }

  const program = {
    key: found.key,
    title: found.item.title,
    text: found.item.text
  };

  const titlePage =
    '<section class="sexuality-main-title-page">' +
      '<div class="sexuality-main-title-inner">' +
        '<div class="sexuality-main-overline">SEXUALITA</div>' +
        '<h2>Program sexuality</h2>' +
        '<p>Sexuální program ukazuje, jak se může vaše energie projevovat v oblasti blízkosti, těla, touhy a intimity.</p>' +
      "</div>" +
    "</section>";

  const pagesHTML = buildSexualityPages(program).map(renderSexualityPage).join("");

  return (
    '<div class="energy-item programs-card sexuality-program-card sexuality-print-card">' +
      titlePage +
      pagesHTML +
    "</div>"
  );
}

module.exports = {
  findSexualityProgram,
  renderSexualityProgramHTML
};