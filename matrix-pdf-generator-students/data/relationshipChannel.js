const { findLocalProgramsInValues, renderLocalProgramNoteHTML } = require("./programs");
// =========================
// RELATIONSHIP CHANNEL ENGINE
// Zdroj: ОТНОШЕНИЯ.docx
// Logika:
// result.R  -> běžná energie vztahového kanálu
// result.L  -> běžná energie vztahového kanálu
// result.D1 -> Vstup do vztahového kanálu
//
// U běžných energií R/L se zobrazuje pouze hlavní text bez vstupní poznámky.
// U D1 se zobrazuje hlavní text i vstupní poznámka.
// Pokud se R a L opakují, běžná energie se zobrazí pouze jednou.
// D1 se zobrazuje vždy samostatně, i když se shoduje s R nebo L.
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

const relationshipChannelTexts = [
  {
    "energy": 3,
    "gender": "female",
    "mainText": "(3) S touto osobou na vás čekají vážné a zralé vztahy s dlouhodobou vizí. Budete projevovat vzájemný zájem o sebe, a je pravděpodobné, že uzavřete oficiální manželství. S ním budete mít pohodu v rodině a doma ve všech směrech. Bude existovat touha a rozhodnutí mít dítě. Tento člověk bere zodpovědnost za sebe, jak v kariéře, tak ve vztazích, a ke své partnerce se chová s úctou a láskou. Partner bude starostlivá, subtilní povaha, s pohodovou povahou a schopností sympatizovat. Často takoví muži mají kreativní profese související s tvorbou krásy, prací se zvířaty nebo rostlinami. Dobré úspěchy dosahují také v lékařské oblasti. Neměli byste očekávat, že se bude chovat tvrdě nebo bude činit rázná rozhodnutí. Ale je vhodné vést takového muže k důležitým momentům ve vašem vztahu.",
    "entryText": "Pro dosažení ideálního vztahu je důležité, aby žena přestala hrát roli matky a přestala komandovat. Je také důležité, aby se muž naučil nést zodpovědnost za sebe."
  },
  {
    "energy": 4,
    "gender": "female",
    "mainText": "(4) Vaším ideálním partnerem bude osoba, která bude mít vlivnou a autoritativní pozici, pravděpodobně v oblasti obchodu. Tato osoba bude spolehlivá a orientovaná na rodinu, což by mohlo vést k stabilnímu finančnímu postavení vaší rodiny. Mohlo by také dojít k uzavření svatební smlouvy a vytvoření patriarchálního manželství, ve kterém by muž hrál převažující roli v rodině. Potřebujete bohatého, úspěšného a soběstačného muže, který dokáže vyřešit všechny vaše problémy a stát se vám spolehlivou oporou. Jeho workoholismus a láska k práci vztahu jen prospěje, protože finanční blaho rodiny je pro vás důležité. Takový muž plně zajistí vaše potřeby, postaví a vylepší velký dům. Je to talentovaný vůdce. Je také důležité, aby se váš partner stal dobrým otcem vašich dětí.",
    "entryText": "Vstoupit do vztahu: Je důležité naučit se nedávat práci před vztahy. S partnerem být na stejné úrovni, a nepodřizovat ho sobě a nestát se pro něj rodičem."
  },
  {
    "energy": 5,
    "gender": "female",
    "mainText": "(5) Váš ideální partner bude konzervativní ve všech svých projevech, myšlenkách a zvycích. Pro vás bude důležitá jistota, předvídatelnost ve vztazích a stabilita. Tito lidé jsou známí jako vynikající rodinní muži, kde domov a rodinné vazby mají vždy prioritu. Budete oceňovat pohodlí a přátelské setkávání v domácím prostředí. Vaši komunikaci bude charakterizovat klid a filozofický postoj. Takový partner bude pro vás skutečným duchovním rádcem, schopným poskytovat cenné rady, naslouchat a vás utěšovat. Vaše partnerka, která myslí globálně a je o krok napřed, bude těžit z jeho stabilní a podpůrné přítomnosti.",
    "entryText": "Pro vstup do ideálního vztahu je důležité odstranit intelektuální hrdost a přestat učit lidi, kteří o to nežádají.Navazovat vztahy s příbuznými."
  },
  {
    "energy": 6,
    "gender": "female",
    "mainText": "(6) Pro vás je důležité, aby váš partner byl vnějškově atraktivní, dbal o svou postavu a vzhled, a měl vkus v oblékání. Preferujete společensky zdatnou a sebevědomou osobu, která má vášeň pro nakupování a štědře utrácí. Často hledáte potvrzení lásky od svého partnera, což může vést k pochybnostem ohledně jeho pevného závazku a upřímnosti ve vztahu. Jste náchylní k projevům fyzické náklonnosti a doteků více než váš partner.",
    "entryText": "Pro nalezení ideálního vztahu je klíčové milovat sami sebe a plně si vážit svého vzhledu. Ustupte od přehnaně rozmařilého životního stylu, abyste se dostali blíže k harmonii v partnerském vztahu."
  },
  {
    "energy": 7,
    "gender": "female",
    "mainText": "(7) Tato osoba je vášnivá a vždy bude hledat jiskru ve vztahu. Dokáže aktivně vytvářet situace, které stupňují emoce, nebo hledat partnera, který dokáže vyvolat silné emoční reakce. Bude hledat osobu, která je krásná nejen uvnitř, ale i navenek. Je důležité si uvědomit, že pevné vztahy mohou prosperovat pouze díky lásce a péči. Pokud ve vztahu dominuje soutěživost a touha po dominanci, nemusí být výsledek pozitivní. Nejvhodnějším partnerem pro vás je rozený vůdce a válečník, který aktivně a energicky buduje svou kariéru. Možnost seberealizace je pro takové lidi velmi důležitá. Proto jsou neustále v pohybu, řídí a milují cestování. Takový partner si jistě získá s těmi nejštědřejšími nebo nejfantastičtějšími činy.",
    "entryText": "Pro vstup do ideálního vztahu je důležité odstranit ze života veškerou pasivitu a agrese."
  },
  {
    "energy": 8,
    "gender": "female",
    "mainText": "(8) Váš ideální partner preferuje poměrně formální vztah a bere zodpovědnost za svou milovanou osobu vážně. Má rád patriarchální manželství, oficiální sňatek a může dokonce chtít uzavřít manželskou smlouvu. Tento partner bude pravděpodobně starší než vy a bude se vztahovat k životu s vážností a čestí. Váš ideální partner ve vztahu by měl disponovat světskou moudrostí získanou bohatými životními zkušenostmi v různých situacích. Tato osoba často disponuje užitečnými kontakty nebo zaujímá významné postavení ve společnosti. Je schopen se chovat zcela odlišně ve společnosti a doma, a to s šarmem i elegancí. Výjimečně se projevuje veřejně, vykonává okázalé činy a působí suverénním dojmem.",
    "entryText": "Abyste vstoupili do ideálního vztahu, musí váš život získat strukturu a řád. Důležité je také dodržovat lidské a karmické zákony."
  },
  {
    "energy": 9,
    "gender": "female",
    "mainText": "(9) Bude vám vyhovovat velmi sečtělý a vzdělaný člověk s širokým rozhledem. Doslova čerpá informace z knih a s radostí se učí po celý život. Váš ideální partner je moudrý, hovoří málo a upřednostňuje pozorování a analýzu situace před akcí. Je důležité pravidelně trávit čas sami, což je užitečné zejména pro milovníky knih. Nedoporučuje se táhnout partnera do hlučných společností, kde by se mohl cítit velmi nepříjemně.",
    "entryText": "Abyste potkali ideálního partnera, musíte odstranit intelektuální hrdost a neuzavírat se do sebe."
  },
  {
    "energy": 10,
    "gender": "female",
    "mainText": "(10) Bude to ten, kdo vám přinese štěstí. Nebudete se muset potýkat s konfliktními situacemi a složitými okolnostmi v rámci tohoto vztahu. Avšak kvůli odměřenému tempu života se může stát, že se příliš nebudete starat o vlastní osobní rozvoj a budete jen plout s proudem. Tato osoba je schopna vytvořit dobrý dojem a má mnoho užitečných kontaktů. S ní budete mít snadný vztah bez vzájemných požadavků, a budete společně růst. Váš partner bude uvolněný a naučí vás relaxovat a jít s proudem. Můžete se setkat se zvláštní, kreativní osobou, která má bohatou představivost a kreativní myšlení. Vznikne s ním obtížný, ale následně harmonický vztah. Často sedí bez stabilní práce a má spoustu volného času. Ale zároveň je vaše spřízněná duše docela úspěšná, protože inspiruje své okolí k dosažení úspěchů a změn v životě. Může se pro vás stát zdrojem štěstí a bohatství, důležitým energetickým kanálem, pokud nevyvíjíte tlak a necháte člověka žít a rozvíjet se svým vlastním stylem.",
    "entryText": "Abyste vstoupili do vztahu a potkali ideálního partnera, musíte překonat lenost, stejně jako se pustit z kontroly.Vybírejte srdcem, ne hlavou, protože když ovládáme, je to mozek, kdo si vybírá, ne srdce."
  },
  {
    "energy": 11,
    "gender": "female",
    "mainText": "(11) S tímto člověkem budete zažívat aktivitu a extrémní zážitky, což zahrnuje i vášnivý sexuální život. S ním budete mít vysoce harmonický střed v osobních vztazích, opravdovou lásku a přátelství, vzájemnou pomoc a společnou aktivitu. Váš partner se nebojí zkoušet nové věci a má sílu pro tuto výzvu. Vyhovuje vám fyzicky silný, obratný a pohodový partner. Nestyďte se za jeho vášeň pro posilovnu, protože právě sport mu pomáhá udržovat kondici a být hrdý na své krásné svaly a vytrénované tělo. Možná se tento koníček stane i vaším společným zájmem. Vaše harmonická a spřízněná duše má velmi ráda děti a snadno nalezne s nimi společnou řeč. Vaše pevné nervy a schopnost sebeovládání vám pomohou vydržet jakékoliv dětské výstřednosti bez podráždění.",
    "entryText": "Abyste vstoupili do ideálního vztahu, musíte pracovat se svou agresivitou."
  },
  {
    "energy": 12,
    "gender": "female",
    "mainText": "(12) Vedle vás by měl být neobvykle milý a upřímný člověk, schopný širokých gest. Takový jedinec má otevřené srdce a schopnost poskytovat vzájemné porozumění a pomoc mnoha lidem najednou. Je možné, že se někdo ztotožňuje s charitativními nebo dobrovolnickými aktivitami. Tento člověk je vynikajícím mentorem, na kterého se můžete kdykoli obrátit o pomoc. Velmi má rád děti a upřednostňuje práci s lidmi, jako jsou lékaři, maséři, psychologové atd.",
    "entryText": "Pro vstup do vztahu je důležité: Naučte se ve vztahu neztrácet sami sebe. Podávejte, ale nepodávejte. Uspokojte své potřeby a teprve potom potřeby svého partnera."
  },
  {
    "energy": 13,
    "gender": "female",
    "mainText": "(13) S plamenem se nacházíte v hlubokém a naplňujícím vztahu. Váš partner má touhu zkoušet všechno nové a usiluje o to, aby v tomto životě prošel co nejvíce zážitky. Je to zapálený dobrodruh, který se neustále rozvíjí a otevírá nové směry. Věřte, že s ním se nikdy nebudete nudit. Nebuďte překvapení, pokud narazíte na pravého adrenalinového fajnšmekra života. Vašemu partnerovi jsou jako vzduch potřebné jasné emoce, dojmy a extrémní situace. Lehkost v nástupu, neschopnost dlouho zůstat na jednom místě a nuda s rutinní prací charakterizuje vaši druhou polovičku. Z toho plyne emocionální nestabilita, proměnlivé nálady a nepředvídatelnost. Ve vztazích se můžete cítit jako na sopce, nevědouce, co přinese zítřek. Současně to může být jasné, zajímavé a nepokojné. Není vyloučeno, že váš partner pracuje na cestách nebo má zaměstnání spojené s nebezpečím (záchranný pracovník, příslušník vnitřních orgánů, závodník).",
    "entryText": "Pro vstup do vztahu je důležité nebát se opustit staré a zastaralé já, naučit se měnit a odvážně jít do nového."
  },
  {
    "energy": 14,
    "gender": "female",
    "mainText": "(14) Váš partner má klidnou a bezkonfliktní povahu a cítí spojení s přírodou jako samostatný harmonický svět. To může být pro vás skvělý základ pro vyrovnaný, dlouhodobý a klidný vztah. Máte očekávání, že váš partner bude mít jasně rozdělené povinnosti v rodině a v týmu, což může vytvářet pocit stabilitu a rovnováhy ve vašem vztahu. Je trpělivý a ochotný poskytovat vám podporu, což je důležitý prvek zdravého partnerského vztahu.Váším blízkým partnerem může být tvůrčí osobnost, jemná duše, která vnímá všechno velmi blízko srdci. Měli byste si ji pečlivě prohlédnout, protože je to dobrý partner pro vás. Pro takového člověka je důležité vše, co říkáte a děláte. Může se snadno urazit a ukázat se velmi citlivým. Všechny běžné starosti budete muset vzít na sebe, protože váš partner je málo přizpůsobivý k životu. Může trpět nízkým sebehodnocením a bolestivou žárlivostí. Ve důvěrných vztazích se projevuje jako nejslavnější a nejcitlivější společník.",
    "entryText": "Pro vstup do vztahu je důležité: naučit se předcházet konfliktům, naučit se střídmosti a včasnému doplňování energie tvorbou, kreativitou a uměním."
  },
  {
    "energy": 15,
    "gender": "female",
    "mainText": "(15) Je skvělé, pokud máte před sebou skutečného vášnivého a silného partnera, který věnuje velkou pozornost intimní stránce vztahu. Váš společník by měl být také chytrý: moudrost a vhled mu pomáhají lépe rozumět lidem a má bohaté životní zkušenosti. Není vyloučena silná touha po penězích a moci, může mít ambiciózní plány do života, které by mohly zahrnovat politickou kariéru nebo jiné aktivity spojené s tímto typem činnosti.",
    "entryText": "Pro vstup do ideálního vztahu je důležité:\n\n- překonat své problémy s agresivitou,\n\n- eliminovat všechny své závislosti, jako je například nadměrná konzumace jídla, alkoholu, nebo nadměrné hrátky a podobně."
  },
  {
    "energy": 16,
    "gender": "female",
    "mainText": "(16) S tímto partnerem vás čeká přílišná vášeň, budete jako „italský“ pár; Začátek blízké romantické známosti se pravděpodobně zrodí z konfliktu. Člověk s užitečnými kontakty ví, jak soucítit, má neustálou touhu pomáhat; Také setkání s partnerem může probíhat v atmosféře duchovna, předávání posvátných znalostí a práce s tělem: jóga, meditace, tréninky a semináře pro duchovní růst, fitness. A také v atmosféře výstavby, oprav a rekonstrukcí budov. Revoluční, budování globálních plánů na změnu společnosti. Můžete se zapojit do globálních záležitostí skvělého člověka, který se stane vaším partnerem v životě. Pro mnohé je to skutečný duchovní vůdce, má velké množství následovníků a klade si velké cíle a záměry. Při plnění svého poslání často cestuje po celém světě. Nebuďte překvapeni, když váš partner vytvoří nové duchovní učení, směr nebo nějaký druh masového hnutí. Váš vztah bude jistě živý a obohacující pro oba.",
    "entryText": "Chcete-li vstoupit do ideálního vztahu, je důležité jít do spirituality a duchovního poznání."
  },
  {
    "energy": 17,
    "gender": "female",
    "mainText": "(17) Setkání s milovanou osobou se může uskutečnit na přeplněných místech, jako jsou představení, koncerty a další společenské akce. Mohou to být také kreativní dílny, výstavy a veletrhy. Váš partner má vysoké komunikační schopnosti a je schopen snadno vést dialogy na jakékoli téma. Bude vám přinášet příjemné emoce a dobrou náladu. S ním budete mít čistý vztah, budete projevovat něhu a péči, a společně budete mít plány do budoucna. Vaše spojení bude plné emocí a díky pohodlné komunikaci spolu budete mít velmi dobrý vztah. Vaše spřízněná duše by ideálně měla výrazný a atraktivní vzhled, věnující mnoho času péči o sebe. Upřednostňuje trendy v poslední módě a má dobrý vkus ve stylových trendech. Je vhodné, abyste spolu chodili častěji ven, což může kompenzovat nedostatek komunikace a pozornosti, i když má již poměrně rozsáhlý okruh známých. Pro udržení harmonického vztahu je klíčové vyjadřovat komplimenty a zdůrazňovat vnější přednosti vašeho partnera a všímat si i maličkostí.",
    "entryText": "Pro vstup do ideálního vztahu potřebujete: Potřebujete odstranit přehnané požadavky na partnera. Stává se také, že s energií 17 obecně nemáte chuť někoho zvažovat pro vztah a nevidíte nikoho zblízka."
  },
  {
    "energy": 18,
    "gender": "female",
    "mainText": "(18) Nejzajímavějším partnerem pro vás bude ten, kdo má tajemnou přitažlivost a hloubku, která se zdá nedosažitelná. Tento partner vyniká aristokratickými způsoby a ušlechtilým chováním. Je možné, že má nějaké podvědomé obavy, které společně budete schopni překonat. Pro vaši spřízněnou duši je důležitá intimní stránka vztahu, včetně experimentů a extrémů (od hluboké vášně až po téměř úplné odmítnutí intimity). Oba budete muset najít kontakt a vzájemné porozumění, a pokud se vám to podaří, budete schopni společně překonat všechny možné potíže.",
    "entryText": "Chcete-li vstoupit do ideálního vztahu, potřebujete: Musíte odstranit všechny obavy ze vztahu, které vás pronásledují. A také se nebojte mystiky a esoteriky a přijměte ji do svého života."
  },
  {
    "energy": 19,
    "gender": "female",
    "mainText": "(19) Setkání s partnerem může proběhnout v atmosféře bohatství, na fórech osobního růstu, v pracovním prostředí, v bankách, ve velkých společnostech nebo při společenských akcích, výstavách a koncertech. Taktéž je možné, že se setkáte v teplé zemi s hojným slunečním světlem. Toto setkání bude charakterizováno vzájemným sdílením zájmů a touh, a nejen přátelstvím, ale také vzájemným doplňováním a plným porozuměním. Vytvoříte spolu rodinné svátky a tradice, a budete mít hlubokou vzájemnou úctu. Váš partner bude mít naivně optimistickou duši, která se dívá na svět přes růžové brýle. Budete mít pozitivní postoj k ranému manželství a ke zrodu dětí.",
    "entryText": "Vstoupit do ideálního vztahu: Je důležité, abyste přestali něčím posednout. Ať jsou to peníze, láska, přátelé. Věnujte pozornost všemu postupně."
  },
  {
    "energy": 20,
    "gender": "female",
    "mainText": "(20) Je to velmi inteligentní jedinec s vyvinutou intuicí a hlubokým porozuměním životu. Hledá partnera, který je také zodpovědný a ochoten sdílet společnou zodpovědnost. Pravděpodobně má zájem o uzavření oficiálního manželství, kde je ochrana a podpora poskytována vyššími autoritami. Je jedinečnou osobou, a výběr partnera pro něj zahrnuje i ohled na vaši rodinu. Vaším úkolem je navázat spojení mezi oběma rodinami, což má pro vás značný význam. Váš partner, i přes výrazný věkový rozdíl, bude hrát významnou roli ve vašich rodinných vazbách a vztazích s blízkými. Pokud v rodině chybí pochopení, a něco se nedaří, problémy všeho druhu můžete vyřešit vztahy a komunikací se svou spřízněnou duší. Prožijete tak jako by podruhé a již vědomě všechny problematické chvíle se svými příbuznými, vyřešíte problémy na psychické i fyzické úrovni.",
    "entryText": "Chcete-li vstoupit do ideálního vztahu: musíte odstranit agresi, netrpělivost a neúctu k lidem."
  },
  {
    "energy": 21,
    "gender": "female",
    "mainText": "(21) Opravdu vás zaujme pouze partner s hlubokými znalostmi a globálním myšlením, který dokáže situace chápat z nadhledu a filozoficky uvažovat. Může pocházet z jiné země nebo dokonce z mimozemské kultury. Současně má vaše duševní spříznění tendenci žít bez závazků, s vášní pro cestování. Nepoznává žádné geografické nebo citové hranice a dokáže se přizpůsobit životu kdekoliv na světě díky svému širokému rozhledu a skromnosti v běžných potřebách. Později v životě může vyjádřit svou duchovní cestu tím, že se vzdá světských věcí a stane se služebníkem církve.",
    "entryText": "Chcete-li vstoupit do ideálního vztahu: musíte respektovat svou vlast a respektovat všechny národnosti a rasy. Váš partner se nachází v zahraničí, nebo je jiné národnosti, nebo se seznámíte na internetu. Proto byste měli celým svým srdcem přijímat všechny lidi na planetě a být otevřený všem lidem."
  },
  {
    "energy": 22,
    "gender": "female",
    "mainText": "(22) Váš partner může být mladší, vtipnější a svobodomyslnější. Má rád jednoduchý způsob vydělávání peněz a je velmi nezávislý na hmotných statcích. Může žít v různých podmínkách a kdekoli na světě. Život je pro něj dobrodružstvím a vnímá ho jako nepřetržitou cestu. Partner, který miluje svobodu a změnu, umí vtipkovat a má vynikající smysl pro humor, je pro vás skvělou volbou. Jeho veselá povaha a pohodový přístup z něj mohou udělat život každé společnosti. Váš partner hodně cestuje, není nakloněn vázat se na materiální věci, takže má málo majetku a může bydlet v pronajatém bytě nebo pokoji. Vyznačuje se zdravou skepsí a vypočítavostí ve všem; nic nebere jako samozřejmost. Úspěch ve vztahu je možný, pokud takového člověka za žádných okolností nezadržíte, ale dáte mu úplnou svobodu a také uznáte jeho nezávislost.",
    "entryText": "Vstoupit do vztahu: Musíte se naučit nikoho neomezovat, protože váš ideální partner omezení prostě nevydrží."
  },
  {
    "energy": 3,
    "gender": "male",
    "mainText": "(3) Vaše vnímání žen a vytváření nějakého ideálu ve vaší mysli bylo silně ovlivněno matkou. Hledáte ženu podobnou jí, která by se stala vynikající hospodyní a matkou. Nicméně stále máte možnost zvolit úplný opak - někoho s náladou a charakterem nebo někoho zaměřeného na vnější vzhled, jakýsi \"Barbie panenku\". Je důležité dostat vaše skutečné touhy a požadavky do harmonie. Pak bude vaše partnerství úspěšné.",
    "entryText": "Pro vstup do vztahů je pro vás důležité stát se mužem, který plně přebírá odpovědnost za svůj život a za svoji ženu, děti. Vaším úkolem je oddělit se od matky a stát se nezávislým, plně se od ní oddělit. Pouze když se stanete hlavou rodiny uvnitř sebe, najdete ideální partnerku osudu, jinak k vám budou přicházet karmické partnerky, aby vás potlačovaly."
  },
  {
    "energy": 4,
    "gender": "male",
    "mainText": "(4) Vaší ideální partnerkou bude silná, samostatná a zralá žena, která má vlastní charakter, vůli a pravděpodobně i úspěšnou oblast práce nebo podnikání. Potřebujete ženu, která bude lvicí rodiny: dokáže Vás nasměrovat, podpořit, inspirovat a dodat Vám sílu, ale zároveň Vám nechá prostor, abyste mohl vést, chránit a nést odpovědnost za rodinu. Nebude s Vámi bojovat o moc, ale stane se Vaší měkkou a bezchybnou oporou, která Vám pomáhá růst do role muže, partnera a otce.",
    "entryText": "Vstoupit do vztahu: Je důležité stát se mužem, který nese odpovědnost za svůj život, má jasné cíle a umí k nim postupně jít. Čím jasnější budete mít směr, vizi a schopnost budovat stabilní prostor, tím snadněji k Vám přijde žena, která Vás bude skutečně podporovat."
  },
  {
    "energy": 5,
    "gender": "male",
    "mainText": "(5) Vaší ideální partnerkou bude žena s konzervativnějšími hodnotami, klidným pohledem na život a úctou k rodině, tradicím a stabilitě. Bude pro Vás důležitá jistota, předvídatelnost a pocit, že se na ni můžete spolehnout. Taková žena dokáže vytvářet domov, ve kterém je klid, teplo a bezpečí. Může být pro Vás také duchovní oporou, moudrou rádkyní a člověkem, který Vás umí vyslechnout, uklidnit a jemně nasměrovat. Potřebujete partnerku, která bude chápat hlubší smysl života, bude přemýšlet zrale a zároveň Vám pomůže udržet pevné rodinné hodnoty.",
    "entryText": "Vstoupit do vztahu: Je důležité odstranit intelektuální hrdost, přestat poučovat lidi, kteří o to nežádají, a učit se budovat zdravé vztahy s příbuznými."
  },
  {
    "energy": 6,
    "gender": "male",
    "mainText": "(6) Vaší ideální partnerkou bude žena, která je krásná, upravená, přitažlivá a umí o sebe pečovat. Bude pro Vás důležité, aby měla vkus, dbala na svůj vzhled a působila žensky, sebevědomě a společensky. Taková partnerka může milovat krásu, nakupování, hezké věci a příjemný životní styl. Ve vztahu pro Vás bude důležitá něha, fyzická blízkost, doteky a pravidelné potvrzování lásky. Můžete však mít tendenci pochybovat, zda Vás opravdu miluje a zda je její vztah k Vám pevný.",
    "entryText": "Vstoupit do vztahu: Je důležité naučit se milovat sám sebe, vážit si svého vzhledu a nesnažit se lásku získávat přes přehnanou potřebu potvrzení. Také je vhodné ustoupit od příliš rozmařilého životního stylu a hledat ve vztahu větší harmonii."
  },
  {
    "energy": 7,
    "gender": "male",
    "mainText": "(7) Vaší ideální partnerkou bude žena s výraznou energií, vášní a touhou po pohybu, rozvoji a živém vztahu. Bude hledat jiskru, emoce a partnerství, ve kterém se něco děje. Může být velmi krásná, aktivní, cílevědomá a silná. Potřebujete ženu, která Vás nebude uspávat, ale naopak probouzet k akci, posouvat Vás dopředu a inspirovat Vás k větší rozhodnosti. Zároveň je důležité, aby vztah nestál na soutěžení a boji o dominanci, ale na lásce, péči a vzájemném respektu.",
    "entryText": "Vstoupit do vztahu: Je důležité odstranit ze života pasivitu, potlačenou agresi a potřebu neustále dokazovat svou převahu."
  },
  {
    "energy": 8,
    "gender": "male",
    "mainText": "(8) Vaší ideální partnerkou bude žena, která bere vztahy vážně, má úctu k pravidlům, odpovědnosti a oficiálním závazkům. Může být zralejší, moudrá a zkušená, s dobrým postavením ve společnosti nebo užitečnými kontakty. Taková žena se dokáže chovat důstojně, elegantně a s vnitřní noblesou. Může působit velmi odlišně ve společnosti a doma, ale v obou prostředích si zachovává úroveň. Potřebujete partnerku, která chápe hodnotu spravedlnosti, čestnosti a pevné struktury ve vztahu.",
    "entryText": "Vstoupit do vztahu: Je důležité, aby Váš život získal větší strukturu a řád. Také je potřeba dodržovat lidské i karmické zákony a jednat ve vztazích čestně."
  },
  {
    "energy": 9,
    "gender": "male",
    "mainText": "(9) Vaší ideální partnerkou bude moudrá, vzdělaná a sečtělá žena s hlubokým vnitřním světem. Bude mít široký rozhled, ráda se učí a dokáže vnímat život z větší hloubky. Nemusí být příliš hlučná ani společensky aktivní, spíše bude pozorovat, analyzovat a přemýšlet, než začne jednat. Potřebujete partnerku, která ocení klid, prostor pro sebe, knihy, poznání a hluboké rozhovory. Není vhodné ji tlačit do hlučných společností, pokud se tam necítí dobře.",
    "entryText": "Vstoupit do vztahu: Je důležité odstranit intelektuální hrdost, neuzavírat se do sebe a nepovyšovat se nad druhé kvůli svým znalostem."
  },
  {
    "energy": 10,
    "gender": "male",
    "mainText": "(10) Vaší ideální partnerkou bude žena, která Vám může přinést lehkost, štěstí a příznivé životní okolnosti. Vztah s ní nemusí být postavený na tlaku, konfliktech a přehnaných požadavcích. Může být kreativní, svobodnější, uvolněná a schopná jít s proudem. Naučí Vás více důvěřovat životu, relaxovat a nechtít mít všechno neustále pod kontrolou. Zároveň může být velmi inspirativní pro své okolí a přinášet lidem změny, úspěch nebo nové možnosti. Taková partnerka se pro Vás může stát důležitým zdrojem štěstí, pokud na ni nebudete tlačit a dovolíte jí rozvíjet se vlastním tempem.",
    "entryText": "Vstoupit do vztahu: Je důležité překonat lenost, pustit přehnanou kontrolu a vybírat srdcem, ne pouze hlavou."
  },
  {
    "energy": 11,
    "gender": "male",
    "mainText": "(11) Vaší ideální partnerkou bude silná, aktivní a vášnivá žena, se kterou můžete zažívat hodně pohybu, energie a intenzivní blízkosti. Bude mít ráda aktivitu, výzvy, fyzický kontakt a může mít velmi silnou životní sílu. Může se zajímat o sport, tělo, zdraví nebo pohyb, protože právě přes fyzickou aktivitu udržuje svou energii v rovnováze. Ve vztahu s ní může být hodně vášně, společných zážitků, přátelství, vzájemné pomoci a živé energie. Taková žena může mít také velmi dobrý vztah k dětem a přirozeně s nimi nacházet společnou řeč.",
    "entryText": "Vstoupit do vztahu: Je důležité pracovat se svou agresivitou, naučit se ovládat sílu a nepoužívat ji ve vztahu destruktivně."
  },
  {
    "energy": 12,
    "gender": "male",
    "mainText": "(12) Vaší ideální partnerkou bude velmi laskavá, upřímná a obětavá žena s otevřeným srdcem. Může mít silnou potřebu pomáhat druhým, podporovat je a být užitečná. Je možné, že ji budou přitahovat dobrovolnické, charitativní, léčitelské, psychologické nebo pečující oblasti. Taková žena může být výbornou mentorkou, rádkyní nebo člověkem, na kterého se můžete obrátit v těžkých chvílích. Zároveň bude velmi důležité, aby se ve vztahu neztratila pouze v pomoci a službě druhým.",
    "entryText": "Vstoupit do vztahu: Je důležité naučit se ve vztahu neztrácet sám sebe. Pomáhejte, ale neobětujte se. Nejprve vnímejte své potřeby a teprve potom potřeby partnerky."
  },
  {
    "energy": 13,
    "gender": "male",
    "mainText": "(13) Vaší ideální partnerkou bude žena, která má silnou touhu po změně, nových zážitcích a hluboké vnitřní transformaci. Může být dobrodružná, živá, nepředvídatelná a stále otevřená novým směrům. S takovou ženou se pravděpodobně nebudete nudit, protože do vztahu přinese pohyb, emoce a schopnost opouštět vše staré, co už nefunguje. Může mít ráda cestování, extrémnější zážitky nebo práci spojenou se změnou, rizikem či obnovou. Vztah s ní může být velmi intenzivní, někdy neklidný, ale zároveň hluboce transformační.",
    "entryText": "Vstoupit do vztahu: Je důležité nebát se opustit staré a zastaralé části sebe, učit se měnit a odvážně vstupovat do nového."
  },
  {
    "energy": 14,
    "gender": "male",
    "mainText": "(14) Vaší ideální partnerkou bude klidná, jemná a harmonická žena, která dokáže vytvářet vyrovnaný a dlouhodobě stabilní vztah. Může mít silné spojení s přírodou, tvořivostí, uměním nebo jemným vnímáním světa. Bude citlivá na Vaše slova a činy, proto je důležité zacházet s ní pozorně a ohleduplně. Může být velmi něžná, vnímavá a oddaná, ale zároveň zranitelná. Potřebujete se naučit vytvářet bezpečný prostor, kde se její citlivost nebude měnit v nejistotu nebo bolestivou žárlivost.",
    "entryText": "Vstoupit do vztahu: Je důležité naučit se předcházet konfliktům, rozvíjet střídmost a včas doplňovat energii skrze tvorbu, kreativitu a umění."
  },
  {
    "energy": 15,
    "gender": "male",
    "mainText": "(15) Vaší ideální partnerkou bude vášnivá, silná a magnetická žena, která má výraznou přitažlivost a silnou životní energii. Bude pro ni důležitá intimní stránka vztahu, blízkost, chemie a hluboké propojení. Zároveň může být chytrá, vnímavá, ambiciózní a dobře rozumět lidem. Může mít silnou touhu po penězích, vlivu, úspěchu nebo moci, a proto vedle sebe potřebuje muže, který se své vlastní síly nebojí. Tento vztah může být velmi intenzivní, pokud v něm nebude závislost, manipulace nebo boj o kontrolu.",
    "entryText": "Vstoupit do vztahu: Je důležité překonat problémy s agresivitou a odstranit závislosti, například na jídle, alkoholu, hrách, vášních nebo destruktivních vzorcích chování."
  },
  {
    "energy": 16,
    "gender": "male",
    "mainText": "(16) Vaší ideální partnerkou bude žena, se kterou může vztah začít velmi intenzivně, někdy dokonce přes konflikt, silnou přitažlivost nebo výraznou životní změnu. Může být spojena s duchovním rozvojem, prací s tělem, psychologií, jógou, meditacemi, semináři, rekonstrukcemi, budováním nebo velkými společenskými změnami. Taková žena může mít silné poslání, schopnost pomáhat lidem a chuť měnit svůj život i svět kolem sebe. Vztah s ní nebude nudný, může být živý, vášnivý a hluboce proměňující pro oba.",
    "entryText": "Vstoupit do vztahu: Je důležité jít do spirituality, duchovního poznání a nebát se vnitřní přestavby svého života."
  },
  {
    "energy": 17,
    "gender": "male",
    "mainText": "(17) Vaší ideální partnerkou bude výrazná, krásná, komunikativní a inspirativní žena, která Vám bude přinášet radost, lehkost a příjemné emoce. Můžete se s ní setkat na společenských akcích, koncertech, výstavách, kreativních dílnách nebo na místech, kde je hodně lidí a inspirace. Bude umět vést rozhovor, zaujmout okolí a přirozeně přitahovat pozornost. Může hodně dbát o svůj vzhled, styl, módu a péči o sebe. Pro harmonii ve vztahu bude důležité dávat jí komplimenty, všímat si maličkostí a oceňovat její krásu i vnitřní svět.",
    "entryText": "Vstoupit do vztahu: Je důležité odstranit přehnané požadavky na partnerku a naučit se vidět skutečného člověka, ne pouze ideál, který máte v hlavě."
  },
  {
    "energy": 18,
    "gender": "male",
    "mainText": "(18) Vaší ideální partnerkou bude tajemná, hluboká a přitažlivá žena, která může působit nedosažitelně nebo velmi magneticky. Může mít aristokratické chování, jemnost, vnitřní hloubku a silné napojení na podvědomí, intuici nebo mystiku. Je možné, že bude mít své strachy, citlivá místa nebo vnitřní nejistoty, které budete společně překonávat. Ve vztahu bude důležitá intimita, důvěra a schopnost mluvit i o tom, co není na první pohled vidět. Pokud se naučíte chápat její hloubku, můžete společně překonat mnoho těžkostí.",
    "entryText": "Vstoupit do vztahu: Je důležité odstranit strachy ze vztahů, nebát se mystiky, esoteriky a hlubších vrstev života, ale přijmout je jako součást své cesty."
  },
  {
    "energy": 19,
    "gender": "male",
    "mainText": "(19) Vaší ideální partnerkou bude slunečná, radostná a optimistická žena, která do života přináší teplo, světlo a pocit hojnosti. Setkání s ní může proběhnout v prostředí bohatství, práce, osobního růstu, velkých společností, bank, společenských akcí, koncertů nebo v teplé zemi se sluncem. Taková žena může mít otevřenou duši, pozitivní pohled na svět a touhu budovat rodinu, tradice a společné radostné chvíle. Ve vztahu s ní může být hodně úcty, společných zájmů, podpory a vzájemného doplňování.",
    "entryText": "Vstoupit do vztahu: Je důležité přestat být posedlý pouze jednou oblastí života, ať už jsou to peníze, láska, práce nebo přátelé. Učte se dávat pozornost všemu postupně."
  },
  {
    "energy": 20,
    "gender": "male",
    "mainText": "(20) Vaší ideální partnerkou bude inteligentní, intuitivní a hluboce vnímající žena, která chápe význam rodiny, kořenů a společné odpovědnosti. Může mít zájem o oficiální manželství, pevné spojení rodin a vztah, ve kterém se oba lidé navzájem podporují. Výběr partnerky pro Vás nebude pouze o ní samotné, ale také o jejím rodu, rodinném zázemí a schopnosti propojit dva rodinné systémy. Přes vztah s ní můžete znovu a vědomě projít některými rodinnými tématy, uzdravit staré bolesti a lépe pochopit své blízké.",
    "entryText": "Vstoupit do vztahu: Je důležité odstranit agresi, netrpělivost a neúctu k lidem. Učte se větší zralosti, trpělivosti a respektu k rodině."
  },
  {
    "energy": 21,
    "gender": "male",
    "mainText": "(21) Vaší ideální partnerkou bude žena s globálním myšlením, hlubokými znalostmi a schopností dívat se na život z nadhledu. Může pocházet z jiné země, jiné kultury nebo mít velmi otevřený pohled na svět. Bude ji přitahovat cestování, svoboda, poznávání různých národů a možnost žít bez zbytečných hranic. Může být skromná v běžných potřebách, ale velmi bohatá v pohledu na život. Taková partnerka Vás může učit širšímu vnímání světa, toleranci a schopnosti přijímat odlišnosti.",
    "entryText": "Vstoupit do vztahu: Je důležité respektovat svou vlast, všechny národnosti, rasy a kultury. Vaše partnerka může být v zahraničí, jiné národnosti nebo ji můžete potkat přes internet, proto je důležité být otevřený lidem z celého světa."
  },
  {
    "energy": 22,
    "gender": "male",
    "mainText": "(22) Vaší ideální partnerkou bude svobodná, veselá, nezávislá a lehká žena, která miluje život, humor, změny a dobrodružství. Může být mladší, vtipná, tvořivá a méně připoutaná k materiálním věcem. Život pro ni může být cestou, hrou a neustálým poznáváním. Může hodně cestovat, žít v různých podmínkách a nepotřebovat velké množství majetku, aby se cítila svobodná. Taková žena nesnáší tlak, omezování a kontrolu. Vztah s ní může být úspěšný tehdy, když jí dáte prostor, důvěru a uznáte její nezávislost.",
    "entryText": "Vstoupit do vztahu: Je důležité naučit se nikoho neomezovat a nesvazovat. Vaše ideální partnerka potřebuje svobodu, lehkost a pocit, že může zůstat sama sebou."
  }
];

