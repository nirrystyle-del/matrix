// =========================
// FORECAST TEXTS ENGINE
// =========================


const forecastTexts = {};


function addForecastText(key, title, text) {
  forecastTexts[key] = {
    title: title,
    text: text
  };
}


function getForecastText(energyNumber, gender) {
  var number = Number(energyNumber);


  if (number === 3 || number === 4) {
    var genderKey = gender === "male" ? "male" : "female";
    return forecastTexts[number + "_" + genderKey] || null;
  }


  return forecastTexts[String(number)] || null;
}


function renderForecastTextHTML(energyNumber, gender) {
  var data = getForecastText(energyNumber, gender);


  if (!data || !data.text) {
return '<div class="energy-item programs-card forecast-energy-card">' +
      '<h3>Prognóza pro energii ' + escapeHtml(String(energyNumber)) + '</h3>' +
      '<p>Pro tuto energii zatím není nahraný výklad.</p>' +
      '</div>';
  }


return '<div class="energy-item programs-card forecast-energy-card">' +
    '<h3>' + escapeHtml(data.title) + '</h3>' +
    renderEnergyHTML(data.text) +
  '</div>';
}


addForecastText("1", "1 energie", `
Období pro seberealizaci prostřednictvím školení, nových znalostí, sebezdokonalování a čerstvé kontakty, nápady včetně kreativních.
Pomocí aktivní životní pozice se můžete vyjádřit různými způsoby. Iniciativa, zvyšování úrovně a předávání znalostí, rozšiřování okruhu známých budou klíčem k úspěchu. V této době je dobré získat základní/doplňkové vzdělání, absolvovat kurzy a školení. Činnost mozku se více přizpůsobuje vnímání informací, jste doslova připraveni vše vstřebat jako houba. Je také dobré se ukázat komunikační dovednosti, více se objevovat ve společnosti, navazovat užitečné kontakty a nacházet kontakt s ostatními. To bude užitečné v budoucnu.


Je dobré se uvolnit a dovolit si dělat to, co máte rádi. Je důležité věřit si a dosáhnout svého potenciálu. Pro seberealizaci ve veřejném životě je nutné vypracovat si svou sebeúctu a sebevědomí.


Možné klíčové události:


Pozitivní:
Dobrá a stabilní finanční situace. Užitečné vztahy a známosti. Uspořádání vztahů s rodinou, zejména blízká komunikace s bratry/sestrami.Nové začátky, kreativní seberealizace, sebevyjádření skrze společnost. Osobní a profesionální růst, úspěchy a ocenění.Široký kruh komunikace, který přispívá k úspěchu a produktivitě.Zvýšení profesionální úrovně, vlastního mistrovství. Velmi často vyjádření skrze slovo, veřejnost. Úspěšné vzdělávání a získávání užitečných znalostí, které přispějí k postupu v budoucnosti.Právní záležitosti, práce s dokumenty probíhají úspěšně. V osobním životě - plné porozumění.Jsou možné různé technické novinky v životě a práci, pořízení složité digitální techniky.


Negativní:
Zastavení v záležitostech, snížení nebo úplná absenci aktivity. Neschopnost něco rozhodnout v záležitostech, ovlivňovat události nebo jakýmkoli způsobem projevovat svoji vůli.Krádeže, podvody, manipulace zvenčí, problémy s komunikací, nedůvěryhodné informace, problémy ve vzdělávání, konfliktní situace, pomluvy a závist. Mějte maximální opatrnost s dokumenty, protože se mohou vyskytnout problémy.Nepochopení s bratry/sestrami. V osobních vztazích nespokojenost, omezenost z důvodu nedůvěry a opakujících se situací lži.Problémy z vnějšku jsou doplněny vlastní nejistotou o svých talentech a úrovni svého mistrovství. Z toho také plyne pocit bezmocnosti a prázdnoty.
`);


addForecastText("2", "2 energie", `
Zajímavé období hádanek a tajemství. Poslouchejte svou intuici, vnitřní hlas. Osud vás sám přivede ke správným lidem ve správný čas. I když jste se celý život považovali za tvůrce osudu a aktivní v svých postojích, v tomto období se vyplatí spoléhat na tok života, naslouchat tomu, co se děje, a zapojit svůj šestý smysl.Přílišná rozumnost a logika v takové době může být vaším nepřítelem. Mnohem užitečnější je zaujmout pasivní pozici a využít své vnitřní zdroje, věnovat pozornost znamením osudu a "jednoduchým náhodám". Pomůže vám rozvinout své vnitřní Já zájem o psychologii, astrologii, numerologii a dalším vědám.Zejména v tomto období je důležité navázat vztahy s matkou a dalšími ženami v rodině, stejně jako s vašimi polovičkami (a dokonce i s bývalými, aby uvolnili a nechali za sebou nějaké neshody).Pro harmonizaci svého stavu je vhodné být více flexibilní, projevovat péči o ostatní, udržovat klid v jakýchkoli okolnostech. Pro životní a fyzickou rovnováhu jsou také užitečné péče o tělo: zdravý životní styl, zdravé návyky. Častěji byste měli trávit čas v přírodě, používat přírodní produkty.


Možná klíčová událost:


Pozitivní:
Harmonický a klidný život ve zdraví a úspěchu. Zájem o tajné znalosti, vzdělání, sbírání důležitých informací a jejich použití nebo sdílení. Rozvíjení svých schopností, vzdělávání, sebezdokonalování.Dobré vztahy s matkou, příjemné události spojené s ní. Často právě v tomto období se objevují dlouho očekávané děti nebo se věnuje mnoho času právě dítěti.V životě je hodně tajemství, skrytého, intrik. To se může projevit jak v osobních vztazích, tak v práci (například jako nabídka spolupráce v uzavřené organizaci nebo na tajném místě).


Negativní:
Často existují problémy s možností počatí a porodem dítěte, obtíže s výchovou dětí. Vztahy s ženami z okolí (a zejména s matkou) projevují intriky, tajemství, různé konflikty. Do stabilních vztahů může zasahovat žena. To vede k úzkosti a nedůvěře. Vztahy se stávají nestabilními.Člověk necítí sebe, nedůvěřuje svému vnitřnímu pocitu. V práci se mohou objevit problémy, nesprávné informace nebo jejich únik, falešné informace. Možnost závislostí, škodlivých návyků.
`);


addForecastText("3_female", "3 energie", `Období, kdy můžete sklízet plody svého předchozího úsilí.Často si žena zvýší svůj status kariérním postupem. Nebo se může dostat do situace volby mezi službou rodině a prací. Je důležité neopouštět žádnou oblast, ale snažit se udržet rovnováhu. Měli byste přijímat ambiciózní pracovní nabídky a zároveň si nesmíte odpírat svou přirozenou roli pečující ženy v domácnosti. Při péči o domácnost byste si také měli dopřát radost a potěšení. Ženská energie vám pomůže udržet správnou úroveň drobného vybavení. Zkuste si vyhradit čas na péči o sebe, rozvoj svých koníčků, hezký vzhled a sebeobsluhu. Je výhodné mít možnost relaxovat v přírodě a být ve společnosti dalších žen, které mají podobné zájmy, někdy i mimo domov.


Možné klíčové události:


Pozitivní:
Příjemná setkání, bohatství a různorodost v intimním životě.Úspěch v oblasti financí díky postupu v kariéře nebo podpoře vlivného muže.Žena se cítí naplněná, atraktivní a má mnoho pozornosti od opačného pohlaví.Ti, kdo jsou ve vztazích, mohou dostat nabídku.Rodinné ženy mohou očekávat plnou harmonii, lásku a porozumění od manžela a blízkých.Možné jsou narození dětí a koupě nemovitosti.V práci dosahujete úspěšného postupu v záležitostech, otevíráte nové projekty a získáváte zisk. Investice do podnikání přinášejí výsledky. Je dobré začínat s tvůrčími projekty v tomto období.


Negativní:
Možnost samoty a obtíží při naplňování rolí ženy, matky nebo manželky.Toxické nebo neuspokojivé vztahy, často s ponižováním a podceňováním ženy.Žárlivost kvůli nevěře partnera, potíže s otěhotněním a potraty.Nepořádek v sexuální sféře, nespokojenost a ženská zdravotní onemocnění.Těžká finanční situace, která je zhoršována lakotou a depresí.U rodinných žen mohou nastat problémy ve vztazích s dětmi a manželem, a také nespokojenost s rodinnými vztahy.
`);


