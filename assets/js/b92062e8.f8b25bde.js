"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3167],{5059:(e,n,t)=>{t.d(n,{ZP:()=>d});var i=t(7462),a=(t(7294),t(3905));t(5657);const r={toc:[]},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Sponsor-Token erforderlich",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Weitere Informationen zum \ud83d\udc9a evcc Sponsorship gibt es ",(0,a.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"hier"),".")))}d.isMDXComponent=!0},4729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=t(7462),a=(t(7294),t(3905));t(5657),t(5059);const r={sidebar_position:3},s="Laden",d={unversionedId:"guides/charging",id:"guides/charging",title:"Laden",description:"Was bedeuten die verschiedenen Lademodi?",source:"@site/docs/guides/charging.mdx",sourceDirName:"guides",slug:"/guides/charging",permalink:"/docs/guides/charging",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/guides/charging.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Konfiguration",permalink:"/docs/guides/setup"},next:{title:"Fahrzeuge",permalink:"/docs/guides/vehicles"}},l={},u=[{value:"Was bedeuten die verschiedenen Lademodi?",id:"was-bedeuten-die-verschiedenen-lademodi",level:3},{value:"Ich habe PV \xdcberschuss, aber das Auto l\xe4dt nicht, warum?",id:"ich-habe-pv-\xfcberschuss-aber-das-auto-l\xe4dt-nicht-warum",level:3},{value:"Ich habe eine Hausbatterie und diese wird entladen, warum?",id:"ich-habe-eine-hausbatterie-und-diese-wird-entladen-warum",level:3},{value:"Trotz \xdcberschuss stoppt die Ladung, bevor das eingestellte Ladeziel erreicht ist.",id:"trotz-\xfcberschuss-stoppt-die-ladung-bevor-das-eingestellte-ladeziel-erreicht-ist",level:3},{value:"Warum wird mit voller Leistung geladen, wenn der Soc des Fahrzeug nicht erkannt wird?",id:"warum-wird-mit-voller-leistung-geladen-wenn-der-soc-des-fahrzeug-nicht-erkannt-wird",level:3},{value:"&quot;Probleme&quot; i.V.m. Gastfahrzeug",id:"probleme-ivm-gastfahrzeug",level:3},{value:"Hinweis zur RFID-Nutzung",id:"hinweis-zur-rfid-nutzung",level:3},{value:"Fehler: Charger out of sync: expected disabled, got enabled // Charger logic error: disabled but charging",id:"fehler-charger-out-of-sync-expected-disabled-got-enabled--charger-logic-error-disabled-but-charging",level:3},{value:"PV Erzeugung im Winter nutzen",id:"pv-erzeugung-im-winter-nutzen",level:3},{value:"mittels <code>residualpower</code>",id:"mittels-residualpower",level:4},{value:"mittels <code>enable/disable</code>",id:"mittels-enabledisable",level:4}],o={toc:u},g="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"laden"},"Laden"),(0,a.kt)("h3",{id:"was-bedeuten-die-verschiedenen-lademodi"},"Was bedeuten die verschiedenen Lademodi?"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Modus"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Stop")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Ladevorgang wird ",(0,a.kt)("em",{parentName:"td"},"sofort")," beendet bzw. kann nicht beginnen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Schnell")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Es wird ",(0,a.kt)("em",{parentName:"td"},"sofort")," mit der maximal m\xf6glichen Leistung geladen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Min+PV")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Es wird ",(0,a.kt)("em",{parentName:"td"},"sofort")," mit der technisch kleinstm\xf6glichen Leistung geladen. Sofern die PV Installation genug \xdcberschuss f\xfcr eine h\xf6here Leistung hat, wird die Leistung erh\xf6ht.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Nur PV")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Ladevorgang wird ",(0,a.kt)("em",{parentName:"td"},"abh\xe4ngig")," von der PV Installation zur Verf\xfcgung gestellten Leistung gestartet, sofern technisch m\xf6glich. Sollte nicht genug Leistung vorhanden sein, wird die Ladung unterbrochen. ",(0,a.kt)("a",{parentName:"td",href:"#ich-habe-pv-%C3%BCberschu%C3%9F-aber-das-auto-l%C3%A4dt-nicht"},"Weitere Details"))))),(0,a.kt)("h3",{id:"ich-habe-pv-\xfcberschuss-aber-das-auto-l\xe4dt-nicht-warum"},"Ich habe PV \xdcberschuss, aber das Auto l\xe4dt nicht, warum?"),(0,a.kt)("p",null,"Das Laden der Batterie kann leider nicht mit beliebiger Leistung erfolgen. Die zugrundeliegenden Standards geben hier Grenzen vor."),(0,a.kt)("p",null,"Der Ladestandard ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEC_61851"},"IEC 61851")," (den muss jedes Elektroauto beherrschen) hat folgende Regel:",(0,a.kt)("br",{parentName:"p"}),"\n","Pro Phase mindestens 6 Ampere und, je nach Anschluss oder Konfiguration in der evcc.yaml,",(0,a.kt)("br",{parentName:"p"}),"\n","maximal 16 oder 32 Ampere."),(0,a.kt)("p",null,"Das bedeutet bei"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1-phasigem Laden")," - 1,4 bis 3,6 kW oder 7,2 kW"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2-phasigem Laden")," - 2,8 bis 7,2 kW oder 14,4 kW"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"3-phasigem Laden")," - 4,2 bis 11 kW oder 22 kW")),(0,a.kt)("p",null,"Der neuere Ladestandard ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/ISO_15118"},"ISO 15118")," (wird an DC Lades\xe4ulen verwendet, manche Fahrzeuge und Wallboxen unterst\xfctzen diesen auch bei AC Laden) erfordert"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mindestens ~1,4 kW Leistung, unabh\xe4ngig von der Phasenanzahl.")),(0,a.kt)("p",null,"Im evcc Modus ",(0,a.kt)("strong",{parentName:"p"},"Nur PV")," muss die jeweilige Leistung als PV \xdcberschuss vorhanden sein, damit der Ladevorgang beginnt. Sollte die Leistung dann eine konfigurierbare Zeit nicht vorhanden sein, wird der Ladevorgang unterbrochen. Ist die Leistung f\xfcr einen konfigurierbaren Zeitraum vorhanden, wird der Ladevorgang fortgesetzt."),(0,a.kt)("p",null,"PV-\xdcberschuss wird anhand der Einspeiseleistung am Netzanschluss ermittelt. \xdcberschussladen bzw. der Modus ",(0,a.kt)("strong",{parentName:"p"},"Nur PV")," funktioniert somit bei Anlagen mit abgeregelter Netzeinspeisung (\u201eNulleinspeisung\u201c) nicht."),(0,a.kt)("h3",{id:"ich-habe-eine-hausbatterie-und-diese-wird-entladen-warum"},"Ich habe eine Hausbatterie und diese wird entladen, warum?"),(0,a.kt)("p",null,"Generell kann evcc das Laden und Entladen der Hausbatterie nicht direkt beeinflussen. Das Energiemanagementsystem (HEMS) entscheidet selbst wann es l\xe4dt. Hier gibt es \xfcblicherweise folgende Szenarien:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Hausbatterie wird geladen"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wenn sie nicht voll ist (au\xdfer bei Prognosebasiertem Laden) und PV \xdcberschuss besteht"),(0,a.kt)("li",{parentName:"ul"},"Wenn sie unter einen minimalen Ladestand Ger\xe4t f\xe4llt"),(0,a.kt)("li",{parentName:"ul"},"Wenn das Batteriemanagementsystem (BMS) andere Logiken eingebaut hat, z.B. um sich zu kalibrieren (z.b. E3/DC)"),(0,a.kt)("li",{parentName:"ul"},"Und noch weitere")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Hausbatterie wird nicht geladen"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wenn die Hausbatterie voll ist, wird die Batterie nicht geladen."),(0,a.kt)("li",{parentName:"ul"},"Wenn das HEMS die F\xe4higkeit von prognosebasiertem Laden (PV Prognose und ein historischen Verbrauch ist vorhanden um die Zukunft abzusch\xe4tzen) hat, um nicht voll zu laden wenn vorraussichtlich nicht so viel Strom ben\xf6tigt wird (z.b. SMA Home Manager 2.0)"),(0,a.kt)("li",{parentName:"ul"},"Und noch weitere")),(0,a.kt)("p",null,"Mit evcc gibt es nun verschiedene Szenarien:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Lademodus ",(0,a.kt)("inlineCode",{parentName:"strong"},"Schnell")," und ",(0,a.kt)("inlineCode",{parentName:"strong"},"Min+PV")))),(0,a.kt)("p",null,"Die Hausbatterie wird v\xf6llig ignoriert, denn das EV soll ja so schnell wie m\xf6glich voll (oder zu einem SoC) geladen werden. Egal woher der Strom kommt."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Lademodus ",(0,a.kt)("inlineCode",{parentName:"strong"},"PV")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"evcc regelt den Ladestrom je nach verf\xfcgbarem PV \xdcberschuss"),(0,a.kt)("li",{parentName:"ul"},"Der Ladevorgang wird immer nur dann gestartet, wenn \xfcber eine definierte Dauer (",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/loadpoints#enable"},"Standard: 1 Minute"),") der ben\xf6tigte PV \xdcberschu\xdf vorhanden ist."),(0,a.kt)("li",{parentName:"ul"},"Der Ladevorgang wird immer unterbrochen, wenn \xfcber eine definierte Dauer (",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/loadpoints#disable"},"Standard: 1 Minute"),") nicht gen\xfcgend Strom f\xfcr eine ",(0,a.kt)("a",{parentName:"li",href:"#ich-habe-pv-%C3%BCberschuss-aber-das-auto-l%C3%A4dt-nicht-warum"},"Mindestleistung")," vorhanden ist."),(0,a.kt)("li",{parentName:"ul"},"Zwischen dem ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/interval"},"Invervall des Regelzyklus"),' kann es jedoch zu Schwankungen kommen, so dass weniger \xdcberschuss vorhanden ist als zum Regelzeitpunkt. D.h. falls hier zu wenig PV \xdcberschuss vorhanden ist, muss der "fehlende Strom" irgendwo her kommen. Und wenn die Hausbatterie noch nicht "leer" ist, springt das HEMS ein und zieht Strom aus der Hausbatterie um den Netzschluss Punkt auf 0 auszuregeln. Dies kann nicht verhindert werden!'),(0,a.kt)("li",{parentName:"ul"},"Zum Zeitpunkt der Regelung in evcc, kann mit",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/site#prioritysoc"},"prioritySoC")," der Hausbatterie bis zu einem definierten SoC Vorrang gegeben werden. Danach wird Ladestrom als verf\xfcgbarer PV \xdcberschuss interpretiert."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/site#buffersoc"},"bufferSoC")," die Hausbatterie oberhalb dieses definierten SoC eine Entladung ignoriert und als PV \xdcberschuss interpretiert.")))),(0,a.kt)("h3",{id:"trotz-\xfcberschuss-stoppt-die-ladung-bevor-das-eingestellte-ladeziel-erreicht-ist"},"Trotz \xdcberschuss stoppt die Ladung, bevor das eingestellte Ladeziel erreicht ist."),(0,a.kt)("p",null,"Das passiert, wenn im Auto ein Ladeziel eingestellt ist, das kleiner oder gleich dem evcc-Ladeziel ist."),(0,a.kt)("p",null,"Da diesbez\xfcglich kein Datenabgleich zwischen Fahrzeug und evcc stattfindet, l\xe4sst sich das nur verhindern, indem das Limit im Auto gr\xf6\xdfer als das evcc-Ladeziel einstellt ist."),(0,a.kt)("h3",{id:"warum-wird-mit-voller-leistung-geladen-wenn-der-soc-des-fahrzeug-nicht-erkannt-wird"},"Warum wird mit voller Leistung geladen, wenn der Soc des Fahrzeug nicht erkannt wird?"),(0,a.kt)("p",null,"Das kann verhindert werden, indem Minimum-Soc auf 0 gesetzt oder gar nicht definiert wird."),(0,a.kt)("p",null,"Es ist ein Feature, dass mit voller Leistung bis zum Minimum-Soc geladen wird, wenn der Fahrzeug-Soc kleiner als der definierte Minimum-Soc ist."),(0,a.kt)("p",null,"Wird der Fahrzeug-Soc nicht erkannt (= 0) und ist ein Minimum-Soc > 0 definiert, startet die Ladung."),(0,a.kt)("p",null,"Die Ladung ist in dem Fall allerdings auf die Lademenge beschr\xe4nkt, die sich aus Minimun-Soc und Fahrzeugkapazit\xe4t ergibt."),(0,a.kt)("h3",{id:"probleme-ivm-gastfahrzeug"},'"Probleme" i.V.m. Gastfahrzeug'),(0,a.kt)("p",null,"Da man bei einem Gastfahrzeug keine Einstellungen definieren kann, gelten immer die Einstellungen vom Loadpoint."),(0,a.kt)("p",null,"Dies kann zu ung\xfcnstigem Ladeverhalten (z.B. unn\xf6tige Einspeisung) f\xfchren."),(0,a.kt)("p",null,"Beispiele:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Am Loadpoint ist ",(0,a.kt)("inlineCode",{parentName:"li"},"phases: 3")," definiert ist. Das Gastfahrzeug kann aber nur 1-phasig laden. Dann startet die Ladung im PV-Modus trotzdem erst ab 4,2kW \xdcberschuss."),(0,a.kt)("li",{parentName:"ul"},"Am Loadpoint mit automatischer Phasenumschaltung ist ",(0,a.kt)("inlineCode",{parentName:"li"},"maxcurrent: 32")," definiert. Das Gastfahrzeug kann aber nur maximal mit 16A (3,7kW@1p) laden. Dann findet die Phasenumschaltung von 1p auf 3p erst bei 7,4kW \xdcberschuss statt.")),(0,a.kt)("p",null,"Abhilfe schafft hier die Definition eines (oder mehrerer) Offline-Vehicle. Bei diesen k\xf6nnen die entsprechenden Parameter (",(0,a.kt)("inlineCode",{parentName:"p"},"phases"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mincurrent"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"maxcurrent"),") definiert werden."),(0,a.kt)("h3",{id:"hinweis-zur-rfid-nutzung"},"Hinweis zur RFID-Nutzung"),(0,a.kt)("p",null,"Wird die Wallbox \xfcber RFID freigeschaltet, dann kann es (je nach Wallbox) vorkommen, dass das Laden sofort gestartet wird unabh\xe4ngig davon, welcher Modus in evcc eingestellt ist. Hierbei kann es dann auch zu Netzbezug kommen. "),(0,a.kt)("p",null,"Die Wallbox startet das Laden eigenm\xe4chtig. Nach kurzer Zeit wird evcc das Laden unterbrechen bzw. entsprechend runterregeln."),(0,a.kt)("h3",{id:"fehler-charger-out-of-sync-expected-disabled-got-enabled--charger-logic-error-disabled-but-charging"},"Fehler: Charger out of sync: expected disabled, got enabled // Charger logic error: disabled but charging"),(0,a.kt)("p",null,"evcc erwartet nach einem Intervallzyklus bereits den neuen korrekten Status."),(0,a.kt)("p",null,"Wenn manche Ger\xe4te etwas zu langsam auf Anweisungen reagieren, kommt es kurzzeitig zu einem undefinierten Zustand, der mit diesen Fehlern quittiert wird."),(0,a.kt)("p",null,"Sollten ansonsten keine Probleme auftreten, kann das ignoriert werden."),(0,a.kt)("p",null,"Abhilfe schafft ein gr\xf6\xdferes ",(0,a.kt)("inlineCode",{parentName:"p"},"interval"),"."),(0,a.kt)("h3",{id:"pv-erzeugung-im-winter-nutzen"},"PV Erzeugung im Winter nutzen"),(0,a.kt)("p",null,"In den Wintermonaten ist die PV Erzeugung meisst unterhalb oder im Bereich der ",(0,a.kt)("a",{parentName:"p",href:"#ich-habe-pv-%C3%BCberschu%C3%9F-aber-das-auto-l%C3%A4dt-nicht"},"Mindestleistung"),'. Um dennoch m\xf6glichst viel eigenen Strom ins Fahrzeug zu laden, kann man folgende "Tricks" anwenden:'),(0,a.kt)("h4",{id:"mittels-residualpower"},"mittels ",(0,a.kt)("inlineCode",{parentName:"h4"},"residualpower")),(0,a.kt)("p",null,"In der Konfiguration unter ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/site"},(0,a.kt)("inlineCode",{parentName:"a"},"site"))," setzt man ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/site#residualpower"},(0,a.kt)("inlineCode",{parentName:"a"},"residualPower"))," auf einen negativen Wert. Dieser bestimmt dann wieviel Netzbezug im PV Modus noch erlaubt ist. Eine \xc4nderung ist per API m\xf6glich."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"site:\n  residualPower: -1000 # 1000W Netzbezug im PV Modus erlaubt\n")),(0,a.kt)("p",null,'"Nachteil" dieser L\xf6sung ist, dass auch bei ausreichendem \xdcberschuss dieser erlaubte Netzbezug ausgenutzt wird.'),(0,a.kt)("h4",{id:"mittels-enabledisable"},"mittels ",(0,a.kt)("inlineCode",{parentName:"h4"},"enable/disable")),(0,a.kt)("p",null,"In der Konfiguration unter ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/loadpoints"},(0,a.kt)("inlineCode",{parentName:"a"},"loadpoints"))," stellt man bei ",(0,a.kt)("inlineCode",{parentName:"p"},"enable"),"und ",(0,a.kt)("inlineCode",{parentName:"p"},"disable")," das gew\xfcnschte Verhalten ein. Eine \xc4nderung der ",(0,a.kt)("inlineCode",{parentName:"p"},"threshold")," Werte ist per API m\xf6glich."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"loadpoints:\n  enable:\n      delay: 1m\n      threshold: -200 # es wird eingeschaltet, wenn 1 Minute lang 200 W Einspeisung vorhanden sind\n    disable:\n      delay: 30m\n      threshold: 1200 # es wird ausgeschaltet, wenn 30 Minuten lang mehr als 1200 W Netzstrom bezogen wurde\n")))}m.isMDXComponent=!0}}]);