// =========================
// COMMUNICATION ENGINE
// Komunikace podle středu matice osudu (E)
// Source: Jak komunikujete, když jste ve své síle_.docx
// =========================

const communicationDatabase = [
  {
    "energy": "3",
    "gender": "female",
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(3) V komunikaci máte přirozený šarm. Umíte zaujmout, umíte být vidět, umíte působit jako člověk, jehož názor má váhu. Lidé se často přizpůsobí Vaší úrovni, protože cítí, že u Vás “to má styl”. Umíte dávat rady, umíte inspirovat, umíte vést. Zároveň je důležité, aby se komunikace nezměnila v tlak, v mentorování nebo v jemnou manipulaci přes šarm. Luxusní trojka komunikuje srdečně a s respektem. Není potřeba dokazovat, že máte pravdu. Vaše úroveň je v tom, že jste přirozeně autorita i bez boje."
  },
  {
    "energy": "3",
    "gender": "male",
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "V komunikaci třetí energie u muže dává šarm a sociální inteligenci. Lidé Vám naslouchají, protože cítí, že máte vkus, standard a přirozenou autoritu bez křiku. Umíte dávat rady tak, aby to nebylo mentorování, ale reálná pomoc. Zároveň je důležité, aby se komunikace nezměnila v jemnou manipulaci, kdy se snažíte získat pozornost, potvrzení nebo výhodu skrze příjemnost a charisma. Luxusní třetí energie komunikuje přímo, ale měkce. Přitahuje, aniž by lovila. A působí tak, že s Vámi lidé chtějí být, protože je u Vás prostě dobře."
  },
  {
    "energy": "4",
    "gender": "female",
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(4) V komunikaci působíte pevně, jasně, autoritativně. Umíte říct věci přímo, umíte nastavit hranice, umíte vést. Lidé často respektují Vaše slovo, protože z Vás jde vnitřní rámec. Luxusní čtyřka komunikuje věcně, ale s úctou. Nepotřebuje zvyšovat hlas, nepotřebuje ponižovat, nepotřebuje dominovat. Stačí jí pravda a klid. Je dobré hlídat, aby se komunikace nezměnila v rozkazování, v kontrolní tón nebo v netrpělivost vůči slabosti druhých. Čtyřka může být velmi silná, a právě proto je její nejvyšší úroveň v tom, že umí být spravedlivá a lidská. Pak se stává autoritou, kterou lidé nejen poslouchají, ale i chtějí následovat."
  },
  {
    "energy": "4",
    "gender": "male",
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(4) V komunikaci čtyřka přirozeně zní jako autorita. Lidé registrují Vaši pevnost a očekávají od Vás směr. Luxusní čtyřka komunikuje klidně, jasně, bez potřeby zvyšovat hlas. Je v tom důstojnost. Umíte zadávat úkoly, vyjednávat, vést, držet rámec. Zároveň je důležité, aby se komunikace nezměnila v rozkazování nebo v chladný tón, ve kterém druhý člověk přestane být partnerem a stane se podřízeným. Zralá čtyřka umí jednu zásadní věc: drží autoritu, ale nepodceňuje druhé. Umíte dát lidem prostor, a přitom neztratit směr. A právě to je pro vztahy i pro práci klíčové. Když čtyřka začne komunikovat z respektu, ne z dominance, stává se magnetem. Protože lidé instinktivně cítí, že vedle Vás mohou růst, ne se jen přizpůsobovat."
  },
  {
    "energy": "5",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(5) V komunikaci působíte jako autorita, řečník, člověk se silným slovem. Umíte přesvědčit, umíte argumentovat, umíte vést. Vaše řeč často zní stabilně a lidé Vám naslouchají, protože cítí strukturu a logiku. Pětka má dar předávat informace tak, aby byly použitelné. Luxusní pětka však komunikuje i srdcem. Když se vzdáte postoje “vševědoucího soudce” a dovolíte si lidskost, komunikace získá magnetismus. Lidé nepotřebují jen pravdu, potřebují i pochopení. A pětka je v nejvyšší podobě právě toto: moudrost, která neponižuje. Slovo, které vede, ale netlačí."
  },
  {
    "energy": "6",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(6) V komunikaci jste společensky ladění. Umíte udržovat kontakty, umíte mluvit s lidmi, umíte vytvářet lehkost. Šestka často funguje jako pojítko mezi lidmi, umí propojovat skupiny, přinášet informace, organizovat setkání. Vaše energie je živá, a to je velmi přitažlivé. Luxusní šestka však stojí na vnitřní nezávislosti. Je důležité, aby výsledkem komunikace nebyla jen reakce okolí, ale i Vaše vlastní vnitřní spokojenost. Když přestanete dávat druhým moc nad Vašimi emocemi, komunikace se stane zralou: budete přívětiví, ale ne závislí. Otevření, ale ne zranitelní bez hranic. A pak šestka přitahuje správné vztahy přirozeně, bez honu a bez strachu."
  },
  {
    "energy": "7",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(7) V komunikaci sedmička působí přímo, rychle a věcně. Umíte rozhodovat, umíte zadávat úkoly, umíte tlačit na výsledek. Lidé často cítí, že s Vámi se věci hýbou. V týmové komunikaci můžete být přirozeným motorem: ten, kdo zrychlí proces, kdo dá tempo, kdo vytáhne druhé z pasivity. Zároveň je důležité hlídat tón. Luxusní sedmička nekomunikuje z nervozity, ale z klidu. Když začnete tlačit, lidé se buď zlomí, nebo odejdou. Když vedete, lidé jdou. Sedmička má obrovský dar být lídrem, ale její nejvyšší úroveň je v tom, že umí vytvořit pohyb bez války. Sedmička také často neumí snadno mluvit o jemných emocích. Ne proto, že by emoce nebyly, ale protože jste nastavení na čin, ne na rozbor. Zralá sedmička však umí říct i jednoduchou větu o tom, co cítí, a tím se vztahy výrazně zlepšují. Protože Vaše síla pak působí bezpečně, ne hrozivě. Sedmá energie je o směru. Když máte směr, jste nezastavitelní. A když k tomu přidáte vnitřní klid, stává se z Vás člověk, který nejen vyhrává, ale také inspiruje."
  },
  {
    "energy": "8",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(8) V komunikaci působíte přirozeně jako člověk, který umí „srovnat“ situaci. Umíte klást přesné otázky, umíte dojít k jádru. Lidé se na Vás často obracejí, když potřebují objektivní názor nebo rozhodnutí, protože cítí, že u Vás není chaos. Vaše slovo má váhu, protože v něm bývá logika. Zároveň je pro osmčku klíčové, aby komunikace nezklouzla do moralizování a rychlých rozsudků. Osmčka umí naslouchat, zvažovat a teprve potom mluvit. Když si dáte čas pochopit motivy druhých, Vaše spravedlnost začne působit jako moudrost, ne jako trest. A tehdy je osmčka nejvíc magnetická: lidé mají pocit, že vedle Vás je bezpečno, protože je tu pravda, ale bez ponižování. Osmá energie je o rovnováze. Čím víc ji držíte uvnitř, tím méně musíte bojovat venku. A právě to je její nejvyšší forma: spravedlnost, která je klidná, pevná a lidská."
  },
  {
    "energy": "9",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(9) V komunikaci devítka působí zdrženlivě. Nejlépe fungujete jeden na jednoho, v klidu, bez přetlaku. Potřebujete čas, abyste se otevřeli, a lidé to často cítí. Vaše slova mají váhu, protože nemluvíte jen proto, abyste mluvili. Když promluvíte, bývá to přesné. Je dobré hlídat, aby zdrženlivost nepůsobila jako chlad nebo odmítnutí. Luxusní devítka komunikuje tak, že drží hranice, ale nezavírá srdce. A když se pravidelně ukazujete ve společnosti, i když jen občas, lidé Vás vnímají jako magnet: přicházejí pro radu, pro klid, pro moudrost. Devítka je přirozený průvodce, ale musí si dovolit být vidět."
  },
  {
    "energy": "10",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(10) V komunikaci působíte otevřeně a přátelsky. Umíte navazovat kontakty, umíte se pohybovat ve společnosti, umíte udržovat vztahy a propojovat lidi. Mnoho příležitostí se Vám otevírá právě přes komunikaci, proto je pro desítku důležité nebýt izolovaná a nebát se být vidět. Zároveň je dobré hlídat, aby komunikace nezůstala jen na povrchu. Desítka umí být velmi společenská, ale její nejvyšší úroveň je autenticita: být sám sebou, nepředvádět se, nehrát roli. Když komunikujete z přirozenosti, lidé Vás mají rádi a důvěřují Vám. A právě důvěra je pro desítku klíč, protože otevírá další dveře. Desátá energie je o načasování. Když jste v klidu a v pohybu zároveň, život Vám dává šance přesně tehdy, kdy jste připraveni je využít."
  },
  {
    "energy": "11",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(11) V komunikaci může jedenáctka působit jako organizátor, spojovatel, člověk, který umí zvednout atmosféru. Máte schopnost sjednotit lidi, dát jim impuls, naladit skupinu na akci. Vaše energie je nakažlivá, a když je v plusu, lidé vedle Vás chtějí fungovat. Zároveň je důležité hlídat konflikt. Jedenáctka má přirozenou sílu ovlivňovat, ale pokud je v mínusu, může jít do sporů příliš přímo, příliš tvrdě. Luxusní jedenáctka umí prosadit svůj názor bez boje: přes inteligenci, přes argument, přes důstojnost. Když použijete svou sílu měkce, jste velmi přesvědčiví a lidé Vás následují dobrovolně, ne ze strachu."
  },
  {
    "energy": "12",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(12) V komunikaci umíte navazovat kontakt snadno, často velmi přirozeně a lidsky. Mluvíte s lidmi bez pocitu nadřazenosti. Umíte poradit, ale ne jako soudce. Spíš jako někdo, kdo chápe. Lidé se k Vám obrací, když potřebují podporu, protože cítí Vaši empatii a zkušenost. Zároveň je důležité nenechat komunikaci stát se jednostrannou službou. Luxusní dvanáctka umí říct: „teď potřebuji i já“. Umí sdílet své hranice, své potřeby, svou pravdu. A když to dokážete, Vaše komunikace získá ještě větší sílu: nebude to jen “zachraňování”, ale skutečný vztah, kde proudí výměna. Dvanáctá energie je o hloubce. Když si udržíte sebe, můžete být pro druhé výjimečným průvodcem, protože Vaše lidskost není teorie, ale zkušenost."
  },
  {
    "energy": "13",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(13) V komunikaci třináctka působí hluboce, intenzivně, někdy až magneticky. Umíte navazovat kontakt v různých prostředích, často i s lidmi, se kterými by jiní spojení nenašli. Máte schopnost přesvědčit, protože mluvíte z praxe a z hloubky. Vaše slova nejsou dekorace. Jsou to spínače. Zároveň je důležité hlídat, aby se komunikace v mínusu nezměnila v tlak: „já vím, co je pro Vás správně“. Luxusní třináctka umí ustoupit a dát lidem čas. Umí říct pravdu, ale bez agrese. Protože skutečná transformace se nedá vynutit. Dá se otevřít. A třináctka v nejvyšší úrovni otevírá dveře, ale netlačí člověka dovnitř."
  },
  {
    "energy": "14",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(14) V komunikaci působíte jemně, někdy zranitelně, ale zároveň kultivovaně. Často Vám nejdou agresivní, hrubé, nátlakové typy lidí. V plusu umíte komunikovat s respektem, umíte být diplomaticky přesní, umíte brát z lidí to dobré a zároveň zůstat realisté. Čtrnáctka umí vnímat krásu i stín a nehroutit se z toho. Luxusní čtrnáctka se učí neztrácet kontakt se světem. I když jste citliví, není dobré mizet. Vaše síla je v tom, že dokážete přinášet rovnováhu druhým. Někdy je pro Vás přirozenější vyjadřovat se nepřímo: přes tvorbu, estetiku, umění, text, obraz. A když tuto kvalitu přijmete, komunikace se stává Vaším nástrojem: ne pro boj, ale pro kultivaci prostoru kolem Vás. Čtrnáctá energie je o míře. Když ji držíte, život se stává stabilním, krásným a hlubokým zároveň."
  },
  {
    "energy": "16",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(16) V komunikaci má šestnáctka dar slova a přesvědčování. Umíte pojmenovat věci přímo, často až chirurgicky přesně. Umíte vysvětlit, proč je třeba změna, a umíte nabídnout řešení. Lidé vedle Vás cítí, že se nedá hrát na iluzi, protože Vy vidíte, kde je slabé místo. Zároveň je důležité hlídat reakci na odpor. Šestnáctka často naráží na to, že ne každý je připravený slyšet pravdu hned. Luxusní šestnáctka umí mluvit pravdivě a přitom nezničit mosty. Umí dát lidem čas, ale nezradí pravdu. Když tuto rovnováhu držíte, můžete být velmi silným lídrem, který vede změnou klidně, s respektem a s výsledkem. Šestnáctá energie je o odvaze. Když ji používáte vědomě, nebouráte život. Bouráte jen to, co už stejně neuneslo pravdu. A tím vytváříte prostor pro něco, co konečně stojí pevně."
  },
  {
    "energy": "18",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(18) V komunikaci působíte tajemně, jemně, někdy až nedostupně. Často Vám vyhovují menší skupiny nebo rozhovory jeden na jednoho. Jste spíš posluchač než hlasitý řečník. A když promluvíte, lidé to vnímají, protože Vaše slova bývají promyšlená a nesou hloubku. Je důležité udržovat kontakt se světem vědomě. Ne nutně být všude, ale nezmizet. Luxusní osmnáctka umí komunikovat tak, že si zachová jemnost a zároveň je čitelná. Když se naučíte říkat, co cítíte, bez strachu, Vaše komunikace se stane velmi silnou. Protože Měsíc umí mluvit přímo do podvědomí druhých. A právě to je jeho dar: slova, která se nezapomínají, protože nesou atmosféru a pravdu."
  },
  {
    "energy": "20",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(20) V komunikaci máte dar přesvědčování a velmi ostrý vhled. Umíte lidem říkat věci, které potřebují slyšet. V plusu to děláte klidně, moudře, bez agresivity. Umíte držet pozitivní myšlení, nešířit stížnosti, nevytvářet dramatickou atmosféru. Dvacítka v plusu umí být smířlivá autorita: vede, ale netlačí. V mínusu se však může objevit moralizování a vnucování názoru. Luxusní dvacítka se učí respektu: každý má právo žít svůj život. Můžete ukázat cestu, ale nemůžete ji projít za druhého. Když tuto hranici držíte, Vaše komunikace se stává velmi silnou, protože lidé cítí, že nejste soudce. Jste průvodce, který vidí rodové nitě a umí je jemně rozplést."
  },
  {
    "energy": "22",
    "gender": null,
    "title": "Jak komunikujete, když jste ve své síle",
    "text": "(22) V komunikaci máte obrovský rozsah. Umíte najít společnou řeč s různými lidmi, kulturami, názory. Nevadí Vám odlišnost. Dvacetdvojka umí být přirozeně přátelská, otevřená, lidská. Umíte lidi povzbudit, zlehčit situaci, dát jim pocit, že život není vězení. Luxusní dvacetdvojka však hlídá hranice. Aby komunikace nezůstala jen lehká a prchavá. Vaše síla roste, když se svoboda spojí s odpovědností: umíte být spontánní a zároveň spolehliví. Když tuto kombinaci držíte, lidé Vás vnímají jako velmi vzácnou osobnost: svobodnou, ale ne nebezpečnou. Otevřenou, ale ne prázdnou. A to je nejvyšší forma dvaadvacítky."
  }
];

