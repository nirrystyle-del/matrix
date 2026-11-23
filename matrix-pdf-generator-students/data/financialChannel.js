const { findLocalProgramsInValues, renderLocalProgramNoteHTML } = require("./programs");
// =========================
// FINANCIAL CHANNEL ENGINE
// Source: Деньги.docx
// Logic:
// C  = Finanční karma
// C1 = Vstup do finančního kanálu
// M  = běžný výklad peněžního kanálu
// L  = běžný výklad peněžního kanálu
// =========================

if (typeof escapeHtml !== "function") {
  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

const financialChannelTexts = {
  "2": {
    "common": {
      "karma": "(2) Karma. Ve vaší práci největší příjem neplynou tolik z odborných kvalit, ale spíše díky schopnosti efektivně komunikovat a budovat vztahy s partnery, kolegy a klienty. Vynikáte v jednání na různých úrovních a prokazujete své přirozené diplomatické schopnosti. Je prospěšné chápat svůj skutečný účel a touhy, a naslouchat vlastní intuici. Zapojte se do procesu seberozvoje a zaměřte se na své jedinečné (léčivé, energetické) schopnosti. Avšak vnesení disharmonie do jakýchkoli skupin může škodit. Vyhněte se pomlouvání, intrikování a šíření drbů. Soustřeďte se na spolupráci, vyvarujte se sobectví a podvodů. Důležité je naučit se důvěřovat lidem, avšak nedávejte slepě věření a nedělejte si z blízkých přátel idoly. Sdílejte své znalosti upřímně a bez lítosti. Je důležité dosáhnout harmonie mezi duchovním a materiálním světem, protože až poté můžete začít těžit z energie spojené s penězi. Nepřátelství, pomluvy a podněcování konfliktů mohou způsobit ztrátu financí. Naopak, diplomacie a vyvarování se konfliktům může pomoci vyřešit karmické problémy a přitáhnout finanční prosperitu."
    }
  },
  "3": {
    "female": {
      "karma": "(3) Karma. V minulém životě jste tento úkol nezvládli. Přijímali jste mužské povinnosti v rodině, vstupovali do vztahů s muži a s časem jste v nich viděli nějakou slabost, nebo jste se neustále snažili kontrolovat muže, přebírajíce na sebe veškerou odpovědnost. Vaše vztahy s ženami také nebyly moc dobré a pravděpodobně jste měli neustálé problémy s matkou, nejenom že jste se hádali, ale nikdy jste ji nedokázali přijmout. Proto je velmi důležité tyto věci napravit v této inkarnaci, aby se karma peněz vyrovnala.",
      "entry": "(3) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Abyste mohli otevřít svůj finanční kanál, musíte se zbavit kontroly. Příliš mnoho kontrolujete budoucnost i minulost, a kvůli tomu nejste přítomni\n\nv současnosti. Kontrola je to, co uzavírá přístup k vašemu finančnímu toku.",
      "general": "(3) Pro dosažení finanční stability je klíčové budovat pozitivní vztahy se ženami ve všech aspektech intimity, od vztahu s matkou po vztahy s klientkami. Peníze ve vašem životě mají tendenci přicházet skrze tato spojení nebo pod jejich vlivem. Je pro vás důležité vytvářet klidnou a harmonickou atmosféru kolem sebe. Udržujte si dobrou náladu, usilujte o lásku a harmonii ve své duši. Ve své práci zdůrazňujte krásu a laskavost, protože tyto vlastnosti jsou ženami ceněny. Zapojujte se do kreativních aktivit, budujte rodinné vztahy, a pokud máte zájem o potomstvo, podporujte plození.Buďte velkorysí a spravedliví ve svých interakcích s ostatními. Je důležité si uvědomit, že peníze často přicházejí spojením s ženami, a proto je důležité udržovat pozitivní vztahy s nimi. Zároveň se vyvarujte projevům agresivity a ničení, nebo přílišnému připoutání k hmotným statkům a pozemským věcem. S financemi a prosperitou byste měli zacházet filozoficky a klidně. Úspěchy i dočasné obtíže jsou součástí života, a proto byste se neměli stresovat. Neupadávejte do paniky a nedělejte unáhlená rozhodnutí.Snažte se uvolnit kontrolu ve vztazích s blízkými a dát jim více svobody, což přispívá k harmonii a prosperitě ve vašem životě."
    },
    "male": {
      "karma": "(3) Karma. V minulém životě jste nezvládli mužské povinnosti a také jste nesprávně využívali energii plodnosti. Konkrétně jste se vzdali tvoření jakýchkoli plodů ve svém životě a čekali jste, že přijdou samy od sebe, nebo prostřednictvím žen. V tomto životě se také můžete spoléhat na ženskou pomoc, na ženskou energii, a příliš se nezajímat o vlastní rozvoj. Nebo můžete zůstat u starého vzorce chování, být příliš nezodpovědní a nedokážete převzít vládu nad vlastním životem. Případně nechcete přijmout odpovědnost za jakoukoli ženu a vytvořit rodinu. Vaším karmickým úkolem je stát se nejzodpovědnější verzí sebe sama, naučit se tvořit a rozvíjet.",
      "entry": "(3) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Váš finanční kanál se uzavírá, když nepřebíráte zodpovědnost za své peníze, za svou práci, za své projekty a jenom se necháváte unášet proudem. Volíte spoléhat se na druhé, na okolnosti, na vesmír nebo na blízké osoby, ale sami zůstáváte zcela nezodpovědní. Právě to uzavírá váš finanční tok. Abyste ho otevřeli, zodpovědnost se musí stát vaším hlavním životním mottem.",
      "general": "(3) Pro dosažení finanční stability je klíčové budovat pozitivní vztahy se ženami ve všech aspektech intimity, od vztahu s matkou po vztahy s klientkami. Peníze ve vašem životě mají tendenci přicházet skrze tato spojení nebo pod jejich vlivem. Je pro vás důležité vytvářet klidnou a harmonickou atmosféru kolem sebe. Udržujte si dobrou náladu, usilujte o lásku a harmonii ve své duši. Ve své práci zdůrazňujte krásu a laskavost, protože tyto vlastnosti jsou ženami ceněny. Zapojujte se do kreativních aktivit, budujte rodinné vztahy, a pokud máte zájem o potomstvo, podporujte plození.Buďte velkorysí a spravedliví ve svých interakcích s ostatními. Je důležité si uvědomit, že peníze často přicházejí spojením s ženami, a proto je důležité udržovat pozitivní vztahy s nimi. Zároveň se vyvarujte projevům agresivity a ničení, nebo přílišnému připoutání k hmotným statkům a pozemským věcem. S financemi a prosperitou byste měli zacházet filozoficky a klidně. Úspěchy i dočasné obtíže jsou součástí života, a proto byste se neměli stresovat. Neupadávejte do paniky a nedělejte unáhlená rozhodnutí.Snažte se uvolnit kontrolu ve vztazích s blízkými a dát jim více svobody, což přispívá k harmonii a prosperitě ve vašem životě."
    }
  },
  "4": {
    "common": {
      "karma": "(4) Karma. Můžete se stát skutečně bohatým a úspěšným člověkem, pokud rozvinete své vůdčí schopnosti a budete hospodařit moudře a spravedlivě. Je důležité postarat se o svou rodinu a klan a vytvořit si doma své vlastní mini impérium. Peníze přicházejí především prostřednictvím kontaktů s muži (klienty, partnery). Důležité je umět spolupracovat a přijímat jejich pomoc. Noste svou moc nad světem a okolnostmi s dobrými úmysly, prokazujte milosrdenství a respektujte své okolí, ty, kteří jsou slabší. Nemůžete používat svou sílu a moc k ničení nebo násilí nebo využívat lidi pro své vlastní účely. Jinak můžete velmi rychle ztratit vše, co máte. Důležitý je kontakt s otcem a jeho pomoc do 20 let. Naučte se přiznat a opravit své chyby. Rozvíjejte cenné dovednosti v odpuštění, vděčnosti, bezpodmínečném přijímání lidí a okolností a schopnosti kompromisů.",
      "entry": "(4) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Nezodpovědnost za svou práci nebo svůj život uzavírá váš finanční tok, stejně jako nadměrná agrese, tlak a despotismus vůči ostatním lidem, zejména vůči vlastní rodině. Naopak správné řízení svého života a správné projevení vašich císařských vlastností bez násilí vám pomůže otevřít váš finanční tok. Klíčové je být zodpovědný a každý den přebírat odpovědnost za každou svou činnost a rozhodnutí.",
      "general": "(4) Máte velmi vůdčí energii a jste zodpovědný jedinec. Peníze přicházejí prostřednictvím vaší mužské energie a aktivit. Je důležité si uvědomit, že abyste dosáhli finančního úspěchu, musíte převzít zodpovědnost za své kroky a rozhodnutí. Bez vašeho vlastního úsilí nedosáhnete výsledků.Buďte stateční a rozhodní ve svých jednáních. Pokud jste dlouho zůstali na jednom místě, nebojte se požádat o zvýšení platu. Rozhodnutí začít podnikat může být pro vás také výhodné. Důležité je zvolit pečující a férový přístup k lidem, nikoli taktiku tyranie.Je však důležité, abyste, jakmile získáte moc, nepoužívali tuto moc zneužívat. To by mohlo vést k odlivu peněžní energie. Moc by měla být použita s odpovědností a respektem k ostatním."
    }
  },
  "5": {
    "common": {
      "karma": "(5) Karma.  Abyste neblokovali tok financí, je důležité pracovat na svém myšlení. Musíte se neustále učit a rozvíjet své dovednosti.Nemějte strach z moderních technologických řešení v práci, která zjednodušují procesy. Může se stát, že se držíte starých postupů, které jste se naučili před lety. Nové věci by pro vás nemusely být něčím hrozným, neznámým nebo nebezpečným. Mějte otevřený pohled na nové technologie a buďte ochotni restrukturalizovat své postupy, pokud to bude potřeba. Přílišný konzervatismus a odmítání změn mohou bránit vašemu profesnímu růstu. Sdílení znalostí je klíčem k udržení toku peněz. Také se naučte efektivně komunikovat veřejně, protože to může přispět k vašemu profesnímu úspěchu.",
      "entry": "(5) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Abyste neblokovali tok financí, je důležité pracovat na svém myšlení. Musíte se neustále učit a rozvíjet své dovednosti.Nemějte strach z moderních technologických řešení v práci, která zjednodušují procesy. Může se stát, že se držíte starých postupů, které jste se naučili před lety. Nové věci by pro vás nemusely být něčím hrozným, neznámým nebo nebezpečným. Mějte otevřený pohled na nové technologie a buďte ochotni restrukturalizovat své postupy, pokud to bude potřeba. Přílišný konzervatismus a odmítání změn mohou bránit vašemu profesnímu růstu. Sdílení znalostí je klíčem k udržení toku peněz. Také se naučte efektivně komunikovat veřejně, protože to může přispět k vašemu profesnímu úspěchu.",
      "general": "(5) Peníze přicházejí prostřednictvím zákona a pořádku a také díky vazbě mezi učitelem a žákem. Důležité je předávat své znalosti, neustále se učit nové věci a nebránit se moderním technologickým řešením, která usnadňují procesy. Kvůli tomu, že číslo 5 symbolizuje provokace, lidé mající toto číslo v narozeninovém klíči mají tendenci držet se toho, co se naučili před mnoha lety. Nové věci pro ně mohou působit jako něco neznámého, možná i trochu nebezpečného, co vyžaduje změnu. Kvůli svému konzervativnímu přístupu neradi mění své postupy, což může bránit jejich profesnímu růstu. Lidé s číslem 5  získávají následující výhody: jsou schopní se věnovat duchovním činnostem a budování komunikací; nabízejí rady ve všech oblastech, včetně esoteriky; mohou být spojeni s církví; mají prospěch ze sociálního pojištění; mají užitečné kontakty a odkazy; setkávají se a jednají s různými lidmi; jsou dobrými komunikátory a mají schopnost vést rozhovory; v oblasti financí mají spojení s lidmi, kteří jim mohou poskytnout materiální pomoc, pokud je to potřeba."
    }
  },
  "6": {
    "common": {
      "karma": "(6) Karma.  Je důležité mít možnost volby. Je nutné, abyste měli jasně definované cíle a abyste se neuvízli ve stavu neustálého váhání. Pokud nepřijmete a nemáte rád svůj vzhled, mohou vás potkat problémy s financemi. Z pohledu karmy je vhodné vyvarovat se fixace na konkrétní osobu. Taktéž je důležité zbavit se nadměrného perfekcionismu. Všechny tyto faktory vám brání dosáhnout dobré finanční úrovně.",
      "entry": "(6) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Vaším úkolem je budovat harmonické vztahy, vytvářet mosty, propojení a kontakty mezi lidmi. Dobrou volbou by mohlo být pracovat jako poradce, manažer pro veřejný vztahy nebo novinář. Můžete si vytvořit svůj vlastní zájmový klub nebo se věnovat provozování sňatkové agentury. Kreativní směry jsou také vhodné jako povolání: návrhář, stylistka, kadeřník, módní návrhář, výtvarník, organizátor událostí, moderátor či producent. V životě se často ocitáte před volbou a nabídkou lákavých pracovních příležitostí. Občas přicházejí lukrativní projekty a nabídky od různých společností. Nicméně je pro vás vždy obtížné si vybrat oblast působnosti nebo firmu, pro kterou pracovat, a váháte s prováděním změn. Pokud nepracujete z lásky, peníze také zůstávají zablokovány.",
      "general": "(6) Pohoda k vám přichází skrze vytváření krásy, lásky a harmonie. Je mimořádně důležité tyto pocity v sobě rozvíjet, starat se o sebe, dopřávat si krásné věci a vytvářet kolem sebe harmonické a pohodlné prostředí. Často nejsilnější finanční proudy přicházejí s narozením dětí, proto byste to neměli odkládat. Budujte s partnerem krásný a důvěryhodný vztah plný lásky a vzájemného respektu. Učte druhé svým příkladem a pomáhejte jim. Úspěch může přijít v oblastech jako psychologie, sociální podpora, sociální sítě, seznamovací agentury a další. Nesmíte zapomínat na své vlastní potěšení, zvláště v obtížných finančních dobách. Může se stát, že si za poslední peníze pořídíte krásnou věc, která potěší vaše srdce, a poté se zázračně zlepší finanční situace. Udržujte pořádek a krásu v domácnosti. Šiřte lásku bez očekávání odměny. Nekomercializujte svoji krásu a lásku. Sdílejte recepty na krásu, harmonii a úspěch. Dobrou volbou by mohlo být povolání, kde pomáháte ostatním získat krásu a styl."
    }
  },
  "7": {
    "common": {
      "karma": "(7) Karma. Je důležité být aktivní a cílevědomí ve svém podnikání a v životě obecně. Stanovte si jasné cíle a postupujte k nim krok za krokem. Nedovolte, aby vás zastavila pasivita, a buďte tvůrci svého osudu. Je pravda, že vaše karmické zákonitosti mohou hrát roli v tom, jak se vaše finanční situace vyvíjí, a proto je důležité jednat svobodně a nezůstávat podřízenými nebo závislými na druhých.",
      "entry": "(7) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Aby se peníze nemusely blokovat, je klíčové naučit se delegovat a rozdělovat práci mezi ostatními. Měli byste si vytvořit svůj vlastní tým pro rozšíření svého podnikání. \"Jeden v poli není válečník\" - je důležité si to zapamatovat. Pokud se pokusíte dělat všechno sami, váš růst bude omezený. Bude to možné, ale velmi pomalé, a pravděpodobně budete zažívat zklamání, protože náklady na vaši energii nebudou v souladu s dosaženými výsledky.Je také důležité, abyste se naučili dosahovat svých cílů harmonicky a bez konfliktů. Neměli byste se snažit dosáhnout svých cílů za každou cenu a přes hlavy ostatních. Rovněž je důležité, abyste neustále pracovali na sobě a nedopustili se lenosti a pasivity.",
      "general": "(7) Pro vás jsou ideální kurzy, které vám umožní maximalizovat vaše vůdčí schopnosti. Můžete se věnovat vlastnímu podnikání, řízení velkého podniku nebo vojenské kariéře. Existuje také možnost stát se politickým nebo duchovním vůdcem pro velké množství lidí. S ohledem na vaši aktivitu a mobilitu by pro vás bylo vhodné vybírat si práce spojené s cestovním ruchem, logistikou, cestováním, dopravou a stroji. Optimalizovali byste své schopnosti také angažmá v profesionálních sportech s vysokou fyzickou aktivitou, trenérstvím nebo rolí instruktora. Během životní cesty je důležité, abyste si zvolili smysluplný duchovní cíl a zůstali věrní této směrnici. Očekávejte testy síly a stálosti vašich názorů a ideálů. Projdete-li jimi, dosáhnete úspěchu a prosperity. Máte schopnost vycházet vítězně z jakékoli obtížné situace a dokážete kombinovat dvě nebo více oblastí zájmu. Práce s dopravou a logistikou by pro vás mohla být vhodná. Vzhledem k číslu 7 máte vždy možnost vydělat peníze, ať už prostřednictvím práce nebo investic.Máte energii vůdce a váš potenciál je stále v pohybu. Vydělávání peněz vám může umožnit stát se jedním z nejproduktivnějších lidí na světě."
    }
  },
  "8": {
    "common": {
      "karma": "(8) Karma.Pokud usilujete o finanční blahobyt, klíčová je vaše schopnost porozumět nejobecnějším vzorcům životních procesů a jednat čestně. Neměli byste hledat spravedlnost u soudu v souvislosti s různými finančními situacemi. Formální zákony vám nepřinesou mnoho užitku, ale důležité je rozumět vyšší spravedlnosti. Je důležité si uvědomit, že abstrahujete od okolností a v případě potíží zkoumáte, proč vám byla daná tato situace. Proč jste ji přitahovali, proč se stala a jakou důležitou zkušenost přináší, jakou důležitou misi je třeba splnit. Buďte upřímní ve finančních záležitostech, vytvořte si systém kolem sebe. Jednejte cíleně a vyhněte se finančním dobrodružstvím. Pro dosažení pozitivních změn v životě je důležité přepracovat životní postoje zděděné od rodičů. Když přestanete věřit, že peníze jsou špinavé a že všichni bohatí jsou zločinci, změnou vašeho vědomí se změní i vaše finanční situace.",
      "entry": "(8) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Peníze budou blokovány, pokud se budete často zabývat hledáním spravedlnosti, vstupováním do konfliktů a souděním ostatních. Je důležité se naučit udržovat vyvážený přístup ke všemu, co děláte, a zůstat neutrální. Namísto toho, abyste hledali spravedlnost, je pro vás důležité hledat pravdu, zkoumat skryté motivy a procesy, které ovlivňují lidi a události. Pokud budete pozitivně ovlivňovat ostatní, projevovat upřímnost a pomáhat jim najít vztahy příčiny a následku, a přijímat lidi takové, jací jsou, místo abyste je soudili, pak budete mít otevřený kanál pro peníze.",
      "general": "(8) Vše, co je spojeno s mocenskými strukturami, bude pro vás vhodné. Veřejná služba bude pro vás příhodná. Pokud se věnujete podnikání, mělo by to být ve spolupráci s vládními agenturami.  Pokud jde o peníze, měli byste se držet mezí stanovených zákonem nebo karmických důsledků.Tato energie vám vždy poskytne přesně tolik, kolik si zasloužíte (a také tolik, kolik si sami myslíte, že si zasloužíte). Pro dosažení většího finančního úspěchu je důležité, abyste věřili, že jste hodni velkého bohatství. Měli byste mít zkušenosti v oblasti koordinace různých systémů a procesů. Může se jednat o řízení řetězce obchodů, podniků nebo veřejných služeb (vymáhání práva, soudní orgány, výkonná moc). Je důležité patřit do velkého hierarchického systému, jako je vojenský, právní nebo ekonomický (účetní, finanční). Úspěšné bude také provozování a rozvoj vlastního podnikání, zejména v oblastech, které se týkají uvedených kategorií."
    }
  },
  "9": {
    "common": {
      "karma": "(9) Karma. Některé věci vytvářejí překážky v oblasti financí v souladu s karmou. Zahrnují: 1. Uzavřenost: Odmítání nových příležitostí a nových lidí. Místo toho, abyste se otevřeli novým zkušenostem, zůstáváte uzavřeni ve svém komfortním prostoru.2. Strach z konkurence: Obavy z konkurence a nedostatek sebejistoty vás mohou bránit v prosazování se na trhu. Místo toho, abyste se soustředili na své jedinečné dovednosti, ztrácíte energii tím, že se snažíte porovnávat se s ostatními.\n\n3. Neschopnost sdílet znalosti: Nedostatek ochoty sdílet své znalosti a dovednosti s ostatními vás může omezit. Spolupráce a výměna myšlenek mohou vést k novým příležitostem a rozvoji.4. Neschopnost dokončit započaté projekty: Pokud nejste schopni dokončit to, co jste začali, může to znamenat ztrátu příležitostí a financí. Důležité je získat disciplínu a dokončovat započaté projekty.5. Pýcha ohledně znalostí.Je klíčové si uvědomit tyto překážky a pracovat na jejich překonání. Otevřenost novým příležitostem, spolupráce s ostatními a schopnost dokončit projekty mohou vést k finančnímu růstu a harmonii ve vašem životě.",
      "entry": "(9) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Naučte se nejen žít ve světě vašich myšlenek, ale také provádět některé akce ve světě hmotného světa. A zároveň se ujistěte, že vaše pracoviště je izolované od ostatních - to zvýší vaši produktivitu a otevře cestu k finančním příjmům. Je také velmi důležité sdílet znalosti, které získáte, s ostatními lidmi. Předávat tu moudrost, kterou máte. Protože když neděláte to, co byste měli, a nesdílíte s ostatními to, co víte , vaše peníze jsou blokovány.",
      "general": "(9) Můžete přijímat peníze od studentů a následovníků prostřednictvím sdílení důležitých a cenných znalostí. Je pro vás důležité přesně rozumět dovednostem a informacím, které jsou skryty před většinou (meditace, náboženství, léčení). Sdílejte své znalosti, rozvíjejte v sobě pozitivní myšlení a učte to i ostatní. Snažte se být otevření lidem a sympatičtí, jak nejlépe dovedete. Ve vztahu k penězům je důležité udržovat moudrou zlatou střední cestu. Mírněte své výdaje, ale nepřehánějte to ve šetření. Nedávejte přednost dlouhému osamocení a nepchlubte se jedinečnými znalostmi, které by vás stavěly nad ostatní. Tyto znalosti vám byly dány za účelem šíření a výuky. Nenechte se unést jen vyděláváním peněz a zaměřením se pouze na materiální bohatství. Zároveň se nedopouštějte extrémů v samotářství nebo odstupu od společnosti."
    }
  },
  "10": {
    "common": {
      "karma": "(10) Karma. Velmi často se cítíte unavení a máte chuť být líní, přestat se rozvíjet. Na druhé straně může být obtížné relaxovat, protože všechno chcete mít pod kontrolou a předem propočítávat všechny možnosti. Toto je vaše peněžní karma, na které můžete pracovat. Aby peníze mohly proudit do vašeho života, musíte odstranit lenost a potřebu kontroly, naučit se relaxovat a důvěřovat vesmíru. Vesmír vás v tomto životě provází, a pokud si předem vytvoříte negativní scénáře, můžete přilákat nepotřebné obtíže místo darů, které vám svět nabízí.Štěstí v penězích spočívá ve schopnosti se uvolnit a důvěřovat toku. Peníze mohou přijít nečekaným způsobem, právě v ten správný okamžik. Když se dokážete uvolnit, máte schopnost být ve správný čas na správném místě a najít užitečné kontakty. Pro vás by bylo nejlepší pracovat na volné noze, než se striktně držet pevného pracovního harmonogramu.",
      "entry": "(10) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Pro dosažení finančního úspěchu je klíčové naučit se uvolnit a důvěřovat vesmíru, stejně jako překonat lenost a pasivitu. Jakmile se začnete bát a kontrolovat situaci příliš pevně, peníze se mohou stát nedosažitelnými. Je důležité najít rovnováhu mezi aktivním úsilím a důvěrou v univerzální sílu, která vás podpoří na cestě k finanční prosperitě.",
      "general": "(10) Vaše peníze a prosperita pramení ze štěstí narození. Je klíčové žít a pracovat bez stresu. Mějte aktivní přístup, ale vyhněte se vyčerpávající fyzické práci. Přijímejte s radostí své povinnosti a plňte je svědomitě. Důležité je nacházet radost ve své činnosti. K tomu je třeba naslouchat sobě, své intuici a důvěřovat vyšším silám, které vám pomáhají. Nepřestávejte vděčit osudu za úspěchy a šťastné příležitosti. Zachyťte tuto pozitivní energetickou vlnu a úspěšně se po ní pohybujte. Buďte štědří a pomáhejte ostatním. Používejte svůj příklad k ukázání, jak snadné je realizovat plány a užívat si práci. Experimentujte s neobvyklými profesemi a novými oblastmi činnosti. Zvolte si práci na volné noze nebo vlastní podnikání. Práce pod plánem někoho jiného není pro vás ideální."
    }
  },
  "11": {
    "common": {
      "karma": "(11) Karma. Dobré peníze můžete vydělat jak fyzickou prací, tak vírou ve vlastní síly. Je důležité umět zvládat destruktivní impulzy agrese a efektivně řídit svou energii. Nenavracejte se do workoholismu a nekladěte na ostatní nepřiměřený pracovní tlak. Snažte se vyhýbat konfliktům a nepoužívejte násilí jako prostředek řešení sporů. Naučte se umět ustupovat, nečekejte pochvalu a souhlas od blízkých, zejména v oblasti financí. Měli byste se také snažit odpouštět a přijímat druhé takové, jací jsou.Pro dosažení úspěchu je důležité respektovat a realizovat své sexuální touhy, nepociťovat za to stud a užívat si sexuálního života. Můžete také využít energii přírodních živlů k obnově a regeneraci. Doporučuje se trávit čas v přírodě, ideálně poblíž vodních zdrojů, abyste načerpali novou energii.",
      "entry": "(11) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Dobré peníze můžete vydělat jak fyzickou prací, tak vírou ve vlastní síly. Je důležité umět zvládat destruktivní impulzy agrese a efektivně řídit svou energii. Nenavracejte se do workoholismu a nekladěte na ostatní nepřiměřený pracovní tlak. Snažte se vyhýbat konfliktům a nepoužívejte násilí jako prostředek řešení sporů. Naučte se umět ustupovat, nečekejte pochvalu a souhlas od blízkých, zejména v oblasti financí. Měli byste se také snažit odpouštět a přijímat druhé takové, jací jsou.Pro dosažení úspěchu je důležité respektovat a realizovat své sexuální touhy, nepociťovat za to stud a užívat si sexuálního života. Můžete také využít energii přírodních živlů k obnově a regeneraci. Doporučuje se trávit čas v přírodě, ideálně poblíž vodních zdrojů, abyste načerpali novou energii.",
      "general": "(11) Dobré peníze můžete vydělat fyzickou prací i vírou ve vlastní síly. Je důležité v sobě uklidnit destruktivní impulzy agrese a řídit svou energii. Nestaňte se workoholikem a nenuťte ostatní pracovat nad míru. Snažte se ve sporech nepoužívat sílu, naučte se ustupovat a nečekejte pochvalu a souhlas od blízkých (zejména v oblasti financí). Naučte se odpouštět a přijímat druhé takové, jací jsou. Pro úspěch je důležité realizovat své sexuální touhy, nestydět se a užívat si sex. Využijte energii přírodních živlů k obnově. Dobijte se v přírodě (vhodné je vyrazit k vodním zdrojům). Toto je energie podnikání, freelancingu, práce s velkou zodpovědností a aktivního pohybu. Nemůžete klidně sedět. Je vhodná pro sport a do oblastí, kde je potřeba cestovat. Je důležité naučit se věřit v sebe a svůj potenciál. Neměli byste jednat prostřednictvím agrese, ale místo toho se naučit prosazovat svou cestu klidnými energiemi."
    }
  },
  "12": {
    "common": {
      "karma": "(12) Karma.Nemůžete pracovat silou nebo pracovat zdarma nebo za mizernou mzdu, pak budete mít nucené náklady a ztráty; Je také nemožné zapojit se do falešné dobročinnosti, neustále si půjčovat peníze a nechat se vést do pozice někoho jiného „chudák já, nešťastník“. Sám se nemůžeš stát obětí.",
      "entry": "(12) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Mějte na paměti, že váš atypický způsob myšlení a kreativita jsou vašimi silnými stránkami. I když se můžete cítit odlišní od ostatních a občas se cítit jako černá ovce, nebojte se toho. Právě tato odlišnost může být vaší silou a vést vás k úspěchu ve vaší kariéře. Naučte se říkat \"ne,\" abyste chránili své zdroje a nepodléhali manipulacím lidí, kteří by chtěli využít vaší laskavosti na úkor vašeho finančního růstu.",
      "general": "(12) Vaše finanční pohoda může vzejít z pomoci druhým a dobročinnosti. K tomu je potřeba opustit obvyklou roli oběti a přestat se zbytečně soucítit se sebou. Lepší využití svých zdrojů vám umožní lépe podpořit ostatní. Nestěžujte si, naučte se odmítnout a nebojte se přijmout spravedlivou odměnu za svou práci. Hledejte střední cestu mezi sebejistotou a pokorou. Každý den si dopřejte něco krásného, ať už jde o malé věci. Snižte tendenci kontrolovat každý výdaj. Předejte své projekty dál a s důvěrou propusťte své děti do svého vlastního života, až budou schopné a nezávislé. Důležité je naučit se dávat lásku bez očekávání něčeho za to zpět. To může být dosaženo pouze skrze bezpodmínečné sebepřijetí, lásku a sebeúctu. Poté budete moci jako šťastný jedinec sdílet dobro a harmonii s mnoha lidmi. Je prospěšné naučit se konstruktivně přijímat kritiku: neztrácet víru v sebe, ale zároveň se neponášet do pýchy."
    }
  },
  "13": {
    "common": {
      "karma": "(13) Karma. Pro finanční prosperitu je důležité v průběhu života se měnit, být připraven na různé transformace nebo se zaměřit na zaměstnání související s globálními změnami, krizemi a hraničními situacemi. Berete jakékoli, i nejneočekávanější změny osudu, jako běžnou součást života. Je užitečné čas od času změnit rozsah svých činností a způsoby výdělku. Zároveň dovedete všechny situace k produktivnímu závěru. Je vhodné si zaznamenat své znalosti, aby mohly být v budoucnu využity (vytvářet kurzy, psát knihy). Pohodlné bude i zaměření na práci spojenou s neustálým stěhováním nebo cestováním.",
      "entry": "(13) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Pro finanční prosperitu je důležité v průběhu života se měnit, být připraven na různé transformace nebo se zaměřit na zaměstnání související s globálními změnami, krizemi a hraničními situacemi. Berete jakékoli, i nejneočekávanější změny osudu, jako běžnou součást života. Je užitečné čas od času změnit rozsah svých činností a způsoby výdělku. Zároveň dovedete všechny situace k produktivnímu závěru. Je vhodné si zaznamenat své znalosti, aby mohly být v budoucnu využity (vytvářet kurzy, psát knihy). Pohodlné bude i zaměření na práci spojenou s neustálým stěhováním nebo cestováním.",
      "general": "(13) Váš kariérní úspěch a prosperita jsou spojeny s oblastmi, kde se vytváří něco nového prostřednictvím krizových bodů. To se týká jak lidí, tak věcí. Doporučená zaměření zahrnují urgentní péči, porodnictví, kriminalistiku, chirurgii nebo léčbu závislostí. Jste schopni účinně pracovat v nejtěžších morálních a fyzických podmínkách, jako jsou oblast rituálních služeb, psychologická pomoc, psychiatrie, krizový management. Máte přístup ke všemu, co souvisí se složitými transformacemi myšlení a prostoru, cestováním a cestováním. Kariéra v umění a kreativitě, léčitelství, extrémních sportech se úspěšně rozvíjí. Táhnou vás nejrizikovější a nejnebezpečnější oblasti činnosti, ve kterých se můžete plně rozvinout: služba v mimořádných situacích a hasiči, služba v horkých zónách. To samé platí o proměně věcí a prostoru ze starého do zcela nového. Úspěch a finanční blahobyt vás očekávají při práci s antikváriátem. Můžete si vybrat profesi designéra nebo stylisty-imidžmistra, kde budete plně měnit a transformovat vše staré v člověku a jeho bydlení."
    }
  },
  "14": {
    "common": {
      "karma": "(14) Karma. Vy můžete pracovat v jakékoli oblasti. Hlavní věcí je, abyste z práce měli radost, pak přijde i prosperita. Je-li to práce pro duši, pro kreativitu, i když vaše finanční situace na chvíli zůstane neurčitá, úspěch a peníze přijdou docela rychle, pokud budete mít míru a trpělivost. Realizujte svůj talent, svůj vnitřní potenciál, především pro sebe. A s tím přichází i finanční aspekt úspěchu. Není možné dělat něco, co nemáte rádi, chodit na práci, kterou nenávidíte. To jen bude odebírat energii, a zdroj peněz postupně vyschne. I když to je velmi prestižní a stabilní práce, kam jste se dostali jen kvůli příjmu. Není možné obětovat vztahy s přáteli kvůli penězům. Udržujte svůj vnitřní střed, obraťte se o pomoc k ochraně vyšších sil v obtížných situacích. Pro úspěch je důležité rozvíjet v sobě míru a trpělivost.",
      "entry": "(14) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Vy můžete pracovat v jakékoli oblasti. Hlavní věcí je, abyste z práce měli radost, pak přijde i prosperita. Je-li to práce pro duši, pro kreativitu, i když vaše finanční situace na chvíli zůstane neurčitá, úspěch a peníze přijdou docela rychle, pokud budete mít míru a trpělivost. Realizujte svůj talent, svůj vnitřní potenciál, především pro sebe. A s tím přichází i finanční aspekt úspěchu. Není možné dělat něco, co nemáte rádi, chodit na práci, kterou nenávidíte. To jen bude odebírat energii, a zdroj peněz postupně vyschne. I když to je velmi prestižní a stabilní práce, kam jste se dostali jen kvůli příjmu. Není možné obětovat vztahy s přáteli kvůli penězům. Udržujte svůj vnitřní střed, obraťte se o pomoc k ochraně vyšších sil v obtížných situacích. Pro úspěch je důležité rozvíjet v sobě míru a trpělivost.",
      "general": "(14) Je důležité věnovat pozornost kreativitě. I když to není vaše hlavní povolání, může to být nástrojem, který vám pomůže změnit své myšlení a dosáhnout lepších finančních výsledků. Co vás těší a co rádi děláte? Můžete na tom i vydělávat. Snažte se najít radost v práci a upřednostňujte činnosti, které vás naplňují. Kreativita je energií duše, a proto je důležité dělat to, co rezonuje s vaší duší. To vám nakonec pomůže dosáhnout finančního úspěchu. Nejlépe vám vyhovuje pečlivá, ale ne rutinní, nýbrž dostatečně kreativní práce. Je důležité ji vykonávat v tichu a soukromí, pak k vám budou přicházet informace a inspirace. To jsou profese klenotníka, hodináře, šití, řemeslné činnosti, podnikání v oblasti handmade. Vaše optimální práce je spojena se schopností čekání a trpělivosti. Takto se rodí talentovaní spisovatelé a básníci, myslitelé, skladatelé, moudří duchovní, psychologové, léčitelé a lékárníci. Není vyloučeno odhalení extrasenzorických schopností a práce prostřednictvím spojení s lidskými dušemi."
    }
  },
  "15": {
    "common": {
      "karma": "(15) Karma. Vibrace nižšího světa vás mohou srazit z cesty dobra. Je důležité naučit se překonávat své neřesti a vymanit se z nich důstojným způsobem, abyste mohli projít lekcemi pokušení a duchovně růst. V takovém případě nedojde k zablokování finančních toků; strach z nových příležitostí může bránit toku hotovosti. Nadutý sebepocit vám také může bránit v dosažení profesionálního úspěchu. Je důležité naučit se ovládat megalomanii, pýchu a marnivost. Důležité je také rozumět, že peníze mohou být utráceny nejen na materiální potřeby, ale také na duchovní rozvoj.",
      "entry": "(15) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Vibrace nižšího světa vás mohou srazit z cesty dobra. Je důležité naučit se překonávat své neřesti a vymanit se z nich důstojným způsobem, abyste mohli projít lekcemi pokušení a duchovně růst. V takovém případě nedojde k zablokování finančních toků; strach z nových příležitostí může bránit toku hotovosti. Nadutý sebepocit vám také může bránit v dosažení profesionálního úspěchu. Je důležité naučit se ovládat megalomanii, pýchu a marnivost. Důležité je také rozumět, že peníze mohou být utráceny nejen na materiální potřeby, ale také na duchovní rozvoj.",
      "general": "(15) Je důležité zapojit se do dlouhodobých projektů. Vyhněte se hazardu a rychlým penězům. S touto energií máte potenciál pro získání velkých peněz, slávy a materiálního bohatství. Máte příležitost vytvořit \"úžasný\" produkt, protože dobře odhadnete, co ostatní chtějí. V životě je důležité přijmout temné stránky své osobnosti, pochopit je a naučit se zdrženlivosti a umírněnosti ve svých vášních a závislostech. Tím, že se naučíte zvládat své slabé stránky, můžete své zkušenosti šířit mezi ostatní a vydělávat na nich peníze. Mluvte s lidmi o jejich nedostatcích a zálibách tolerantně, civilně a s respektem. Propracujte svou agresi a chamtivost. Je možné, že se v osudu objeví pokušení a nabídky nepoctivých peněz. Je důležité je předat důstojně. Vyčistěte svůj životní a energetický prostor od škodlivých závislostí. Zbavte se sobectví a žárlivosti, závisti. Vždy se duchovně rozvíjejte a nezastavujte se na této cestě."
    }
  },
  "16": {
    "common": {
      "karma": "(16) Karma.Je důležité, aby vaše činy zaměřené na vydělávání kapitálu nebyly zaměřeny na ničení osudů jiných lidí, aby nebyly spojovány s podvodem, neničily to, co vytvořili jiní, neznehodnocovali práci jiných lidí Karmou, dostali jste mnoho strachů, výčitek, komplexů atd., kterých se potřebujete zbavit. Je důležité, abyste byli schopni zničit staré, abyste mohli budovat nové.",
      "entry": "(16) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Potřebujete se zbavit zastaralých prvků ve svém životě a duchovně se rozvíjet. Bez duchovního růstu se můžete potýkat s následujícími výzvami: kolapsem, zkázou, revolucemi; různými konflikty v kolektivu; pádem podniků a propouštěním; finančními ztrátami.Když se rozhodnete investovat do svého duchovního růstu, může se vám otevřít cesta k financí. Je důležité se zamyslet nad tím, proč toužíte po materiálním bohatství, k čemu potřebujete auto a peníze. Pokud jsou vaše cíle duchovní a zaměřené na dobro, a nejen na uspokojení vašeho EGA, pak se peněžní tok nebude zablokovan.",
      "general": "(16) To je častá změna činnosti. Pokud má člověk 16 energie v oblasti peněz, tak jsou pro něj vhodné činnosti, kde potřebuje něco vybudovat (stavba, formování postavy, sport, psychická přeměna lidí). Od čísla 16 můžete očekávat: Náhlá úspěšná jednání a rozhodnutí.Stěhování do nové kanceláře.Případy související se stavbou a opravou.Náhlé nalezení zaměstnání.Přilákání velkých peněz pro vaše projekty, pokud dáte myšlenku na první místo a nebudete se k ničemu připoutávat.Schopnost splatit dluh nebo naopak získat půjčku.Postupné obnovování finanční rovnováhy.Odstranění nebo vyřešení problémů, které vznikly.Hlavní věc, kterou je třeba pochopit, je, že peníze k vám přicházejí prostřednictvím energie změny. Vaše finanční prosperita je spojena s prací na oživení spirituality mezi lidmi. Duchovní vedení, umění, vedení spolků a náboženských hnutí je vaše cesta. Dáváte přednost zaznamenávání znalostí a úspěchů a poté je sdílíte se všemi. K tomu je užitečné psát knihy, nahrávat zvukové soubory a vytvářet filmy (režie nebo psaní). Všechny stavební speciality jsou vhodné i pro vás: strojírenství, architektura, design. Vše, co souvisí s nemovitostmi (včetně realitní činnosti), přinese hmatatelné zisky. Extrémní a neobvyklé aktivity jsou možné (horolezectví, archeologie, sport, kriminalistika). Máte schopnost ovlivňovat lidi a vést. Pokud se rozhodnete změnit zaměstnání, je možné, že za vámi odejde celé oddělení."
    }
  },
  "17": {
    "common": {
      "karma": "(17) Karma. Vaše výčetné rysy zahrnují nejistotu ve vlastních silách a přirozených schopnostech, nerozhodnost, život snů bez aktivních pozemských činů, neplodné očekávání slávy, tichý souhlas s tím, být na vedlejší koleji a falešnou skromnost. Dochází k nevědomosti, neschopnosti a neochotě investovat do svého talentu a jeho rozvoje. Preferujete „normální“, společensky přijatelnou práci a projevuje se nezájem o kreativitu či dokonce koníčky. Neprofesionalita a neochota projevit se mohou projevovat i ve zvolené profesní činnosti, což může brzdit váš profesní rozvoj. Tento stav lze charakterizovat jako pohřbívání talentů.„Hvězdná“ nemoc, která se projevuje neochotou pomáhat následovníkům, představuje další aspekt vaší peněžní karmy. Je nutné se zaměřit na opravu a posílení těchto aspektů, abyste mohli dosáhnout nové finanční úrovně a naplnit svůj potenciál. To zahrnuje práci na zvýšení sebedůvěry, rozhodnosti, aktivním uplatňování svých schopností a ochotě investovat do vlastního talentu a vzdělávání. Otevření se novým příležitostem a sdílení svých znalostí s ostatními může být klíčem k transformaci vaší peněžní karmy.",
      "entry": "(17) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Vaši úspěch a příjem v životě jsou spojeny s krásou, fanoušky a rozvojem vašich tvůrčích talentů. Je klíčové, abyste se zaměřili na rozvoj svého zvláštního daru, ať už jde o herectví, uměleckou tvořivost nebo jiný talent. Měli byste odhalit a realizovat veškerý svůj tvůrčí potenciál bez obav z potíží a odsuzování. V průběhu života budete prověřováni, zda jsou vaše touhy opravdové a zda zůstáváte věrní svému povolání.Ve vaší práci se možná nedostane na vysoký příjem, ačkoli vám mohou nabídnout výnosnější, ale méně zajímavou práci. Je důležité pracovat na svém egu, zklidnit svou hrdost a usilovat o přiměřené sebevědomí. Komunikujte s lidmi upřímně a jako s rovnými, a nezapomínejte být aktivní a zapojení se do společnosti. Měli byste vyrazit do světa a neváhat, abyste se mohli prosadit.Nové příležitosti pro vaši tvůrčí činnost budou často přicházet díky náhodným známostem a užitečným spojením. Můžete také objevit mimosmyslové schopnosti, protože vaše intuice je velmi rozvinutá.",
      "general": "(17) Úspěch a bohatství přijdou k vám, pokud se budete věnovat otevřené, veřejné činnosti spojené s komunikací, scénou, vystupováním před velkým počtem lidí. Vhodné profese: zpěvák, herec, tanečník, organizátor a moderátor oslav a jiných významných událostí. Vyberte si jedno z poptávaných veřejných povolání: design, modeling, práce v médiích, reklamě, produkování. Vy jste vhodný pro infobusiness, trenérství v oblasti veřejného vystupování a práce spojená s psychologií (koučové, psychologové, odborníci na bioenergii). Je důležité se rozvíjet kreativně, komunikovat s velkým množstvím lidí, prezentovat své schopnosti, myšlenky a úspěchy. Pracujte při výměně energie s lidmi v procesu, učte je něčemu důležitému, chráníce je před nepříznivými situacemi a činy na svém vlastním příkladu. Hlavní v tomto je nedovolit si namyšlenost a nepodlehnout hvězdné nemoci."
    }
  },
  "18": {
    "common": {
      "karma": "(18) Karma. Je pro vás důležité pochopit vzorce a povahu nejvyšší moci a\n\nspravedlnosti. Jste schopni vytvářet nové obrazy nebo ovlivňovat události pouze silou myšlenky. Je nezbytné se naučit, jak se soustředit, třeba prostřednictvím meditace, abyste dosáhli osvícení. Pokud nebudete naplňovat svůj osud, vaše vědomí se stane chudým, a skutečný život může ustoupit do pozadí ve srovnání se světem, který jste si představovali. Depresivní stav se může projevit v souvislosti s různými obavami.",
      "entry": "(18) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Pro dosažení finanční stability je důležité vybrat si vlastní cestu a tvořit a volit pouze jedinečnou, i když obtížnou, cestu. Je nezbytné naučit se řídit svými myšlenkami a vybírat pouze ty pozitivní. Jste jedineční a máte schopnost proměnit vaše nápady do reality, proto je pozitivní myšlení klíčové. Studium psychologie, astrologie a dalších věd spojených s filozofií, lidskou psychologií a tajnými znalostmi vám může pomoci rozvíjet se. Je důležité se zbavit svých vlastních strachů a překážek na všech úrovních vědomí a tuto zkušenost sdílet s ostatními. Nepotřebujete kopírovat zkušenosti někoho jiného, protože máte svůj jedinečný osud a jste kreativním myslitelem. Věřte, že všechny obavy ohledně peněz se mohou splnit. Pokud máte obavy, že peníze nepřijdou, pravděpodobně se to stane.",
      "general": "(18) Pro vás bude neobvyklá činnost přinášet úspěch a zisk. Už od narození můžete vydělávat, žít z významného dědictví nebo renty. Můžete se věnovat magii, prognózám (tvorbě a poradenství), psychologii. Úspěch může přijít z nečekaných oblastí, od studia Svatého písma až po showbyznys, film, literaturu. Je důležité naučit se vyrovnat se svými obavami a překonat vnitřní překážky. Tím budete schopni učit lidi podle své autorské metody a dosáhnout úspěchu."
    }
  },
  "19": {
    "common": {
      "karma": "(19) Karma. Podle karma je důležité, abyste se nezaměřovali na jednu konkrétní věc, například vztahy nebo peníze. Je klíčové, abyste svou energii rozšířili do různých oblastí, nikoliv se soustředili pouze na jedno místo. Aby se dařilo, je důležité pracovat s dětmi a navazovat vztahy s nejbližší rodinou (bratry nebo sestry). Objevte své vnitřní slunce prostřednictvím přijetí bezprostředního dítěte ve vás. Naučte se mít radost z jednoduchých věcí, žijte s mírou, bez excesů a nároků. Nemůžete se vzdát výhod a vlastního blahobytu kvůli ostatním. Dovolte si žít šťastně a nesuďte se za to, že se vám všechno daří lépe než vašemu okolí. Můžete se stát lídrem ve svém oboru, pokud najdete něco, co se vám líbí. Nemůžete se obviňovat nebo cítit agresi vůči sobě. Věnujte více pozornosti vlastním i cizím dětem. Pokud je to možné, pomáhejte lidem s prací. Je dobré, když dokážete vytvořit prosperitu pro své blízké a zajistit své děti. Nemůžete mít majetkové spory s bratry a sestrami.",
      "entry": "(19) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Obrovské publikum, luxus, drahé služby. Vše, co má velký rozsah - otevírá váš finanční tok. Pokud myslíte na malé, představujte si, že vaše poslání je malé a bezvýznamné, pak je váš finanční tok uzavřen. Stejně tak, pokud věnujete veškerou svou pozornost jediné věci (například vztahu), peníze nepřijdou.",
      "general": "(19) Toto číslo přináší jednu z nejsilnějších peněžních energií, které existují. Zahrnuje vystupování před velkým davem a peníze přicházejí prostřednictvím zvyšování společenského postavení. Máte vynikající vztahy s partnery, skvělé vyhlídky a v týmu vládne dobrá a benevolentní atmosféra. Otevírají se před vámi příležitosti k vydělání obrovských příjmů. Váš rodinný podnik nebo dynastie budou prospívat. Mohli byste se také postavit před velký úkol, který bude jako kříž položen na vaše ramena. Budete ho však pociťovat jako posvátnou povinnost, kterou vykonáváte s vírou v její užitečnost a správnost, možná dokonce jako příkaz z vyššího místa. Je vhodné zabývat se i luxusním segmentem nebo něčím velmi rozsáhlým. Při práci v jakémkoli směru na vás čeká prosperita a finanční úspěch. Jedinou podmínkou pro to je, že práce musí přinášet radost a být potěšením. Pak budete mít štěstí a skvělé finanční ohodnocení. Je dobré pracovat s dětmi (důležitá je přímá interakce – od animátora až po práci učitele či kouče), stejně jako v zábavním průmyslu. Úspěšné budou i veřejné profese: pořadatel akce, organizátor dovolené. V obchodování můžete vydělat hodně, pokud jste si upřímně jistí svým produktem a hrdí na to, že jste se zapojili do vaší společnosti. Můžete si vybrat profesi administrátora, obchodního manažera nebo specialistu síťového marketingu. Pokud něco nefunguje, nespěchejte s opuštěním zvolené cesty. Často uspějete až na třetí pokus. Hlavní věc je dělat to, co milujete."
    }
  },
  "20": {
    "common": {
      "karma": "(20) Karma. Rodina ve vašem životě bude hrát významnou roli ve vaší finanční pohodě. Prvním krokem, který byste měli učinit, je zlepšení vztahů s příbuznými. Vaši blízcí příbuzní se stávají zdrojem inspirace a energie. Jsou také jakýmsi magnetem, který odebírá sílu, pokud jsou vztahy narušené. Pro vás je klíčová podpora a vzájemná pomoc, a je důležité cítit se součástí jedné komunity. Skrze rodinu k vám přicházejí všechna požehnání v životě: finanční pohoda, šťastné vztahy a seberealizace.",
      "entry": "(20) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. V tomto případě může jednotlivec omezit svůj cash flow pouze svými myšlenkami na omezení. To znamená, že má svobodu, ale nějakým způsobem se omezuje, například tím, že si myslí, že není hodný velkých peněz. Také projevování agresivity nebo přílišného dodržování zásad může bránit toku peněz. Negativní postoje k vlasti a její odsuzování také mohou blokovat finanční prosperitu.Naopak cestování, svoboda, objevování nových kultur a navazování přátelství s mnoha lidmi mohou uvolnit cash flow.",
      "general": "(20) Vaše rodina bude hrát významnou roli ve vašem finančním životě. Pro dosažení finanční pohody je důležité, abyste zlepšili vztahy s příbuznými. Blízcí příbuzní mohou být pro vás zdrojem inspirace a energie, ale také mohou negativně ovlivnit vaši situaci, pokud jsou vztahy napjaté. Důležité je budovat podporu a vzájemnou pomoc, abyste se cítili součástí jedné komunity.Prostřednictvím dobrých vztahů v rodině můžete přilákat do svého života mnoho požehnání, včetně finanční pohody, šťastných vztahů a seberealizace. Možná se vám nabídne příležitost podílet se na rodinném podniku, který by mohl být prospěšný pro všechny zúčastněné.Je důležité investovat čas a úsilí do zlepšení vztahů s rodinou, neboť tato síla spojená s rodinnými vazbami může mít pozitivní vliv na váš finanční i osobní život."
    }
  },
  "21": {
    "common": {
      "karma": "(21)Karma.Nemáte schopnost přiznat vlastní chyby a často se stáváte neschopním objektivně vnímat svět a hodnotit své schopnosti. Dochází k častým změnám nálad a touze ovládnout tým, což vede k projevům hněvu, emocionálnímu vyhoření a finančním problémům. Jste jedinečný člověk, který se zdá být nespokojený s téměř vším kolem sebe. Pro dosažení nové finanční úrovně je nezbytné se těchto vzorců zbavit a přinést pozitivní energii do svého života.",
      "entry": "(21) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. V tomto případě může jednotlivec omezit svůj cash flow pouze svými myšlenkami na omezení. To znamená, že má svobodu, ale nějakým způsobem se omezuje, například tím, že si myslí, že není hodný velkých peněz. Také projevování agresivity nebo přílišného dodržování zásad může bránit toku peněz. Negativní postoje k vlasti a její odsuzování také mohou blokovat finanční prosperitu.Naopak cestování, svoboda, objevování nových kultur a navazování přátelství s mnoha lidmi mohou uvolnit cash flow.",
      "general": "(21) Vaše síla spočívá v tom, že jste schopni být flexibilní, pracovat online a navazovat mezinárodní vztahy. Ve finanční oblasti máte potenciál dosáhnout stability a úspěchu. Můžete úspěšně vlastnit nebo řídit podnik související s cestovním ruchem, znalostmi nebo vědou. Důležité je rozšiřovat svá spojení a vliv, což vám umožní dosáhnout mnoha úspěchů. Jako specialisté jste vysoce žádaní a snadno můžete najít nové pracovní příležitosti. Držení aktuálních informací a znalostí vám pomůže dosáhnout úspěchu a ovládnout svět ve vašem oboru. Pro úspěch v životě je důležité pracovat na velkých projektech. Čím jsou globálnější, spojují země a kultury, tím lépe. Velké projekty mezinárodního rozsahu (výstavba obřích objektů, městotvorné podniky, mezinárodní diplomatická práce, výuka cizích jazyků) pro vás budou tím nejlepším polem působnosti. Neomezujte se a dávejte si velké cíle. Je dobré dělat vše, co souvisí s cestováním: překladatele, průvodce, cestovní kanceláře, investování, globální ekonomiku. Můžete vydělávat peníze ve zcela jiných oblastech, kde je příležitost rozšířit hranice a jednat globálně. Nemůžete si vybrat jen vojenskou kariéru a masný průmysl. Vaše aktivity by neměly být agresivní, ale naopak přispívat k míru a sbližování lidí různých kultur."
    }
  },
  "22": {
    "common": {
      "karma": "(22) Karma. Narodili jste se pro úplnou svobodu, jak ve své mysli, tak v životě. Nesmíte si klást žádné limity a omezení, abyste zabránili, aby karma ovlivnila vaše finanční prostředky. Vaše karmická vazba neumožňuje váš materialistický zájem. Zároveň se nemůžete příliš zatěžovat prací. Omezené myšlení nebo jakákoli omezení vám brání v získávání peněz a blokují je. Omezujete-li ostatní, má to stejný účinek jako omezování sami sebe. Také vám není vhodný život bezuzdné nezávislosti. Finanční prosperita přichází skrze práci spojenou s rozptýlením a osvobozením. Pro stabilitu a finanční dostatek je důležité odstranit závislost na financích, pracovat lehce a s radostí. Zacházejte s penězi svobodně, povolujte si výdaje, poskytujte lidem svobodu od materiálních a jiných forem závislostí. Naučte se radovat z života, bavit se, přinášet lidem radost. Je dobré cestovat po celém světě, pracovat s lidským vědomím, učit lidi, jak bojovat s potravinovými návyky, psychologickou závislostí na jiné osobě. Rozvíjejte své talenty řečníka, psychologa a vedejte lidi ke své vnitřní svobodě.",
      "entry": "(22) Vstup do finančního kanálu. Tato energie ukazuje na schopnost blokovat a otevírat tok peněz. Narodili jste se pro úplnou svobodu, jak ve své mysli, tak v životě. Nesmíte si klást žádné limity a omezení, abyste zabránili, aby karma ovlivnila vaše finanční prostředky. Vaše karmická vazba neumožňuje váš materialistický zájem. Zároveň se nemůžete příliš zatěžovat prací. Omezené myšlení nebo jakákoli omezení vám brání v získávání peněz a blokují je. Omezujete-li ostatní, má to stejný účinek jako omezování sami sebe. Také vám není vhodný život bezuzdné nezávislosti. Finanční prosperita přichází skrze práci spojenou s rozptýlením a osvobozením. Pro stabilitu a finanční dostatek je důležité odstranit závislost na financích, pracovat lehce a s radostí. Zacházejte s penězi svobodně, povolujte si výdaje, poskytujte lidem svobodu od materiálních a jiných forem závislostí. Naučte se radovat z života, bavit se, přinášet lidem radost. Je dobré cestovat po celém světě, pracovat s lidským vědomím, učit lidi, jak bojovat s potravinovými návyky, psychologickou závislostí na jiné osobě. Rozvíjejte své talenty řečníka, psychologa a vedejte lidi ke své vnitřní svobodě.",
      "general": "(22) Je důležité věnovat se rozvoji pasivního příjmu a neustále pracovat na svém osobním růstu. Můžete se snadno zapojit do různých oblastí a často změnit svou kariéru. Je důležité, aby vaše práce byla vždy plná nových a zajímavých výzev, aby vám poskytovala smysl a byla zábavná. Hledání této dynamiky a kontinuálního růstu je pro vás klíčové. Jako děti máte v sobě stále spoustu emocí a veškerý život kolem vás je zajímavý. Vaše finanční úspěchy budou přicházet prostřednictvím svobody a radosti, kterou najdete ve své práci. Můžete dosáhnout finančního blahobytu v činnostech spojených s různými druhy zábavy a cestování. Vhodná povolání zahrnují průvodce, zaměstnance cestovní kanceláře, cirkusového umělce, toastmistra, výrobu a prodej zboží pro cestování a organizaci oslav. Úspěch přinese práce bez nadřízených. Optimální je založit vlastní podnik nebo pracovat na volné noze, tedy pracovat sám na sebe, bez omezení a přísných pravidel. Z vás bude vynikající řidič i cestovatel. Můžete také pracovat v společenských organizacích. Finanční úspěch bude i při výběru povolání v showbyznysu a umění. To vám poskytne finanční lehkost a bezstarostnost, možnost snadno utrácet a s radostí vydělávat peníze."
    }
  }
};

function getFinancialTextByRole(energy, role, gender) {
  const energyKey = String(energy);
  const data = financialChannelTexts[energyKey];
  if (!data) return "";

  const genderKey = gender === "male" || gender === "muž" || gender === "muz" ? "male" :
                    gender === "female" || gender === "žena" || gender === "zena" ? "female" :
                    null;

  if (genderKey && data[genderKey] && data[genderKey][role]) {
    return data[genderKey][role];
  }

  if (data.common && data.common[role]) {
    return data.common[role];
  }

  // Pokud existuje rozdělení na muž/žena a pohlaví není předané,
  // vrátíme obě verze, aby se nic neztratilo.
  if (!genderKey && data.female && data.male) {
    const parts = [];
    if (data.female[role]) parts.push("Ženská verze:\n\n" + data.female[role]);
    if (data.male[role]) parts.push("Mužská verze:\n\n" + data.male[role]);
    return parts.join("\n\n");
  }

  if (data.female && data.female[role]) return data.female[role];
  if (data.male && data.male[role]) return data.male[role];

  return "";
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

      // Маркер энергии (8), (18), (6) — выделяем бронзовым и ОТДЕЛЯЕМ от следующего слова пробелом
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

function renderFinancialText(raw) {
  return renderRichText(raw);
}

function getFinancialChannelItems(result, gender) {
  const items = [];

  items.push({
    role: "karma",
    label: "Finanční karma",
    energy: result.C,
    text: getFinancialTextByRole(result.C, "karma", gender)
  });

 items.push({
  role: "entry",
  label: "Vstup do finančního kanálu",
  energy: result.C1,
  text: getFinancialTextByRole(result.C1, "entry", gender)
});

  const ordinaryValues = [result.M, result.L];
  const shownOrdinary = new Set();

  ordinaryValues.forEach(function(value) {
    const key = String(value);
    if (shownOrdinary.has(key)) return;
    shownOrdinary.add(key);

 items.push({
  role: "ordinary",
  label: "Peněžní tok",
  energy: value,
  text: getFinancialTextByRole(value, "general", gender)
});
  });

  return items;
}

function renderFinancialChannelHTML(result, gender) {
  const localPrograms = findLocalProgramsInValues([
    result.C,
    result.C1,
    result.M,
    result.L
  ]);

  const localProgramNoteHTML = renderLocalProgramNoteHTML(localPrograms);
  const items = getFinancialChannelItems(result, gender);

  function getItemLength(item) {
    return String(item && item.text ? item.text : "").length;
  }

  function renderFinancialItem(item, index) {
    const textHTML = item.text
      ? renderFinancialText(item.text)
      : '<p>Pro energii ' + escapeHtml(item.energy) + ' zatím není v databázi nahraný výklad pro tuto část finančního kanálu.</p>';

    return (
      '<div class="program-found-item financial-print-item financial-print-item-' + index + ' financial-print-role-' + escapeHtml(item.role) + '">' +
        '<div class="program-zones energy-text">' +
          textHTML +
        '</div>' +
      '</div>'
    );
  }

  const allTextLength = items.reduce(function(sum, item) {
    return sum + getItemLength(item);
  }, 0);

  /*
    ВАЖНО:
    если финансовый канал короткий или средний, НЕ режем его.
    Режем только если общий текст реально большой.
  */

  const pages = [];

  /*
    Финансовый канал:
    безопасная A4-нарезка по смыслу, а не по символам.
    Если блоков 3-4:
    1 страница = karma + vstup do finančního kanálu
    2 страница = peněžní tok + peněžní tok + lokální programy
  */

  if (items.length <= 2) {
    pages.push(items);
  } else {
    pages.push(items.slice(0, 2));
    pages.push(items.slice(2));
  }

  if (pages.length === 0) {
    pages.push([]);
  }

   if (pages.length === 0) {
    pages.push([]);
  }

  const pagesHTML = pages.map(function(pageItems, pageIndex) {
    const isFirstPage = pageIndex === 0;
    const isLastPage = pageIndex === pages.length - 1;

    const pageLength = pageItems.reduce(function(sum, item) {
      return sum + getItemLength(item);
    }, 0);

    let density = "balanced";

    if (pageLength < 2300) {
      density = "center";
    } else if (pageLength > 5600) {
      density = "dense";
    }

    const itemsHTML = pageItems.map(function(item, itemIndex) {
      return renderFinancialItem(item, itemIndex + 1);
    }).join("");

    return (
      '<section class="financial-print-page ' +
        (isFirstPage ? 'financial-page-title ' : 'financial-page-continue ') +
        'financial-density-' + density + '">' +
        '<div class="financial-print-inner">' +
          (isFirstPage ? '<h2>Finanční kanál</h2>' : '') +
          itemsHTML +
          (isLastPage ? localProgramNoteHTML : '') +
        '</div>' +
      '</section>'
    );
  }).join("");

  return (
    '<div class="energy-item programs-card financial-channel-card financial-print-card financial-count-' + items.length + '">' +
      pagesHTML +
    '</div>'
  );
}

module.exports = {
  getFinancialChannelItems,
  renderFinancialChannelHTML
};