addForecastText("3_male", "3 energie", `
Období, kdy můžete odvážně sklízet plody své práce ve všech oblastech života. Často následuje postup v kariéře. Může vás však čekat náročný výběr mezi zájmy rodiny a vaší sociální realizací. U mužů v rodině je možný narození dcery. Pokud se v tomto období narodí chlapec, bude se vyznačovat mírnější povahou. Svobodný muž pravděpodobně potká svou budoucí manželku nebo tu, s níž vzniknou vážné a pevné vztahy. Tato partnerka bude mít silný vliv na váš budoucí život. Je důležité věnovat dostatek pozornosti a péče ženám ve vaší rodině, zpracovávat své mužské vlastnosti. Pokud jsou nějaké urážky, nedorozumění s příbuznými, je důležité najít s nimi kontakt a navázat vztahy.


Možná klíčová událost:


Pozitivní:
Pokrok v práci, úspěch v podnikání, zahájení nových ambiciózních (zejména tvůrčích) projektů. Podnikání přináší zisk, úspěch není pouze v práci, ale i v osobním životě. Možnost příjemných románků, užívání si různých radostí ze života, bohatý osobní život. Často se v tomto období přichází k nákupu nemovitostí nebo jiného významného majetku. U mužů v rodině příjemné rodinné starosti, radostné změny od šťastného manželství po narození dítěte.


Negativní:
Špatná situace v rodině, problémy s dětmi, nevěra, žárlivost. Finanční potíže, nestabilita nebo bankrot, vážné ztráty nebo stagnace v podnikání, nedostatek růstu. Despotický nadřízený v práci, která brání kariérnímu postupu. Rozkol v sexuálních vztazích, nemoci, chamtivost, ničivá milenka.
`);


addForecastText("4_female", "4 energie", `
Pravděpodobně budete mít možnost setkat se s budoucím životním partnerem nebo s někým, kdo bude hrát pozitivní roli ve vašem životě po mnoho dalších let. Bude se jednat o vážného a úctyhodného muže, který vám poskytne pocit pohodlí, stability a bude se o vás starat. Možná také budete mít potomka, ať už syna nebo dceru, s poměrně silným charakterem a mužským smýšlením.


V obchodním světě se vám může dostat povýšení, získání manažerské pozice nebo dokonce založení vlastní firmy. Také by nebylo neobvyklé provádět vážné akvizice nebo se podílet na výstavbě nemovitostí. Nicméně je důležité, abyste si udržela svou ženskost, měkkou energii a nepřebírala ve všem mužskou zodpovědnost.


V tomto období bude také důležité řešit problémy s otcem, dalšími mužskými příbuznými a zejména s bývalými partnery. Nesrovnalosti, konflikty a výčitky z minulých vztahů mohou ovlivnit realizaci pozitivních osudových okamžiků.


Možné klíčové události:


Pozitivní:
Možnost podat žádost o schválení od státních orgánů a uzavření smluv s pozitivními následky.Stabilní finanční situace, prosperita a růst.Získání manažerské pozice nebo příležitost získat prestižní zaměstnání.Vedení vlastního podnikání a úspěchy v něm.Odměny za práci a příjem z předchozích investic.Podpora od významného muže (partnera, přítele nebo kolegy).Setkání s mužem, který bude hrát důležitou roli ve vašem osudu.Možnost těhotenství a úspěšného porodu.


Negativní:
Možné nátlak a násilí, zrada nebo potíže způsobené mladým mužem, který selhal v životě.Problémy v komunikaci se státními orgány a úředníky.Špatné řízení projektů nebo vašeho podnikání.Finanční potíže, ztráta případů, propouštění, ztráta moci nebo autority a nedůvěra.Vlastní nesprávné chování od vzpoury až po přílišnou pasivitu a neschopnost ovlivnit situaci.
`);


addForecastText("4_male", "4 energie", `
Muž by v tomto období měl maximálně projevit své mužské vůdčí vlastnosti. Je třeba rozvíjet disciplínu, logiku, aktivitu, realizovat ambice, strategicky uvažovat, přebírat odpovědnost a rozhodovat se. Hlavní události se budou odehrávat v oblasti kariéry a sociální realizace. Obvykle dochází k postupu v práci nebo k založení vlastního podnikání a jeho rozvoji. Možné je také zapojení do velkých projektů. Často se toto období stává časem stavební činnosti nebo nákupu nemovitostí. V rodině se může narodit mužský dědic. Pokud se narodí dívka, bude mít silnou mužskou povahu. Pro muže je důležité nekonfliktovat s jinými muži, a zejména si ujasnit vztahy s otcem. Je užitečné si promluvit a odpustit si předchozí urážky a nepochopení. I když je otec nespravedlivý, není vhodné projevovat svou důležitost nebo se prosazovat na jeho úkor. Mnohem užitečnější je využít tuto energii k dosažení úspěchu v práci.


Možné klíčové události:


Pozitivní:
Uznání ve společnosti prostřednictvím získání vysoké pozice nebo jiných úspěchů. Založení vlastního podnikání nebo úspěšný růst stávajícího. Statusová práce, zlepšení finanční situace, nezávislost a jistota. Vyřízení záležitostí s vládními úřady v pozitivním duchu. Stabilní vážné vztahy s druhou polovinou, uzavření manželství. Pomoc v obchodních záležitostech může poskytnout mecenáš, vážený a vlivný muž.


Negativní:
Nepochopení s vedením, špatné neefektivní řízení a ztráta všeho od moci po peníze. Kolaps, bankrot podniku, prohrané soudní případy. Možné problémy s vládními úřady.Často neštěstí mohou vzniknout v důsledku tlaku, násilí nebo nešikovných kroků nezkušeného zaměstnance. Pasivita a lenost, odmítání řešení situace zhoršují situaci. V osobním životě - nevěra, rozchody, problémy od milenky.
`);


addForecastText("5", "5 energie", `
Vaše období se vyznačuje zaměřením na rodinu a záležitosti blízkých. Je příznivé pro manželství a narození dětí. Může se stát, že budete potřebovat pomáhat příbuzným a řešit některé rodinné záležitosti a zakládat nové tradice. Při tomto všem je důležité udržovat rovnováhu ve vztazích s příbuznými a nepříliš se upínat na starší nebo mladší. Dětem, ať už vašim vlastním nebo dospělým, bude třeba dovolit postupně se osamostatnit. Současně je důležité udržovat zdravé a uctivé vztahy se staršími členy rodiny, poskytovat jim pozornost a péči, ale také žít svůj život a jednat podle svých vlastních hodnot.


V tomto období je také důležité upřednostňovat některé aspekty:


Udržujte pořádek nejen v domácnosti, ale také v emocionálním a myšlenkovém životě.Snažte se dodržovat časový plán a rutinu a dávat věci na svá místa.Zaměřte se na školení a osobní rozvoj, absolvujte kurzy a získávejte nové znalosti.Sdílejte své znalosti s ostatními.


Zvláštní pozornost by měla být věnována správě dokumentů a úředních papírů, aby bylo zajištěno, že jsou v pořádku.


Potenciální klíčové události:


Pozitivní:
Pro mladé lidi může toto období zahrnovat školení, získávání důležitých dokladů a nezávislost na rodičích.Je vhodná doba pro uzavření manželství s partnerem, který je stabilní a zodpovědný. Může dojít k narození dítěte a účasti na tradičních rodinných akcích a rituálech.Toto období může být doprovázeno duchovním a osobním růstem, a to i prostřednictvím nalezení mentora nebo patrona.


Negativní:
Může dojít k konfliktům a sporům z různých důvodů, až po veřejnou nedůvěru a problémy s právy a dokumenty.Někdy mohou nastat problémy ve vztazích s blízkými, až po rozpad manželství.Můžete se ocitnout v konfliktních situacích a nesnázích, včetně potenciálního vlivu podvodníků a hrozeb pádu do sekty.
`);


