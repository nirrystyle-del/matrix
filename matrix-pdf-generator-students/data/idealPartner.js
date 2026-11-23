// =========================
// IDEÁLNÍ PARTNER / PARTNERKA
// Bere energie z vztahového kanálu: R, L, D1
// R a L jsou běžné energie, D1 je vstup do vztahového kanálu.
// V plusu a v minusu se skládají texty ze všech tří energií bez čísel.
// Pro harmonické vztahy se bere pouze energie D1.
// =========================

if (typeof escapeHtml !== "function") {
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, '&#39;');
  }
}

const idealPartnerDatabase = {
  female: {
    3: {
      plus: "Pečující, štědrý a smyslný partner, který umí kolem sebe vytvářet útulno, krásu a pocit hojnosti. S ním chce člověk budovat rodinu, užívat si života a cítit se v bezpečí.",
      minus: "Kontrolující, náladový a náročný. Může tlačit pozorností, urážet se kvůli nedostatku péče, stavět materiální věci nad city a zasahovat do života partnera.",
      harmony: "Vytvářet útulno, projevovat péči a nepřeměňovat vztah v kontrolu. Je důležité respektovat osobní prostor partnera a neměřit lásku pouze dárky, statusem nebo materiálními projevy."
    },
    4: {
      plus: "Spolehlivý, silný a zodpovědný partner, vedle kterého vzniká pocit opory, řádu a stability. Umí přijímat rozhodnutí, chránit, vést a převzít zodpovědnost za rodinu.",
      minus: "Tvrdý, panovačný a tvrdohlavý. Může partnera potlačovat, všechno kontrolovat, vnucovat svá pravidla a myslet si, že správný je pouze jeho názor.",
      harmony: "Učit se jemnosti, dialogu a respektu k volbě partnera. Je důležité nebojovat ve vztahu o moc, ale budovat svazek, ve kterém je opora, důvěra a zralá zodpovědnost."
    },
    5: {
      plus: "Moudrý, věrný a spolehlivý partner se silnými hodnotami. S ním lze budovat vážný vztah, rodinu, společné tradice a cítit, že je vedle vás člověk s vnitřní oporou.",
      minus: "Poučující, kategorický a příliš správný. Může kritizovat, vnucovat své názory, žít podle přísných pravidel a nepřijímat jiný pohled na život.",
      harmony: "Respektovat společné hodnoty, ale nepřeměňovat vztah v systém pravidel. Je důležité více si navzájem naslouchat, hledat kompromisy a nedokazovat svou pravdu za každou cenu."
    },
    6: {
      plus: "Romantický, krásný a milující partner, se kterým je ve vztahu mnoho citů, něhy, estetiky a přitažlivosti. Umí vytvářet atmosféru lásky, svátečnosti a emocionální blízkosti.",
      minus: "Závislý na vztahu, nestálý nebo povrchní. Může příliš chtít se líbit, žárlit, idealizovat lásku nebo ztrácet sám sebe v partnerovi.",
      harmony: "Vybírat si vztah z lásky, ne ze strachu ze samoty. Je důležité pečovat o sebe, zachovávat si vnitřní oporu a pravidelně do vztahu přidávat romantiku, krásu a živé emoce."
    },
    7: {
      plus: "Aktivní, cílevědomý a silný partner, který vede dopředu, inspiruje k pohybu a nedovolí životu ustrnout. S ním mohou přicházet cesty, rozvoj, velké cíle a výrazné události.",
      minus: "Netrpělivý, ostrý a příliš bojovný. Může tlačit, všechno urychlovat, konfliktovat, bojovat za svou pravdu nebo naopak upadat do apatie a nic nedotahovat do konce.",
      harmony: "Stanovovat si společné cíle a jít k nim společně. Je důležité přidávat do vztahu cestování, aktivitu a nové dojmy, ale nepřeměňovat svazek v boj nebo věčný závod."
    },
    8: {
      plus: "Čestný, spravedlivý a zodpovědný partner, který si cení rovnováhy, respektu a poctivých dohod. S ním je důležité všechno otevřeně probírat, protože cítí lež a nespravedlnost.",
      minus: "Odsuzující, urážlivý a puntičkářský. Může neustále hledat, kdo má pravdu a kdo je vinen, připomínat minulé chyby a vnímat vztah jako soud nebo věčné vyjasňování spravedlnosti.",
      harmony: "Budovat vztah na čestnosti, rovnocenné výměně a jasných dohodách. Je důležité nehromadit křivdy, nesoudit partnera příliš přísně a učit se vidět příčinu situací, ne jen viníka."
    },
    9: {
      plus: "Moudrý, hluboký a vědomý partner, vedle kterého se lze rozvíjet, mluvit o důležitém a cítit vnitřní zralost. Takový člověk umí vidět podstatu a dávat cenné rady.",
      minus: "Uzavřený, chladný a odtažitý. Může se stahovat do sebe, vyhýbat se blízkosti, kritizovat lidi z nadhledu a vytvářet vedle sebe pocit osamělosti.",
      harmony: "Neuzavírat se před sebou navzájem a učit se mluvit o pocitech jednoduchým jazykem. Je důležité respektovat osobní prostor partnera, ale nepřeměňovat vztah ve vzdálenost a mlčení."
    },
    10: {
      plus: "Lehký, šťastný a živý partner, vedle kterého se objevují nové možnosti, zajímavé události a pocit, že život sám vede správným směrem. S ním se vztah může rozvíjet přirozeně a v proudu.",
      minus: "Pasivní, nestabilní a pesimistický. Může čekat, že se všechno vyřeší samo, bát se volby, komplikovat jednoduché věci a ztrácet šťastné příležitosti.",
      harmony: "Důvěřovat proudu života, ale neplout úplně bez kormidla. Je důležité společně přijímat rozhodnutí, nenabalovat na sebe problémy a vybírat to, co přináší radost a pocit pohybu."
    },
    11: {
      plus: "Silný, vášnivý a energický partner s velkým vnitřním potenciálem. Vedle něj je hodně přitažlivosti, živé energie, odvahy a touhy jednat.",
      minus: "Výbušný, žárlivý a neovladatelný. Může tlačit silou, prudce reagovat, provokovat konflikty a potom litovat toho, co řekl nebo udělal.",
      harmony: "Směřovat silnou energii do sportu, cílů, vášně a rozvoje, ne do hádek a kontroly. Je důležité učit se jemněji vyjadřovat emoce a nepřeměňovat lásku v boj."
    },
    12: {
      plus: "Vnímavý, hluboký a neobvyklý partner, který umí dívat se na život z jiného úhlu. Může být velmi pečující, chápavý a připravený podpořit v náročných obdobích.",
      minus: "Obětující se, závislý a urážlivý. Může trpět, zachraňovat všechny kolem sebe, poutat k sobě partnera a žít s pocitem, že ho nikdo nemiluje a neoceňuje.",
      harmony: "Nestavět svazek na oběti a zachraňování. Je důležité zachovávat lásku k sobě, nerozpouštět se v partnerovi a pouštět staré křivdy, aby vztah neuvízl v minulosti."
    },
    13: {
      plus: "Silný partner-transformátor, vedle kterého se život obnovuje, staré odchází a člověk vystupuje na novou úroveň. Pomáhá nebát se změn a odvážně začínat znovu.",
      minus: "Ostrý, těžký a destruktivní. Může znehodnocovat minulost, prudce přerušovat vazby, tlačit změnami nebo vytvářet pocit nestability a vnitřního napětí.",
      harmony: "Nebát se změn, ale procházet jimi jemně a vědomě. Je důležité včas pouštět to, co se přežilo, a neničit vztah kvůli impulzu, bolesti nebo strachu z blízkosti."
    },
    14: {
      plus: "Klidný, jemný a harmonický partner, vedle kterého vzniká pocit rovnováhy, přijetí a vnitřního míru. S ním lze budovat teplý, šetrný a stabilní vztah bez zbytečného dramatu.",
      minus: "Pasivní, uzavřený nebo závislý. Může se vyhýbat výrazným emocím, utíkat od rozhovorů, snášet věci do poslední chvíle nebo ztrácet rovnováhu přes škodlivé návyky a vnitřní prázdnotu.",
      harmony: "Zachovávat rovnováhu mezi klidem a živými city. Je důležité neodcházet do extrémů, nezamlčovat problémy a vytvářet ve vztahu jemný, čestný a stabilní rytmus."
    },
    15: {
      plus: "Výrazný, vášnivý a magnetický partner, vedle kterého je hodně přitažlivosti, tužeb a silné energie. Může inspirovat k penězům, potěšení, odvaze a jasnějšímu životu.",
      minus: "Žárlivý, závislý a manipulativní. Může provokovat emocionální houpačky, kontrolu, pokušení, připoutanost a vztahy, ze kterých je těžké odejít.",
      harmony: "Nestavět spojení na závislosti, žárlivosti a manipulacích. Je důležité upřímně mluvit o touhách, penězích a hranicích a silnou vášeň směřovat do rozvoje páru."
    },
    16: {
      plus: "Silný partner, který pomáhá zbořit staré scénáře a vyjít na novou úroveň. Vedle něj mohou přicházet prudké, ale důležité změny, osvobození a dospění.",
      minus: "Ostrý, konfliktní a destruktivní. Může znehodnocovat, bořit stabilitu, provokovat hádky a vytvářet pocit, že vztah neustále prochází krizí.",
      harmony: "Nedovádět všechno k výbuchu a neničit spojení kvůli nahromaděným křivdám. Je důležité včas upřímně probírat problémy, obnovovat vztah a po krizích stavět nový základ."
    },
    17: {
      plus: "Inspirující, krásný a charismatický partner, vedle kterého se chce snít, věřit v sebe a projevovat se jasněji. Může být tvořivý, veřejně viditelný, lehký a velmi přitažlivý.",
      minus: "Chladný, nedostupný nebo příliš zaměřený na pozornost k sobě. Může žít sny, slibovat víc, než skutečně dělá, a vytvářet pocit vzdálenosti.",
      harmony: "Podporovat sny jeden druhého, ale nežít pouze fantaziemi. Je důležité dávat partnerovi uznání, inspiraci a svobodu projevu, aniž by se vztah měnil v uctívání."
    },
    18: {
      plus: "Vnímavý, hluboký a intuitivní partner, který jemně cítí náladu, emoce a skryté procesy. S ním může vznikat silné duševní spojení, něha a pocit mystické blízkosti.",
      minus: "Úzkostný, tajnůstkářský a ponořený do strachů. Může se v sobě zbytečně utvrzovat v obavách, žárlit, žít iluzemi, něco nedoříkávat a vytvářet ve vztahu mlhu.",
      harmony: "Nestavět vztah na domněnkách, strachu a mlčení. Je důležité více mluvit o pocitech, ověřovat realitu fakty a vytvářet bezpečný prostor pro upřímnost."
    },
    19: {
      plus: "Teplý, štědrý a slunečný partner, vedle kterého je hodně radosti, života, inspirace a pocitu svátku. Může dávat podporu, jistotu, teplo a chuť růst.",
      minus: "Egocentrický, pyšný a vyžadující neustálou pozornost. Může se urážet, pokud ho nikdo neobdivuje, stavět sebe do středu vztahu a nevšímat si potřeb partnera.",
      harmony: "Více se společně radovat, vytvářet společné svátky, podporovat jeden druhého a nesoutěžit o pozornost. Je důležité sdílet teplo, ne ho vyžadovat pouze pro sebe."
    },
    20: {
      plus: "Zralý, rodinný a osudový partner, se kterým se mohou otevírat témata rodu, rodiny, dětí a hlubokého duchovního smyslu. Vedle něj se vztah vnímá jako ne náhodný a důležitý.",
      minus: "Odsuzující, těžký a uvízlý v minulosti. Může tlačit rodinnými scénáři, vinou, povinností, výčitkami a neustále partnera vracet ke starým chybám.",
      harmony: "Netahat do vztahu staré křivdy a rodové scénáře. Je důležité budovat svou rodinu podle vlastních pravidel, respektovat minulost, ale nežít pouze povinností a pocitem viny."
    },
    21: {
      plus: "Velkorysý, svobodný a světu otevřený partner, vedle kterého se chce člověk rozšiřovat, cestovat, stavět velké plány a věřit, že je možné všechno. Může inspirovat k rozvoji, stěhování a nové úrovni života.",
      minus: "Odtažitý, puntičkářský a nespokojený se vším kolem. Může snít o velkém, ale nic neměnit, kritizovat realitu a emocionálně se uzavírat před partnerem.",
      harmony: "Rozšiřovat horizonty společně: cestovat, učit se, stavět velké cíle a nezasekávat se v každodennosti. Je důležité nekritizovat všechno kolem, ale skutečně dělat kroky ke změnám."
    },
    22: {
      plus: "Lehký, pozitivní a dobrodružný partner, který do vztahu přináší spontánnost, humor, svobodu a nové dojmy. S ním se život může stát jasnějším, lehčím a nečekanějším.",
      minus: "Nezodpovědný, chaotický a nespolehlivý. Může se vyhýbat závazkům, nemyslet na budoucnost, volit volné vztahy a vytvářet problémy, které potom řeší partner.",
      harmony: "Nechávat ve vztahu lehkost, hru a svobodu, ale neutíkat od zodpovědnosti. Je důležité domlouvat se na budoucnosti, penězích a hranicích, aby se spontánnost neměnila v chaos."
    },
  },
  male: {
    3: {
      plus: "Pečující, štědrá a smyslná partnerka, která umí kolem sebe vytvářet útulno, krásu a pocit hojnosti. Vedle ní chce muž budovat rodinu, užívat si života a cítit teplo, přijetí a ženskou péči.",
      minus: "Kontrolující, náladová a náročná. Může tlačit pozorností, urážet se kvůli nedostatku péče, stavět materiální věci nad city a příliš zasahovat do života partnera.",
      harmony: "Vytvářet útulno, projevovat péči a nepřeměňovat vztah v kontrolu. Je důležité respektovat osobní prostor partnera a neměřit lásku pouze dárky, statusem nebo materiálními projevy."
    },
    4: {
      plus: "Spolehlivá, silná a zodpovědná partnerka, vedle které vzniká pocit řádu, stability a jistoty. Umí být oporou, držet slovo, řešit důležité věci a přinášet do vztahu zralost a pevnost.",
      minus: "Tvrdá, panovačná a tvrdohlavá. Může partnera potlačovat, všechno kontrolovat, vnucovat svá pravidla a myslet si, že správný je pouze její názor.",
      harmony: "Učit se jemnosti, dialogu a respektu k volbě partnera. Je důležité nebojovat ve vztahu o moc, ale budovat svazek, ve kterém je opora, důvěra a zralá zodpovědnost."
    },
    5: {
      plus: "Moudrá, věrná a spolehlivá partnerka se silnými hodnotami. S ní lze budovat vážný vztah, rodinu, společné tradice a cítit, že je vedle vás člověk s vnitřní oporou.",
      minus: "Poučující, kategorická a příliš správná. Může kritizovat, vnucovat své názory, žít podle přísných pravidel a nepřijímat jiný pohled na život.",
      harmony: "Respektovat společné hodnoty, ale nepřeměňovat vztah v systém pravidel. Je důležité více si navzájem naslouchat, hledat kompromisy a nedokazovat svou pravdu za každou cenu."
    },
    6: {
      plus: "Romantická, krásná a milující partnerka, se kterou je ve vztahu mnoho citů, něhy, estetiky a přitažlivosti. Umí vytvářet atmosféru lásky, svátečnosti a emocionální blízkosti.",
      minus: "Závislá na vztahu, nestálá nebo povrchní. Může příliš chtít se líbit, žárlit, idealizovat lásku nebo ztrácet sama sebe v partnerovi.",
      harmony: "Vybírat si vztah z lásky, ne ze strachu ze samoty. Je důležité pečovat o sebe, zachovávat si vnitřní oporu a pravidelně do vztahu přidávat romantiku, krásu a živé emoce."
    },
    7: {
      plus: "Aktivní, cílevědomá a silná partnerka, která motivuje k pohybu, inspiruje k rozvoji a nedovolí životu ustrnout. S ní mohou přicházet cesty, rozvoj, velké cíle a výrazné události.",
      minus: "Netrpělivá, ostrá a příliš bojovná. Může tlačit, všechno urychlovat, konfliktovat, bojovat za svou pravdu nebo naopak upadat do apatie a nic nedotahovat do konce.",
      harmony: "Stanovovat si společné cíle a jít k nim společně. Je důležité přidávat do vztahu cestování, aktivitu a nové dojmy, ale nepřeměňovat svazek v boj nebo věčný závod."
    },
    8: {
      plus: "Čestná, spravedlivá a zodpovědná partnerka, která si cení rovnováhy, respektu a poctivých dohod. S ní je důležité všechno otevřeně probírat, protože cítí lež a nespravedlnost.",
      minus: "Odsuzující, urážlivá a puntičkářská. Může neustále hledat, kdo má pravdu a kdo je vinen, připomínat minulé chyby a vnímat vztah jako soud nebo věčné vyjasňování spravedlnosti.",
      harmony: "Budovat vztah na čestnosti, rovnocenné výměně a jasných dohodách. Je důležité nehromadit křivdy, nesoudit partnera příliš přísně a učit se vidět příčinu situací, ne jen viníka."
    },
    9: {
      plus: "Moudrá, hluboká a vědomá partnerka, vedle které se lze rozvíjet, mluvit o důležitém a cítit vnitřní zralost. Taková žena umí vidět podstatu a dávat cenné rady.",
      minus: "Uzavřená, chladná a odtažitá. Může se stahovat do sebe, vyhýbat se blízkosti, kritizovat lidi z nadhledu a vytvářet vedle sebe pocit osamělosti.",
      harmony: "Neuzavírat se před sebou navzájem a učit se mluvit o pocitech jednoduchým jazykem. Je důležité respektovat osobní prostor partnera, ale nepřeměňovat vztah ve vzdálenost a mlčení."
    },
    10: {
      plus: "Lehká, šťastná a živá partnerka, vedle které se objevují nové možnosti, zajímavé události a pocit, že život sám vede správným směrem. S ní se vztah může rozvíjet přirozeně a v proudu.",
      minus: "Pasivní, nestabilní a pesimistická. Může čekat, že se všechno vyřeší samo, bát se volby, komplikovat jednoduché věci a ztrácet šťastné příležitosti.",
      harmony: "Důvěřovat proudu života, ale neplout úplně bez kormidla. Je důležité společně přijímat rozhodnutí, nenabalovat na sebe problémy a vybírat to, co přináší radost a pocit pohybu."
    },
    11: {
      plus: "Silná, vášnivá a energická partnerka s velkým vnitřním potenciálem. Vedle ní je hodně přitažlivosti, živé energie, odvahy a touhy jednat.",
      minus: "Výbušná, žárlivá a neovladatelná. Může tlačit silou, prudce reagovat, provokovat konflikty a potom litovat toho, co řekla nebo udělala.",
      harmony: "Směřovat silnou energii do sportu, cílů, vášně a rozvoje, ne do hádek a kontroly. Je důležité učit se jemněji vyjadřovat emoce a nepřeměňovat lásku v boj."
    },
    12: {
      plus: "Vnímavá, hluboká a neobvyklá partnerka, která se umí dívat na život z jiného úhlu. Může být velmi pečující, chápavá a připravená podpořit v náročných obdobích.",
      minus: "Obětující se, závislá a urážlivá. Může trpět, zachraňovat všechny kolem sebe, poutat k sobě partnera a žít s pocitem, že ji nikdo nemiluje a neoceňuje.",
      harmony: "Nestavět svazek na oběti a zachraňování. Je důležité zachovávat lásku k sobě, nerozpouštět se v partnerovi a pouštět staré křivdy, aby vztah neuvízl v minulosti."
    },
    13: {
      plus: "Silná partnerka-transformátorka, vedle které se život obnovuje, staré odchází a člověk vystupuje na novou úroveň. Pomáhá nebát se změn a odvážně začínat znovu.",
      minus: "Ostrá, těžká a destruktivní. Může znehodnocovat minulost, prudce přerušovat vazby, tlačit změnami nebo vytvářet pocit nestability a vnitřního napětí.",
      harmony: "Nebát se změn, ale procházet jimi jemně a vědomě. Je důležité včas pouštět to, co se přežilo, a neničit vztah kvůli impulzu, bolesti nebo strachu z blízkosti."
    },
    14: {
      plus: "Klidná, jemná a harmonická partnerka, vedle které vzniká pocit rovnováhy, přijetí a vnitřního míru. S ní lze budovat teplý, šetrný a stabilní vztah bez zbytečného dramatu.",
      minus: "Pasivní, uzavřená nebo závislá. Může se vyhýbat výrazným emocím, utíkat od rozhovorů, snášet věci do poslední chvíle nebo ztrácet rovnováhu přes škodlivé návyky a vnitřní prázdnotu.",
      harmony: "Zachovávat rovnováhu mezi klidem a živými city. Je důležité neodcházet do extrémů, nezamlčovat problémy a vytvářet ve vztahu jemný, čestný a stabilní rytmus."
    },
    15: {
      plus: "Výrazná, vášnivá a magnetická partnerka, vedle které je hodně přitažlivosti, tužeb a silné energie. Může inspirovat k penězům, potěšení, odvaze a jasnějšímu životu.",
      minus: "Žárlivá, závislá a manipulativní. Může provokovat emocionální houpačky, kontrolu, pokušení, připoutanost a vztahy, ze kterých je těžké odejít.",
      harmony: "Nestavět spojení na závislosti, žárlivosti a manipulacích. Je důležité upřímně mluvit o touhách, penězích a hranicích a silnou vášeň směřovat do rozvoje páru."
    },
    16: {
      plus: "Silná partnerka, která pomáhá zbořit staré scénáře a vyjít na novou úroveň. Vedle ní mohou přicházet prudké, ale důležité změny, osvobození a dospění.",
      minus: "Ostrá, konfliktní a destruktivní. Může znehodnocovat, bořit stabilitu, provokovat hádky a vytvářet pocit, že vztah neustále prochází krizí.",
      harmony: "Nedovádět všechno k výbuchu a neničit spojení kvůli nahromaděným křivdám. Je důležité včas upřímně probírat problémy, obnovovat vztah a po krizích stavět nový základ."
    },
    17: {
      plus: "Inspirující, krásná a charismatická partnerka, vedle které se chce snít, věřit v sebe a projevovat se jasněji. Může být tvořivá, veřejně viditelná, lehká a velmi přitažlivá.",
      minus: "Chladná, nedostupná nebo příliš zaměřená na pozornost k sobě. Může žít sny, slibovat víc, než skutečně dělá, a vytvářet pocit vzdálenosti.",
      harmony: "Podporovat sny jeden druhého, ale nežít pouze fantaziemi. Je důležité dávat partnerce uznání, inspiraci a svobodu projevu, aniž by se vztah měnil v uctívání."
    },
    18: {
      plus: "Vnímavá, hluboká a intuitivní partnerka, která jemně cítí náladu, emoce a skryté procesy. S ní může vznikat silné duševní spojení, něha a pocit mystické blízkosti.",
      minus: "Úzkostná, tajnůstkářská a ponořená do strachů. Může se v sobě zbytečně utvrzovat v obavách, žárlit, žít iluzemi, něco nedoříkávat a vytvářet ve vztahu mlhu.",
      harmony: "Nestavět vztah na domněnkách, strachu a mlčení. Je důležité více mluvit o pocitech, ověřovat realitu fakty a vytvářet bezpečný prostor pro upřímnost."
    },
    19: {
      plus: "Teplá, štědrá a slunečná partnerka, vedle které je hodně radosti, života, inspirace a pocitu svátku. Může dávat podporu, jistotu, teplo a chuť růst.",
      minus: "Egocentrická, pyšná a vyžadující neustálou pozornost. Může se urážet, pokud ji nikdo neobdivuje, stavět sebe do středu vztahu a nevšímat si potřeb partnera.",
      harmony: "Více se společně radovat, vytvářet společné svátky, podporovat jeden druhého a nesoutěžit o pozornost. Je důležité sdílet teplo, ne ho vyžadovat pouze pro sebe."
    },
    20: {
      plus: "Zralá, rodinná a osudová partnerka, se kterou se mohou otevírat témata rodu, rodiny, dětí a hlubokého duchovního smyslu. Vedle ní se vztah vnímá jako ne náhodný a důležitý.",
      minus: "Odsuzující, těžká a uvízlá v minulosti. Může tlačit rodinnými scénáři, vinou, povinností, výčitkami a neustále partnera vracet ke starým chybám.",
      harmony: "Netahat do vztahu staré křivdy a rodové scénáře. Je důležité budovat svou rodinu podle vlastních pravidel, respektovat minulost, ale nežít pouze povinností a pocitem viny."
    },
    21: {
      plus: "Velkorysá, svobodná a světu otevřená partnerka, vedle které se chce člověk rozšiřovat, cestovat, stavět velké plány a věřit, že je možné všechno. Může inspirovat k rozvoji, stěhování a nové úrovni života.",
      minus: "Odtažitá, puntičkářská a nespokojená se vším kolem. Může snít o velkém, ale nic neměnit, kritizovat realitu a emocionálně se uzavírat před partnerem.",
      harmony: "Rozšiřovat horizonty společně: cestovat, učit se, stavět velké cíle a nezasekávat se v každodennosti. Je důležité nekritizovat všechno kolem, ale skutečně dělat kroky ke změnám."
    },
    22: {
      plus: "Lehká, pozitivní a dobrodružná partnerka, která do vztahu přináší spontánnost, humor, svobodu a nové dojmy. S ní se život může stát jasnějším, lehčím a nečekanějším.",
      minus: "Nezodpovědná, chaotická a nespolehlivá. Může se vyhýbat závazkům, nemyslet na budoucnost, volit volné vztahy a vytvářet problémy, které potom řeší partner.",
      harmony: "Nechávat ve vztahu lehkost, hru a svobodu, ale neutíkat od zodpovědnosti. Je důležité domlouvat se na budoucnosti, penězích a hranicích, aby se spontánnost neměnila v chaos."
    },
  },
};

