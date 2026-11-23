const { findLocalProgramsInValues, renderLocalProgramNoteHTML } = require("./programs");
// =========================
// FINANČNÍ TOK ENGINE
// Zdroj: finanční tok.docx
// Logika: C, C1, C2, M; opakující se energie se v tomto bloku nevypisují dvakrát.
// =========================

if (typeof escapeHtml !== "function") {
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

const financialFlowTexts = {
  "2": {
    "negative": "Neupřímnost, odsuzování a pomluvy vůči kolegům a partnerům blokují peníze v matici osudu. Prozrazování tajemství výroby nebo firmy. Apatie, absence cílů a fyzického pohybu. Nezodpovědnost a nepraktičnost.",
    "positive": "Rozvoj intuice a využívání psychologických znalostí v komunikaci s druhými lidmi. Zvyšování kvalifikace. Vytvoření pasivního zdroje příjmu. Sport a fyzická aktivita."
  },
  "3": {
    "negative": "Konflikty se ženami a vyhýbání se partnerství s nimi. Tlak na lidi, tvrdost. Zaseknutí na materiálních statcích. Neschopnost přijímat pasivní příjem, dary a vděčnost. Neschopnost využívat svou krásu, neupravený vzhled. Touha žít na cizí účet.",
    "positive": "Ženské partnerky, uctivý přístup. Služby nebo oblast činnosti spojená se ženami nebo dětmi. Vedoucí pozice, vytvoření vlastního podnikání. Schopnost delegovat a rozdělovat povinnosti."
  },
  "4": {
    "negative": "Špatné vztahy s otcem a muži obecně, neschopnost s nimi spolupracovat blokují peníze v matici osudu. Moc využívaná pro zištné účely a manipulace. Druhé role a neochota vést, brát zodpovědnost. Neživotaschopné projekty, netrefení se do potřeb publika.",
    "positive": "Obchodní partnerství s muži, dobré vztahy s otcem. Schopnost domlouvat se a dělat kompromisy. Rozvoj vlastního podnikání, vedení, rozvoj zodpovědnosti a odvahy při přijímání důležitých rozhodnutí."
  },
  "5": {
    "negative": "Nejistota v sobě a pochybnosti o své kompetenci. Nelegální způsoby získávání zisku, nedodržování zákonů. Konzervatismus a šablonovité myšlení, tvrdohlavost.",
    "positive": "Legální činnost a dodržování právního řádu. Pořádek v záležitostech a dokumentech, struktura a automatizace pracovního procesu. Uplatňovat získané znalosti a dovednosti co nejdříve."
  },
  "6": {
    "negative": "Nemilovaná práce, práce pouze kvůli penězům, bez inspirace a vnitřní odezvy blokují peníze v matici osudu. Perfekcionismus, neustálá idealizace lidí a pracovního procesu. Nejistota v sobě a závislost na názoru okolí. Neochota spolupracovat a budovat podnikání v partnerství.",
    "positive": "Práce, ze které vám „hoří“ oči, práce od srdce. Důvěrné partnerské vztahy. Pochopení právě svých vlastních přání, své jedinečné cesty, nezávisle na trendech."
  },
  "7": {
    "negative": "Kategoričnost, agrese a nesnášenlivost. Jít za cílem přes překážky bez ohledu na cokoli. Odmítání rozvoje jiných životních oblastí kromě kariéry. Chaos v záležitostech a papírech, absence cílů a neustálé narušování plánů, shon, mnoho drobných úkolů. Lenost, odkládání na potom a strach z pohybu. Neochota budovat tým, neschopnost motivovat kolektiv.",
    "positive": "Plánování záležitostí, ambiciózní cíle a přítomnost krokového plánu k jejich dosažení. Učit se spolupracovat v kolektivu a neopírat se pouze o sebe. Být ideovým inspirátorem okolí. Pohyb jakéhokoli druhu - auto, stěhování, změna práce nebo pozice, cestování, služební cesty. Sport jako impuls k rozvoji síly vůle."
  },
  "8": {
    "negative": "Nelegální činnost, podvod, porušování dohod. Nedůvěra k lidem a vysoké nároky. Nepozornost a nezodpovědnost, stejně jako neustálá kritika a nespokojenost se svým postavením. Hyperzodpovědnost a vyhoření.",
    "positive": "Poctivý výdělek, dodržování norem a pravidel, termínů plnění, dochvilnost. Placení daní. Režim, harmonogram, vytvoření vlastního systému ve všem. Nestrannost a objektivita rozhodnutí a úsudků. Nacházení odpovědí na své otázky, studium příčin a následků, transformace negativních přesvědčení."
  },
  "9": {
    "negative": "Odmítání materiálních statků, šetření na sobě. Strach projevovat se a nejistota ve své hodnotě. Nebo druhý extrém - povyšování se a nepřijímání druhých lidí jako méně chytrých a vzdělaných. Neschopnost být v partnerství, navazovat kontakt, nedůvěra. Pokusy pracovat pouze fyzickou prací nebo práce ve velkém kolektivu.",
    "positive": "Organizace pracovního procesu tak, aby zde byl vlastní osobní pracovní prostor, ale zároveň i komunikace s partnery; budování komunikace. Vytvoření okruhu podobně smýšlejících lidí pro předávání znalostí a dovedností. Práce, která předpokládá další růst a zvyšování kvality znalostí, zvyšování kvalifikace. Intelektuální práce v samotě, například věda, psaní, učitelství."
  },
  "10": {
    "negative": "Pevný pracovní režim, hazardnost, dluhy a úvěry blokují peníze v matici osudu. Zaseknutí na penězích, přehnaný materialismus, lakomost, neschopnost odkládat si peníze a vytvářet finanční rezervu. Absence cílů v životě nebo žití ne svého života, ale takového, jak ho vidí rodiče nebo okolí, toxické okolí. Strach a omezující nastavení: milovanou činností se nedá vydělat, činnost má být jedna a na celý život atd.",
    "positive": "Naslouchat své intuici a uskutečňovat své originální nápady tady a teď, neodkládat je na potom. Zacházet s penězi opatrně, vytvářet si finanční rezervu, neutrácet peníze za pochybné avantýry. Najít motivaci, tým, lidi blízké duchem.\n Pracovat s radostí! Všímat si znamení osudu, pohybovat se ve společnosti. Navazovat užitečné kontakty, budovat si „bohaté“ okolí!"
  },
  "11": {
    "negative": "Napětí kvůli penězům, strach z velkých peněz. Nedůvěra v sebe a v možnost hodně vydělávat. Plýtvání svou silou a workoholismus. Netrpělivost a touha získat vše hned, podrážděnost vůči okolí. Agrese a neschopnost směrovat svou energii správným směrem. Činnost, která škodí zdraví a životnímu prostředí.",
    "positive": "Práce na velkých projektech, s velkým objemem informací, přičemž je důležité naučit se odpočívat a regenerovat. Pro správnou koncentraci sil si sestavovat plán, pracovní harmonogram, režim, kvalitně a dobře odpočívat! Podporovat druhé lidi, vést je, nabíjet je svou cílevědomostí."
  },
  "12": {
    "negative": "Znehodnocování své práce, práce zadarmo nebo za směšnou částku, dluhy a úvěry. Zbytečná činnost, absence vděčnosti. Falešná nastavení a zbytečné okolnosti, kdy vás svazují ruce i nohy, stav oběti, například: raději se obětuji dětem - ve výsledku chudoba; nemohu odejít z této práce, tady mě potřebují, přitom mi například už půl roku neplatí mzdu. Neschopnost odmítnout, závislost na názoru druhých.\n Zaseknutí, stagnace v rozvoji, nerozhodnost.",
    "positive": "Naučit se odmítat, pokud je to váš vnitřní pocit. Brát si důstojnou odměnu za svou práci. Změnit činnost, pokud je práce na váš úkor. Odhalit to, co můžete nabídnout lidem, a ukazovat svou užitečnost, jedinečnost a kreativitu nezávisle na hodnocení okolí."
  },
  "13": {
    "negative": "Lpění na tom, co nepřináší uspokojení a finanční stabilitu. Strach změnit práci, profesi, pozici. Neschopnost rozdělovat úkoly, nepořádek v dokumentech, cílech, plánech, hromadění zbytečností. Nečinnost, nezodpovědnost a nadměrné finanční výdaje. Pokusy šetřit místo toho, abyste začali více vydělávat.",
    "positive": "Promyšlené a vědomé riziko, rozhodnost a odvaha. Schopnost nacházet něco nového ve své profesi, nebát se začínat nová období v činnosti, novou nebo projektovou činnost. Nebo činnost, která je spojená s transformací lidí či prostoru. Vnímání strachu jako zdroje, který otevírá nové možnosti. Optimismus."
  },
  "14": {
    "negative": "Neuměřenost ve výdajích, tedy neschopnost žít podle svých možností, a také příliš skromné požadavky. Přizpůsobivost. Nepřesnost v práci a nezodpovědnost. Neuvážené činy, to vše blokuje peníze v matici osudu. Přehnaná emocionalita a netrpělivost, škodlivé návyky. Přehnaný materialismus a odmítání kreativity v jakékoli podobě.",
    "positive": "Rovnováha emocí a materiálních výdajů. Investovat do svého komfortního a klidného života. Úcta k okolí a ochota spolupracovat, dělat kompromisy. Milovaná práce, kreativní pohled na svou činnost."
  },
  "15": {
    "negative": "Nelegální činnost, podvod, porušování dohod. Nedůvěra k lidem a vysoké nároky. Nepozornost a nezodpovědnost, stejně jako neustálá kritika a nespokojenost se svým postavením. Hyperzodpovědnost a vyhoření.",
    "positive": "Poctivý výdělek, dodržování norem a pravidel, termínů plnění, dochvilnost. Placení daní. Režim, harmonogram, vytvoření vlastního systému ve všem. Nestrannost a objektivita rozhodnutí a úsudků. Nacházení odpovědí na své otázky, studium příčin a následků, transformace negativních přesvědčení."
  },
  "16": {
    "negative": "Fyzický stagnace a stagnace v profesní činnosti, neochota se rozvíjet. Chaotické, neuspořádané jednání, agrese. Zaseknutí na penězích, strach ztratit materiální statky, chamtivost. Strach začít od nuly, lpění na statusu.",
    "positive": "Rovnováha duchovního a materiálního, askeze a vědomá omezení. Režim, plánování, fyzická aktivita, zbavování se zbytečností. Láska ke změnám. Touha budovat komunikaci. Vzdělávání, semináře, zvyšování kvalifikace, duchovní literatura. Schopnost rozloučit se s toxickým okolím a neefektivním personálem."
  },
  "17": {
    "negative": "Nejistota, nerozhodnost, život ve snech, očekávání slávy, sklon být ve druhých rolích. Práce tam, kde „se musí“, následování společenských šablon, porušování rovnováhy brát-dávat. Absence kreativity a koníčků. Neprofesionalita a absence touhy stát se populárními v profesní činnosti. Nerealizace talentů. Hvězdná nemoc, neochota pomáhat nováčkům.",
    "positive": "Práce podle poslání, zvyšování kompetence. Otevírat se komunikaci, novým známostem, ukazovat své talenty. Realizovat své nápady a tvůrčí schopnosti. Práce na image a stylu. Profesionalita a popularita v úzkém nebo širokém kruhu. Rozvoj své veřejnosti. Práce s peněžními nastaveními, jako například „umělec musí být hladový“ atd."
  },
  "18": {
    "negative": "Strachy, sklíčenost, úzkost z budoucnosti. Iluze. Nedůvěra ve svou intuici, skepticismus a přízemnost. Podvod a sebeklam, zatajování informací, nestálost. Používání černých rituálů kvůli obohacení, aféry a podvody.",
    "positive": "Studium psychologie, lidské psychiky a využívání těchto znalostí ke kontrole myšlenek a psychického stavu. Používání technik materializace cílů, své bohaté fantazie a představivosti. Využívání intuice a schopnosti předvídat události a okolnosti. Feng-šuej, vastu, peněžní rituály, vizualizace, nástěnky přání. Rozvoj v oblasti ezoteriky, studium Tarotu."
  },
  "19": {
    "negative": "Lakomost, podráždění kvůli výdajům, malichernost a zuřivé šetření blokují peníze v matici osudu. Agrese, pýcha a hněvivost, ostrost v komunikaci. Zaseknutí, nezdravé sebevědomí. Strach ze zodpovědnosti a neochota vzít vedení do vlastních rukou. Touha vzdát se po několika neúspěšných pokusech. Pocit viny, například: jak mohu žít dobře, když jiní hladoví.",
    "positive": "Pomáhat těm, kdo jsou slabší, společenská činnost, sociální aktivita, charita. Dělat radost svým nebo cizím dětem. Vytváření pracovních míst a velkých projektů. Rozvíjet vůdčí kvality a řečnické dovednosti, hlasové schopnosti: zpěv. Praktikovat veřejná vystoupení. Vstávat s úsvitem, nabíjet se slunečními paprsky na procházkách."
  },
  "20": {
    "negative": "Následování negativního peněžního scénáře rodičů. Odmítání podpory rodiny, kritika jejich činnosti a výdělku, nepřijetí vlasti. Absence duchovního rozvoje. Práce neodpovídající vaší úrovni nebo vzdělání. Odmítání touhy pracovat podle poslání.",
    "positive": "Rodinné podnikání, dynastická profese, velké projekty. Využívání intuice, zkušeností a analytických schopností při přijímání rozhodnutí a v profesní činnosti. Přijetí rodiny a finanční podpora rodiny."
  },
  "21": {
    "negative": "Omezení různého druhu, šablonovité myšlení. Rámce - město, pozice, místo práce, to vše blokuje peníze v matici osudu. Neochota rozšiřovat rámce a věnovat se něčemu globálnímu, špatný vztah k možnostem internetu, ke všemu zahraničnímu a ke společnosti jako celku. Nespokojenost, ale nečinnost. Nevděčnost. Antimírová činnost, pokusy dělat to, co škodí světu. Sklon půjčovat peníze škodí. Pohybování se ne ve svém sociálním okruhu, níže než je váš.",
    "positive": "Globální cíle a činnost užitečná lidem. Spojování lidí, vytváření něčeho užitečného pro svět. Neustálé zvyšování profesní úrovně, rozšiřování a škálování pracovního procesu. Využívání moderních technologií a internetu ve své práci; osvojování si internetového prostoru, spolupráce se zahraničními partnery, studium cizích jazyků. Život a práce na cestách z různých koutů světa."
  },
  "22": {
    "negative": "Fixní pracovní rozvrh, přísná pravidla, omezení a požadavky. Nezodpovědný vztah k penězům, nákup zbytečností, úvěry, rozhazovačnost, drobné podvody, nedbalost. Připoutanost k místu bydliště, práci, činnosti a neochota pohnout se z místa.",
    "positive": "Volný pracovní rozvrh, freelance, online. Připravenost změnit všechno a začít znovu na jakémkoli místě na mapě, projevovat spontánnost, ale i zodpovědnost. Studovat možnosti a varianty pasivního příjmu. Jít do svých strachů. Hlídat si svou řeč. Dobře pracovat s dětmi nebo tvořit něco pro ně. Zkoušet se v humoristickém žánru. Utrácet své finance za to, co přináší pocit lehkosti, radosti a svobody."
  }
};

function getUniqueFinancialFlowValues(result) {
  const values = [result.C, result.C1, result.C2, result.M];
  const seen = new Set();

  return values
    .filter(function(value) {
      return value !== undefined && value !== null && value !== "";
    })
    .map(function(value) {
      return Number(value);
    })
    .filter(function(value) {
      const key = String(value);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function renderRichText(raw) {
  if (!raw) return "";

  var SUBTITLE_PATTERNS = [
    "Pokud jste v pozitivním stavu \\(\\+\\)",
    "Pokud jste v negativním stavu \\(-\\)",
    "Vaše silné stránky",
    "Silné stránky",
    "Možné problémy",
    "Doporučení",
    "Pozitivní projevy",
    "Negativní projevy",
    "Jádro energie",
    "V minulosti",
    "V tomto životě"
  ];

  function escapeForHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function highlightSubtitles(safe) {
    SUBTITLE_PATTERNS.forEach(function(pattern) {
      var regex = new RegExp("(^|>|\\s|<br\\s*\\/?>)(" + pattern + ":?)", "gi");
      safe = safe.replace(regex, function(match, before, phrase) {
        return before + '<span class="block-subtitle">' + phrase + '</span>';
      });
    });
    return safe;
  }

  return String(raw)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n\s*\n/)
    .map(function(part) { return part.trim(); })
    .filter(Boolean)
    .map(function(part) {
      var safe = escapeForHtml(part).replace(/\n+/g, "<br>");

      safe = safe.replace(
        /^\((\d{1,2})\)\s*/,
        '<span class="energy-marker">($1)</span> '
      );

      safe = highlightSubtitles(safe);

      safe = safe.replace(
        /<br\s*\/?>(?!<span class="block-subtitle">)/gi,
        " "
      );

      safe = safe.replace(/\s+/g, " ").trim();

      return '<p>' + safe + '</p>';
    })
    .join("");
}

function renderFinancialFlowText(raw) {
  return renderRichText(raw);
}

function renderFinancialFlowHTML(result) {
  const localPrograms = findLocalProgramsInValues([
    result.C,
    result.C1,
    result.C2,
    result.M
  ]);

  const localProgramNoteHTML = renderLocalProgramNoteHTML(localPrograms);
  const energies = getUniqueFinancialFlowValues(result);

  const negativeParts = [];
  const positiveParts = [];

  energies.forEach(function(energy) {
    const item = financialFlowTexts[String(energy)];
    if (!item) return;

    if (item.negative) negativeParts.push(item.negative);
    if (item.positive) positiveParts.push(item.positive);
  });

  if (negativeParts.length === 0 && positiveParts.length === 0) {
    return (
      '<div class="energy-item programs-card financial-flow-card financial-flow-print-card">' +
        '<section class="financial-flow-print-page financial-flow-density-center">' +
          '<div class="financial-flow-print-inner">' +
            '<h2>Finanční tok</h2>' +
            '<p>Pro zadané energie zatím není v databázi nahraný výklad finančního toku.</p>' +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  function getTextLength(parts) {
    return parts.join("\n\n").length;
  }

  function renderSection(type, title, parts) {
    if (!parts || parts.length === 0) return "";

    return (
      '<div class="financial-flow-section financial-flow-' + type + '">' +
        '<h4>' + escapeHtml(title) + '</h4>' +
        renderFinancialFlowText(parts.join("\n\n")) +
      '</div>'
    );
  }

  const negativeLength = getTextLength(negativeParts);
  const positiveLength = getTextLength(positiveParts);
  const totalLength = negativeLength + positiveLength;

  /*
    Логика:
    - если всё короткое/среднее, оставляем на одной странице;
    - если много текста, первая страница = заголовок + Zhoršuje,
      вторая страница = Zlepšuje + заметка.
  */

  if (totalLength <= 6800) {
    let density = "balanced";

    if (totalLength < 3000) {
      density = "center";
    } else if (totalLength > 6000) {
      density = "dense";
    }

    return (
      '<div class="energy-item programs-card financial-flow-card financial-flow-print-card financial-flow-count-one">' +
        '<section class="financial-flow-print-page financial-flow-page-title financial-flow-density-' + density + '">' +
          '<div class="financial-flow-print-inner">' +
            '<h2>Finanční tok</h2>' +
            renderSection("negative", "Zhoršuje finanční tok", negativeParts) +
            renderSection("positive", "Zlepšuje finanční tok", positiveParts) +
            localProgramNoteHTML +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  return (
    '<div class="energy-item programs-card financial-flow-card financial-flow-print-card financial-flow-count-two">' +
      '<section class="financial-flow-print-page financial-flow-page-title financial-flow-density-balanced">' +
        '<div class="financial-flow-print-inner">' +
          '<h2>Finanční tok</h2>' +
          renderSection("negative", "Zhoršuje finanční tok", negativeParts) +
        '</div>' +
      '</section>' +
      '<section class="financial-flow-print-page financial-flow-page-continue financial-flow-density-balanced">' +
        '<div class="financial-flow-print-inner">' +
          renderSection("positive", "Zlepšuje finanční tok", positiveParts) +
          localProgramNoteHTML +
        '</div>' +
      '</section>' +
    '</div>'
  );
}
module.exports = {
  getUniqueFinancialFlowValues,
  renderFinancialFlowHTML
};