addForecastText("6", "6 energie", `
Během tohoto období se zaměřte na vaše vztahy s ostatními, vnější krásu a vnitřní harmonii. Důležité je udržovat rovnováhu ve všech aspektech vašeho života a řídit se vlastními pocity, aniž byste podléhali vnějším příkazům či tlakům.


Věnujte zvláštní pozornost prostředí kolem sebe a sebe samých. Během této doby může být zvláště výrazná touha po fyzickém kontaktu, po něžnosti a péči. Chcete projevovat něhu a lásku a očekáváte stejnou odpověď od druhých. Dbejte na pozornost, péči a respekt ve vašich vztazích.


Hledáte možnost hlubšího spojení a spolupráce s druhými, přestože se mohou vyskytnout neshody. Důležité je však stále držet společný cíl a pracovat na harmonických vztazích. Zamilování a hledání duševní souladu může být na pořadu dne. Intimita s partnerem a kvalita vztahů získávají na důležitosti. Buďte otevření a autentičtí v tom, co si přejete.


Tento čas přináší i rozvinuté komunikační schopnosti. Mějte dobré vztahy s ostatními a buďte zdrojem radosti a potěšení pro ty kolem sebe. Udělejte si konečně čas na své koníčky, zejména ty kreativní.


V případě nedorozumění s ostatními, zejména s blízkými, snažte se rychle vyřešit konflikty a jako první přistoupit k usmíření. Toto bude mít pozitivní vliv především na vás.


Možné klíčové události:


Pozitivní:
Mnoho nových známostí a příjemných kontaktů. Zamilovanost, nový vztah, zásnuby nebo svatba. Úspěšný začátek nové práce nebo podnikání. Možnost realizovat kreativní koníčky. Harmonické vztahy s ostatními. Důležité události s dlouhodobým dopadem. Zájem o umění a krátké cesty. Možné uzdravení po nemoci.


Negativní:
Konflikty, hádky a nedorozumění ve vztazích. Možnost zrady nebo ztráty ve vztazích. Obtíže a neshody s partnery. Promarněné příležitosti a ztráty. Závislost na názorech druhých. Obtížné obchodní situace a problémy s kolegy. Riziko volby špatné cesty. Utrpení z neoblíbené práce.
`);


addForecastText("7", "7 energie", `
Zvláštností tohoto období je aktivní pohyb a nové příležitosti. Je důležité reagovat na všechny šance a být co nejvíce mobilní. Toto je skvělá fáze pro stěhování a všechny aspekty týkající se změny bydlení. Cestování a služební cesty jsou výbornými možnostmi. Během těchto aktivit můžete získat nové užitečné známosti, navázat vztahy se stejně smýšlejícími jednotlivci a vytvořit nová přátelství. Toto období také podporuje kariérní postup a rozvoj v pracovním a tvůrčím směru.


Je důležité nenechat si ujít žádnou příležitost, abyste se mohli ukázat. Je však ještě důležitější si stanovit konkrétní cíle, vytvořit plán a směřovat k jejich dosažení. Otevření nového podniku nebo jeho rozšíření bude nabízet zajímavé příležitosti. Pokud máte pochybnosti, můžete se opřít o asistenty a zapojit co nejvíce lidí do procesu. To je období, kdy společné úsilí může být klíčem k úspěchu. Dokážete úspěšně realizovat různé projekty a vést tým.


Možné klíčové události:


Pozitivní:
Dobré zprávy a nabídky, nové nápady a příležitosti. Plodné cesty, kariérní postup, rozšíření obchodních aktivit. Úspěšná realizace velkých cílů a plánů. Možnost zakoupit si auto a zažít příjemné výlety a cestování. Úspěšný přesun či stěhování. Uznání vašich schopností a nové perspektivy. Rozvíjející se romantické vztahy charakterizované jasem, vášní a rychlým vývojem. Možnost seznámení na cestách nebo prožití dovolenkové romance.


Negativní:
Stagnace ve vývoji, pracovním i vztahovém životě. Různé překážky, zpoždění, špatné informace, napětí a obchodní problémy. Možné potíže s pověstí, neúspěchy v soutěžích nebo výběrových řízeních. Hrozí možnost nehod a dopravních nebezpečí. Problémy na cestách, neúspěchy ve vyjednávání. Během negativních událostí může docházet k odmítání dřívějších cílů, konfliktům a silným emocím, které mohou být těžko ovladatelné. Možná budoucnost přináší nucené stěhování nebo problémy s cestováním (např. v souvislosti s rozchodem nebo rozvodem).
`);


addForecastText("8", "8 energie", `
Klidné a relativně stabilní období, které mnozí spíše vnímají jako období stagnace. Ve skutečnosti přináší všechny možné plody pro další rozvoj důležitých oblastí života: od osobní po kariéru a uplatnění ve společnosti. Je důležité porozumět své minulosti a současnosti z hlediska toho, čeho jste dosáhli a k ​​čemu byste chtěli dojít, jaké jsou vaše schopnosti a jak moc se realizujete v práci, kreativitě. Budete také muset zapracovat na vašem vztahu s partnerem. Přemýšlejte o tom, jak jste šťastní a naplnění ve vztazích, zda přinášejí radost; Pokud existují problémy, jaké to jsou? V těchto obdobích se lidé často uchylují k radám profesionálních psychologů, protože je obtížné porozumět starým problémům nebo sobě samým.


Mimořádný čas k akci, projevení karmických zákonů a působení osudu. Neměli byste vinit za život, hledat spravedlnost (podle vašich představ a zákonů). Ale je dobré chovat se k ostatním tak, jak byste chtěli, aby se oni chovali k vám. Pokuste se ukázat mírumilovnost, snadný přístup k životu a zároveň pracovat na své postavě, chápat zákony života. Dávejte pozor na pořádek ve věcech a dokumentech, splaťte všechny dluhy, v jakékoli formě (závazky, daně, půjčky, pomoc v reakci na tu, která vám byla poskytnuta).


Možné klíčové události:


Pozitivní:
Vzdělávání a skládání zkoušek, získání diplomu. Obrácení se na státní orgány a soudy s úspěšným vyřešením záležitostí ve váš prospěch. Dobrý vývoj událostí, záležitosti s dokumenty, formální vztahy (právní, majetkové, osobní). Není neobvyklé, že v tomto období můžete potkat svou osudovou osobu a vybudovat s ní pevný, šťastný vztah. V kariéře může přijít ocenění a veřejné uznání. Nemusíte se starat o financování a rozumné využití peněz - vše bude pod kontrolou.


Negativní:
Nervózní a napjaté situace, projevy nespravedlnosti od okolí, právní spory. Těžká finanční situace způsobená kolapsem podnikání nebo rozvodem se snahou rozdělit majetek. Podvody a klam, smlouvy s dvojitým významem, stejně jako nespravedlivé jednání vládních orgánů a úřadů vedou k bankrotu a dokonce ke ztrátě svobody (věznění). Můžete se setkat s nadužíváním nebo úmyslným poškozením ze strany úřadů, pomsty od státních úředníků, svévole policie.
`);


