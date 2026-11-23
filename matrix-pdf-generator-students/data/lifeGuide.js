// =========================
// LIFE GUIDE ENGINE
// Průvodce životem pro vás
// Values used: A, B, E
// =========================

if (typeof escapeHtml !== "function") {
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

const lifeGuideTexts = {
  1: "Je pro vás důležité, abyste věřili v sebe a své vlastní schopnosti, abyste se vyvíjeli samostatně, bez ohledu na ostatní. Jděte svou vlastní cestou, důvěřujte zázrakům, které se ve vašem životě dějí, a znamením osudu. Je velmi důležité rozvíjet pozitivní myšlení, ovládat sílu myšlenky, která velmi ovlivňuje okolnosti kolem vás. Buďte rozhodní a cílevědomí, nepochybujte o sobě. Jednejte samostatně a nebojte se být aktivní. Nezapomínejte na duchovní štědrost, milosrdenství a schopnost odpouštět. Je dobré najít něco, co se vám líbí, z čehož budou mít užitek i ostatní. Pečujte o své tělo, protože k realizaci všech vašich představ jsou potřeba fyzické schopnosti. Zkuste být více v přírodě, abyste obnovili svou energii.",
  2: "Buďte upřímní ve svých myšlenkách, činech a přesvědčeních. Naučte se lidem důvěřovat a pusťte je do svého života, když se vám otevřou. Pomozte svými radami, znalostmi a schopností jednoduše uklidnit a vytvořit vřelou atmosféru duchovního pohodlí, aniž byste očekávali uznání nebo odměnu na oplátku. Rozvíjejte své léčitelské schopnosti, posilujte své tělo, nezapomínejte na fyzický rozvoj. Postavte se svým strachům a nerozhodnosti. Rozvíjejte důvěru v sebe a své schopnosti. Naučte se rozhodovat a nést za ně zodpovědnost. Překonejte pasivitu a dualitu. Vaše znalosti a schopnost porozumět lidem. Stejně tak najděte klíče k sobě a pochopení svých skutečných nejhlubších tužeb. Nebojte se věnovat péči a sdílet svou lásku s těmi, kteří ji opravdu potřebují.",
  3: "Snažte se naplnit svůj osud – být bohatým a štědrým člověkem, úspěšným ve společnosti a moudrým ve své rodině. Postarejte se o své blízké bez dotěrnosti a autoritářství. Neváhejte ukázat své dovednosti při vytváření harmonického a krásného prostředí. Starejte se o svůj domov, ale nevěnujte se pouze běžným domácím pracím. Nebojte se přesunout některé starosti na rodinu. Zanechte zbytečné péče a starostí o své blízké. Dejte jim příležitost samostatně se rozvíjet a rozhodovat ve svém životě. Zároveň jim buďte oporou, vždy připraveni poskytnout podporu a potřebnou radu. Chovejte se k lidem jako k sobě rovným, bez ohledu na jejich postavení nebo finanční situaci. Naučte se nepříliš lpět na materiálních věcech a nehonit se za úspěchem; ten se k vám v pravý čas dostaví díky vašemu talentu a vytrvalosti.",
  4: "Je důležité harmonizovat své duchovní a materiální hodnoty, aby vaše mysl byla v souladu s vaším svědomím. Vaše vnitřní síla je navržena tak, aby vytvářela ochranu, ne ničila. Začněte vnímat lidi z lidské perspektivy a ne podle jejich úspěchů nebo místa ve společnosti. Snažte se poskytnout alespoň malou pomoc těm, kteří to potřebují: nejen blízkým, ale například i podřízeným v práci. Dobré je také účastnit se charitativních akcí. Přineste svou sílu a sílu světu. Přestaňte zbytečně ovládat každou oblast života, vnucujte si svůj úhel pohledu a důvěřujte svému vnitřnímu hlasu. Nezapomínejte na rozvoj nejen tělesných, ale i duchovních vlastností. Naučte se vděčnosti a těšte se i z malých krůčků a příjemných věcí v životě.",
  5: "Využijte své znalosti a schopnosti ovlivňovat lidi, abyste je nepotlačovali a projevovali svou vůli. Dostali jste skvělou příležitost změnit běh událostí. Můžete úspěšně učit ostatní tím, že ve svých vysvětleních zjednodušíte složité. Dejte lidem své zkušenosti a přinášejte informace, které pomohou zlepšit některé tradice a základy. Musíte se také naučit vidět svět v celé jeho rozmanitosti a naučit se přijímat vše nové. Nebojte se toho starého vzdát, pokud je již zastaralé a dokonce je nějakým způsobem škodlivé. Přijímejte různé poznatky o životě a nenechávejte si je pro sebe, šiřte důležité pravdy a učení. Zahrňte svou životní zkušenost – ta není o nic méně důležitá než knižní pravdy a zákony. Dívejte se na život pozitivně a neočekávejte špatné věci. Méně kontrolujte ostatní a buďte pánem svého života. Pěstujte si sebevědomí, pak, pokud si budete přát, budete moci dosáhnout hodně a zaujmout vedoucí postavení v životě.",
  6: "Pomozte lidem obklopit se krásou, protože to je vaše povolání. Dopřejte jim pocit lehkosti a oslavy. Snažte se druhé nesoudit a vnímat realitu takovou, jaká je. Naučte se lásku nejen přijímat, ale i bezpodmínečně dávat. Oceňovat na lidech nejen vnější krásu a obecně méně lpět na všem vnějším. Myslete pozitivně ve všech situacích a snažte se být k sobě upřímní. Rozvíjejte diverzifikovaně a rozvíjejte svou postavu bez ohledu na názory ostatních. Žijte podle svých vlastních norem a vnitřních zákonů. Buďte sebevědomější a rozdávejte lásku těm, kteří ji potřebují a dokážou vás ocenit. Nesnažte se vypadat příliš dokonale. Už jste milováni a přijímáni pro svůj veselý charakter, optimismus a moře energie, které dáváte jednoduše svou přítomností v životech lidí.",
  7: "Využijte svůj potenciál pro mírové účely. Snažte se zajistit, aby vaše aktivity pomáhaly nejen vaší realizaci, ale byly užitečné i pro ostatní. Naučte se vidět půltóny v životě a nerozdělujte vše ostře na dobré a špatné. Naučte se zvládat sami sebe a omezte svou přehnanou agresivitu, vypořádejte se s útoky agrese. Rozvíjejte se nejen fyzicky, ale i vnitřně a duchovně. Naučte se naslouchat sami sobě a více důvěřovat svým pocitům. Jakákoli pasivita a lenost, pochybnosti, které se někdy objevují i ve vás, se snáze překonávají v týmu. Naučte se proto přenášet část své odpovědnosti na druhé. Je dobré naučit se vyjádřit své myšlenky a touhy a sdělit je ostatním.",
  8: "Naučte se ve všem držet zlaté střední cesty a zachovávat neutralitu. Je pro vás důležité nehledat spravedlnost, ale hledat pravdu, skryté motivy a procesy, které ovládají lidi a události. Rozvíjejte pozitivní myšlení v sobě i ve svém okolí a v každé obtížné situaci se snažte rozpoznat životní lekci a přínos pro sebe. Nezasahujte do sporů a řízení, pokud to není nutné. Přestaňte kohokoli soudit. Učte se a rozvíjejte více, buďte otevření všemu novému. Nesnažte se rychle sdělit informace, které jste právě obdrželi. Musíte to sami zažít a propracovat se s tím.",
  9: "Vyberte si jakékoli odvětví, které se vám líbí. V něm dosáhnete pozoruhodného úspěchu. Intelektuální práce je vaším prvkem. Snažte se rozvíjet nejen logické myšlení, ale i intuici, schopnost naslouchat signálům v sobě. Nezapomeňte se podělit o to, co jste se dozvěděli, když budete kontaktováni. Jednejte jemně, nenápadně. Nebojte se samoty (protože právě v osamění k vám přicházejí hlavní objevy a poznatky), ale neopouštějte společnost na dlouhou dobu. Naučte se opustit minulé křivdy a nebojte se získat nové životní zkušenosti. Nebojte se otevřít svou duši v reakci na důvěru někoho jiného. Pro načerpání sil a vitality trávte více času v přírodě. Je hezké mít mazlíčka.",
  10: "Vyberte si svou životní cestu a následujte ji. Pokud děláte vše správně, štěstí vás bude provázet ve všem. A energie vesmíru pomůže. Nesnažte se nic ve svém životě příliš měnit. Důvěřujte svému osudu a intuitivně následujte jeho pokyny. Vyvoláte-li výrazné změny, vaše štěstí může dojít a začne těžké období s různými trablemi. Snažte se vše brát na lehkou váhu a myslet pozitivně. Rozvíjejte vnitřní jádro, které vám pomůže zachovat klid mysli za všech okolností. Zapisujte si své myšlenky a cvičte disciplínu. Je dobré plánovat. Využijte své šťastné příležitosti na maximum, buďte aktivní. Buďte individuální a nezávislí, vždy věřte ve svůj úspěch.",
  11: "Měli byste se naučit relaxovat a dopřát si odpočinek. Vyzkoušejte fitness klub, masáže, jógu a další praktiky pro rozvoj těla a úplné uvolnění. Nerozčilujte se a naučte se na ostatní nespěchat. Musíte přijímat ostatní takové, jací jsou. Ne každý má vaši energii a vitalitu, takže každý má právo žít svým vlastním tempem. Nepřetěžujte se a nevzdávejte se některých věcí, naučte se hospodařit se svým časem. Ovládejte své výbuchy negativity a násilné emoce. Musíte se zaměřit na náš duchovní rozvoj a naučit se hospodařit s vlastní energií. Neměli byste v žádném případě jít k výsledku a dosáhnout všeho silou. Naučte se ve všem vidět pozitivní stránky a nevytvářejte si z ničeho nic nepřátele a překážky. Důležité je dospět, osamostatnit se a přestřihnout pupeční šňůru ve vztahu s matkou. Je vhodné se s ní nedělit o své plány, pokud nebude souhlasit s vaší volbou, nebudete moci své plány uskutečnit.",
  12: "Naučte se lásku a péči nejen dávat, ale také přijímat. Důležité je nejen pomáhat druhým, ale také mít čas na rozvoj sebe sama, realizaci svých kreativních nápadů a účast na nevšedních projektech, které vás nabijí energií a pozitivitou. Pomozte selektivně těm, kteří to opravdu potřebují. Tímto způsobem můžete splnit svůj účel, aniž byste si ublížili. Touha pomáhat všem kolem může vést k únavě, špatné náladě a depresi. Je pro vás důležité pustit lidi a situace, nedržet se starých a zastaralých a ovládat události svého života. Nestaňte se obětí a naučte se stát si za svým. Jednejte méně ke své škodě. Mnoha lidem stačí dát rybářský prut, není třeba za ně chytat ryby a nosit je na talíři. Nestyďte se brát peníze za svou práci a umět odmítnout. Naučte se dostat ze stavu melancholie a apatie. K tomu pomohou kurzy jógy, nové kreativní koníčky (od bonsají po kreslení) a cestování.",
  13: "Dostali jste velkou sílu, výbornou paměť, schopnost soustředit se a kolektivně jednat v obtížných životních situacích. Chápete a přijímáte různé události a učíte lidi kolem sebe, co můžete sami dělat. Není špatné věnovat se krizovému řízení firem nebo pracovat jako záchranář. Svou touhu po extrémních sportech musíte aktivně využívat. Nemělo by se jednat o bezmyšlenkovité riziko, ale o využití vlastních schopností ve prospěch lidí. Nemá smysl se příliš snažit změnit běh událostí, které již harmonicky plynou. Nevnucujte svůj názor a závažné změny ostatním. Destrukce a obnova musí být připraveny a očekávány v systému samotném a v životech lidí, a ne jako hurikán, který přišel náhle. Naučte se ovládat sebe a své emoce, následujte své vlastní energetické cykly a naslouchejte svým vnitřním pocitům. Važte si života a naučte se čas od času relaxovat.",
  14: "Jemná duše vám byla dána pro schopnost cítit krásu i v běžných životních jevech. Můžete být kreativní a sdělit lidem svou vizi. Je lepší psát poezii a vytvářet hudební díla sami, ale neizolujte se. Je nutné, abyste udržovali kontakt s okolním světem, odkud čerpáte dojmy. Zbavte se negativních emocí, vyživte svou mysl a pročistěte svou duši. Načerpejte pozitivní energii z uměleckých děl, najděte v nich sílu a inspiraci. Trávte čas u vody. Obecně je pro vás veškerý kontakt s vodou velmi prospěšný. Bojujte proti závislostem a svým tělesným slabostem, ve všem se vyvarujte přemíry. Vždy věřte v sebe a ve své tvůrčí schopnosti, rozvíjejte je.",
  15: "Rozvíjejte své speciální schopnosti a nikdy se tam nezastavujte. Nemůžete se zavěsit na peníze a příliš materiální touhy. Je důležité pracovat na duchovní sféře. Naučte se v lidech vidět nejen jejich slabosti a nečistoty, ale i jejich dobré vlastnosti. Snažte se zůstat pozitivní v jakékoli situaci a vidět události takové, jaké jsou, díky jejich bezpodmínečnému přijetí. Snažte se nejen brát, ale i dávat, chcete-li další rozvoj a prosperitu. Podporujte lidi a nestyďte se za jejich slabosti, ale pomozte jim vyrůst nad sebe. Nesnažte se ovládat lidi násilím. Vědět, jak se zbavit situací a abstrahovat se od událostí. Berte jako samozřejmost, že každý má právo jednat a žít v souladu se svými touhami a názory, i když se mýlí.",
  16: "Rozvíjejte současně fyzické tělo, posilujte ho a vedete správný životní styl, aniž byste zapomínali na duchovní zkušenost. Nebojte se změn a nedržte se minulosti. Naučte se věřit lidem, otevírat se jim a dávat lásku, sdílet své znalosti a prožité zkušenosti. Vyberte si důležitou cestu, odvážně po ní jděte a nepochybujte o svých silách. Pokud jste na správné cestě, dokážete přivést za sebou mnohé. Žijte uvědoměle a snadněji se loučte se starým, ať už jde o věci nebo vztahy. Nežijte minulostí. Učte se vnímat znamení osudu, pomoc vesmíru, buďte citlivější k svým vnitřním pocitům. Vám je dáno zahajovat nové cykly v životě, probouzet lidi, ukazovat nový pohled na běžné věci. Využívejte své schopnosti a nesnažte se vyhnout předávání duchovní zkušenosti.",
  17: "Naučte se žít skutečný život, aniž byste se vzdali své kreativity. Rozvíjejte své nejsilnější talenty a pamatujte, že 95 % úspěchu je každodenní úsilí a tvrdá práce. Stanovte si jasné cíle a zároveň dělejte to, co vás opravdu baví. Při výběru kreativní profese (herec, zpěvák) pamatujte, že to neděláte ani tak pro slávu, ale pro pomoc lidem. Ve svých rolích a obrazech ukazujete chování, kterému je třeba se ve skutečnosti vyhnout, a dáváte životní lekce. Buďte optimističtí a vězte, jak zachovat klid v různých situacích. Nechoďte do extrémů a naučte se překonávat období sklíčenosti a pochybností o sobě. Ujistěte se, že pečujete o své tělo - vyvážená strava, pravidelné cvičení a venkovní rekreace pomohou udržet fyzickou sílu a duševní rovnováhu. Vyvarujte se přebytku ve všem.",
  18: "Rozvíjejte své tvůrčí schopnosti, obklopujte se příjemnými lidmi a vytvářejte pouze pozitivní emoce. Naslouchejte svým pocitům a své intuici, snažte se žít v souladu se svými přirozenými rytmy. Použijte vizualizaci k aktivnímu splnění svých přání: od spořiče obrazovky na počítači po kartu přání. Vždy kontrolujte své myšlenky a soustřeďte se na to pozitivní. Kontaktujte častěji vodu, která vás léčí a dodává energii. Vždy byste měli pít dostatek tekutin, abyste udrželi rovnováhu v těle. Nezapomeňte poděkovat osudu za vaši pomoc a rozvíjejte své magické schopnosti k prospěchu a pomoci druhým. Nezanedbávejte mystické znalosti, ale zůstaňte v reálném světě. Žijte vědomě, s jasnými cíli, naučte se rozlišovat, co je nutné a důležité, od toho, co je falešné a nedůležité.",
  19: "Je důležité realizovat se ve společnosti, být otevřený, ukázat své znalosti a realizovat ty největší a nejambicióznější projekty. Nebojte se převzít odpovědnost a naučte se být flexibilní, pokud musíte upravit plány kvůli vnějším okolnostem, které nemůžete ovlivnit. Nezapomínejte na kreativní stránku své osobnosti, kterou je důležité realizovat alespoň jako koníček. Vyhněte se nadměrnému workoholismu a kontrole nad lidmi a okolnostmi. Nezapomeňte odpočívat a starat se o sebe. Soustřeďte se na to pozitivní a nesoustřeďte veškerou svou energii a lásku pouze na jednu osobu. Je pro vás důležité žít a jednat ve společnosti. Je důležité dělat to, co milujete, a nepracovat jen pro prestiž a peníze. Pak můžete dosáhnout skutečného úspěchu a prosperity ve financích.",
  20: "Měli byste využít své schopnosti k řešení problémů v rodině a řešení opakujících se situací. Dostali jste příležitost přerušit tento katastrofální řetězec událostí a upozornit celou rodinu na narušený obecný scénář. Možná jsou někteří starší ignorováni. Nebo se nejmladší v rodině stane utlačovaným a znevýhodněným. Je ve vašich rukou zvrátit negativní scénář a obrátit životy všech členů rodiny pozitivním směrem. Snažte se pomáhat lidem laskavými slovy a činy. Neuzavírejte se, využijte své znalosti k dobru. Osvoboďte se od negativity ve všech aspektech života. Ve své snaze o materiální blahobyt nezapomínejte na duchovní zlepšení. Pečujte o své zdraví a rozvíjejte své přirozené schopnosti.",
  21: "Je pro vás důležité sloužit sjednocení lidí s dobrými cíli. Cestujte hodně po světě a nebuďte vázáni na domov. Pokuste se ostatním zprostředkovat myšlenku blízkosti a rovnosti všech lidí svými dobrými skutky a aktivními mírovými aktivitami. Vždy myslete globálně a snažte se podílet na rozsáhlých projektech. Zůstaňte odpojeni od skutečného života a naučte se umění malých kroků. Buďte otevřeni pomoci lidem, ale nebuďte dotěrní. Nezavazujte se dluhy a půjčkami. Vaším posláním je být otevřený novým návrhům, bez připoutaností (zejména k materiálním věcem), abyste mohli snadno nést poslání sjednocení po celém světě.",
  22: "Vyberte si činnost dle svého ducha a rozvíjejte se v ní. Neukládejte si vztek, hmotné statky, cokoli, co by vás mohlo omezovat. Pro vytvoření rodiny je důležité najít partnera, který je stejně lehký na zdvihnutí a sdílí s vámi pohledy na svět. Cestujte více a přinášejte do světa své nápady dobra, svobody a jednoty. Nosíte pohodlné oblečení a buďte skromní ve svých požadavcích. Naučte se odpouštět všechno ve svém životě a pomáhejte druhým v osvobození, novém pohledu na život. Žijte pro sebe pohodlným způsobem. Pracujte na svých obavách a vyhněte se pocitu omezení, nedržte se v životě příliš pevně a zbavte se různých druhů závislostí.",
};

const lifeGuidePositions = [
  { key: "A", label: "Průvodce životem podle energie A" },
  { key: "B", label: "Průvodce životem podle energie B" },
  { key: "E", label: "Průvodce životem podle energie E" }
];

function renderRichText(raw) {
  if (!raw) return "";

  function escapeForHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  return String(raw)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n\s*\n/)
    .map(function(part) {
      return part.trim();
    })
    .filter(Boolean)
    .map(function(part) {
      var safe = escapeForHtml(part)
        .replace(/\n+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      safe = safe.replace(
        /^\((\d{1,2})\)\s*/,
        '<span class="energy-marker">($1)</span> '
      );

      return '<p>' + safe + '</p>';
    })
    .join("");
}

function renderLifeGuideText(raw) {
  return renderRichText(raw);
}

function getLifeGuideItems(result) {
  return lifeGuidePositions.map(function(position) {
    var energy = Number(result[position.key]);
    return {
      key: position.key,
      label: position.label,
      energy: energy,
      text: lifeGuideTexts[energy] || ""
    };
  });
}

function renderLifeGuideHTML(result) {
  var items = getLifeGuideItems(result);

  function getItemLength(item) {
    return String(item && item.text ? item.text : "").length;
  }

  function renderLifeGuideItem(item, index) {
    if (!item.text) {
      return "";
    }

    return (
      '<div class="program-found-item life-guide-print-item life-guide-print-item-' + index + '">' +
        '<div class="energy-text">' + renderLifeGuideText(item.text) + '</div>' +
      '</div>'
    );
  }

  var visibleItems = items.filter(function(item) {
    return Boolean(item.text);
  });

  var totalLength = visibleItems.reduce(function(sum, item) {
    return sum + getItemLength(item);
  }, 0);

  var allItemsHTML = visibleItems.map(function(item, index) {
    return renderLifeGuideItem(item, index + 1);
  }).join("");

  if (totalLength <= 6200) {
    var density = "balanced";

    if (totalLength < 3000) {
      density = "center";
    } else if (totalLength > 5400) {
      density = "dense";
    }

    return (
      '<div class="energy-item programs-card life-guide-card life-guide-print-card life-guide-count-one">' +
        '<section class="life-guide-print-page life-guide-page-title life-guide-density-' + density + '">' +
          '<div class="life-guide-print-inner">' +
            '<h2>Průvodce životem pro vás</h2>' +
            allItemsHTML +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  var firstItemHTML = visibleItems[0] ? renderLifeGuideItem(visibleItems[0], 1) : "";

  var restItemsHTML = visibleItems
    .slice(1)
    .map(function(item, index) {
      return renderLifeGuideItem(item, index + 2);
    })
    .join("");

  return (
    '<div class="energy-item programs-card life-guide-card life-guide-print-card life-guide-count-two">' +
      '<section class="life-guide-print-page life-guide-page-title life-guide-density-balanced">' +
        '<div class="life-guide-print-inner">' +
          '<h2>Průvodce životem pro vás</h2>' +
          firstItemHTML +
        '</div>' +
      '</section>' +
      '<section class="life-guide-print-page life-guide-page-continue life-guide-density-balanced">' +
        '<div class="life-guide-print-inner">' +
          restItemsHTML +
        '</div>' +
      '</section>' +
    '</div>'
  );
}

module.exports = {
  getLifeGuideItems,
  renderLifeGuideHTML
};