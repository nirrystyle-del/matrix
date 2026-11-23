// =========================
// TALENTS ENGINE
// Source: Таланты.docx
// Logic:
// B  - Váš hlavní talent
// B1 - Váš přirozený talent
// B2 - Talent, který je vám dán, ale je třeba ho rozvíjet
// If the same energy repeats, it is shown only once, so a person can have 2 talents instead of 3.
// =========================

const talentTexts = {
  "1": {
    energy: 1,
    text: "(1) Váš talent se zapíná ve chvíli, kdy se ostatním všechno rozpadá na příliš mnoho možností. Vy jako byste okamžitě viděli kostru situace: co je tady podstatné, kam to má směřovat a jaký první krok odemkne celý další pohyb. Je to schopnost dát věcem tvar. Umíte pojmenovat směr tak, že se z nejistoty stane jasná volba, a z váhání konkrétní rozhodnutí. Proto vedle Vás lidé často cítí, že se dá začít, že se dá posunout a něco opravdu změnit. Pro druhé je Vaše síla v tom, že dokážete přinést jasnost a energii do pohybu, aniž byste tlačili. Umíte rozsvítit podstatu, zjednodušit složité, najít řešení, které není jen hezká myšlenka, ale dá se žít a udělat. Pro Vás je to zdroj vnitřní jistoty: když si vyberete svůj směr a nerozředíte ho cizími očekáváními, začne se vše skládat rychleji, přesněji a s menším odporem.\n\nTento talent skvěle využijete všude, kde je potřeba otevřít nový směr a vést začátek - podnikání, vlastní značka, inovace, strategie, tvorba systému, nebo role člověka, který rozhoduje a nese vizi."
  },
  "2": {
    energy: 2,
    text: "(2) Váš talent je v jemném naladění na lidi a atmosféru. Neslyšíte jen slova, ale i to, co je za nimi, a všímáte si detailů, které většina přehlédne: tónu, pauzy, změny energie, drobných signálů. Díky tomu často rozumíte situaci hlouběji, než jak vypadá navenek. Umíte zklidnit napětí tak, že se věci vyřeší bez boje, a najít přesná slova, která nezraňují, ale posouvají. Pro druhé jste cenní tím, že vytváříte pocit bezpečí a srozumitelnosti. Umíte být diplomat, který nepůsobí jako herec, ale jako někdo, kdo opravdu vidí a chápe. Často dokážete propojit protiklady a vrátit komunikaci do rovnováhy, aby lidé neztratili respekt ani k sobě, ani k druhým. Pro Vás se tento talent otevírá nejvíc tehdy, když si hlídáte hranice a nepřebíráte cizí emoce. V klidu a vnitřním prostoru se Vaše intuice zostří a Vaše rozhodování bývá překvapivě přesné.\n\nTento talent se silně uplatní v práci s lidmi - poradenství, komunikace, psychologie, vedení týmu, vyjednávání, HR, vztahové a klientské role, nebo všude tam, kde je potřeba uklidnit chaos a vrátit situaci do harmonie."
  },
  "3": {
    energy: 3,
    text: "(3) Váš talent je vytvářet hodnotu, která je vidět a cítit. Umíte přirozeně zvednout úroveň života kolem sebe, nejen esteticky, ale i prakticky: v pohodlí, v kvalitě, v atmosféře, v tom, jak věci fungují. Máte cit pro krásu, styl a prestiž, ale současně i schopnost zorganizovat realitu tak, aby byla „v pořádku“ a aby přinášela výsledky. Lidé vedle Vás často získají chuť žít lépe, starat se o sebe a přestat se spokojovat s průměrem. Pro druhé je Vaše síla v tom, že umíte přitáhnout prosperitu a udělat z ní stabilní základ, ne jen náhodné štěstí. Umíte motivovat k růstu, podpořit sebevědomí, ukázat, jak se buduje úspěch a dobré zázemí. Pro Vás je tento talent nejživější, když si dovolíte přijímat, ne jen dávat. Když přestanete vše držet sami a začnete rozumně rozdělovat zodpovědnost, Váš přirozený magnetismus se násobí.\n\nTento talent využijete v podnikání, práci s krásou a hodnotou, v oborech spojených s estetikou, značkou, službami, luxusem, organizací prostoru a také tam, kde je potřeba vytvářet prosperitu a pohodlí pro lidi."
  },
  "4": {
    energy: 4,
    text: "(4) Váš talent je v řízení a v tom, že umíte udělat pořádek v chaosu. Když se věci rozpadají, Vy instinktivně stavíte strukturu: pojmenujete cíle, nastavíte pravidla, určíte role a přivedete situaci do stavu, kdy se dá řídit. Máte přirozenou autoritu, která působí pevně, a lidé často cítí, že se o Vás mohou opřít. Umíte rozhodovat včas a nést odpovědnost, aniž byste potřebovali dlouhé drama kolem. Pro druhé je Vaše síla v tom, že vytváříte stabilitu, bezpečí a systém. Umíte vést lidi, organizovat procesy, držet hranice a chránit to, co má hodnotu. Pro Vás se tento talent nejlépe otevírá, když vedete vědomě, ne přes tlak. Jakmile se z vedení stane kontrola, energie tvrdne. Když naopak držíte pevnost a zároveň lidskost, Vaše slovo má skutečnou váhu a respekt přichází přirozeně.\n\nTento talent se uplatní v managementu, vedení týmu, podnikání, strategii, organizaci, politice, bezpečnosti, právu i ve všech rolích, kde je potřeba držet systém a nést odpovědnost za výsledky."
  },
  "5": {
    energy: 5,
    text: "(5) Váš talent je předávat znalosti tak, že dávají smysl a mají autoritu. Máte přirozený cit pro pravidla, strukturu, logiku a řád, a díky tomu umíte vysvětlit složité věci srozumitelně a přesně. Váš dar je v tom, že umíte oddělit podstatné od nepodstatného, pojmenovat princip a ukázat, jak se podle něj dá žít nebo pracovat. Lidé Vám často věří, protože z Vás jde klidná jistota a vnitřní ukotvení. Pro druhé je Vaše síla v roli mentora, učitele nebo průvodce. Umíte kultivovat hodnoty, nastavovat hranice, učit disciplíně a pomoci lidem stát se stabilnějšími. Pro Vás tento talent funguje nejlépe, když se Vaše pravda nestane vězením. Jakmile ztuhnete v „jediném správném“ pohledu, energie se zavírá. Když naopak necháte prostor pro život a zkušenost, Vaše moudrost působí ještě silněji a je pro lidi opravdu léčivá.\n\nTento talent využijete ve vzdělávání, koučinku a poradenství, v právu, administrativě, metodice, práci s pravidly a tradicemi, nebo všude tam, kde je potřeba předat znalost, vytvořit řád a držet hodnoty."
  },
  "6": {
    energy: 6,
    text: "(6) Váš talent je vytvářet harmonii mezi lidmi a umět z obyčejného setkání udělat příjemný zážitek. Máte přirozený cit pro krásu, atmosféru a vztahy, a často přesně víte, co je potřeba říct nebo udělat, aby se druhý člověk cítil viděný a přijatý. Umíte spojovat, sbližovat, vyhlazovat napětí a dávat lidem pocit, že život může být lehčí a hezčí. Vaše energie se pozná podle toho, že vedle Vás se věci „zjemní“, zlepší se nálada, otevře se srdce. Pro druhé jste užiteční tím, že umíte vytvářet blízkost, pečovat o kvalitu vztahů a přinášet do prostoru eleganci, lidskost a radost. Pro sebe je to dar, který se nejlépe odemyká ve chvíli, kdy se přestanete řídit cizím hodnocením. Jakmile si dovolíte vybírat podle vnitřního pocitu, ne podle dojmu, Vaše přirozená přitažlivost a schopnost vytvářet krásný život se násobí.\n\nTento talent se silně uplatní všude, kde pracujete s lidmi a estetikou, ve vztahových rolích, v klientské péči, v umění, beauty, eventech, PR, službách a také v práci, kde je důležitá atmosféra a spojování lidí."
  },
  "7": {
    energy: 7,
    text: "(7) Váš talent je v pohybu, ve výkonu a ve schopnosti dotáhnout věci do cíle. Máte přirozenou energii dobyvatele: když se rozhodnete, jdete. Umíte se rychle zorientovat, udělat plán, nastavit tempo a překonat překážky, které jiné zastaví. Často v sobě nesete vnitřní motor, který potřebuje výzvu, dynamiku a pocit, že se něco děje. A právě proto dokážete motivovat i druhé, protože Vaše energie je nakažlivá a dává lidem chuť nezůstávat stát.Pro druhé jste užiteční tím, že umíte vést k výsledku, zvednout disciplínu a převzít odpovědnost v situaci, kdy je potřeba rychlá akce. Pro sebe je tento talent nejčistší, když má směr a smysl. Jakmile jedete jen na tlak a dokazování, vzniká přepětí, tvrdost a ztrácí se radost. Když ale držíte svůj cíl a zároveň nezapomínáte na regeneraci, stáváte se velmi silnou osobností, která umí vyhrávat dlouhodobě.\n\nTento talent se skvěle uplatní v podnikání, sportu, vedení projektů, managementu, logistice, cestování, prodeji, v rolích, kde je potřeba tah na branku, strategie a schopnost posunout věci rychle dopředu."
  },
  "8": {
    energy: 8,
    text: "(8) Váš talent je v pravdě, spravedlnosti a schopnosti vidět příčiny. Máte v sobě vnitřního „rozlišovače“, který rychle pozná, kde něco nesedí, kde je lež, kde je manipulace nebo kde chybí rovnováha. Umíte jít do hloubky, analyzovat situaci a pochopit, proč se věci dějí tak, jak se dějí. Často máte přirozenou odvahu postavit se za slabší nebo za to, co považujete za správné, a v krizových momentech se dokážete rozhodnout jasně a bez paniky. Pro druhé jste užiteční tím, že umíte přinést řád, férovost a střízlivý pohled, když emoce nebo chaos berou kontrolu. Umíte být oporou, někdy i „soudcem“ v dobrém slova smyslu, který pomáhá najít pravdu a vyvážené řešení. Pro sebe je tento talent největší dar tehdy, když ho používáte bez vnitřního boje. Jakmile začnete brát všechno příliš osobně nebo bojovat za spravedlnost proti celému světu, energie se přepne do napětí. Když si dovolíte nadhled a otevřenost, Vaše přesnost se stává Vaší výhodou, ne zátěží.\n\nTento talent se uplatní v právu, analýze, poradenství, psychologii, krizovém řízení, vyjednávání, bezpečnosti, v práci se systémy a pravidly i ve všech rolích, kde je potřeba rozlišit pravdu od iluze a najít spravedlivé řešení."
  },
  "9": {
    energy: 9,
    text: "(9) Váš talent je v hloubce, samostatnosti a schopnosti vidět to, co ostatní přehlédnou. Máte přirozenou moudrost, která se nerodí z hluku, ale z vnitřní práce a pozorování. Umíte se soustředit, jít do detailu a dotáhnout pochopení do takové úrovně, že se z něj stává skutečná kompetence. Často se Vám nejlépe pracuje o samotě, protože právě v tichu se Vaše myšlení zostří a Vaše intuice se spojí s logikou. Pro druhé jste užiteční tím, že umíte být oporou, poradcem a průvodcem, který neříká prázdné fráze. Lidé k Vám často přicházejí, když potřebují něco pochopit, uklidnit se, nebo najít směr bez dramat. Pro sebe je tento talent největší dar tehdy, když se neschováváte jen do izolace, ale vědomě střídáte samotu s kontaktem. Když si zachováte vlastní prostor a zároveň se občas ukážete světu, Vaše přirozená autorita roste a lidé Vám začnou věřit ještě víc.\n\nTento talent se silně uplatní ve výzkumu, analýze, vzdělávání, psaní, poradenství, vědě, terapii nebo v každé práci, kde je potřeba hloubka, přesnost a klidná moudrost."
  },
  "10": {
    energy: 10,
    text: "(10) Váš talent je ve správném načasování a v tom, že umíte zachytit příležitost, když se otevře. Máte cit pro „vlnu“ - pro moment, kdy je nejlepší udělat krok, kdy se vyplatí jednat a kdy je naopak moudré netlačit. Často působíte lehce a přirozeně, ale uvnitř máte silný instinkt, který Vás vede k lidem, situacím a nabídkám, které Vám mohou otevřít další dveře. Umíte se rychle učit, přizpůsobit se a vytěžit z okolností maximum, aniž byste museli jít přes tvrdý boj. Pro druhé jste užiteční tím, že přinášíte lehkost, optimismus a schopnost vidět možnosti tam, kde jiní vidí jen problémy. Umíte propojit lidi, rozproudit spolupráci a dodat projektu šťastnou energii, díky které se věci začnou skládat. Pro sebe tento talent funguje nejlépe, když důvěřujete svému vnitřnímu vedení a zároveň nezůstáváte v pasivitě. Když se přestanete bát odpovědnosti a uděláte svůj krok, štěstí se k Vám vrací v ještě větší síle.\n\nTento talent využijete v podnikání, obchodu, komunikaci, networkingu, marketingu, projektové spolupráci a všude tam, kde rozhoduje správné načasování, kontakty a schopnost chytit příležitost."
  },
  "11": {
    energy: 11,
    text: "(11) Váš talent je v síle, energii a schopnosti strhnout lidi do pohybu. Máte přirozenou vitalitu a tah, díky kterému umíte udělat věci, na které jiní nemají výdrž. Často máte silný vliv nejen fyzicky, ale i slovem: dokážete přesvědčit, motivovat, zvednout atmosféru a dát druhým pocit, že „to zvládnou“. Váš dar je v tom, že umíte být oporou v náročných situacích a převzít odpovědnost tam, kde je potřeba pevná ruka a odvaha. Pro druhé jste užiteční tím, že umíte sjednotit kolektiv, vyprovokovat zdravou aktivitu a vytvořit kolem sebe energii, ve které se nedá jen sedět a stěžovat si. Lidé se vedle Vás často probudí. Pro sebe je tento talent nejčistší, když ho používáte vědomě a nejedete jen na tlak. Jakmile se energie začne měnit v agresi, přepínání nebo workoholismus, síla se obrátí proti Vám. Když ale držíte rytmus, umíte se zklidnit a jednat chytře, Vaše síla se stává dlouhodobou výhodou a Vaše slovo má velkou váhu.\n\nTento talent se uplatní ve sportu, vedení lidí, krizových rolích, managementu, koučinku, v profesích, kde je potřeba energie, disciplína, motivace a schopnost zvednout výkon týmu."
  },
  "12": {
    energy: 12,
    text: "(12) Váš talent je v hluboké empatii a schopnosti vidět člověka takového, jaký opravdu je. Umíte přijmout, neodsoudit a dát druhému pocit, že není „špatně“, jen prochází svou cestou. Máte dar naslouchat tak, že se lidé vedle Vás začnou otevírat, a často sami najdou odpověď, protože Vy jim vytvoříte bezpečný prostor. Zároveň umíte z chaosu vytáhnout smysl: spojit zkušenosti, pochopit lekci, přetavit bolest v moudrost. A právě to dělá tuto energii vzácnou, Vaše citlivost není slabost, ale schopnost transformace. Pro druhé jste užiteční tím, že umíte pomáhat bez nátlaku, vést jemně, lidsky a přitom přesně. Umíte lidi vyvést z beznaděje a vrátit jim důvěru v život. Pro sebe je tento talent největší dar tehdy, když nezapomínáte na vlastní hranice. Jakmile začnete zachraňovat všechny a sebe necháte poslední, energie se vyčerpá. Když se naopak naučíte dávat i sobě, Vaše schopnost pomáhat se stává stabilní a dlouhodobě silnou.\n\nTento talent využijete v psychologii, terapii, poradenství, koučinku, léčivých oborech, práci s lidmi, v kreativní tvorbě i všude tam, kde je potřeba cit, pochopení a schopnost provést druhého těžkým obdobím."
  },
  "13": {
    energy: 13,
    text: "(13) Váš talent je v transformaci a v tom, že se nebojíte změn, které jiné děsí. Umíte rychle odhalit, co je už mrtvé, nefunkční nebo přežité, a máte odvahu to ukončit, aby mohlo vzniknout něco nového. V krizových chvílích často jednáte překvapivě klidně a přesně, protože vidíte cykly a chápete, že některé věci musí skončit, aby se život posunul. Máte silný instinkt pro radikální očistu, restart, řez, který není destrukce pro destrukci, ale prostor pro novou kvalitu. Pro druhé jste užiteční tím, že umíte provést změnou, kterou si sami netroufnou udělat. Umíte pojmenovat pravdu bez zbytečných ozdob a pomoct lidem pustit minulost, která je drží. Pro sebe je tento talent nejčistší, když ho nepoužíváte v návalu emocí. Jakmile se změna stane impulzem, vzniká chaos a přepálení. Když ale držíte vnitřní klid, Vaše transformační síla je přesná a téměř chirurgická, a díky tomu přináší velké výsledky.\n\nTento talent se uplatní v krizovém řízení, restrukturalizaci, terapii a práci s traumaty, ve strategii, vedení změn, v oborech spojených s rizikem a odpovědností i všude tam, kde je potřeba ukončit staré a otevřít nový začátek."
  },
  "14": {
    energy: 14,
    text: "(14) Váš talent je v rovnováze, jemnosti a vytříbeném vkusu. Umíte spojit různé světy tak, aby spolu fungovaly, a máte přirozený cit pro harmonii, krásu a správnou míru. Často působíte jako člověk, který dokáže zjemnit extrémy, uklidnit emoce a vrátit věci do zdravého rytmu. Máte talent pro kulturu, estetiku a kvalitu, ale také pro vnitřní disciplínu, která drží život v klidu: umíte si hlídat hranice a vytvářet prostředí, kde se dá dýchat. Pro druhé jste užiteční tím, že umíte léčit přítomností, stabilizovat a učit lidi, jak se vrátit do rovnováhy. Často máte dar spojovat - lidi, názory, energie, a vytvářet prostor, kde se nikdo necítí přetlačený. Pro sebe tento talent funguje nejlépe, když se nezavřete do zranitelnosti. Jakmile se stáhnete a přestanete sdílet svůj dar, energie slábne. Když si dovolíte ukazovat svůj vkus, svou kulturu a svůj hlubší pohled na život, stáváte se pro okolí vzácným kompasem.\n\nTento talent využijete v umění a kreativitě, v práci s estetikou a kulturou, v jazycích a cestování, ve wellness a zdravém životním stylu, v poradenství i v rolích, kde je potřeba harmonizovat lidi, procesy a prostředí."
  },
  "15": {
    energy: 15,
    text: "(15) Váš talent je v magnetismu, vlivu a schopnosti pracovat s touhou tak, aby se změnila v sílu a výsledky. Umíte přesně vycítit, co lidi přitahuje, co je motivuje, kde mají slabé místo, a dokážete s tím pracovat chytře, ne povrchně. Máte v sobě energii, která umí otevřít téma peněz, luxusu, potěšení i moci, ale zároveň umí jít do hloubky a vidět, co se za tím skrývá. Proto můžete být velmi silní v tom, že lidem pomáháte pochopit jejich závislosti, jejich pokušení, jejich vnitřní „hunger“, a proměnit to v vědomou práci se sebou. Pro druhé jste užiteční tím, že umíte probudit životní energii, odvahu a chuť jít výš. Často umíte lidi nastartovat a ukázat jim, že jejich slabost může být zdrojem síly, když ji přestanou popírat. Pro sebe je tento talent nejčistší tehdy, když držíte etiku a nenecháte se řídit jen impulzem. Jakmile se energie přepne do kontroly, manipulace nebo fixace na materiál, začne Vás vyčerpávat. Když ji naopak vedete vědomě, máte obrovský potenciál přitahovat prosperitu a zároveň zůstat vnitřně svobodní.\n\nTento talent se uplatní v podnikání, marketingu, prodeji, práci s image a značkou, v psychologii a práci se stíny, ve vedení lidí i ve všech rolích, kde je potřeba vliv, charisma a schopnost proměnit touhu v výkon."
  },
  "16": {
    energy: 16,
    text: "(16) Váš talent je v pravdivosti a v odvaze rozbít to, co už nemá smysl, aby mohl vzniknout nový, silnější základ. Umíte vidět, kde je lež, iluze nebo konstrukce, která se jen tváří pevně, a máte schopnost to pojmenovat bez zbytečných ozdob. Často v sobě nesete potenciál „restartu“: když se něco hroutí, Vy dokážete pochopit proč, vytáhnout z toho lekci a postavit to znovu kvalitněji. Máte dar pracovat s velkými změnami a přetavit je v růst, i když to není komfortní. Pro druhé jste užiteční tím, že umíte vést v krizích a v transformacích. Dokážete lidem vysvětlit složité věci jednoduše, protože mluvíte z vlastní zkušenosti a z reality, ne z teorie. Pro sebe tento talent funguje nejlépe, když se nezaseknete ve vzdoru nebo v extrémech. Jakmile bojujete proti životu, energie se mění ve výbuchy, chaos nebo tvrdost. Když ale přijmete změnu jako nástroj evoluce, stáváte se člověkem, který umí postavit nový životní systém na pevných základech.\n\nTento talent využijete v krizovém řízení, restrukturalizaci, strategii, bezpečnosti, technických a systémových oborech, v poradenství i všude tam, kde je potřeba rozbít staré iluze a vytvořit novou stabilitu."
  },
  "17": {
    energy: 17,
    text: "(17) Váš talent je zářit a inspirovat, a dělat to způsobem, který není umělý, ale přirozený. Máte v sobě dar krásy, kreativity a jemné energie, která lidi přitahuje. Často máte silnou představivost a schopnost vidět možnosti, které jiní nevidí. A i když nejste v kreativním oboru, Vaše tvořivost se projeví ve stylu, v komunikaci, ve způsobu myšlení, v tom, jak dokážete dát věcem „jiskru“ a smysl. Zároveň můžete mít velmi silnou intuici, cit pro energie a někdy i schopnost vnímat věci dopředu. Pro druhé jste užiteční tím, že umíte dávat naději, inspiraci a krásu. Lidé vedle Vás často znovu uvěří, že mají talent, že mohou být vidět, že mohou tvořit. Pro sebe je tento talent největší dar tehdy, když si dovolíte být vidět a nepodceňujete se. Jakmile se schováte do přílišné skromnosti nebo naopak spadnete do pýchy, energie se rozhází. Když ale držíte disciplínu a soustředíte se na jednu věc, Vaše hvězda roste a můžete dosáhnout velmi vysoké úrovně uznání.\n\nTento talent se uplatní v umění, tvorbě obsahu, designu, beauty, veřejném vystupování, práci s lidmi, léčivých oborech i v každé roli, kde je potřeba inspirace, vkus a schopnost ukázat světu něco krásného."
  },
  "18": {
    energy: 18,
    text: "(18) Váš talent je v intuici, představivosti a schopnosti cítit věci dřív, než se stanou viditelnými. Máte jemný radar na nálady, signály a skryté motivy, a často vnímáte, co se děje „pod hladinou“ člověka i situace. Umíte pracovat s obrazy, symboly a emocemi, a právě proto můžete mít silný dar pro kreativní tvorbu, psaní, práci s atmosférou nebo hluboké pochopení psychiky. Když jste v plusu, umíte z nejasna udělat jasno, protože Vaše vnímání jde do hloubky a zachytí i to, co druzí neumí pojmenovat.Pro druhé jste užiteční tím, že umíte dát člověku pocit, že je pochopený i v tom, co sám neumí vyslovit. Umíte vycítit, kde je strach, kde je iluze, kde je přání, a jemně to zrcadlit tak, aby se člověk nezhroutil, ale probral. Pro sebe je tento talent největší dar tehdy, když si hlídáte vnitřní čistotu myšlení. U této energie platí, že emoce a představy jsou velmi silné, když se do nich propadne strach, může to brzdit rozhodování a vyčerpávat. Když jste naopak v klidu, Vaše intuice funguje jako přesný kompas a vede Vás k lidem a situacím, které Vám sedí.\n\nTento talent využijete v psychologii, terapii, spirituálních oborech, v umění, psaní, fotografii, filmu, designu, v práci s atmosférou a také v rolích, kde je potřeba cit pro neviditelné vrstvy reality."
  },
  "19": {
    energy: 19,
    text: "(19) Váš talent je v životní síle, viditelnosti a schopnosti rozsvítit prostor kolem sebe. Máte přirozený dar přitahovat pozornost způsobem, který lidem dodává chuť žít, tvořit a jít dopředu. Umíte být motorem, který přináší radost, naději a energii do pohybu. Často máte v sobě schopnost vést, inspirovat a zároveň dávat lidem pocit, že u Vás mohou růst, že se nemusí zmenšovat. V plusu jste člověk, který umí úspěch nést lehce, bez zbytečného tlaku, a přitom je jasně cítit, že máte sílu i ambice. Pro druhé jste užiteční tím, že umíte povzbudit, sjednotit kolektiv a nastavit atmosféru, ve které se lidé nebojí být vidět. Umíte vytvořit pocit, že život může být velkorysý. Pro sebe je tento talent největší dar tehdy, když nepřestanete věřit v proud života a nezavřete se do sebekritiky. Když se energie nemá kam vyjádřit, může spadnout do vnitřní tmy. Jakmile však máte směr a prostor pro realizaci, devatenáctka se mění v silný magnet na příležitosti, uznání i prosperitu.\n\nTento talent využijete v jakékoli viditelné roli, v leadershipu, podnikání, veřejném vystupování, práci s publikem, v brandu, PR, eventech, vzdělávání i všude tam, kde je potřeba inspirovat a „rozsvítit“ lidi."
  },
  "20": {
    energy: 20,
    text: "(20) Váš talent je v rodové moudrosti, schopnosti vidět opakující se vzorce a propojovat to, co se zdá rozdělené. Často vnímáte, proč se lidem dějí stejné scénáře, odkud se bere jejich bolest, a co je potřeba uzavřít, aby se život pohnul. Máte dar hlubokého vhledu do vztahů, rodiny a osudu, a umíte člověku ukázat, kde je jeho lekce, aniž byste ho ponížili. Tato energie v plusu dává schopnost léčit spojováním, obnovovat vazby, nebo naopak správně pojmenovat, kde je potřeba nastavit hranici, aby se něco uzdravilo. Pro druhé jste užiteční tím, že umíte přinést pochopení, smíření a nový pohled, který odlehčí vnitřní tíhu. Umíte být průvodcem v těžkých rodinných tématech, protože vidíte hlouběji než jen povrchový konflikt. Pro sebe je tento talent největší dar tehdy, když držíte etiku a nenecháte se stáhnout do role soudce. Jakmile začnete lidi tlačit do „správnosti“, energie tvrdne a vztahy se lámou. Když ale zůstanete v moudrosti, Vaše slovo má velkou váhu a dokážete měnit osudy jemně a přesně.\n\nTento talent využijete v poradenství, psychologii, terapii, mediaci, práci s rodinnými systémy, ve vzdělávání a také v rolích, kde je potřeba vidět souvislosti, uzavírat staré příběhy a tvořit nový začátek."
  },
  "21": {
    energy: 21,
    text: "(21) Váš talent je v celistvosti a v nadhledu. Umíte vidět situace „shora“ - ne jen jeden detail, ale celý obraz, souvislosti, dopady, motivy lidí i neviditelné propojení událostí. Díky tomu často přirozeně sjednocujete: dáváte dohromady rozdílné názory, kultury, styly práce i temperamenty, a přitom neztrácíte směr. Máte v sobě schopnost dělat mosty - mezi lidmi, mezi světy, mezi tím, co se zdá neslučitelné. Pro druhé jste užiteční tím, že umíte uklidnit chaos bez toho, abyste ho zlehčovali. Když se něco rozpadá na konflikty nebo nedorozumění, Vy umíte vrátit dialog do roviny, kde se dá dohoda vůbec najít. Často také umíte lidem otevřít horizont: připomenout jim, že existuje víc možností, než jaké vidí v dané chvíli. Pro sebe je to dar velké životní šíře. Když držíte vděčnost a realistický krok za krokem, Vaše energie přitahuje správná prostředí, správné lidi a správné příležitosti, které Vás přirozeně posouvají „na vyšší úroveň“.\n\nTento talent využijete v mezinárodních projektech, cestování a jazycích, v diplomacii a vyjednávání, v komunitách a týmové spolupráci, a všude tam, kde je potřeba propojovat lidi a dotahovat věci do celku."
  },
  "22": {
    energy: 22,
    text: "(22) Váš talent je v lehkosti, svobodě a v schopnosti začínat znovu, bez zbytečné tíhy. Umíte se nadechnout tam, kde se ostatní dusí pravidly, strachem nebo minulostí. Váš vnitřní dar je vidět možnosti. Ne jako naivní „všechno je možné“, ale jako živou schopnost otevřít nové dveře, zkusit jiný směr, přinést do života pohyb a čerstvý vzduch. Máte talent vycítit, kdy je potřeba přestat se trápit a udělat jednoduchý, odvážný krok, který změní celé nastavení. Pro druhé jste užiteční tím, že jim vracíte chuť do života. Umíte odlehčit napětí, zlomit začarovaný kruh a ukázat, že člověk nemusí zůstávat v kleci, kterou si postavil sám. Lidé vedle Vás často získají odvahu být autentičtí, přestat se bát odsouzení a dovolit si novou kapitolu. Pro sebe je tento talent nejsilnější, když se svoboda spojí s vědomím. Ne utéct, ale zvolit. Když držíte vlastní hranice a zodpovědnost, Vaše lehkost se mění v obrovskou výhodu: jste flexibilní, rychlí, přirození, a život s Vámi spolupracuje.\n\nTento talent využijete v kreativní tvorbě, podnikání a inovacích, v cestování, komunikaci a práci s lidmi, a všude tam, kde je potřeba přinést nové řešení, humor, nadhled a odvahu začít znovu."
  }
};