addForecastText("9", "9 energie", `
Nyní je čas pro hlubokou práci na své vnitřní osobnosti. Je prospěšné znovu zhodnotit minulé i současné zkušenosti a položit si důležité otázky. V tomto období často lidé intenzivně hledají smysl svého života a své vlastní identity ve světě. Nedoporučuje se spoléhat na rady a závěry jiných lidí, protože všechny odpovědi již nesete v sobě. Je důležité obrátit se k sobě a naslouchat svému vnitřnímu hlasu. Trávení času sami, v přírodě, cvičení jógy, čtení knih o psychologii, studium kosmických zákonů a budování vztahů mohou být velmi prospěšné.


Buďte kreativní a snažte se prohloubit svůj vztah se životním partnerem a dosáhnout nové úrovně. K tomu vám pomůže kreativita, hloubka a objevování vašeho vnitřního potenciálu.


Toto období může zahrnovat také přehodnocení vaší životní úrovně, společenského postavení a příjmu. Může se objevit touha napravit některé aspekty vašeho života. Je však důležité jednat umírněně a nedělat nepromyšlené kroky. Při hledání prosperity si dávejte pozor na své zdraví a nezapomínejte na kvalitní životní úroveň.


Možné klíčové události:


Pozitivní:
Možnost odpočinku od práce a od sebe odděleného stavu, což vám umožní navštívit zvláštní posvátná místa, místa moci nebo svatá místa.Dále může dojít k duchovnímu růstu a kreativnímu rozvoji jednotlivce, hledání sebe sama prostřednictvím školení nebo hledání mentora.Toto období může přinést osobní vhled a hluboké pochopení procesů, což vám umožní prožít radost ze svých činností a získat moudrost.Můžete také pracovat na vyřešení starých křivd, strachů a komplexů.Stabilní a důvěryhodný vztah s partnerem je také v dohledu, a můžete navázat mnoho kontaktů se staršími lidmi.


Negativní:
Období může zahrnovat samotu, buď z důvodu rozpadu vztahů nebo nuceného odloučení, například z důvodu nemoci nebo duševních problémů.Mohou nastat problémy v komunikaci se staršími lidmi a projevovat se úzkosti a ztráta rodinného spojení.Ve vztahu může nastat pocit společné samoty, když život probíhá bez emocí a citů, a každý si hledí svého.Mohou se objevit i problémy v práci, včetně ztráty zaměstnání nebo podnikání způsobeného povrchním přístupem a unáhlenými kroky.
`);


addForecastText("10", "10 energie", `
Čas přijmout dary osudu a cítit se jako opravdový šťastlivec. V životě se mohou stát nejdůležitější a nejpříjemnější události, od výhry v loterii po velké zisky a úspěchy v podnikání, které jste dlouho plánovali. Mohou se také splnit vaše sny, objevit se osudová setkání a navázat šťastné vztahy. Vše přispěje k těm nejradostnějším změnám. Zdá se, že jste spadli do svého vlastního proudu a pohybujete se s ním, dostáváte bonusy a nepotřebujete vynakládat přílišné úsilí.


Finanční prostředky se najdou, všechny dveře se vám otevřou, a na vaší životní cestě se objeví přesně ti správní lidé.


Je důležité být otevřený tomuto proudu a novým příležitostem, mít pozitivní přístup k životu, děkovat za každý nový den. Neberete věci příliš vážně, vnímejte znamení osudu a nebojte se přát si. Přestaňte se pokoušet kontrolovat vše a jednoduše si užívejte, co se děje kolem vás. Věřte v proměnu a v život, který je „vědět“, co je pro vás nejlepší.


Během tohoto období je třeba věnovat zvláštní pozornost komunikaci, vztahům s veřejností, přátelům a kolegům. Právě mezi nimi můžete potkat svou spřízněnou duši nebo získat příležitosti a informace pro další růst. Stagnace v jakékoli oblasti je škodlivá, stejně jako přílišná introspekce, pochyby a podezíravost. Žijte aktivním životem: pracujte, tvořte, cestujte a buďte ve společnosti. Nebojte se ukázat.


Možné klíčové události:


Pozitivní:
Proudy štěstí a financí, náhlé pozitivní změny.Možnost výhry v loterii nebo jiných šťastných událostí.Povýšení v práci nebo získání atraktivní nové pozice.Cestování, stěhování do zahraničí.Úspěšné podnikání s výraznými zisky.Investice, granty, bonusy a odměny. Osudová setkání a navázání šťastných vztahů.


Negativní:
Náhlé nepříznivé změny nezávislé na osobním úsilí.Závažné zdravotní problémy nebo úrazy.Ztráta zaměstnání nebo obchodních neúspěchů.Nervové napětí, stres a finanční potíže.Pasivita, velké výdaje, dluhy a půjčky.Možné riziko podvodů a loupeží.Nesnáze v podnikání a vztazích, propady výroby a zisky.Ve vztazích může docházet k nejistotě a nestabilitě.
`);


addForecastText("11", "11 energie", `
Doba růstu a úspěchu, ale zároveň velkého výdeje energie. Můžete dosáhnout úspěchu v kariéře a společnosti tím, že budete mít silný vliv na velké množství lidí a vytvoříte nové směry. Období je pozitivní a při rozumném využití svých sil můžete sklízet spoustu výnosů. Právě teď je důležité dostat se do formy, naučit se efektivně pracovat a nepřetěžovat se. Je užitečné normalizovat svůj denní režim, pravidelně cvičit a trávit více času venku. Vyhraďte si také čas na své koníčky a nechte si dostatek volného času. Tím zvýšíte svou efektivitu, a to více než spěcháním z jednoho projektu do druhého, přebíráním všeho naráz a neustálým vyvíjením energické aktivity a zdržováním se v práci.


Udělejte si také čas na prevenci chronických onemocnění a pravidelné lékařské prohlídky, abyste nezmeškali důležité aspekty zdraví. V opačném případě může workoholismus, který často provází toto období, vést k úplnému fyzickému a nervovému vyčerpání.


Možné klíčové události:


Pozitivní:
Období absolvování vytrvalostního testu, kdy budete muset využít maximum svých sil, a následný návrat ke sportu, práci nebo jakékoli plodné činnosti.Situace je ve vašich rukou a můžete dosáhnout povýšení a uznání.Je možné, že otevřete vlastní podnikání nebo rozvíjíte stávající s vysokým startem a vynikajícím výsledkem.Máte dobrou finanční situaci, sebevědomí a schopnost kontrolovat své vášně a emoce.Ve vztahu prožíváte období násilné vášně a aktivitu partnera, což přináší živé zážitky.


Negativní:
Mohou se objevit nedostatek síly, zdravotní problémy, slabost a neschopnost čelit výzvám, nátlaku nepřátel nebo konkurentů.Mohou se objevit fyzické nemoci, chirurgické zákroky, deprese, úplné zhroucení a únavu.Ve společenském kontextu můžete být podřízeni někomu, může dojít ke krizi v oblasti financí a ztrátě majetku.Může se vyskytnout nárůst stresu, konfliktů a napjatých situací. V byznysu se věci mohou vymknout kontrole, a to až k vnějším omezením.Dejte si pozor na workoholismus, který může být běžný v tomto období, ale nepřinese vám žádné výsledky a může vést ke zdravotním problémům.Může se objevit pocit samoty, ztráta zájmu o opačné pohlaví a nedostatek intimního života.V intimním životě se mohou objevit různé problémy a dokonce i riziko zneužití.
`);