function normalizeCommunicationGender(gender) {
  if (!gender) return null;
  const g = String(gender).toLowerCase().trim();

  if (["male", "m", "muz", "muž", "muzsky", "mužský", "man", "mužský rod"].includes(g)) {
    return "male";
  }

  if (["female", "f", "zena", "žena", "zensky", "ženský", "woman", "ženský rod"].includes(g)) {
    return "female";
  }

  return null;
}

function getCommunicationEnergy(result) {
  return String(result.E);
}

function findCommunication(result, gender) {
  const energyKey = getCommunicationEnergy(result);
  const genderKey = normalizeCommunicationGender(gender);

  let matches = communicationDatabase.filter(function(item) {
    return String(item.energy) === energyKey;
  });

  // Pro energie 3 a 4 existuje ženská a mužská varianta.
  // Pokud je pohlaví zadané, vrátí se jen odpovídající text.
  // Pokud pohlaví zadané není, vrátí se všechny varianty, aby se nic neztratilo.
  if (genderKey) {
    const genderMatches = matches.filter(function(item) {
      return !item.gender || item.gender === genderKey;
    });

    if (genderMatches.length > 0) {
      matches = genderMatches;
    }
  }

  return matches;
}

function renderCommunicationHTML(communicationItems, result) {
  if (!communicationItems || communicationItems.length === 0) {
    return "";
  }

  const itemsHTML = communicationItems.map(function(item) {
    return '<div class="program-found-item">' +
      '<div class="program-title">' +
        escapeHtml(item.title) +
      '</div>' +
      '<div class="energy-text" style="margin-top: 14px;">' +
        renderEnergyHTML(item.text) +
      '</div>' +
    '</div>';
  }).join('');

  return '<div class="communication-inner-block">' +
    itemsHTML +
  '</div>';
}
function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

function renderEnergyHTML(raw) {
  return renderRichText(raw);
}

module.exports = {
  findCommunication,
  renderCommunicationHTML
};