const talentPositions = [
  { key: "B", label: "Váš hlavní talent" },
  { key: "B1", label: "Váš přirozený talent" },
  { key: "B2", label: "Talent, který je vám dán, ale je třeba ho rozvíjet" }
];

function getTalentTextByEnergy(energy) {
  return talentTexts[String(energy)] || null;
}

function findTalents(result) {
  const talents = [];
  const usedEnergies = new Set();

  talentPositions.forEach(function(position) {
    const energy = result[position.key];

    if (energy === undefined || energy === null || energy === "") return;

    const energyKey = String(energy);

    // If the same number repeats, we do not duplicate the same text.
    // Example: 18-9-9 gives only two unique talents: 18 and 9.
    if (usedEnergies.has(energyKey)) return;

    const data = getTalentTextByEnergy(energyKey);

    talents.push({
      position: position.key,
      label: position.label,
      energy: Number(energy),
      text: data ? data.text : ""
    });

    usedEnergies.add(energyKey);
  });

  return talents;
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

      // Финальный абзац таланта — начинается с "Tento talent"
      var isApplication = /^Tento talent/i.test(part.trim());
      var className = isApplication ? ' class="talent-application"' : '';

      return '<p' + className + '>' + safe + '</p>';
    })
    .join("");
}

function renderTalentText(raw) {
  return '<div class="energy-text">' + renderRichText(raw) + '</div>';
}

