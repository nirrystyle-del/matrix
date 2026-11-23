const { findLocalProgramsInValues, renderLocalProgramNoteHTML } = require("./programs");
// =========================
// HEALTH ENGINE — Zdraví podle mapy čaker
// Generated from: Здоровье каркас.docx + Здоровье расшифровка.docx
// Logic: 8 health blocks follow chakra table rows:
// 1) Sahasrára, 2) Ádžna, 3) Višuddha, 4) Anáhata, 5) Manipura, 6) Svádhišthána, 7) Muládhára, 8) Celkové energetické pole.
// Each block uses the same three values as the chakra table: Fyzika, Energie, Emoce.
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

const healthFrameDatabase = [
  {
    "id": "sahasrara",
    "chakraLabel": "Sahasrára / Mise",
    "bodyPart": "Mozek, vlasy, horní část lebky",
    "text": "Zdravotní problémy:\n\nNemoci mohou být buď kosmetické (problémy s vlasy), nebo závažnější – zdravotní problémy v lebeční oblasti, zhoršená funkce mozku a podobně. V běžném životě se chováte chaoticky, je tam spousta úzkosti. Některým věcem nerozumíte a neustále požadujete přísná specifika.\n\nPříčiny:\n\nMateriální připoutání vám brání žít plnohodnotný život. Zklamali jste své duchovní ideály a stali jste se rigidním pragmatikem. Věřte jen sami sobě a spoléhejte se jen sami na sebe. Často projevujete hněv a netrpělivost vůči ostatním, snažíte se učit a vychovávat v duchu svého přesvědčení. Můžete vnutit svůj názor a nepřijmout pozici svého partnera. Nevidíte svou cestu a globální poslání, takže veškeré své úsilí směřujete k dosažení výjimečného materiálního blahobytu. Zároveň zažíváte problémy a nedostatek energie, protože přemýšlíte úzce a nejste připraveni přijmout pomoc od osudu.\n\nŘešení problému:\n\nBudete muset pochopit nejvyšší zákony vesmíru, pochopit svou životní cestu a cíl. Je také dobré s tím pomoci ostatním lidem s podobnými problémy. Rozhodněte se o svém hlavním poslání a postupujte podle něj. Není důležité vydělávat peníze jen pro své pohodlí a blahobyt, ale dělat práci, která pomůže druhým lidem a poslouží důležité myšlence. Zacházet s problémy v životě jednodušeji a vnímat je jako užitečné zkušenosti. Je dobré žít v rutině, pravidelně jíst, cvičit, pracovat a odpočívat. Udělejte si rozvrh a dodržujte ho. Je užitečné vést poměrně přísný a umírněný životní styl, neoddávat se excesům a věnovat se energetickým a duchovním praktikám.\n\nOsobní doporučení"
  },
  {
    "id": "ajna",
    "chakraLabel": "Ádžna / Osud, egregory",
    "bodyPart": "Týlní a temporální laloky mozku, oči, uši, nos, obličej, horní čelist, zuby horní čelisti, zrakový nerv, mozková kůra.",
    "text": "Zdravotní problémy:\n\nVe vaší situaci se vyskytují onemocnění očí, uší a časté problémy se zuby. Ztráta zdraví může být spojena s okcipitální oblastí nebo problémy v obličejové části. V širším slova smyslu se to projevuje problémy s komunikací, nedostatkem přátel, absencí logiky a neustálými protesty proti systémům, ve kterých se nacházíte (práce, rodina, země).\n\nPříčiny:\n\nŽijete ve vlastních iluzích a jste značně odtrženi od reality. Často se chytáte do protestů proti okolnímu světu a zapomínáte tak na pracovní a rodinné povinnosti. Často nemáte čas ani na to nejnutnější. Zároveň hovoříte a sníte o globálních věcech, které nemůžete změnit. Nepřijímáte svůj život a nemůžete budovat budoucnost nebo pečovat o svůj osud. Žijete tak, jako byste se vznášeli s proudem. Současně vás trápí pocit existence v životě, který vám není vlastní (v profesi, místě bydliště, osobních vztazích). Zdá se, že jste rozděleni na dvě poloviny, protože váš vnitřní svět neodpovídá vnějším hodnotám. Odtud plyne neklidná povaha života, rozpor mezi hlubokými touhami (které se bojíte i pochopit) a vnucenými stereotypy společnosti. Mohou nastat problémy s duševním zdravím.\n\nŘešení problému:\n\nMusíte si rozšířit obzory a přijímat informace z různých zdrojů. Pomozte zlepšit společnost, pracujte na svém nitru a hlubokém vědomí. Je důležité najít svůj smysl života, svůj zvláštní energetický tok a následovat ho. Možná budete muset úplně změnit svůj hodnotový systém a opustit iluze, kterých jste se dříve drželi. Nebojte se být sami se sebou, abyste hluboce pochopili své životní poslání. Uvědomte si svou roli, vzdejte se špatných návyků, naučte se rozumně hospodařit s časem a penězi. Sebekázeň bude důležitým krokem k obnově vašeho života. Nezapomínejte na neustálý rozvoj své osobnosti.\n\nOsobní doporučení"
  },
  {
    "id": "vishuddha",
    "chakraLabel": "Višuddha / Sebevnímaní, sebevyjádření",
    "bodyPart": "Štítná žláza, průdušnice, průdušky, hrdlo, hlasivky, ramena, paže, sedmý krční obratel, všechny krční obratle, mandibula, zuby dolní čelisti.",
    "text": "Zdravotní problémy:\n\nČasto se opakují onemocnění krku, mohou se objevit problémy se štítnou žlázou a dolní čelistí. Není neobvyklé, že vás bolí ramena nebo paže. Na každodenní úrovni neříkáte pravdu, lžete sobě i ostatním, možná máte neschopnost vyjádřit myšlenky, nedostatek komunikace nebo naopak - neustálé vyrušování vašeho partnera.\n\nPříčiny:\n\nBojíte se říkat pravdu, dokonce i informace a znalosti, kterými jste si jistí a které máte zažité z vlastní zkušenosti. Chcete se podělit a zároveň se bojíte, protože to může mít následky v budoucnu. Chováte se stereotypně a přemýšlíte stejně, nejste připraveni ukázat svou kreativitu a jedinečnou osobnost. Bojíte se odsouzení a nesouhlasu, a z toho plynou problémy v komunikaci, izolace, nízké sebevědomí, neschopnost se vyjádřit a mluvit v doslovném smyslu (polykání slov, zmatený hlas). Snažíte se dodržovat všechna srozumitelná dogmata, máte mnoho společných předsudků ve společnosti a bojíte se odlišit od ostatních. Přitom hodně fantazírujete a lžete a tady hned začínají zdravotní problémy. Lžete nejen ostatním, ale i sami sobě.\n\nŘešení problému:\n\nJe třeba přehodnotit a analyzovat zkušenosti z minulosti. Sdělte lidem veškerou hodnotu a pravdy, které jste pochopili, jakoukoli verbální nebo ústní formou. Je důležité, abyste začali mluvit, mohlo by to být video na YouTube, karaoke píseň, první přípitek ve vašem životě ve velké společnosti. Mluvte na poradách i v práci při kolektivních rozhodnutích, jen si zpívejte v koupelně, řekněte něco mezi přáteli. Určitě ale začněte vyjadřovat své myšlenky, zkušenosti a názory. Říkejte pravdu a vyhněte se lhaní v jakékoli podobě. Pro úspěch používejte životní tipy a více naslouchejte sami sobě. Zapojte se do kreativního sebevyjádření.\n\nOsobní doporučení"
  },
  {
    "id": "anahata",
    "chakraLabel": "Anáhata / Vztahy, pohled na svět",
    "bodyPart": "Srdce, oběhový systém, dýchací orgány, plíce, průdušky, hrudní páteř, žebra, oblast lopatky na zádech, hrudník.",
    "text": "Zdravotní problémy:\n\nProblémy jsou obvykle pozorovány se srdcem, plícemi a průduškami. Mohou zahrnovat i poranění žeber a všechna onemocnění spojená s oblastí hrudníku. Toto odráží i na každodenní úrovni: jako by vám něco bránilo rozšířit hrudník a dýchat naplno. Máte mnoho plánů, ale chybí vám energie na jejich realizaci.\n\nPříčiny:\n\nJste ponořeni do hluboké deprese a zdá se, že vám úplně schází energie. Není síla pokračovat vpřed; často se vracíte k nějakému incidentu z minulosti. Zažíváte pocity viny a výčitky svědomí. Snažíte se bránit proti problémům, ale nevíte, jak. Proto je pro vás děsivé jít dál, realizovat své nápady a pomáhat druhým vytvářet lepší budoucnost. Zároveň necítíte uvnitř dostatek lásky k druhým, jako byste nebyli ničím naplněni. Přítomnost vás nedělá šťastnými, není jasné, jak dál žít a dostat se z hluboké fyzické a duševní stagnace. To se může projevit buď naprostou lhostejností a touhou, aby vás každý nechal na pokoji, nebo přílišným obětováním se vůči druhým. Dáváte hodně, ale nedostáváte nic zpět; plýtvaní energií vás nechává necitlivými. Někdy čekáte na zázračnou pomoc zvenčí k řešení svých problémů.\n\nŘešení problému:\n\nJe užitečné otevřeně komunikovat o všem, co vás trápí, ať už s blízkými, spřízněnými jedinci nebo s psychologem. Přijměte to jako jakési vyznání, odhalení svých špatných skutků a vlastností, za které se možná stydíte. Tímto způsobem můžete dokonce vytvořit skupiny, kde si můžete vyměňovat znalosti a zkušenosti při budování šťastných a harmonických vztahů. Musíte si vybudovat nový pohled na svět, naučit se věřit a milovat vzájemně a šťastně. Naučte se něco nového a vždy si vytvořte pohodlný prostor, kde můžete být sami sebou a relaxovat se svými blízkými. Analyzujte své okolí a komunikujte s opravdovými přáteli, abyste neztráceli čas prázdnými vztahy. Buďte opravdoví a snažte se otevřeně vyjádřit své emoce. Přesuňte pozornost ze svých problémů na společné cíle vašeho sociálního kruhu. Naučte se přijímat lidi i sebe se všemi svými světlými i temnými stránkami. Tímto způsobem se ve správný okamžik můžete dát dohromady a stát se soběstačnými, aniž byste obviňovali sebe a ostatní, aniž byste byli závislí na souhlasu nebo pomoci ostatních.\n\nOsobní doporučení"
  },
  {
    "id": "manipura",
    "chakraLabel": "Manipura / Status, vlastnictví",
    "bodyPart": "Gastrointestinální trakt, břišní orgány, slinivka, slezina, játra, žlučník, tenké střevo, centrální páteř.",
    "text": "Zdravotní problémy:\n\nV gastrointestinálním traktu se mohou objevit onemocnění. Často je postižena střední část páteře. Na úrovni chování se to projevuje agresivitou, podrážděností a nedostatečností. Lhostejnost se může prudce změnit v hněv a náročnost. Ztrácíte něco důležitého a děláte vše pro to, abyste si to udrželi, včetně nezákonných metod, porušujících všechny morální a právní normy.\n\nPříčiny:\n\nZažíváte příliš mnoho připoutanosti ve vztahu k osobě nebo věcem, okolnostem, způsobu života. Zároveň je obdarujete výjimečnými vlastnostmi, které jsou pro vás cenné. Kontrola a držení jsou pro vás důležité. Jste často arogantní a ambiciózní, rádi předvádíte svou obřadní stránku života a pyšníte se svými úspěchy. Kvůli výsledku nevidíte nedůstojné prostředky. Zároveň můžete být nezodpovědní. Nemáte žádný kontakt s lidmi pod vámi na sociálním žebříčku, závislými (například podřízenými v práci). V určitém okamžiku vám život začne brát to nejdůležitější, abyste začali jednat, rozvíjet se a opouštět svou obvyklou komfortní zónu. Ale místo toho si stěžujete nebo začnete být agresivní. Nechcete se změnit a chopit se toho, co je vám odebráno jakýmikoli prostředky. Budete muset čelit svému nitru a pochopit, že ne vše závisí na vás a podléhá vašemu vlivu. Jakmile to můžete pustit, hrozba ztráty pomine.\n\nŘešení problému:\n\nDefinujte nové hranice života, odstraňte staré hranice, musíte se rozvíjet. Přehodnoťte své okolí a přijměte svět takový, jaký je, bez pýchy a arogance. Dělejte spontánní věci a zbavte se vlastních komplexů. Udělejte pro vás něco neobvyklého (nečekaný výlet nebo radikální změna image). Začněte budovat vztahy s různými lidmi, nejen s těmi, kteří vám prospívají. Je dobré začít dělat charitativní činnost. Ukázněte se a rozvíjejte svou vůli sportem, správnou výživou a dodržováním režimu. Tímto způsobem se můžete osvobodit od hranic a své vlastní nespokojenosti, zklamání a agrese. Staňte se pánem svého těla a emocí.\n\nOsobní doporučení"
  },
  {
    "id": "svadhisthana",
    "chakraLabel": "Svádhišthána / Dětská láska a radost",
    "bodyPart": "Nadledvinky, děloha a vaječníky, ledviny, střeva, prostata u mužů, bederní oblast páteře.",
    "text": "Zdravotní problémy:\n\nFyzicky můžete trpět onemocněními orgánů, jako jsou ledviny, játra, tlusté střevo, oblast genitálií, nadledviny a bederní oblasti. V každodenní rovině se to odráží v pocitu neustálé viny, nedostatku lásky, podrážděnosti a nedostatku radosti ze všeho. Můžete se vyhýbat odpovědnosti nebo přehnaně hledat zisk ve všem s nedostatkem ovoce z vašich aktivit. Nezvýší vám plat, nejsou žádné zakázky, začnete šetřit a profitovat a upadnete do ještě větší deprese.\n\nPříčiny:\n\nMnohdy vše pochází z dětství, kdy rodiče nevěnovali dostatečnou pozornost, podceňovali, nemilovali. Když se v dospělosti ocitnete v podobné situaci, to uražené dítě se uvnitř probudí. A okamžitě se zablokujete a odmítnete další akce. V návaznosti na to vzniká pocit viny, že nesplnili své povinnosti a udělali špatnou věc. A to se opakuje mnohokrát až do vážné životní katastrofy (jako ztráta zaměstnání). Nemáte sílu být kreativní, vytvářet nějaké plody činnosti. Nemějte děti, protože vnitřně jste stále dost dětinskí a nedali jste dost dítěti ve vás. Není energie, síla a znalosti, kde vzít inspiraci pro životní nápor.\n\nŘešení problému:\n\nPřijměte své rodiče a milujte to nemilované dítě v sobě. Dovolte si žít, jak chcete, realizujte své touhy jedno po druhém. Najděte si stejně smýšlející lidi, najděte si přátele, se kterými si můžete popovídat a vyřešit své emocionální problémy. Odmítejte extrémy – přehnaný shopaholismus nebo fanatické hromadění hodnot. Zbavte se vnitřního studu před sebou a svými blízkými. Dovolte si být kreativní. Hledejte pro sebe zdroj energie v příjemných věcech. Může to být masáž, pořádání akcí, péče o váš vzhled nebo jakýkoli druh rekreace. Je důležité najít si svou oblíbenou činnost a pracovat v pohodlné zóně, kde se můžete naplno odhalit.\n\nOsobní doporučení"
  },
  {
    "id": "muladhara",
    "chakraLabel": "Muládhára / Tělo, hmota",
    "bodyPart": "Urogenitální systém, dolní končetiny, tlusté střevo, kostrč, křížová kost, nohy, také zodpovědný za tělesnou kondici a přibírání na váze",
    "text": "Zdravotní problémy:\n\nNa fyzické úrovni začínají problémy s nohama, urogenitálním systémem a oblastí křížové kosti. Životně ji provází materiální hlad, krach života, neustálý nedostatek peněz, pocit opuštěnosti a nedocenění. Cítíte se ze situace unavení a beznadějní.\n\nPříčiny:\n\nJste příliš fixovaní na minulost, žijete v ní, neustále se tam vracíte se vzpomínkami. Zde jsou dvě možné možnosti. Kdysi to bylo velmi dobré – blahobyt, štěstí, blahobyt. A teď je to špatné a vy nemůžete přijmout situaci, žijete se vzpomínkami na minulost. Nebo naopak - v minulosti se několikrát opakovaly situace s problémy, neúspěchy, zradou. Nelze na to zapomenout a jít dál. Neustále se točte jako veverka v kole, ale nic se nemění. To vás unavuje, bojíte se na hranici přežití, na všem šetříte a neustále se krotíte. Chcete se prostě vzdát pohybu, protože není energie a žádný výsledek. Čekáte na „kouzelnou hůlku“, která vše vyřeší za vás.\n\nŘešení problému:\n\nPřehodnoťte své hodnoty a postoj k minulosti. Naučte se vidět to dobré v přítomnosti. I v té neúspěšnější minulosti najděte také pozitivní příklady a ponaučení. Musíte být připraveni na změnu. Udělejte pro sebe přítomnost cennější než minulost. Všechny problémy nejsou věčné, život jde dál a situace se mění. Buďte připraveni využít příležitosti. Je užitečné dělat něco skutečně vzrušujícího a zajímavého, i když to zpočátku nepřinese mnoho peněz. Osvoboďte se od minulosti na základní, každodenní úrovni. Pokud je to možné, proveďte opravy nebo vyměňte část vybavení, odstraňte staré fotografie a věci.\n\nOsobní doporučení"
  },
  {
    "id": "total",
    "chakraLabel": "Celkové energetické pole",
    "bodyPart": "Krevní systém, nervová soustava, lymfatický systém, imunitní systém - to jsou orgány, které se nacházejí po celém těle, a když nefungují správně, způsobují celkový narušení fungování organismu.",
    "text": ""
  }
];