addForecastText("12", "12 energie", `
Těžké osudové období, jehož zkoušky se mohou stát klíčovými, zlomy pro budoucí život. Věci v podnikání, některé problémy, vztahy v osobním životě, které prošly řadou zkoušek, mohou dosáhnout nové (složitější a dokonalejší) úrovně. Nebo naopak - náhle jít do úpadku (kolaps, rozvod, ztráta). Vše záleží jen z poloviny na vás. Zhruba napůl – z vašeho okolí, schopnost naslouchat a dělat správnou věc, zachytit známky osudu, být moudrý a hluboký před ztrátou a ziskem. Budete se muset rozloučit s někým nebo něčím důležitým v životě.V takové chvíli je dobré naslouchat sami sobě a pozorně se dívat, co se děje kolem. Někdy prostě nebude možné zasahovat do záležitostí nebo cokoliv měnit v probíhajících situacích. Výhodná bude pozice citlivého pozorovatele. Je dobré, když dokážete inspirovat a předávat stejný stav ostatním v okolí. Tento stav a nadcházející změny jsou potřeba k něčemu důležitému.Neodmítejte účast na charitě, pomáhání druhým. Zároveň ale udržujte rovnováhu ve své schopnosti dávat (dávat) druhým a přijímat na oplátku. Vaše zájmy by v tomto období měly být stále na prvním místě. Dávejte někomu z vnitřní plnosti, z upřímné touhy a neočekávejte odměnu, něco na oplátku nebo se snažíte získat lásku.Nezapomínejte pečovat o své fyzické tělo, dodržovat správnou výživu, režim a ve všem udržovat rovnováhu. Je užitečné učit se nové věci, učit se z jiných úhlů pohledu, chápat moudrost a znalosti o zákonech vesmíru.


Možné klíčové události:


Pozitivní:
Relativně klidný čas s malými pozitivními pohyby. Například východisko z krizové situace, řešení případů, růst malého podniku, atraktivní vyhlídky v různých oblastech života. Uzdravení po nemoci. Duchovní zrání, revize hodnot a schopnost opustit zastaralé staré. Přijímání života a aktuálního dění s pokorou a vírou v moudrost osudu.Pomáhat lidem, podílet se na charitativních projektech. Čas nabrat síly, odpočinek a oddech. V osobním životě budujte vztahy se svou spřízněnou duší podle nových principů, hodně revidujte, dosahujte nové úrovně.


Negativní:
Nejistota v životě, visení v těžké situaci, neschopnost řešit problémy, závislost na někom/něčem. Ztráty ve finančním vyjádření, v životě, strach ze změny az této stagnace ve všech procesech. Nejrůznější omezení a zkoušky z nemoci, možnost přejít do nucených omezení (vězení, nemocnice).Vynucené a často zbytečné oběti pro druhé: vzdání se velkého množství peněz, dobré práce nebo perspektivního vztahu. Všechny druhy závislostí, závislosti.Vztahy založené na neuróze, stresu, podle scénáře záchrany věčné „oběti“. Možný rozvod, rozchod, deprese, sebevražedné nálady.
`);


addForecastText("13", "13 energie", `
Vaše období zásadních změn a prudkých obratů v osudu přinese události, které změní váš život natolik, že už nebude jako dříve. Tyto události mohou být jak pozitivní, tak i hořké, až do smrti někoho blízkého. Je klíčové přijmout tyto změny s ochotou a moudrostí, bez odporu a s otevřeností. Budete muset rychle reagovat na nečekané situace a rozhodovat strategicky.


Během tohoto období je důležité:


Uvolnit se od starých a nepotřebných věcí, vztahů a návyků, které již neposkytují žádnou hodnotu.Přizpůsobit se rychle se měnícímu prostředí a reagovat na události bez zbytečného váhání.Rozvíjet schopnost rychlého a strategického rozhodování.Dbát na zdravý životní styl, včetně zanechání špatných návyků a dodržování diety.Nepodléhat zbytečným dobrodružstvím a rizikovým činnostem.


Potenciální klíčové události:


Pozitivní:
Změny mohou zahrnovat úspěšné zdravotní zákroky nebo zbavení se závažných nemocí.V osobním životě může dojít k ukončení špatného vztahu a začátku nového, růstového období.Období také může přinést pozitivní změny v práci nebo stěhování na nové místo.


Negativní:
Zdravotní problémy, včetně exacerbace nemocí a úrazů, jsou možné.V osobním životě může nastat rozvod nebo problémový vztah.V podnikání může dojít k stagnaci, kolapsu nebo ztrátě. Toto období vyžaduje flexibilitu, schopnost přijmout změny a rozhodovat se racionálně i v náročných situacích.
`);


addForecastText("14", "14 energie", `
Dobré období pro sebezkoumání, prozkoumání hlubin své duše a poznání sebe sama. Často se objevuje zájem o kreativitu, umění, krásu a jemnosti. Mohou se objevit situace, které vám pomohou rozvinout kvality vaší osobnosti, které dosud nebyly dostatečně vyjádřeny. To platí zejména o pokoře, trpělivosti a schopnosti přijímat události a věci takové, jaké jsou. Některé z nich nelze změnit nebo zastavit, a proto se můžete stát moudrými a pokornými pozorovateli, kteří se přizpůsobí vůli osudu. To by mohlo být nejlepším řešením. Je důležité nebýt netrpělivími, protože každá akce má svůj čas. Nesmíte se stěžovat, být chamtiví nebo kritizovat osud. Vaše odměna přijde v pravý čas.Toto období je také skvělou příležitostí naučit se žít v souladu se sebou samými. Měli byste dělat věci, které vás baví, a nesmíte se bát změn, které s sebou přináší. Získáte přesně tolik, kolik potřebujete pro klidný a pohodlný život, a můžete se věnovat svým koníčkům, kreativitě a seberozvoji. Budete se starat nejen o své duševní, ale i o tělesné blaho. Můžete se zajímat o přírodní léčiva, jako jsou bylinky, oleje, minerály a vodu. Využijte dary přírody, ale nedopřávejte si přemíru. Je důležité být střídmí ve všem. Dbejte také na signály svého těla.Když se pustíte do něčeho, dokončete to, na co se vrhnete, a soustřeďte se na kvalitu před kvantitou. Dbáte také na své emocionální zdraví, snažíte se zbavit ostrých hraničních emocí a nepřipouštíte, aby se vám hromadila negativita.


Možné klíčové události:


Pozitivní:
Stabilita v životě a v různých oblastech. Postupný růst v kariéře a podnikání. Stabilní příjem peněz. Klidný průběh událostí, které jdou podle plánu. Snadné přizpůsobení se okolnostem a nalezení správné cesty. Konkurenceschopnost v práci a podnikání, úspěšné obchody a spolupráce. Schopnost uzavírat kompromisy a smířit se s ostatními, a to i při řešení rozmanitých otázek. Dobré vztahy v kruhu blízkých lidí. Absence zdravotních problémů. Možnost nových a příjemných známostí a harmonických dlouhodobých vztahů. Existuje šance na smíšené, ale velmi harmonické a šťastné manželství.


Negativní:
Nedostatek stability ve všech aspektech života, včetně vnitřního světa. Přehnané vyjadřování emocí, podrážděnost a nervozita jsou na vzestupu. Neschopnost dosáhnout dohody a nalezení kompromisů. V záležitostech a vztazích se objevují neshody, spěch, panika, nedostatek informací nebo chybné informace vedoucí ke špatným závěrům. To vede ke kolapsu v různých oblastech, zpožděním a nestabilitě od porušení termínů až po úplné zastavení. Mohou se projevit žádostivost, agrese, poruchy příjmu potravy a alkoholová závislost. Nastane nedostatečný přísun peněz. Vztahy trpí nedostatečným porozuměním mezi partnery, což může vést ke stále se zhoršujícímu emočnímu výkyvu.
`);


