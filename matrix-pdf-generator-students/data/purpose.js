// =========================
// PURPOSE ENGINE / PŘEDURČENÍ
// Подвязка:
// E      = Účel vaší duše
// nebo   = Váš nebeský účel
// zemlya = Váš osobní účel
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

const purposeTextsByEnergy = {
  "3": {
    "female": "(3) Vaše poslání je tvořit život tak, aby se v něm dalo dýchat, růst a rozkvétat. Nejen „něco dělat“, ale přinášet do světa hmatatelné dobro, pocit bezpečí, krásu, hojnost a teplo, které druhé vyživuje. V téhle energii nejde jen o rodinu nebo děti, i když právě skrze mateřství a domov se často otevírá Vaše největší síla. Jde o princip plodnosti v širším smyslu: umíte „z ničeho“ udělat něco, z nápadu udělat realitu, z chaosu udělat řád, z obyčejného prostoru udělat místo, kde se lidem uleví. Když jste v souladu se sebou, vyzařujete hodnotu a důstojnost přirozeně, bez boje, a svět na to reaguje: lidé Vám důvěřují, chtějí s Vámi být, chtějí u Vás nakupovat, chtějí se k Vám vracet. Vaším duchovním úkolem je učit se hojnost nejen dávat, ale také přijímat, bez viny a bez pocitu, že si ji musíte „zasloužit výkonem“. A Vaším zemským úkolem je z téhle vnitřní plnosti vytvářet výsledky, které zůstávají: vztahy, projekty, prostředí, hodnoty, rod, práci, značku, krásu.\n\nProfese a směry, kde se Vaše poslání nejčastěji dobře realizuje: beauty a estetika (kosmetika, vizáž, vlasy, styling), design a vizuál (interiér, dekor, grafika, vizuální identita, obsah pro sítě), práce s ženami a rodinou (péče, poradenství, kurzy, komunitní projekty), gastronomie a pohostinnost, eventy, tvorba produktů „pro pohodlí a kvalitu života“, podnikání postavené na kráse, komfortu a hodnotě.",
    "male": "(3) Vaše poslání je být člověkem, který umí vytvářet stabilitu, komfort a prosperitu tak, aby to nebyla jen tvrdá práce, ale také lidskost, péče a kvalita života. Tahle energie z Vás nedělá „měkkého“, naopak, dává Vám zvláštní druh síly: umíte být oporou, umíte se postarat, umíte převzít zodpovědnost a přitom neztratit cit pro detail, estetiku a atmosféru. Často přirozeně rozumíte ženám, umíte s nimi jednat s respektem, umíte budovat vztahy bez potřeby dokazovat převahu. V nejvyšší podobě je Vaše poslání chránit a rozmnožovat zdroje: čas, peníze, energii, domov, rodinu, tým, podnikání. Nejde jen o výdělek. Jde o to, aby to, co držíte v rukou, rostlo a sloužilo lidem, kteří jsou pro Vás důležití. Duchovně se učíte kultivovat mužskou spolehlivost bez chladu, autoritu bez tlaku, a schopnost dávat bez toho, abyste se vyčerpal nebo si svou hodnotu měřil jen výkonem. Zemsky je Vaším úkolem vytvářet konkrétní výsledky, které jsou vidět a cítit: domov, zázemí, systém, projekt, firmu, jméno, úroveň.\n\nProfese a směry, kde se Vaše poslání nejčastěji otevírá: podnikání a management v oblastech komfortu a kvality (služby, hospitality, gastronomie, hotelnictví), práce s estetikou a vizuálem (brand, produkt, design, marketing, foto, video), organizace lidí a procesů, realitní a bytové projekty, rodinné podniky, tvorba prostředí „na úrovni“, práce, kde se spojuje zodpovědnost, péče a schopnost vytvářet hodnotu, která má styl i smysl."
  },
  "4": {
    "female": "(4) Vaše poslání je stát se pevnou osou. Ne tou „tvrdou ženou“, která musí všechno utáhnout, ale tou, která umí držet hranice, řád a bezpečí tak přirozeně, že se vedle Vás lidem uleví. Čtvrtá energie u ženy často znamená, že uvnitř je silná schopnost organizovat, rozhodovat a nést odpovědnost, i když se to někdy navenek snažíte zjemnit. Váš úkol není tuhle sílu potlačit. Váš úkol je kultivovat ji tak, aby byla důstojná, klidná, stabilní. Bez potřeby bojovat o respekt. Vy ho totiž nepotřebujete získávat křikem, stačí, když stojíte rovně. Když se opřete o svou ženskou moudrost, čtyřka se mění v něco velmi vzácného: v autoritu, která neponižuje, ale chrání. V lídrovství, v práci i ve vztazích jste tady proto, abyste nastavila strukturu, ve které věci fungují, lidé se neztrácí a výsledek je vidět. Zároveň je Vaší osobní lekcí nezaměnit zodpovědnost za kontrolu. Vaše síla roste nejvíc ve chvíli, kdy umíte pustit mikromanagement, delegovat a dovolit si být i člověkem, ne jen „systémem“. Pak z Vás jde luxusní energie ženy, která má pevnost i eleganci zároveň.\n\nKde se tohle poslání často krásně realizuje: vedení týmu, management, podnikání, projektové řízení, HR a nastavování pravidel, administrativní a procesní role, právo a compliance, bezpečnost a krizové role, realitní a stavební projekty, logistika, finance a kontroling, product a operations, také vlastní značka, kde držíte kvalitu, hranice a standard.",
    "male": "(4) Vaše poslání je vybudovat a držet strukturu, na kterou se dá spolehnout. Jste tady proto, abyste byl oporou, která nestojí na slibech, ale na činech. Čtvrtá energie u muže je archetyp stavitele a stratéga: člověka, který umí převzít zodpovědnost, udělat rozhodnutí, udržet směr a dotáhnout věci do výsledku. Lidé vedle Vás často cítí, že se mohou uvolnit, protože Vy „to unesete“. A to je velký dar, jen je potřeba, aby se z něj nestala těžká zbroj.\n\nV téhle energii je obrovská síla autority, ale právě proto je Vaší lekcí vést bez tvrdosti. Když se čtyřka zlomí do tlaku, vzniká konfliktnost a zbytečné boje o moc. Vaše nejvyšší poloha je klidná dominance: jasná pravidla, jasné hranice, žádné drama. Umíte být mužem, který chrání, organizuje a nastavuje systém, ale zároveň v sobě nese spravedlnost a respekt k individualitě druhých. Vaše poslání není kontrolovat svět. Vaše poslání je postavit rám, ve kterém svět funguje lépe.\n\nKde se tohle poslání nejčastěji realizuje: management a leadership, podnikání, armáda a bezpečnostní složky, politika a veřejná správa, právo, compliance, krizové řízení, strategie, operations, logistika, výroba, stavebnictví, development, realitní projekty, finance, kontroling, IT architektura a systémové role, také role mentora, který učí disciplíně, řádu a odpovědnosti."
  },
  "5": {
    "common": "(5) Vaše poslání je být nositelem smyslu, hodnot a pravdy, která je použitelná v běžném životě. Pátá energie není o tom „být chytrý“. Je to energie člověka, který umí dát lidem oporu v tom, co je správné, co je důležité, co má řád a princip. Jste tady proto, abyste předávali znalosti, tvořili pravidla, chránili standardy a učili druhé přemýšlet jasně. Když jste v plusu, Vaše slovo uklidňuje, protože v něm je pevnost a logika. Lidé se o Vás mohou opřít, protože umíte pojmenovat podstatu a dát věcem rám, který drží. Zároveň je to poslání vnitřní dospělosti. Život Vás učí, že autorita není tlak a pravda není zbraň. Vaše nejvyšší poloha je moudrý mentor, který umí vést bez moralizování, a učí bez toho, aby se povyšoval. Jakmile se z principů stane rigidita, energie se zavře. Jakmile ale přidáte lidskost a zkušenost, Vaše moudrost začne působit opravdu léčivě, protože lidé cítí, že mluvíte z reality, ne z teorie.\n\nKde se Vaše poslání často přirozeně realizuje: vzdělávání a lektorská činnost, mentoring, koučink, poradenství, právo a soudnictví, státní správa, administrativa, metodika, compliance, práce se standardy a pravidly, psychologie a práce s hodnotami, také psaní, tvorba vzdělávacích materiálů, veřejné vystupování, kurzy a programy, které učí lidi systému, řádu a sebekázni."
  },
  "6": {
    "common": "(6) Vaše poslání je učit svět lásce v její dospělé podobě. Šestá energie není jen o vztazích nebo přitažlivosti. Je to schopnost tvořit harmonii, krásu a lidskost tak, aby se lidem vedle Vás chtělo žít. Přinášíte do prostoru teplo, propojení a cit pro to, co je příjemné, kultivované a kvalitní. Jste tady proto, abyste lidem připomínali, že život není jen výkon, ale i radost, estetika, blízkost, dotek, rozhovor, atmosféra. A když jste v rovnováze, umíte spojovat lidi tak přirozeně, že se vedle Vás vztahy léčí i bez slov. Vaše osobní lekce je nezaměnit lásku za závislost a krásu za schvalování. Život Vás učí vybírat si podle vnitřní pravdy, ne podle toho, jak Vás kdo hodnotí. Jakmile se přestanete podvědomě přizpůsobovat, Vaše energie se stává luxusní: přitažlivá, elegantní, klidná. V téhle poloze máte dar inspirovat druhé k lepší kvalitě života, k zdravějším vztahům i k tomu, aby se o sebe začali starat s úctou.\n\nKde se Vaše poslání často realizuje: práce s lidmi a vztahy (poradenství, mediace, komunikace, klientská péče), beauty a estetika, móda a styl, design a vizuální tvorba, eventy a společenské role, PR a marketing, gastronomie a pohostinnost, umění, kultura, práce s komunitou, také jakékoli prostředí, kde je klíčová atmosféra, harmonie, kvalita a schopnost propojit lidi."
  },
  "7": {
    "common": "(7) Vaše poslání je vést pohyb, posun a vítězství. Sedmá energie přichází do života člověka, který se nemá ztratit v čekání ani v přemýšlení bez konce. Vy jste tady proto, abyste šli dopředu, nastavovali tempo a ukazovali, že cesta se dělá krokem. Váš dar je tah na cíl. Když se rozhodnete, umíte se zvednout, zorganizovat síly a projít i tím, co by jiné zastavilo. Jste typ člověka, který umí být v akci a nezalekne se tlaku, a právě proto Vás život často staví do situací, kde je potřeba tahoun, někdo, kdo unese zodpovědnost za směr. Zároveň je to poslání vědomé síly. Ne síly, která tlačí a válcuje, ale síly, která umí vést čistě. Vaše lekce je naučit se pracovat s impulzem a agresí tak, aby se změnily v disciplínu, sportovní ducha a zdravé hranice. Když sedmička spadne do mínusu, člověk se stává tvrdým, netrpělivým, přepáleným. Když ji ale držíte v plusu, jste inspirující: lidé vedle Vás mají pocit, že se dá vyhrát, že se dá posunout, že se dá zvládnout i náročné období bez zbytečných dramat.\n\nKde se Vaše poslání nejčastěji realizuje: vedení projektů a týmů, podnikání, prodej a obchod, sport a fitness, koučink výkonu, logistika a doprava, cestování, eventy, krizové role, bezpečnostní a operativní prostředí, práce, kde je potřeba rychlost, strategie, disciplína a schopnost dotahovat věci do cíle."
  },
  "8": {
    "common": "(8) Vaše poslání je držet spravedlnost, pravdu a rovnováhu, ale dělat to moudře. Osmá energie není o tom „mít pravdu za každou cenu“. Je to energie člověka, který vidí příčiny a důsledky. Vnímáte, kde je systém rozbitý, kde se něco tváří správně, ale uvnitř to nefunguje. Dokážete rozlišit manipulaci od reality, nespravedlnost od přirozeného řádu, a často máte schopnost říct věci přímo, bez mlhy. Vaše poslání je přinášet jasnost a férové řešení tam, kde by se jinak lidé ztratili v emocích nebo v chaosu. Zároveň je to poslání vnitřní rovnováhy. Život Vás učí, že spravedlnost bez nadhledu se může změnit v boj a vyčerpání. Vaše lekce je naučit se vidět i druhou stranu, nezaměnit rychlý závěr za pravdu a nepřebírat na sebe tíhu světa. Vaše slovo má váhu, protože je v něm logika, čistota a klid.\n\nKde se Vaše poslání často realizuje: právo, soudnictví, compliance, státní správa, vyjednávání a mediace, psychologie a poradenství, audit a kontrola, analytika, bezpečnost, krizové řízení, práce se systémy a pravidly, také role, kde je potřeba rozhodovat spravedlivě a držet hranice bez emocí."
  },
  "9": {
    "common": "(9) Vaše poslání je nést moudrost, která nevzniká z hluku, ale z hloubky. Devátá energie často dává člověku schopnost stáhnout se do ticha, přemýšlet, pozorovat a pochopit věci tak, jak je většina nikdy nepochopí, protože se zastaví na povrchu. Vy jste tady proto, abyste šli pod povrch. Aby se z Vašich zkušeností stala kompetence, ze znalostí moudrost a z moudrosti něco, co umí druhým skutečně pomoci. Vaše poslání není být nejhlasitější. Je to být nejpřesnější, nejpravdivější, nejklidnější bod v prostoru. Zároveň je to poslání zdravé samoty. Život Vás učí, že samota je dar, pokud je vědomá, ale zátěž, pokud je to únik. Vy potřebujete svůj prostor, protože právě v něm se rodí Vaše nejlepší nápady, Vaše jasné rozhodnutí, Vaše koncentrace. Ale zároveň máte být vidět ve správnou chvíli, protože lidé Vaši hloubku potřebují. Když se objevíte, jste pro druhé často jako kompas. Umíte dát radu, která není hezká věta, ale skutečný směr.\n\nKde se Vaše poslání nejčastěji realizuje: výzkum a analýza, psaní a tvorba textů, vzdělávání, poradenství, mentoring, terapie a psychologie, věda, IT a systémové obory, strategie, práce, kde je potřeba klidná hlava, detail, přesnost a schopnost vidět souvislosti bez emocí."
  },
  "10": {
    "common": "(10) Vaše poslání je naučit se žít v proudu, ale zároveň ten proud umět řídit. Desátá energie často přináší dar příležitostí, dobrého načasování a štěstí, které přichází ve správný moment. Někdy to vypadá, že se Vám věci „dějí samy“, ale ve skutečnosti je to cit pro vlnu: umíte vycítit, kdy se otevřely dveře, a vstoupit do nich. Vaše poslání je být člověkem, který dokáže spojit lehkost s odpovědností. Ne utíkat do pasivity, ale umět využít to, co Vám život nabízí, tak, aby z toho vznikl růst. Zároveň je to poslání důvěry. Jakmile se ve Vás rozjede strach, nervozita a potřeba kontrolovat výsledek, desítka se často „zastaví“. Člověk začne brát každou možnost, přepínat se, vyčerpat se, nebo naopak spadnout do lenosti a odkládání. Vaše lekce je udržet vnitřní klid a držet si vlastní směr. Pak se štěstí znovu rozběhne a Vy se dostanete do situací, které jiné míjejí. A právě v tom je Vaše síla: umíte lidem ukázat, že život může být lehčí, když se s ním přestanou prát a začnou s ním spolupracovat.\n\nKde se Vaše poslání nejčastěji realizuje: podnikání, obchod, marketing, networking, práce s lidmi a kontakty, projektová spolupráce, eventy, média a veřejná komunikace, cestování, role, kde je klíčové načasování, flexibilita a schopnost rychle se učit a využívat příležitosti."
  },
  "11": {
    "common": "(11) Vaše poslání je nést sílu tak, aby se z ní stala opora, ne tlak. Jedenáctá energie dává obrovskou dávku vitality, vůle a vnitřního „motoru“, který se neumí spokojit s průměrem. Vy jste tady proto, abyste dokázali rozhýbat věci, které stojí. Abyste zvedli sebe i druhé, když je potřeba výdrž, odvaha a výkon. Přirozeně v sobě máte energii, která umí tvořit výsledky, a lidé to cítí: vedle Vás se často nedá jen pasivně čekat, protože Vaše přítomnost probouzí chuť jednat. Zároveň je to poslání kultivované síly. Život Vás učí, že skutečná moc není v tom, že zatlačíte. Je v tom, že udržíte rytmus. Vaše lekce je naučit se pracovat s přepínáním, s vnitřním napětím a s podrážděností tak, aby se síla nezměnila v agresi, kontrolu nebo workoholismus. Jakmile jedete jen na tlak, tělo i psychika dřív nebo později řeknou dost. Když ale sílu vedete vědomě, stáváte se člověkem, který umí být ochráncem, lídrem a stabilním pilířem. Vaše slovo má váhu, protože je v něm energie, která se neopírá o dramatické emoce, ale o pevnost.\n\nKde se Vaše poslání nejčastěji realizuje: leadership a vedení lidí, sport a práce s tělem, krizové a zodpovědné role, management, koučink výkonu, bezpečnostní prostředí, práce, kde je potřeba disciplína, schopnost nést tlak, motivovat tým a dotahovat těžké věci do výsledku."
  },
  "12": {
    "common": "(12) Vaše poslání je proměňovat bolest v pochopení a chaos ve smysl. Dvanáctá energie je velmi hluboká, není to „jemnost pro jemnost“. Je to schopnost unést emoce, podívat se na věci z jiné perspektivy a vytáhnout z nich lekci, která člověka posune. Často máte dar vidět člověka pod jeho maskami. Umíte vnímat, co se děje uvnitř, i když to druhý neumí pojmenovat. A právě proto můžete být průvodcem v období, kdy se někdo ztrácí, láme, nebo hledá nový začátek. Zároveň je to poslání hranic. Vaše energie je přirozeně štědrá, a právě proto je Vaší lekcí nezaměnit pomoc za záchranu. Neberte na sebe cizí tíhu tak, že zapomenete na sebe. Jakmile se přepnete do role oběti, energie se začne dusit, přichází apatie, únava, pocit, že život stojí. V nejvyšší podobě jste ale člověk, který pomáhá čistě: s empatií, ale i s jasným rámem. Umíte druhým dát podporu a zároveň je vrátit do zodpovědnosti za vlastní život. A tím je skutečně léčíte.\n\nKde se Vaše poslání nejčastěji realizuje: psychologie, terapie, koučink, poradenství, práce s traumaty a vztahy, zdravotní a pečující profese, spirituální směry, sociální oblast, mentoring, také umění a tvorba, kde se pracuje s emocí, symbolikou a hlubším významem."
  },
  "13": {
    "common": "(13) Vaše poslání je být katalyzátorem změny. Třináctá energie nepřišla proto, abyste žili „v klidu a stejně“. Vy jste tady proto, abyste uměli ukončovat to, co už nefunguje, a otevírat nový prostor pro život. Máte v sobě schopnost vidět, kdy je něco mrtvé, vyčerpané, přežité, i když se to navenek ještě drží. A právě v tom je Vaše síla: umíte pojmenovat pravdu a udělat řez, který je ve skutečnosti léčivý. Ne kvůli dramatu, ale kvůli nové kvalitě. Zároveň je to poslání odvahy a klidu v extrému. Často zvládáte krizové situace lépe než lidé kolem Vás, protože v nich nepanikaříte, ale jednáte. Vaše lekce je pracovat s impulzem tak, aby se změna nestala destrukcí. Když se třináctka zlomí do mínusu, člověk ničí příliš rychle, tlačí na změnu, i když okolí ještě není připravené, a pak vzniká chaos. Vaše nejvyšší poloha je transformační moudrost: umět poznat správný čas, udělat správný krok a tím změnit celý příběh, někdy jednou jedinou větou nebo rozhodnutím.\n\nKde se Vaše poslání nejčastěji realizuje: krizové řízení, restrukturalizace, vedení změn, strategie, bezpečnostní a záchranné profese, medicína a chirurgická přesnost (doslova i symbolicky), terapie a práce s traumaty, práce s konci a novými začátky, také podnikání, kde je potřeba umět ukončit staré a postavit nové, a role, kde rozhodujete rychle a nesete odpovědnost."
  },
  "14": {
    "common": "(14) Vaše poslání je učit svět rovnováze, kultuře a správné míře. Čtrnáctá energie je velmi jemná, ale zároveň nesmírně silná, protože umí stabilizovat. Vy jste tady proto, abyste spojovali protiklady tak, aby se vzájemně neničily, ale doplňovaly. Umíte uklidnit extrémy, zjemnit hrany, dát věcem rytmus. Často máte vrozený cit pro krásu, estetiku, kvalitu a harmonii, ale stejně tak máte dar léčit tím, jak jste přítomní. Vedle Vás se lidé dostávají zpátky „do sebe“. Zároveň je to poslání trpělivosti a zralosti. Vaše lekce je nezavřít se do zranitelnosti nebo do tiché nedůvěry. Když se čtrnáctka stáhne, člověk přestane tvořit, přestane se ukazovat a začne se dusit ve vnitřním světě. Vaše nejvyšší poloha je klidná autorita harmonizátora: umíte vidět krásu i v temnějších věcech, umíte zpracovat emoce bez chaosu, umíte lidem ukázat, že zdravý život není extrém, ale dlouhodobá kvalita.\n\nKde se Vaše poslání nejčastěji realizuje: umění, kultura, design, estetika a práce s krásou, jazyky a mezinárodní prostředí, cestování, wellness a zdravý životní styl, terapie a harmonizační směry, koučink, práce s prostředím a atmosférou, také role mediátora, který umí spojovat lidi a nastavovat vztahy do rovnováhy."
  },
  "15": {
    "common": "(15) Vaše poslání je naučit se zacházet s magnetismem, mocí a potěšením tak, aby z toho vznikala hodnota, ne závislost. Tahle energie Vám dává schopnost působit na lidi, číst jejich motivy, chápat, co je přitahuje, co je láká, co je svazuje. A právě tady je Vaše síla i zodpovědnost. Jste tady proto, abyste uměli energii touhy proměnit ve výsledek, v peníze, ve vliv, v úspěch, ale tak, aby to mělo čistý základ. Když je to v plusu, umíte vést druhé z temnoty do vědomí. Ne moralizováním, ale tím, že jim ukážete pravdu o nich samých, a dáte jim nástroj, jak se zvednout. Vaše cesta často vede přes témata peněz, luxusu, sexuality, kontroly, pokušení, a také přes otázku, kdo skutečně řídí Váš život. Pokud tomu velíte Vy, tahle energie je extrémně prosperující, charismatická a tvořivá. Pokud to velí strach, prázdno nebo potřeba mít vše pod kontrolou, začíná se to lámat do extrémů. Vaše poslání je stát se člověkem, který umí být silný a přitažlivý, ale zároveň férový, čistý a vědomý. Tak vzniká skutečný vliv, který nezničí vztahy ani svědomí, naopak buduje respekt a dlouhodobý úspěch.\n\nKde se tohle poslání často realizuje: podnikání, investice a práce s penězi, obchod a vyjednávání, marketing, branding, PR, média a práce s publikem, beauty, móda, luxusní segment, eventy, show-business, psychologie, práce se stínem, terapie závislostí a vztahových dynamik, leadership, strategie, role, kde je potřeba charisma, odvaha a schopnost unést velké zdroje."
  },
  "16": {
    "common": "(16) Vaše poslání je bourat iluze a stavět pravdu. Šestnáctá energie se objevuje u lidí, kteří nejsou stvoření pro život na autopilota. Vy máte dar vidět, kde je konstrukce postavená špatně, kde se něco tváří pevně, ale uvnitř je to prázdné nebo neudržitelné. A život Vás často vede do situací, kdy je potřeba změna, někdy rychlá, někdy nečekaná, ale téměř vždy osvobozující. Vaše poslání není ničit. Vaše poslání je očistit prostor, aby mohla vzniknout nová úroveň, pevnější, pravdivější, funkční. V nejvyšší podobě jste člověk, který umí vést druhé i sebe transformací bez paniky. Umíte vysvětlit složité věci jednoduše, protože nejdete z teorie, ale z prožité zkušenosti. Vaše lekce je nezaseknout se v odporu a nevést změnu přes výbuchy, hněv nebo tvrdost. Jakmile se energie uklidní, stává se z ní obrovská autorita, klidná a přesná. Umíte říct jednu větu, která rozsvítí realitu. Umíte udělat rozhodnutí, které zachrání čas, peníze i nervy. A právě proto se Vaše poslání často spojuje s vedením, krizemi, velkými rozhodnutími a novými začátky.\n\nKde se tohle poslání často realizuje: krizové řízení, restrukturalizace, change management, strategie, operations, bezpečnost a risk management, právo a compliance, audit, IT architektura a systémové role, stavebnictví, development, realitní projekty, technické obory, práce s bezpečím a strukturou, psychologie, terapie a práce s hlubokými změnami, také mentoring a vedení lidí v náročných obdobích."
  },
  "17": {
    "common": "(17) Vaše poslání je zářit tak, aby to bylo léčivé, ne jen viditelné. Sedmnáctá energie dává talent, který se nedá schovat dlouho: vnitřní světlo, přirozenou přitažlivost, cit pro krásu a schopnost inspirovat. Vy jste tady proto, abyste ukazovali lidem naději, možnosti, vyšší úroveň života, a zároveň jim připomínali, že talent má smysl jen tehdy, když se rozvíjí. V plusu jste člověk, který se umí stát tváří, symbolem, hlasem, inspirací. Ne proto, že byste se tlačili dopředu, ale protože Vaše energie přitahuje pozornost sama. Vaše lekce je disciplína a opravdovost. Sedmnáctka se může snadno rozptýlit, mít velké sny, ale málo ukotvení, nebo naopak spadnout do „koruny na hlavě“ a potřeby dokazovat výjimečnost. Vaše poslání je držet v sobě čistotu: nepodceňovat se, ale ani se nepovyšovat. Když si vyberete jednu oblast a jdete do hloubky, Vaše hvězda roste stabilně a dlouhodobě. A čím víc jste opravdoví, tím víc lidé cítí, že se vedle Vás dá nadechnout, věřit si, rozkvést.\n\nKde se tohle poslání často realizuje: umění, tvorba obsahu, design, fotografie, video, hudba, veřejné vystupování, vzdělávání a inspirativní projekty, beauty a estetika, práce s publikem a komunitou, marketing a brand, také léčivé a podpůrné obory, kde lidem vracíte víru v sebe a v jejich talent."
  },
  "18": {
    "common": "(18) Vaše poslání je učit se důvěřovat své intuici a přetavit ji v něco konkrétního. Osmnáctá energie je hluboká, jemná a velmi silná. Dává schopnost vnímat neviditelné vrstvy reality: nálady, signály, skryté motivy, atmosféru, podprahové emoce. Vy často víte, že se něco děje, ještě dřív, než to někdo pojmenuje. A právě proto jste tady proto, abyste s tímhle darem zacházeli vědomě. Ne utíkat do strachu, ne nechat se pohltit představami, ale naučit se vnitřní hlas čistit, stabilizovat a používat jako kompas. Vaše lekce je práce se strachem a iluzí. Když osmnáctka spadne do mínusu, člověk začne pochybovat, propadá obavám, může se izolovat, nebo naopak žít v příbězích, které ho vyčerpávají. Vaše poslání je proměnit citlivost v moudrost. Když jste v plusu, umíte lidem pomáhat přesně tam, kde je to nejvíc potřeba: v jejich vnitřním světě. Umíte pojmenovat emoce, dát jim tvar, ulevit člověku, který se ztrácí v sobě. A tím se stáváte velmi silným průvodcem, i když mluvíte tiše.\n\nKde se tohle poslání často realizuje: psychologie, terapie, koučink, práce s traumaty a emocemi, spirituální směry, práce se sny a podvědomím, umění, psaní, film, fotografie, design, hudba, práce s atmosférou, také obory, kde je potřeba cit pro člověka, jemná komunikace a schopnost vnímat „mezi řádky“."
  },
  "19": {
    "common": "(19) Vaše poslání je přinášet světlo, radost a životní sílu tak, aby to nebyla jen „pozitivita“, ale skutečná energie, která zvedá úroveň. Devatenáctá energie dává přirozenou schopnost být vidět, být zdrojem tepla, být člověkem, který umí inspirovat. Vy jste tady proto, abyste šli dopředu a zároveň táhli ostatní, ne tlakem, ale tím, že ukazujete, že to jde. V plusu jste člověk, u kterého se lidé nadechnou. Dostanou chuť tvořit, pracovat, žít. Máte dar nastavovat atmosféru úspěchu a velkorysosti, a když jste ve své síle, přitahujete uznání i příležitosti. Vaše lekce je naložit s vlastní energií moudře. Devatenáctka potřebuje proud. Jakmile se zastaví, začne se to lámat do vnitřního tlaku, sebekritiky nebo do pocitu, že nic nemá smysl. Vaše poslání je držet směr, ale zároveň nezaměnit hodnotu za potlesk. V nejvyšší podobě jste slunečný lídr: umíte dávat, umíte chránit, umíte být velkorysí, a přitom neztratit své hranice. Když tohle spojíte, Vaše energie může být velmi prosperující a zároveň lidská, zdravá.\n\nKde se tohle poslání často realizuje: leadership, podnikání, práce s publikem, vzdělávání, média, PR, marketing, eventy, práce s komunitou, role, kde reprezentujete značku nebo projekt, také práce s dětmi, kreativitou a všude tam, kde je potřeba charisma, energie a schopnost inspirovat."
  },
  "20": {
    "common": "(20) Vaše poslání je uzdravovat příběh rodu a vracet lidem jejich kořeny, ale v moderní, praktické podobě. Dvacátá energie dává schopnost vidět souvislosti napříč generacemi: opakující se vzorce, rodinné scénáře, neviditelné sliby, bolesti a programy, které se předávají dál. Vy jste tady proto, abyste tyhle věci uměli pojmenovat, pochopit a uzavřít, aby člověk nemusel žít cizí osud. Máte dar pro hluboký vhled, umíte číst mezi řádky a často vnímáte, kde je problém ve vztazích „starý“, i když se tváří jako aktuální konflikt. Vaše lekce je držet moudrost bez fanatismu. Dvacítka může svádět k tomu stát se soudcem, mít potřebu „napravovat“ druhé, nebo naopak zůstat uvězněný v rodině a jejích emocích. Vaše poslání je být člověkem, který přináší pravdu s respektem. Když jste v plusu, umíte spojovat, smiřovat, uzavírat staré kapitoly a otevírat novou cestu. A Vaše slovo má váhu, protože v něm je zkušenost, vhled a schopnost vidět důsledky.\n\nKde se tohle poslání často realizuje: psychologie, terapie, práce s rodinnými systémy, mediace, poradenství, koučink, sociální oblast, vzdělávání, právo v rodinných tématech, genealogie, práce s komunitou, také role, kde je potřeba sjednocovat lidi, budovat mosty a uzdravovat vztahy mezi generacemi."
  },
  "21": {
    "common": "(21) Vaše poslání je spojovat. Ne na povrchu, ale do hloubky. Jedenadvacítka dává schopnost vidět celek, chápat systém a vnímat, jak spolu souvisí lidé, prostředí, kultura, vztahy i události. Vy jste tady proto, abyste rozšiřovali horizonty, otevírali prostor a dělali mosty, tam, kde by se jiní zasekli v detailech nebo v osobních emocích. V plusu působíte jako člověk, který umí dát věcem směr a zároveň udržet harmonii. Umíte sjednotit tým, spojit rozdílné názory, nastavit spolupráci tak, aby fungovala, a dovést projekt do bodu, kdy „to celé dává smysl“. Vaše lekce je nerezignovat v okamžiku, kdy se něco velkého rodí pomalu. Protože Vaše energie míří vysoko, někdy se objeví netrpělivost nebo zklamání, když realita nejde hned podle plánu. Vaše poslání je učit se důvěře v proces, v tým a v to, že velké věci se skládají postupně. Jakmile tohle držíte, máte dar přinášet lidem pocit, že svět je větší, než jejich strach, a že existuje cesta i tam, kde ji nevidí.\n\nKde se tohle poslání často realizuje: mezinárodní prostředí, jazyky, cestování, diplomacie a vyjednávání, PR a komunikace, projektové řízení, management, práce ve velkých firmách a strukturách, komunitní a společenské projekty, vzdělávání, média, marketing, také obory, kde je potřeba propojovat lidi, kultury a nápady a dotahovat je do funkčního celku."
  },
  "22": {
    "common": "(22) Vaše poslání je přinášet svobodu, lehkost a nový začátek. Dvaadvacítka není o tom být „nezodpovědní“. Je to energie člověka, který má v sobě odvahu přestřihnout starý scénář, vyjít ze zbytečných omezení a ukázat, že život se dá žít i jinak. Vy jste tady proto, abyste otevírali možnosti, posouvali hranice, přinášeli čerstvý vzduch tam, kde je dusno. V plusu jste člověk, který umí inspirovat druhé k odvaze být autentičtí. Vedle Vás se lidé často přestanou bát toho, co si kdo myslí, a začnou víc slyšet sami sebe. Vaše lekce je spojit svobodu se směrem. Když se energie rozpadne do chaosu, člověk skáče z věci na věc, utíká před závazky, nebo naopak zamrzne ve strachu a začne se držet hmoty a jistot tak křečovitě, že se ztratí lehkost. Vaše poslání je svobodu ukotvit: mít prostor, ale zároveň mít hodnoty. Pak se z Vás stává člověk, který umí lidem ukázat nové řešení, rychle se adaptovat, a přetavit inspiraci do reálného kroku.\n\nKde se tohle poslání často realizuje: kreativní obory, tvorba obsahu, marketing a reklama, start-upy a inovace, práce s lidmi a komunitou, cestování, eventy, vzdělávání neformálním stylem, mediální a veřejná komunikace, podnikání, také role, kde je potřeba flexibilita, nápad, humor, lehkost a schopnost začít znovu."
  }
};