const healthInterpretationDatabase = {
  "1": "(1) Dostáváte vitální energii, která musí být použita k dosažení důležité globální myšlenky. Pokud nevidíte smysl svého života, směr aplikace této energie, pak setrvává v těle. Dochází k selháním životně důležitých systémů, zvláště často trpí pohybový aparát, často nohy nebo nervový systém.",
  "2": "(2) Zdá se, že nerozumíte své intuici a máte k ní nedůvěru. To může vést k tomu, že se stáváte podezíravými, nedůvěřivými a dvojtvárnými. Na rozdíl od lidí s harmonickým číslem 2, kteří obvykle usilují o harmonii a vyhlazování konfliktů, vy naopak můžete podněcovat konflikty a třenice s druhými lidmi. To může přispět k vzniku zdravotních problémů.Vaše zablokovaná intuice vám brání v proniknutí do hlubších tajemství života, i když stále toužíte po objevování neznámého. Tento nedostatek porozumění může vést k onemocnění a k odkrývání nejrůznějších nevýhod a konfliktů v okolí. Pokud nedůvěřujete svým schopnostem a talentům, může se u vás vyvinout strach a fobie.Je důležité pracovat na rozvoji své intuice a začít jí věřit. To vám může pomoci získat lepší porozumění sobě samým a okolnímu světu a také zlepšit vaše zdraví a vztahy s lidmi kolem vás.",
  "3": "(3) Váš život je zaměřen na růst, plodnost, tvoření a rozmnožování pozemských statků. Pokud se nepustíte do tvoření nebo něco neděláte a výsledky si pak necháte, nenecháte věci, aby se ve správný čas vyvíjely samy, pak nastávají problémy v různých oblastech. Váš vývoj je brzděn, nastupuje impotence, je možná deprese. Pro zlepšení celkového stavu je dobré udělat alespoň malý skutek se změnou zraku. Zasaďte si například květinu, abyste mohli pozorovat její růst.",
  "4": "(4) Důvodem, který vám způsobuje nevolnost, je diktát a autoritativní vláda. Nepovažujete nikoho ani nic za trauma, protože se hluboko uvnitř obáváte, že by to mohlo prozradit vaši slabost. Kvůli intenzivnímu ovládání všeho, co vám pomáhá vyplnit jakousi černou díru ve vaší duši, se cítíte špatně. Přetěžujete se - partnera se slabou vůlí (který se z nějakého důvodu nechal chytit), tři děti, pět zaměstnání, dům, zahradní domek, auto, kočku, psa a kanárka, a občas se tímto vším chlubíte. Pracujte na rozvoji své ženské stránky a dovolte druhým, aby vás ovládali.",
  "5": "(5) Výrazná tendence prohlubovat své porozumění podstatě věcí a událostí, stejně jako schopnost získávat informace pro sdílení zkušeností, je vaší životní zásadou. Pokud se na situaci díváte povrchně a nepronikáte do problému hlouběji, může to vést k vážným poruchám, včetně onemocnění vnitřních orgánů, která někdy vyžadují chirurgický zákrok. K dosažení správného řešení je důležité mít hlubší vhled a zkoumat problémy z různých úhlů. Život vám může nabídnout zajímavá setkání s vhodnými lidmi a příležitost číst užitečné knihy, což vám může pomoci rozšířit vaše znalosti.",
  "6": "(6) Vaším životním úkolem je spojit informace, energii a úsilí lidí, což často zahrnuje práci v týmu a řízení týmu. V opačném případě může dojít k různým poruchám v těle současně, což bude vyžadovat konzultaci s různými odborníky s různými názory. Je důležité identifikovat všechny zdravotní problémy a řešit je z kořene, což také pomůže odstranit základní příčinu různých problémů v těle.",
  "7": "(7) Jednoduše řečeno, je důležité vybrat si svůj jedinečný směr osobního rozvoje a následovat ho vytrvale, mít víru v sebe a svou vlastní cestu. Pokud toto neuděláte a zůstanete v klidu, život vám může přinést různá omezení a překážky. Často se tyto problémy projevují ve formě fyzických obtíží, jako jsou potíže s nohama, různá zranění nebo poruchy zraku a fungování mozku.Když se ocitnete v situaci, kdy nemůžete fyzicky aktivně fungovat tak, jak jste dříve byli zvyklí, budete nuceni zaměřit se více na sebe, hledat hlubší smysl a naslouchat své vnitřní intuici. Přehodnocení vašeho života touto perspektivou vám může pomoci ocenit svou jedinečnost, myšlenky, zkušenosti a aspirace. Až získáte tuto důvěru a jistotu, můžete začít znovu postupovat vpřed. Tím se začnou také řešit zdravotní problémy a omezující faktory.",
  "8": "(8) Pro vás je klíčové existovat v rámci systému, v němž se cítíte stabilní a chránění. Tento systém může být buď velká rodina, anebo pracovní tým. Jestliže se náhodou ocitnete na okraji dění, necítíte se součástí širší společnosti nebo byste byli nuceni opustit tento systém (například kvůli rozvodu nebo propuštění), mohou se začít objevovat zdravotní problémy. Stejně tak se mohou vyskytnout hormonální poruchy a potíže s imunitním systémem. K tomu, abyste těmto potížím předešli, je důležité si uvědomit svoji vlastní hodnotu, svou úlohu v tomto systému a důležitost rodinných hodnot a tradic. Zkuste přemýšlet o možnostech, jak můžete uplatnit své dovednosti a znalosti v nových oblastech. Nemějte strach ze změn a pokuste se najít své místo v novém systému, podobně jako členové veslařského týmu hledají svou roli na lodi.",
  "9": "(9) Charakterizuje vás pocit samoty, hluboká vnitřní práce intelektu a duše, což často vede ke zvratům. Samota vás zároveň děsí a přitahuje. Intuitivně chápete, že je třeba najít rovnováhu mezi klidem, osamělostí během pracovního procesu a komunikací jindy, sdílením znalostí a výměnou zkušeností s lidmi. Pokud se považujete za příliš nezávislé a vyhýbáte se komunikaci, může to bránit vašemu rozvoji. Stále obtížněji objevujete nové znalosti, protože příliš hluboké ponoření do nich nepomáhá. Musíte si rozšířit obzory. Můžete se dostat do bodu, kdy ztrácíte energii a sílíte, aniž byste chápali, co se děje. Onemocnění nemusí mít zjevné příčiny a diagnóza může být obtížná. Obvykle se problémy projevují vnitřními orgány. Potřebujete okruh lidí se stejnými názory, kteří vám pomohou porozumět sami sobě, vymanit se z izolace, pochopit váš účel a začít se hýbat vpřed, sdílet získané znalosti.",
  "10": "(10) Ve vašem životě je důležité naučit se přijímat pomoc od lidí kolem vás, a to zejména od rodiny, přátel a kolegů. Pokud se záměrně izolujete a projevujete nezávislost, může to vést k vážným zdravotním problémům, včetně potenciálně zhoubných nádorů. Existují také nemoci, které mohou omezit váš pohyb a kvalitu života, a proto se budete muset naučit žádat o pomoc od svých blízkých. Důvěra v lidi a vnímání sebe jako součásti rodiny jsou klíčové. Nepodceňujte pomoc a ochranu, kterou vám mohou nabídnout. Nepokoušejte se nést problémy sami a přijímejte pomoc s vděčností. Tímto způsobem můžete zlepšit své zdraví.",
  "11": "(11) Získáváte velkou energii pro provádění rozsáhlých projektů a řešení velkých problémů. Je však důležité tuto energii vhodně směřovat, abyste ji nezadržovali a nepřetěžovali svůj systém. Pokud se energie hromadí a nepoužíváte ji nebo ji utrácíte neuváženě, může to vést k problémům ve vašem vnitřním systému těla. Tato nerovnováha může zasáhnout konkrétní orgány, na které tato nepřiměřená energie dopadá jako blesk. Je důležité naučit se efektivně hospodařit s vaší energií, správně ji akumulovat a distribuovat, a využívat ji strategicky pro důležitá rozhodnutí. Vyvarujte se náhlým projevům nadměrné fyzické aktivity a promyšleně nakládejte s energií. Klíčové je správné řízení vašeho vnitřního potenciálu a jeho vhodné investování do dalších aktivit. Fyzická aktivita a kontakt s přírodou vám mohou pomoci vyrovnat se s přebytečnou energií.",
  "12": "(12) Vaše fyzické tělo slouží jako nástroj pro interakci s ostatními, sbližování lidí a projevování celkového stavu skupiny, včetně možných problémů. Mohou se objevovat různé potíže a malátnost. V těchto chvílích se lidé kolem vás sjíždějí a začínají projevovat své nejlepší vlastnosti, jakoby k sobě nacházeli cestu. To způsobuje, že se otevírají vnitřní problémy a potíže ve vztazích se začínají vyjasňovat. Vy jste v určitém smyslu pomocníkem lidem, signalizujete skrze své nemoci, že kolem vás není vše v pořádku. Chcete-li předejít vlastním potížím, je důležité pracovat se svým okolím, otevírat problémy a ukazovat na ně včas.",
  "13": "(13) Vaší rolí v tomto životě je změnit procesy, přebudovat práci celých týmů, rozbít staré struktury, revidovat hodnoty a začít od nuly. Když všechno ve vašem vlastním životě začne působit nudně, fádně a monotónně, a zároveň nemáte možnost něco zásadního změnit, mohou se objevit zdravotní problémy. Tyto problémy mohou být signálem, že je nezbytné provést radikální změny ve svém životě, ať už jde o změnu tělesného stavu, účesu nebo dokonce místa pobytu. Nemoc může ohrozit váš život, pokud nepřijmete zásadní změny ve svém životním stylu a pohledu na svět.",
  "14": "(14) Pro vás je důležitá určitá míra vnitřní svobody od hmotných záležitostí, abyste mohli žít život plný emocí a energie. Pokud nežijete v souladu s rytmem okolní energie a nevyvíjíte se duchovně, mohou se objevit problémy s energetickým plněním těla. Důležité je najít rovnováhu mezi každodenním životem a duchovním růstem, abyste předešli zdravotním problémům. Naučte se vnímat jemnou energii a inspiraci z okolí a zkuste své myšlenky a pocity vyjádřit kreativní formou, například uměleckými díly.",
  "15": "(15) Jako jedinečný člověk potřebujete získat moc nad hmotným světem a dosáhnout úplné kontroly nad ostatními a celým systémem. K tomu však potřebujete pevný základ, ačkoli často můžete narazit na vlastní touhy a ambice. Pokud nedosáhnete významných materiálních výsledků, jako jsou peníze a bohatství, začnou se objevovat vnitřní problémy. Tyto problémy se mohou projevit například problémy s pohybovým aparátem a páteří. Může být zapojeno doslova každé tělesné systémy.Je možné, že neposkytujete dostatek energie do hmotného světa nebo nemáte dostatečné dovednosti, což může bránit vytvoření materiálního bohatství a dosažení viditelných výsledků. Aby se vyřešily zdravotní problémy, je nezbytné duchovní rozvoj člověka. Tímto způsobem budete schopni přijímat jemnou energii z okolního světa, která vám umožní ovládat situace a dosáhnout úspěchu.",
  "16": "(16) Charakterizuje vás život v cyklech vzestupů a pádů, pohybujete se rychlými a prudkými změnami. Tyto změny se často projevují na vašem zdraví ve formě častých úrazů a zlomenin. Nejcitlivější a nejzranitelnější místa ve vašem těle mohou být náhle vystavena stresu. Možná máte uvnitř nějaké problematické faktory, které vás brzdí v normálním životě a pohybu. I když se často bojíte změn, jsou pro vás nezbytné. Ignorování obnovy a pravidelných cyklů života může vést k destruktivnímu chování a narušit váš život. Je důležité včas rozpoznat potřebu změny a analyzovat důvody, které vám mohou bránit. Snažte se pohybovat vpřed, i když začínáte malými kroky, zejména pokud je nová situace děsivá.",
  "17": "(17) Můžete se dostat do situace, kde odmítáte svůj vlastní talent, a v této souvislosti, pokud nerozumíte sami sobě, může se také stát, že budete negativně hovořit o talentech druhých. To může vést k problémům ve vašem zdraví. Potlačený talent totiž nezmizí a projevuje se bolestivým toužením po realizaci. V extrémních případech a při silné neochotě se s tím vypořádat může vést k depresi a závisti vůči těm, \"kteří zdánlivě mají větší štěstí\". Často však závistivci vidí jen jednu stránku mince a nejsou ochotni přijmout skutečnost, že za zdánlivou snadností úspěchu stojí dlouhé roky tréninku, pokusů a omylů. Každý úspěšný umělec čelil nejen triumfům, ale i neúspěchům, a pracoval na sobě, aby dosáhl úspěchu v budoucnu.Pokud máte tendenci obviňovat vládu, rodinu, rodiče, nebo jiné faktory ze svého neúspěchu, přestaňte s tím a začněte se zamýšlet nad tím, kým jste chtěli být v dětství. Zvažte, jak můžete dosáhnout svých cílů sami, i když nemusíte získat světovou slávu, můžete dosáhnout uznání ve svém vlastním okruhu lidí.",
  "18": "(18) Je klíčové mít jasné pochopení svých tužeb a rozumět hlubokým příčinám probíhajících procesů. Integrace dvou odlišných názorů do jednotného celku by měla být vaším krédem. Když se projeví problémy na fyzické úrovni, člověk může být \"ztracený\" - dnes má jedno pojetí světa, zítra jiné. Dnes může cítit bolest v ruce, ale zítra už nebo pozítří si nemusí být jistý, zda ta bolest byla skutečná či nikoliv. Není snadné porozumět tomu, co se děje, a je obtížné izolovat a získat celkový obraz probíhajících procesů.Vždy existují dvě strany, dva lidé, kteří něco radí: dva příbuzní, dvě fáze, dvě nemoci. V určité oblasti života existuje dualita a zmatek v hlavě způsobený nepochopitelnými pocity. Důležité je naslouchat sami sobě, najít sílu vyslechnout si oba názory a najít tu jedinou pravou zlatou střední cestu.",
  "19": "(19) Okamžitě a ve velkém množství dostáváte životní energii pro rychlé a snadné rozhodování nebo jednání v extrémní situaci. Stane se to jako náhlý záblesk, vhled, když sami pochopíte, co je potřeba a jak jednat. Pokud tento potenciál nevyužíváte a odchylujete se od správného směru, který vám život dal, mohou nastat zánětlivá onemocnění, prudký nárůst teploty a rychle probíhající nebezpečná onemocnění. Osud se vám tedy snaží ukázat, že máte chuť do života a činností, ve kterých můžete být nejužitečnější. Pokud nevyužijete tuto energii, která vám byla dána, může dojít k rychlému vyhoření z nemoci nebo nehody (velmi náhlá smrt).",
  "20": "(20) Můžete projít hlubokými procesy změn ve všech systémech. To bude vyžadovat hodně práce a dlouhodobou transformaci vašeho životního stylu a vašeho vědomí. Příliš mnoho vás táhne do minulosti. Je špatné, když přijde okamžik, kdy se ohlédnete a uvědomíte si, že jste žili správný, ale velmi standardní a nudný život, aniž byste světu přinesli něco cenného a zapamatovatelného. Pak začínají problémy s fyzickým a emocionálním zdravím. Můžete se od toho osvobodit a uzdravit se s podporou svých blízkých tím, že na sobě uděláte průlom a vynaložíte úsilí. S láskou svých blízkých budete mít přístup k významným životním proměnám. Vše je ve vašich rukou (zvláště když není co ztratit), od změny bydliště až po náboženství. S vaším znovuzrozením začne nová etapa v životě lidí kolem vás.",
  "21": "(21) Jste člověk světa, který by neměl zůstávat omezen na jedno stanovisko nebo jedno místo bydliště. Pokud chcete řešit své problémy, budete se muset vymanit ze své úzkoprsosti. Držení se úzkého rámce a rigidních názorů může vést k vážným zdravotním problémům, včetně možných onkologických onemocnění a závažných dědičných chorob. Léčba těchto problémů může být obtížná tradičními metodami, neboť lékaři mohou nemoc špatně diagnostikovat a předepisovat nesprávnou léčbu. Proto je důležité rozšířit svůj zorný úhel, navázat spojení s okolním světem a zvážit alternativní metody léčby k řešení svých zdravotních obtíží. Měli byste si uvědomit, že vždy existuje naděje na uzdravení, a neměli byste se omezovat na jedinou nemocnici, lékaře nebo léčebný postup.",
  "22": "(22) Ke všemu hmotnému musíte mít jednodušší postoj. Je snazší žít s otevřeným srdcem a nebrat si problémy příliš k sobě. Užívejte si přítomný okamžik, bavte se více a nepřipoutávejte se příliš k hmotným věcem. Pamatujte na věčnost duchovního světa. Pokud přikládáte přílišnou váhu hmotným záležitostem, může dojít k tomu, že ztratíte to, na co se zaměřujete, včetně vašeho zdraví. Nejsou vyloučena onemocnění spojená s omezeným pohybem nebo invaliditou. Duchovní osvobození vám může pomoci překonat fyzické omezení. Musíte pochopit a přijmout váš aktuální stav a dojít k závěru, že máte mnoho příležitostí k rozvoji a normálnímu životu. Jste svobodní v duši i mysli, což znamená, že neexistují žádné hranice."
};

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
function renderHealthText(raw, options) {
  options = options || {};

  if (!raw) return "";

  return String(raw)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n\s*\n/)
    .map(function(part) { return part.trim(); })
    .filter(Boolean)
    .map(function(part) {
      var clean = part.replace(/\s+/g, " ").trim();

      if (
        options.skipPersonalRecommendation &&
        /^Osobní doporučení\s*:?$/i.test(clean)
      ) {
        return "";
      }

      if (/^(Zdravotní problémy|Příčiny|Řešení problému|Osobní doporučení)\s*:?$/i.test(clean)) {
        var safe = escapeHtml(clean);
        return '<h4 class="health-subtitle">' + safe + '</h4>';
      }

      return renderRichText(part);
    })
    .join("");
}