addForecastText("15", "15 energie", `
Nastal čas globálních změn a náhlých darů osudu. Každá z těchto událostí bude mít svůj podtext a dvojí denotaci. Budou to nejen odměny, ale také zkoušky poctivosti, upřímnosti a pravdivosti vašich toužeb.Můžete například náhle získat vysoké postavení nebo velký majetek. V těchto okamžicích je důležité, jak s tímto příležitostmi naložíte. Nebudete-li jednat pro zlo a nepoctivě nevyužijete svého postavení, můžete získat ještě více. Pokud se však rozhodnete neetickým způsobem, může vaše postavení v životě představovat vlastní trest.Silné změny jsou možné nejen v jedné oblasti života, ale ve všech směrech najednou. V různých vztazích můžete být neustále provokováni a přiváděni k negativním reakcím. Je důležité zároveň být k sobě upřímní a projevovat své pocity a emoce, ale také pracovat na sobě. Pokud skrýváte špatné charakterové vlastnosti a pouze předstíráte, může to vést ke kolapsu vztahu.Důležité je zároveň být k sobě upřímným a projevovat své pocity a emoce, ale také pracovat na sobě. Pokud skrýváte špatné charakterové vlastnosti a pouze předstíráte, může to vést ke kolapsu vztahu. Situace se mohou zhoršovat a přibývat, takže se toto negativum jistě projeví.Během tohoto období je možná silná láska a šance setkat se s nejdůležitější osobou ve vašem životě, bez které prostě nebude možné žít. Je důležité být otevření, řešit své předchozí psychické problémy a nepřenášet minulé zkušenosti do nových vztahů. Toto je dobrý čas pro globální nákupy a důležité transakce.


Možné klíčové události:


Pozitivní:
- Osvobození od různých závislostí, jako jsou zlozvyky nebo kriminální pokušení, citová závislost nebo dluhy. V této době dokážete ovládat své sklony, žít v harmonii sami se sebou a dostávat dary od osudu. To může zahrnovat úspěch v práci, v podnikání, v politice a společenských aktivitách. Získáte slávu a uznání spolu s finančními toky, velké výhry nebo jiné způsoby získání peněz. Všechno půjde snadno, váš kariérní růst bude strmý a ostatní budou považovat za šťastného.


- Fáze práce na svých negativních charakterových vlastnostech, strachech a závislostech. Tato doba může zahrnovat vášnivé vztahy a osvěžující období v osobním životě.


Negativní:
Existuje riziko vnějšího nátlaku, včetně přímého násilí, vyhrožování a manipulace až po černou magii, což může postavit jednotlivce pod tlak. Často budou čelit pokušením a zkouškám, kterým se těžko vzdoruje. Někteří mohou manipulovat s vašimi tajemstvími, strachy, informacemi nebo závislostmi, aby dosáhli svých cílů.


Mohou se objevit nebezpeční nepřátelé, kteří jednají skrytě. Může dojít k srážkám s kriminálním světem, nepoctivému chování, vydírání a těžkým finančním situacím. Jakákoli z těchto okolností může představovat překážky pro váš růst a blahobyt. V osobním životě se může objevit konflikt, neetické chování, násilí nebo problematický vztah. Lži a podvádění mohou také v této době hrát negativní roli.
`);


addForecastText("16", "16 energie", `
V této fázi člověk ztrácí to nejcennější, co pro něj má. Obvykle se to týká úspěchů v materiálním světě: milovaného partnera, vztahů, peněz, moci, práce. Čím silněji člověk drží věci ve sféře hmotného života, tím větší je pravděpodobnost prohry. Tato krize je člověku dána jako možnost změnit své názory, probudit se z běhu ve vlastním kruhu a začít žít jinak. Nastává náročné období osobního růstu a duchovního probuzení v důsledku nečekaných změn.


Bude nutné se vzdát všeho, co bylo dříve považováno za samozřejmé: životního stylu, zvyků a dosavadního pohledu na svět, aby byly přehodnoceny osobní hodnoty. Pomohou různé hluboké učení a znalosti o struktuře světa, od psychologie po astrologii. Na cestě k poznání sebe sama a světa je vhodné dělat věci, které jste dosud nezkoušeli, a zavádět omezení, smysluplnou a dostupnou askezi, například v jídle a požitcích.


Také je užitečné experimentovat a začít nové aktivity, ať už jde o cestování, seznamování se s novými zájmy nebo koníčky. Nejlepší je změnit celé prostředí a vystoupit z komfortní zóny, bez ohledu na to, jak nepříjemné a nečekané to může být. Pokud něco nefunguje, nezoufejte. Vždycky existuje čas začít nový cyklus života. Důležité je pracovat na svých ambicích a omezit své ega, které může v budoucnosti jen přinést škody.


Možné klíčové události:


Pozitivní:
Úspěchy v podnikání, rozvoj vlastního podnikání, zakládání nových projektů. Dramatické změny a reorganizace ve struktuře života, vztazích nebo v práci a veřejných vztazích. Staré iluze se rozpadají, nový systém hodnot se formuje, osobní růst a duchovní transformace. Příznivá doba pro nemovitosti, buď jejich nákup nebo výstavbu. Možnost usmíření a obnovení vztahů.


Negativní:
Prudké negativní změny, kterým nelze zabránit ani ovlivnit běh událostí. Šokující zprávy, násilí, smrt, přírodní nebo lidské katastrofy, nehody, konflikty a boje.Osobní konflikty, hádky a rozpad vztahů. Finanční a materiální ztráty (peníze, bydlení, podnikání). Těžké situace a zranění v důsledku katastrof, problémy různého druhu a dokonce i uvěznění. Dochází k úplnému restartu nashromážděných zkušeností a majetku.
`);


addForecastText("17", "17 energie", `
Je to výjimečné období pro kreativní jedince s mnoha koníčky a talenty. I když máte tendenci se vyhýbat veřejnosti, právě nyní máte šanci se projevit, získat slávu, uznání a oblíbenost.


Je důležité být otevřený nadcházejícím změnám. Měníte svou image, pracujete na svém vzhledu a sebevědomí. Rozvíjíte své talenty, charisma a přirozené dovednosti. Častěji se vyplatí zúčastňovat veřejných akcí, od rušných večírků až po výstavy. Inspiraci můžete nacházet všude kolem sebe. Může se stát, že váš koníček se v tomto období změní v povolání a příjemný způsob, jak dosáhnout slávy, ale také postavení, pohodlí a finančního blahobytu. K tomu můžete využít své dovednosti, kreativitu a znalosti.


Rozvíjíte své sebevědomí a odhalujete světu svůj vnitřní svět. Veřejné projevy, akce, kde jste v centru pozornosti, vám přinesou požadované výsledky.


Možné klíčové události:


Pozitivní:
Zabýváte se tím, co máte rádi, cestujete, dosahujete kreativního a duchovního růstu, můžete vydělávat uměním. Setkáváte se s příznivými znameními osudu a neočekávanou důležitou pomocí zvenčí. Vaše touhy se plní rychle a úspěšně. Plníte si podnikatelské cíle, život je naplněný optimismem, dobře vyvinutou intuicí a projevy vnějšího blahobytu. Pokud jste měli zdravotní problémy, začíná fáze zlepšení a štěstí.Osobní život nabízí nové vztahy a romantiku. Je to období naděje a radosti, kdy vytváříte důvěryhodné vztahy se svým partnerem.


Negativní:
Arogance, chlad a nezájem o druhé, absurdita jednání, odmítání pomoci. Pokud získáte uznání, může to vést k nafouknutému sebevědomí a neúspěchu. Může docházet ke zmařeným plánům, zklamaným nadějím a neúspěchům. Vaše příležitosti mohou zůstávat nevyužitymi kvůli vlastní nejistotě.Může se objevit krize kreativity a problémy s přáteli. Pocit pasivity, negativní pohled na všechno, absence cílů a motivace. Lenost, apatie a nedostatek energie mohou brzdit plnění snů a realizaci plánů.V osobním životě mohou nastat vztahy bez budoucnosti a nereciproční láska.
`);