function normalizeRelationshipGender(gender) {
  const g = String(gender || "").toLowerCase().trim();
  if (["male", "man", "m", "muž", "muz", "mužský", "muzsky", "masculine"].includes(g)) return "male";
  if (["female", "woman", "f", "žena", "zena", "ženský", "zensky", "feminine"].includes(g)) return "female";
  return null;
}

function getRelationshipTextRecord(energy, gender) {
  const normalizedGender = normalizeRelationshipGender(gender);
  const matches = relationshipChannelTexts.filter(function(item) {
    return Number(item.energy) === Number(energy);
  });

  if (!normalizedGender) return matches;

  const genderMatches = matches.filter(function(item) {
    return item.gender === normalizedGender;
  });

  return genderMatches.length ? genderMatches : matches;
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

function renderRelationshipText(raw) {
  return renderRichText(raw);
}

function renderRelationshipVariantHTML(record, mode) {
  const mainHTML = renderRelationshipText(record.mainText);

  const entryHTML = mode === "entry" && record.entryText
    ? (
      '<div class="relationship-entry-note">' +
        '<h4>Vstup do vztahového kanálu</h4>' +
        renderRelationshipText(record.entryText) +
      '</div>'
    )
    : '';

  return '<div class="relationship-variant relationship-variant-' + escapeHtml(record.gender) + '">' +
    mainHTML +
    entryHTML +
  '</div>';
}

function renderRelationshipEnergyBlock(energy, title, mode, gender) {
  const records = getRelationshipTextRecord(energy, gender);

  if (!records || records.length === 0) {
    return '<div class="energy-item programs-card relationship-card">' +
      '<p>Pro tuto energii zatím není v databázi nahraná vztahová interpretace.</p>' +
    '</div>';
  }

  return '<div class="energy-item programs-card relationship-card">' +
    records.map(function(record) {
      return renderRelationshipVariantHTML(record, mode);
    }).join('') +
  '</div>';
}

function getRelationshipChannelItems(result) {
  const ordinaryValues = [result.R, result.L];
  const shownOrdinary = new Set();
  const ordinaryItems = [];

  ordinaryValues.forEach(function(value) {
    const key = String(value);
    if (shownOrdinary.has(key)) return;
    shownOrdinary.add(key);

    ordinaryItems.push({
      type: "ordinary",
      label: "Energie vztahového kanálu",
      energy: value
    });
  });

  ordinaryItems.push({
    type: "entry",
    label: "Vstup do vztahového kanálu",
    energy: result.D1
  });

  return ordinaryItems;
}

function renderRelationshipChannelHTML(result, gender) {
  const localPrograms = findLocalProgramsInValues([
    result.R,
    result.L,
    result.D1
  ]);

  const localProgramNoteHTML = renderLocalProgramNoteHTML(localPrograms);
  const items = getRelationshipChannelItems(result);

  function getItemLength(item) {
    const records = getRelationshipTextRecord(item.energy, gender);

    if (!records || records.length === 0) {
      return 500;
    }

    return records.reduce(function(sum, record) {
      const mainLength = String(record.mainText || "").length;
      const entryLength = item.type === "entry"
        ? String(record.entryText || "").length
        : 0;

      return sum + mainLength + entryLength;
    }, 0);
  }

  function renderRelationshipItem(item, index) {
    return (
      '<div class="relationship-print-item relationship-print-item-' + index + ' relationship-print-type-' + escapeHtml(item.type) + '">' +
        renderRelationshipEnergyBlock(item.energy, item.label, item.type, gender) +
      '</div>'
    );
  }

  const allTextLength = items.reduce(function(sum, item) {
    return sum + getItemLength(item);
  }, 0);

  /*
    Логика PDF:
    - если отношений мало/средне, всё остаётся на одной странице;
    - если текста много, режем только по превышению;
    - заголовок Vztahový kanál только на первой странице;
    - локальная программа приклеивается к последней странице.
  */

  const pages = [];

  if (allTextLength <= 6800) {
    pages.push(items);
  } else {
    let currentPage = [];
    let currentLength = 0;

    const firstPageLimit = 5600;
    const nextPageLimit = 6500;

    items.forEach(function(item) {
      const itemLength = getItemLength(item);
      const limit = pages.length === 0 ? firstPageLimit : nextPageLimit;

      if (
        currentPage.length > 0 &&
        currentLength + itemLength > limit
      ) {
        pages.push(currentPage);
        currentPage = [];
        currentLength = 0;
      }

      currentPage.push(item);
      currentLength += itemLength;
    });

    if (currentPage.length > 0) {
      pages.push(currentPage);
    }
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

    if (pageLength < 2600) {
      density = "center";
    } else if (pageLength > 5600) {
      density = "dense";
    }

    const itemsHTML = pageItems.map(function(item, itemIndex) {
      return renderRelationshipItem(item, itemIndex + 1);
    }).join("");

    return (
      '<section class="relationship-print-page relationship-page-' + (isFirstPage ? 'title' : 'continue') + ' relationship-density-' + density + '">' +
        '<div class="relationship-print-inner">' +
          (isFirstPage
            ? '<div class="relationship-card relationship-intro relationship-print-title"><h2>Vztahový kanál</h2></div>'
            : ''
          ) +
          itemsHTML +
          (isLastPage ? localProgramNoteHTML : '') +
        '</div>' +
      '</section>'
    );
  }).join("");

  return (
    '<div class="relationship-channel-section relationship-print-card relationship-count-' + items.length + '">' +
      pagesHTML +
    '</div>'
  );
}

module.exports = {
  getRelationshipChannelItems,
  renderRelationshipChannelHTML
};