function normalizePurposeGender(gender) {
  if (!gender) return null;
  var g = String(gender).toLowerCase().trim();

  if (["female", "f", "woman", "žena", "zena", "ženský", "zensky", "женщина", "ж", "female"].includes(g)) {
    return "female";
  }

  if (["male", "m", "man", "muž", "muz", "mužský", "muzsky", "мужчина", "м", "male"].includes(g)) {
    return "male";
  }

  return null;
}

function getPurposeTextVariants(energyNumber, gender) {
  var entry = purposeTextsByEnergy[String(energyNumber)];
  if (!entry) return [];

  var normalizedGender = normalizePurposeGender(gender);

  if (entry.common) {
    return [{ gender: "common", text: entry.common }];
  }

  if (normalizedGender && entry[normalizedGender]) {
    return [{ gender: normalizedGender, text: entry[normalizedGender] }];
  }

  var variants = [];
  if (entry.female) variants.push({ gender: "female", text: entry.female });
  if (entry.male) variants.push({ gender: "male", text: entry.male });
  return variants;
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

function renderPurposeText(raw) {
  if (!raw) return "";

  var blocks = String(raw)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n\s*\n/)
    .map(function(block) { return block.trim(); })
    .filter(Boolean);

  return '<div class="purpose-text">' + blocks.map(function(block) {
    if (/^Profese a směry/i.test(block) || /^Kde se/i.test(block)) {
      var safe = escapeHtml(block).replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
      return '<div class="purpose-note">' + safe + '</div>';
    }

    return renderRichText(block);
  }).join("") + '</div>';
}

