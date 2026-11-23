// =========================
// SOUBOR S VYSVĚTLENÍM
// Bloky (nadpis + text) si autorka rozboru píše sama pro každého klienta.
// =========================

const { renderCoverHTML } = require("./cover");

// Kapacita jedné strany A4 (počet znaků textu).
const FIRST_PAGE_LIMIT = 2800;
const CONTINUE_PAGE_LIMIT = 3200;

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Povolené jsou jen základní formátovací značky.
function sanitizeHtml(html) {
  let value = String(html || "");

  value = value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<\/?div[^>]*>/gi, function(tag) {
      return tag.startsWith("</") ? "</p>" : "<p>";
    })
    .replace(/<\/?span[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ");

  const allowed = ["p", "br", "strong", "b", "em", "i", "u", "h3", "ul", "ol", "li"];

  value = value.replace(/<\/?([a-z0-9]+)(?:\s[^>]*)?>/gi, function(match, tagName) {
    const tag = String(tagName).toLowerCase();
    if (!allowed.includes(tag)) return "";
    return match.startsWith("</") ? "</" + tag + ">" : "<" + tag + ">";
  });

  return value.trim();
}

// Rozdělí HTML na bloky nejvyšší úrovně (odstavce, seznamy, podnadpisy).
function extractBlocks(html) {
  if (!html) return [];

  let value = html
    .replace(/<p>\s*(<br\s*\/?>)?\s*<\/p>/gi, "")
    .replace(/\n+/g, "\n")
    .trim();

  if (!value) return [];

  const blocks = [];
  const blockRegex = /<(p|ul|ol|h3)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  let lastIdx = 0;

  function pushStray(text) {
    // Holý text z editoru: řádky oddělené <br> rozdělíme na odstavce.
    String(text)
      .split(/(?:<br\s*\/?>\s*){2,}/i)
      .map(function(part) { return part.replace(/^(<br\s*\/?>\s*)+|(<br\s*\/?>\s*)+$/gi, "").trim(); })
      .filter(Boolean)
      .forEach(function(part) { blocks.push("<p>" + part + "</p>"); });
  }

  while ((match = blockRegex.exec(value)) !== null) {
    if (match.index > lastIdx) {
      pushStray(value.substring(lastIdx, match.index));
    }
    const tag = match[1].toLowerCase();
    const inner = match[2].trim();
    if (inner && inner.replace(/<br\s*\/?>/gi, "").trim()) {
      blocks.push("<" + tag + ">" + inner + "</" + tag + ">");
    }
    lastIdx = blockRegex.lastIndex;
  }

  if (lastIdx < value.length) {
    pushStray(value.substring(lastIdx));
  }

  return blocks;
}

function blockTextLength(block) {
  return block.replace(/<[^>]+>/g, "").length;
}

function paginateBlocks(blocks) {
  const pages = [];
  let current = [];
  let length = 0;

  blocks.forEach(function(block) {
    const limit = pages.length === 0 ? FIRST_PAGE_LIMIT : CONTINUE_PAGE_LIMIT;
    const blockLength = blockTextLength(block);

    if (current.length && length + 2 + blockLength > limit) {
      pages.push(current);
      current = [];
      length = 0;
    }

    current.push(block);
    length += (current.length > 1 ? 2 : 0) + blockLength;
  });

  if (current.length) pages.push(current);
  return pages;
}

function renderSection(section) {
  const title = String(section.title || "").trim();
  const blocks = extractBlocks(sanitizeHtml(section.html));

  if (!title && blocks.length === 0) return "";

  const pages = blocks.length ? paginateBlocks(blocks) : [[]];

  return pages.map(function(pageBlocks, index) {
    let header = "";

    if (index === 0 && title) {
      header = `<div class="personal-answer-header"><h2>${escapeHtml(title)}</h2></div>`;
    } else if (index > 0) {
      header = `<div class="explanation-role-badge explanation-continue-badge">
           <div class="explanation-role-badge-line">POKRAČOVÁNÍ</div>
         </div>`;
    }

    return `
      <section class="personal-answer-page${index === 0 ? "" : " personal-answer-page--continue"}">
        <div class="personal-answer-inner">
          ${header}
          <div class="personal-answer-content">
            ${pageBlocks.join("\n")}
          </div>
        </div>
      </section>
    `;
  }).join("\n");
}

function parseSections(raw) {
  if (Array.isArray(raw)) return raw;
  try {
    const parsed = JSON.parse(String(raw || "[]"));
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function renderStudentExplanationHTML(options) {
  const sections = parseSections(options.sections);

  const coverHTML = renderCoverHTML({
    name: options.name,
    birthDate: options.birthDate,
    gender: options.gender,
    readingType: "deep-explanation",
    matrixChartHTML: ""
  });

  const sectionsHTML = sections.map(renderSection).join("\n");

  return `
    <div class="report-wrapper explanation-wrapper">
      ${coverHTML}
      ${sectionsHTML}
    </div>
  `;
}

module.exports = {
  renderStudentExplanationHTML,
  parseSections
};