addForecastText("18", "18 energie", `
Období maximální koncentrace na osobní život a seberozvoj. V této době se emocionalita zintenzivňuje a člověk se stává velmi citlivým. Důležití jsou lidé, kteří jsou poblíž, a vytváření dobrých a harmonických vztahů. Je užitečné obnovit pořádek v domě a podílet se na jeho zlepšení. Stejně důležité je věnovat pozornost své podvědomé stránce osobnosti. Rozvoj a schopnost být sám sebou, naslouchat sobě a jednat podle svých tužeb jsou klíčovými body.


V této fázi jsou zvláště důležité vztahy s matkou a ženami ve vašem klanu. Je důležité navázat kontakt a udržovat dobrou komunikaci. Vaše citlivost a empatie v tomto období vám pomůžou lépe porozumět složité ženské povaze.


Obrazy a myšlenky se stávají živými a mají moc stát se skutečností. V takovém období je důležité žít co nejvědoměji a vybírat si, na co myslíte. Je snadné realizovat plány a sny díky schopnosti myslet pozitivně, ale mohou se také splnit ty negativní.


Možné klíčové události:


Pozitivní:
Nový příjemný vztah, dlouho očekávané těhotenství. Dům je útulný a klidný, poskytuje komfort. Navazují se vztahy s matkou a dalšími blízkými ženami. Zvýšená citlivost a emocionalita pomáhají v kreativitě. Stejně jako vnitřní práce na sobě, uvědomění si chyb, vyjasnění strachů. Časté výlety do přírody. Schopnost a touha po tajných znalostech. Prorocké sny a schopnost jasnovidectví. Interakce s psychologem k dosažení nové úrovně. Vyjasňování vztahů s ostatními. Získávání informací o tajných zlých úmyslech a odhalování nepřátel.


Negativní:
Pomluvy, intriky, pomluvy a podvody od ostatních, zejména od žen. Zrada ve vztahu, založená na iluzích. Podvody, nepochopitelné akce proti člověku, složité příběhy a nespolehliví lidé v obchodě a podnikání. Nelegální obchody a nepřátelé, kteří se představují jako přátelé. Mnoho neobvyklých a logicky nevysvětlitelných situací. V osobních vztazích nejistota, zrada, potíže s početím a problémy s reprodukčním systémem. Negativita ve vztazích s matkou nebo příbuznými. Možný vliv černé magie nebo zlo ze strany ženy. Intuice může být nepřesná. Často se objevují noční můry, celkový stav deprese, strachy a nervozita. Při pobytu na vodě nebo při kontaktu se zvířaty hrozí nebezpečí.
`);


addForecastText("19", "19 energie", `
V takové chvíli může člověk zažívat emocionální vzestup, chtít si užívat jednoduchých radostí, hýčkat své vnitřní dítě nebo získat to, co mu v dětství chybělo. Může navazovat dobré vztahy s dětmi (včetně pracovních vztahů). Toto je skvělé období pro budování vztahů s bratry nebo sestrami, pokud jste dlouho nebyli blízcí.Můžete si dovolit relaxovat a jít s proudem života, protože v různých oblastech se vše vyvine samo. To však platí pouze tehdy, když člověk není posedlý určitou myšlenkou nebo nezávisle na čemkoli (práce, peníze, vztahy). Pokud máte v hlavě obsedantní myšlenku, například oženit se za každou cenu, neustále hledáte vztahy nebo jste posedlí penězi a mocí, může to situaci komplikovat. Může to vést k nemocem, psychosomatickým obtížím nebo vážným problémům, které mohou člověka ochromit.Aby se toto období stalo hojným a co nejúspěšnějším, je vhodné častěji děkovat za to, co život přináší. Nedovolte, aby kontrola nad prací a vztahy byla příliš přehnaná, a dejte dětem více svobody. Energií je třeba efektivně rozdělovat do různých činností a oblastí života a věnovat trochu času různým aktivitám. To usnadní vaši cestu.Nejdůležitější v této době je odpuštění a překonání viny. Jinak může vina všechnu vaši energii vyčerpat a vést k opakujícím se situacím, kdy jste ponižováni nebo trestáni různými způsoby.


Možné klíčové události:


Pozitivní:
Příjemné události v pracovním a rodinném životě, pocit celistvosti bytí a denní radosti.Navazování vztahů s bratry, sestrami a otcem a společné rodinné dovolené.Šťastné manželství, silné rodinné vztahy a příchod dítěte s minimálními problémy v jeho výchově.Příležitost pro kreativní vyjádření sebe sama, inspiraci a nové nápady.Dosahování dlouho očekávaných úspěchů, uznání ve společnosti a získávání zasloužených ocenění.Vědecké úspěchy jsou také možné. Materiálně jste v pořádku, projekty dobře běží, podnikání je úspěšné a dostáváte podporu od ostatních.


Negativní:
Přílišná touha po pozornosti, nadměrná pýcha, egoismus, špatná nálada, chamtivost, malichernost a nedostatek dlouhodobých plánů nebo globálních cílů.Nedostatek radosti v životě, schopnost užívat si jednoduché radosti.V osobním životě může docházet k odcizení, problémům s mladší generací nebo dětmi. Může to zahrnovat špatné vztahy v rodině a rozpad manželství.Mohou vznikat nedorozumění a konflikty s příbuznými a pocit zášti.Ve vztazích můžete zažívat chvíle, kdy nedochází k porozumění a rozvoji mezi partnery, což může vést k dočasnému oddělení nebo ochlazení citů.Mohou vzniknout problémy s početím a narozením dítěte.V podnikání se může objevit špatná pověst, nestabilita, stagnace a pocit neuspokojení. Finanční potíže a ztráty, porušení smluv a závazků.Může docházet k problémům ve vývoji a školení, a to včetně potíží s absolvováním zkoušek nebo získáním nových kvalifikací.Úspěch může přijít až po mnoha pokusech a tvrdé práci, což může být nesrovnatelné s důležitostí a hodnotou výsledku. Mohou také nastat problémy v důsledku arogance a přehnaného ega.
`);


addForecastText("20", "20 energie", `
Čas bude náležitě využit pro budování vztahů s členy klanu, zejména s rodiči. Právě v tomto období vyvstávají nejvíce skryté problémy a dlouhodobé křivdy pocházející z dětství. Je důležité tyto problémy identifikovat a přijmout je, nikoli je skrývat. Stížnosti by měly být řešeny a uvolňovány, a to i při plném přijetí rodičů se všemi jejich chybami. Komunikace se staršími členy rodiny může pomoci v budování rodinných vazeb, a proto by bylo užitečné naučit se historii rodiny a vytvořit rodokmen.


Na sociální a globální úrovni se můžete dostat do nové fáze vývoje, zapojit se do velkého projektu a stát se vyhledávaným profesionálem ve svém oboru. Avšak k tomu dojde pouze tehdy, pokud budete cítit pohodlí ve svém prostředí, na svém místě a budete plně sebevědomí a spokojení se svým životem, prací a postavením. Pokud budete kritizovat vše kolem sebe, nebudete mít rádi svou práci, zemi nebo město a nebudete budovat vztahy s blízkými, pak se vám mohou zavřít všechny dveře k těmto příležitostem.


Možné klíčové události:


Pozitivní:
Zlepšení rodinných vztahů, posílení rodiny a jejího sjednocení.Příchod nového člena do rodiny, úspěšné a trvalé manželství, podpora rodinných příslušníků a úspěšné vedení rodinného podniku.Příjemné zprávy a finanční úspěch, radostné události a pozitivní emoce.Důležitá rozhodnutí, která změní váš život na mnoho dalších let k lepšímu.Štěstí a s ním spojené změny.Práce, která vám přináší radost, příležitost pro seberealizaci a zaslouženou odměnu.Pozitivní dokončení projektů, dlouho očekávaná jednání a obchodní jednání s pozitivním výsledkem.


Negativní:
Problémy v práci, obchodních a právních záležitostech, stagnace a nedodržování termínů.Přílišný pracovní nasazení, které však nepřináší výsledky.Rozpad vztahů v rodině, konflikty, ztráta rodinného podniku.Vážné zdravotní problémy a ztráta blízkých.Právní spory a konflikty s příbuznými.Finanční potíže, rozchody a pokusy o obnovení minulých neúspěšných vztahů.Stagnace a neschopnost jít vpřed, zapojení se do minulých vzorců chování.
`);