function renderTalentsHTML(talentsOrResult) {
  const talents = Array.isArray(talentsOrResult) ? talentsOrResult : findTalents(talentsOrResult);

  if (!talents || talents.length === 0) {
    return '<div class="energy-item programs-card talents-card talents-print-card">' +
      '<section class="talents-print-page talents-page-title talents-density-center">' +
        '<div class="talents-print-inner">' +
          '<h2>Vaše talenty</h2>' +
          '<p>Talenty nebyly nalezeny.</p>' +
        '</div>' +
      '</section>' +
      '</div>';
  }

  function renderTalentItem(item, index) {
    return '<div class="program-found-item talent-print-item talent-print-item-' + index + '">' +
      '<div class="program-title">' +
        escapeHtml(item.label) +
      '</div>' +
      renderTalentText(item.text) +
      '</div>';
  }

  const firstTalentHTML = talents[0] ? renderTalentItem(talents[0], 1) : "";

  const secondPageTalentsHTML = talents
    .slice(1)
    .map(function(item, index) {
      return renderTalentItem(item, index + 2);
    })
    .join("");

  /*
    Если талантов всего 2:
    заголовок + оба таланта на одной странице.

    Если талантов 3:
    первая страница = заголовок + первый талант,
    вторая страница = второй и третий талант.
  */

  if (talents.length <= 2) {
    const allTalentsHTML = talents.map(function(item, index) {
      return renderTalentItem(item, index + 1);
    }).join("");

    return '<div class="energy-item programs-card talents-card talents-print-card talents-count-' + talents.length + '">' +
      '<section class="talents-print-page talents-page-title talents-density-balanced">' +
        '<div class="talents-print-inner">' +
          '<h2>Vaše talenty</h2>' +
          allTalentsHTML +
        '</div>' +
      '</section>' +
      '</div>';
  }

  return '<div class="energy-item programs-card talents-card talents-print-card talents-count-' + talents.length + '">' +
    '<section class="talents-print-page talents-page-title talents-density-balanced">' +
      '<div class="talents-print-inner">' +
        '<h2>Vaše talenty</h2>' +
        firstTalentHTML +
      '</div>' +
    '</section>' +
    '<section class="talents-print-page talents-page-continue talents-density-balanced">' +
      '<div class="talents-print-inner">' +
        secondPageTalentsHTML +
      '</div>' +
    '</section>' +
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

module.exports = {
  findTalents,
  renderTalentsHTML
};