function getPurposeItems(result, gender) {
  return [
    {
      id: "soul_purpose",
      label: "Účel vaší duše",
      point: "E",
      energy: result.E
    },
    {
      id: "heaven_purpose",
      label: "Váš nebeský účel",
      point: "nebo",
      energy: result.nebo
    },
    {
      id: "personal_purpose",
      label: "Váš osobní účel",
      point: "zemlya",
      energy: result.zemlya
    }
  ].map(function(item) {
    item.variants = getPurposeTextVariants(item.energy, gender);
    return item;
  });
}

function renderPurposeHTML(result, gender) {
  var items = getPurposeItems(result, gender);

  function renderPurposeItem(item, index) {
    if (!item.variants || item.variants.length === 0) {
      return (
        '<div class="energy-item programs-card purpose-card purpose-print-item purpose-print-item-' + index + '">' +
          '<h3>' + escapeHtml(item.label) + '</h3>' +
          '<p>Pro energii ' + escapeHtml(item.energy) + ' zatím není v databázi nahraný výklad.</p>' +
        '</div>'
      );
    }

    var variantHTML = item.variants.map(function(variant) {
      return (
        '<div class="purpose-variant">' +
          renderPurposeText(variant.text) +
        '</div>'
      );
    }).join("");

    return (
      '<div class="energy-item programs-card purpose-card purpose-print-item purpose-print-item-' + index + '">' +
        '<h3>' + escapeHtml(item.label) + '</h3>' +
        variantHTML +
      '</div>'
    );
  }

  var firstPurposeHTML = items[0] ? renderPurposeItem(items[0], 1) : "";

  var secondPagePurposeHTML = items
    .slice(1)
    .map(function(item, index) {
      return renderPurposeItem(item, index + 2);
    })
    .join("");

  /*
    Stejně jako u talentů:
    3 účely: první stránka = hlavní nadpis + první účel,
             druhá stránka = dva další účely.
    Pokud by někdy byly jen 2 účely: vše na jedné stránce.
  */

  if (items.length <= 2) {
    var allPurposeHTML = items.map(function(item, index) {
      return renderPurposeItem(item, index + 1);
    }).join("");

    return (
      '<div class="purpose-section purpose-print-section purpose-count-' + items.length + '">' +
        '<section class="purpose-print-page purpose-page-title purpose-density-balanced">' +
          '<div class="purpose-print-inner">' +
            '<h2>Vaše poslání</h2>' +
            allPurposeHTML +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  return (
    '<div class="purpose-section purpose-print-section purpose-count-' + items.length + '">' +
      '<section class="purpose-print-page purpose-page-title purpose-density-balanced">' +
        '<div class="purpose-print-inner">' +
          '<h2>Vaše poslání</h2>' +
          firstPurposeHTML +
        '</div>' +
      '</section>' +
      '<section class="purpose-print-page purpose-page-continue purpose-density-balanced">' +
        '<div class="purpose-print-inner">' +
          secondPagePurposeHTML +
        '</div>' +
      '</section>' +
    '</div>'
  );
}
module.exports = {
  getPurposeItems,
  renderPurposeHTML
};