function getHealthValuesForFrame(result, frameId) {
  if (frameId === "sahasrara") return result.chakras.sahasrara;
  if (frameId === "ajna") return result.chakras.ajna;
  if (frameId === "vishuddha") return result.chakras.vishuddha;
  if (frameId === "anahata") return result.chakras.anahata;
  if (frameId === "manipura") return result.chakras.manipura;
  if (frameId === "svadhisthana") return result.chakras.svadhisthana;
  if (frameId === "muladhara") return result.chakras.muladhara;
  if (frameId === "total") return result.totalEnergies;
  return [];
}

function getHealthInterpretation(energyNumber) {
  return healthInterpretationDatabase[String(energyNumber)] || "";
}

function renderHealthEnergyCard(energyNumber) {
  var text = getHealthInterpretation(energyNumber);

  if (!text) return "";

  return '' +
    '<div class="health-energy-card">' +
      '<div class="health-energy-text">' + renderHealthText(text) + '</div>' +
    '</div>';
}

function renderHealthHTML(result) {
  if (!result || !result.chakras || !result.totalEnergies) {
    return '<div class="energy-item programs-card health-card"><h3>Zdraví</h3><p>Chybí údaje z mapy čaker.</p></div>';
  }

  function getTextLength(value) {
    return String(value || "").length;
  }

  function getFrameDensity(frame) {
    var frameLength = getTextLength(frame.text) + getTextLength(frame.bodyPart);

    if (frameLength < 2600) return "center";
    if (frameLength > 5200) return "dense";
    return "balanced";
  }

  function getValuesDensity(values) {
    var total = (values || []).reduce(function(sum, value) {
      return sum + getTextLength(getHealthInterpretation(value));
    }, 0);

    if (total < 2600) return "center";
    if (total > 4700) return "dense";
    return "balanced";
  }

  function renderDescriptionPage(frame, values, index) {
    var density = getFrameDensity(frame);
    var mainTitleHTML = index === 0 ? '<h2>Zdraví</h2>' : '';

    return (
      '<section class="health-print-page health-description-page health-density-' + density + '">' +
        '<div class="health-print-inner">' +
          '<div class="health-frame-item">' +
            mainTitleHTML +
            '<h3>' + escapeHtml(frame.chakraLabel) + '</h3>' +
            '<div class="health-body-part">' + escapeHtml(frame.bodyPart) + '</div>' +
            '<div class="health-frame-text">' +
              renderHealthText(frame.text, { skipPersonalRecommendation: true }) +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function renderRecommendationPage(frame, values, index) {
    var density = getValuesDensity(values);
    var localPrograms = findLocalProgramsInValues(values);
    var localProgramNoteHTML = renderLocalProgramNoteHTML(localPrograms);

    var valuesHTML = values.map(function(value) {
      return renderHealthEnergyCard(value);
    }).join("");

    var isTotal = frame.id === "total";

    return (
      '<section class="health-print-page health-recommendation-page health-density-' + density + (isTotal ? ' health-total-page' : '') + '">' +
        '<div class="health-print-inner">' +
          '<div class="health-frame-item">' +

            (isTotal
              ? '<h3>' + escapeHtml(frame.chakraLabel) + '</h3>' +
                '<div class="health-body-part">' + escapeHtml(frame.bodyPart) + '</div>'
              : ''
            ) +

            '<h4 class="health-subtitle health-recommendation-title">Osobní doporučení</h4>' +
            '<div class="health-values-grid">' + valuesHTML + '</div>' +
            localProgramNoteHTML +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  var pagesHTML = "";

  healthFrameDatabase.forEach(function(frame, index) {
    var values = getHealthValuesForFrame(result, frame.id) || [];
    var isTotal = frame.id === "total";

    if (!isTotal) {
      pagesHTML += renderDescriptionPage(frame, values, index);
    }

    pagesHTML += renderRecommendationPage(frame, values, index);
  });

  return (
    '<div class="energy-item programs-card health-card health-print-card">' +
      pagesHTML +
    '</div>'
  );
}

module.exports = {
  renderHealthHTML
};