addForecastText("21", "21 energie", `
Ideální čas na cestování a práci spojenou se stěhováním, služebními cestami. Je dobré navštěvovat nová místa, města a dokonce i jiné země, setkávat se s cizinci, učit se nové jazyky, neznámou kulturu, rozšiřovat si obzory a odstraňovat vlastní hranice, rozšiřovat hranice vědomí. Obecně v tomto období bude hodně pohybu, vše napomůže tomu, aby změny a činnost byly co nejjednodušší a nejúspěšnější. Můžete se realizovat, pokud jste aktivní. Dosáhněte toho, o čem jste dlouho snili. Je dobré otevírat nové projekty, jít na jinou úroveň života. Nové kontakty a užitečná spojení pomohou v propagaci a úspěchu. Především ve všech oblastech souvisejících s médii, sociálními sítěmi, masovou komunikací.


Bude možné uvést všechny oblasti života do harmonického stavu. Zažijete spokojenost, integritu života a osobnosti. Harmonie se světem a sebou samým vám pomůže dosáhnout více, protože se nemusíte rozptylovat řešením problémů. Navíc člověk v takovém období bude sdílet svou vnitřní harmonii a bude působit jako mírotvůrce. Ale pokud neexistuje vnitřní celistvost a harmonie, pokud je člověk agresivně nakloněn světu, tradicím, struktuře společnosti, chce vše získat najednou násilím, život to trestá. Letos je potřeba být s financemi obezřetný. Nepůjčujte ani nepůjčujte, jinak to bude později velmi těžké splatit.


Možné klíčové události:


Pozitivní:
Studium cizího jazyka, cestování, nová práce nebo záležitosti spojené s kontakty v zahraničí. Nová seznámení, vztahy s cizinci. Trvalý odjezd do zahraničí. Sňatek s cizincem. Dlouho očekávané těhotenství a narození dítěte. Velkolepé plány a realizace nejrozsáhlejších projektů, zejména souvisejících se společností nebo novými internetovými technologiemi. Úspěch, možnost seberealizace, získání uznání, slávy a finanční pohoda. Klidný průběh života a vnitřní harmonie. Balancování všech oblastí.


Negativní:
Zastavení v činnostech, různé překážky a omezení, vlastní obavy a problémy zvenčí. Chaos v činnostech, problémy s dokumenty, nervózní situace, katastrofy a nehody na cestách. Mohou nastat problémy s cizinci nebo při pobytu v zahraničí. Člověk je vnitřně nesoustavný, což se projevuje i ve společenských vztazích a osobním životě. Vztahy s partnery a blízkými neklapají. Dochází k bolestivému porušení hranic. V životě nastává zastavení, není rozvoj, různorodost, dochází k lenosti a pasivitě, věci jsou rutinní. Je možná ztráta sociálního postavení a práce.
`);


addForecastText("22", "22 energie", `
Během tohoto období, které je charakterizováno vysokou dynamikou, budete muset být aktivní a proaktivní, i když jste se obvykle chovali zdrženlivě. Budete cítit potřebu cestování a touhu po změně prostředí. Může se stát, že se vám dostanou do cesty situace, které vyžadují pohyb. Cestování a intenzivní komunikace přinesou do vašeho života svěží vlnu nových nápadů, setkání s užitečnými lidmi (a možná i vznik nových vztahů), nezbytné informace, příležitosti a prostor pro vaši seberealizaci. Je důležité nezabývat se drobnostmi, všedními starostmi a hmotnými záležitostmi; místo toho se soustřeďte na proud života a užívejte si přítomný okamžik. Během tohoto období mohou náhle přijít peněžní příjmy a nečekané zisky. Zároveň se však může stát, že příliš zafixujete svou pozornost na hmotné věci a některé vazby. Domácí problémy a nepříjemnosti se mohou stát součástí vašeho života. Avšak pokud nezavedete změny do svého života, peníze se mohou vytratit a problémy se mohou hromadit a zvětšovat jako sněhová koule. Jakmile si toho všimnete, jednejte ihned. I krátký výlet do přírody nebo do sousedního města může pomoci. Je užitečné nastavit se na pozitivní vlnu, hledat dobro v drobných věcech, radovat se z malých radostí a cítit se svobodně. Pocit svobody by měl být přítomný také v životě vašich blízkých (partner, děti, kolegové). Nesnažte se někoho omezovat nebo svazovat, ale přijímat různé charaktery, názory a postoje druhých lidí. Být schopen vcítit se do jejich situace. Je také možné, že budete nuceni začít něco úplně nového. Pro dosažení úspěchu ve vašich projektech bude důležité mít pevný základ a méně se spoléhat na vnější vlivy.


Možné klíčové události:


Pozitivní:
Příjemná setkání a snadné a zajímavé vztahy. Pocit svobody a štěstí v oblasti podnikání, dobré životní příležitosti. Důležité rozhodnutí.
Zahájení nového etapního období života s nadějnými vyhlídkami a možnostmi ve různých sférách. Velké i malé radosti.
Láska, vášeň, možná i láska na první pohled. Pro rodinné příslušníky pozitivní události a emoce spojené s dětmi. Mohou se objevit noví čtyřnozí přátelé.
Úspěšné cestování a hledání pracovních příležitostí, osvojení si nových dovedností, možnost pracovat na svém podnikání (včetně neobvyklých oblastí).


Negativní:
Příliš rychlá rozhodnutí a akce, neuvážené kroky vedoucí k úplnému selhání. Nepřiměřené riziko, ztráta peněz nebo neúspěch kvůli neuváženosti. Schopnost udělat chybu, zvolit špatnou cestu, která může zásadně ovlivnit váš život.
Zdravotní problémy, včetně těch souvisejících s reprodukčním systémem. Problémy s dětmi, obtíže s plánováním rodiny. Vztahové nedorozumění, nepřiměřené jednání, bláznivé kroky, možnost rozchodu. Konflikty s přáteli, rozpad vztahů. Únik z reality skrze různé závislosti: hazard, drogy, alkohol atd. Zvýšené riziko nehod a nebezpečí (katastrofy, úrazy zvířaty, nebezpečný hmyz). Průběh života se začíná měnit.
`);
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

  function escapeForHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderInlineSubtitles(safe) {
    // Ловим короткий "подзаголовок:" + <br> + остальной текст внутри одного абзаца
    return safe.replace(
      /(^|<br\s*\/?>)([^<:.\n]{2,60}:)<br\s*\/?>/gi,
      function(match, before, subtitle) {
        return before + '<span class="inline-subtitle">' + subtitle + '</span><br>';
      }
    );
  }

  return String(raw)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n\s*\n/)
    .map(function(part) { return part.trim(); })
    .filter(Boolean)
    .map(function(part) {
      // Сохраняем одиночные \n как <br>, чтобы потом ловить inline-подзаголовки
      var withBreaks = part.replace(/\n+/g, "<br>");
      var safe = escapeForHtml(part).replace(/\n+/g, "<br>");

      var clean = part.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
      var startsWithMarker = /^\(\d{1,2}\)/.test(clean);
      var isShort = clean.length <= 80;
      var endsWithColonOrDot = /[:.]$/.test(clean);

      // Случай 1: весь абзац — короткий подзаголовок
      if (isShort && endsWithColonOrDot && !startsWithMarker) {
        var safeShort = escapeForHtml(clean);
        return '<p class="block-subtitle">' + safeShort + '</p>';
      }

      // Случай 2: внутри абзаца есть inline-подзаголовок (короткое "что-то:" + перенос)
      var processed = renderInlineSubtitles(safe);

      // Маркер энергии в начале абзаца
      processed = processed.replace(
        /^\((\d{1,2})\)\s*/,
        '<span class="energy-marker">($1)</span> '
      );

      // Склеиваем оставшиеся <br> в пробелы для ровного течения текста,
      // НО оставляем <br> вокруг inline-subtitle, чтобы они визуально отделялись
      processed = processed.replace(
        /<br\s*\/?>(?!<span class="inline-subtitle">)/gi,
        " "
      );

      // Лишние пробелы в один
      processed = processed.replace(/\s+/g, " ").trim();

      return '<p>' + processed + '</p>';
    })
    .join("");
}

function renderEnergyHTML(raw) {
  return renderRichText(raw);
}

module.exports = {
  forecastTexts,
  getForecastText,
  renderForecastTextHTML
};