function getUniqueIdealPartnerEnergies(result) {
  const values = [result.R, result.L, result.D1];
  const seen = new Set();

  return values.filter(function(value) {
    const key = String(value);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getIdealPartnerTextByGender(energy, gender) {
  const genderKey = gender === "male" ? "male" : "female";
  return idealPartnerDatabase[genderKey][Number(energy)] || null;
}

function buildIdealPartnerData(result, gender) {
  const energies = getUniqueIdealPartnerEnergies(result);
  const harmonyEnergy = result.D1;

  const plusParts = [];
  const minusParts = [];

  energies.forEach(function(energy) {
    const item = getIdealPartnerTextByGender(energy, gender);
    if (!item) return;

    if (item.plus) plusParts.push(item.plus);
    if (item.minus) minusParts.push(item.minus);
  });

  const harmonyItem = getIdealPartnerTextByGender(harmonyEnergy, gender);

  return {
    energies: energies,
    harmonyEnergy: harmonyEnergy,
    plusParts: plusParts,
    minusParts: minusParts,
    harmonyText: harmonyItem && harmonyItem.harmony ? harmonyItem.harmony : ""
  };
}

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

function renderIdealPartnerParagraphs(parts) {
  return parts
    .filter(Boolean)
    .map(function(text) {
      return renderRichText(text);
    })
    .join('');
}

function renderIdealPartnerSingleHTML(result, gender) {
  const data = buildIdealPartnerData(result, gender);
  const title = gender === "male" ? "Ideální partnerka" : "Ideální partner";

  function renderSection(type, sectionTitle, contentHTML) {
    return (
      '<div class="program-found-item ideal-partner-print-section ideal-partner-print-section-' + type + '">' +
        '<div class="program-title">' + escapeHtml(sectionTitle) + '</div>' +
        '<div class="program-zones">' + contentHTML + '</div>' +
      '</div>'
    );
  }

  if (!data.plusParts.length && !data.minusParts.length && !data.harmonyText) {
    return (
      '<div class="energy-item programs-card ideal-partner-card ideal-partner-print-card">' +
        '<section class="ideal-partner-print-page ideal-partner-density-center">' +
          '<div class="ideal-partner-print-inner">' +
            '<h2>' + title + '</h2>' +
            '<p>Pro tuto kombinaci zatím není v databázi nahraný výklad.</p>' +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  const plusHTML = renderSection(
    "plus",
    "V plusu",
    renderIdealPartnerParagraphs(data.plusParts)
  );

  const minusHTML = renderSection(
    "minus",
    "V minusu",
    renderIdealPartnerParagraphs(data.minusParts)
  );

  const harmonyHTML = renderSection(
    "harmony",
    "Pro harmonické vztahy je důležité",
    data.harmonyText ? '<p>' + escapeHtml(data.harmonyText) + '</p>' : ''
  );

  const plusLength = data.plusParts.join("\n\n").length;
  const minusLength = data.minusParts.join("\n\n").length;
  const harmonyLength = String(data.harmonyText || "").length;
  const totalLength = plusLength + minusLength + harmonyLength;

  if (totalLength <= 5200) {
    let density = "balanced";

    if (totalLength < 2600) {
      density = "center";
    } else if (totalLength > 4600) {
      density = "dense";
    }

    return (
      '<div class="energy-item programs-card ideal-partner-card ideal-partner-print-card ideal-partner-count-one">' +
        '<section class="ideal-partner-print-page ideal-partner-page-title ideal-partner-density-' + density + '">' +
          '<div class="ideal-partner-print-inner">' +
            '<h2>' + title + '</h2>' +
            plusHTML +
            minusHTML +
            harmonyHTML +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  return (
    '<div class="energy-item programs-card ideal-partner-card ideal-partner-print-card ideal-partner-count-two">' +
      '<section class="ideal-partner-print-page ideal-partner-page-title ideal-partner-density-balanced">' +
        '<div class="ideal-partner-print-inner">' +
          '<h2>' + title + '</h2>' +
          plusHTML +
        '</div>' +
      '</section>' +
      '<section class="ideal-partner-print-page ideal-partner-page-continue ideal-partner-density-balanced">' +
        '<div class="ideal-partner-print-inner">' +
          minusHTML +
          harmonyHTML +
        '</div>' +
      '</section>' +
    '</div>'
  );
}

function renderIdealPartnerHTML(result, gender) {
  if (gender === "male" || gender === "female") {
    return renderIdealPartnerSingleHTML(result, gender);
  }

  // Pokud pohlaví není předané, vrátíme obě verze, aby se nic neztratilo.
  return renderIdealPartnerSingleHTML(result, "female") +
         renderIdealPartnerSingleHTML(result, "male");
}
module.exports = {
  buildIdealPartnerData,
  renderIdealPartnerHTML
};