export interface Project {
    id: number;
    year: number;
    slug: string;
    title: string;
    description: string;
    client?: string;
    date?: string;
    team?: string[];
    role?: string;
    thumbnail: string;
    report?: string;
    content: {
        summary: string;
        result: string;
        reflection: string;
        feedback?: string;
        extra?: {
            title: string;
            items: string[];
        };
    };
    grade?: {
        combined?: string;
        group?: string;
        personal?: string;
    };

}

export const projectsData: Project[] = [
    // --- JAAR 1 ---
    {
        id: 1,
        year: 1,
        slug: 'voertuig-van-de-toekomst',
        title: 'Het Voertuig van de Toekomst',
        description: 'Een conceptueel ontwerp voor een vervoersmiddel in het jaar 2070.',
        client: 'DENP',
        date: '11-11-2022',
        grade: { combined: '7,6' },
        team: ['Nils Verkade', 'Pee van Gorkum', 'Démi Babayigit', 'Pieter Oosterling'],
        role: 'Teamleider',
        thumbnail: '/images/Image - Brugklas Project.png', // Placeholder mapping
        content: {
            summary: `
        In dit project hebben we een visie ontwikkeld voor mobiliteit in het jaar 2070. 
        De uitdaging was om innovatief te denken en los te komen van hedendaagse beperkingen.
        We hadden aanvankelijk wat opstartproblemen en het plannen bleek een uitdaging voor sommige teamleden, 
        bijvoorbeeld rondom het oefenen voor de eindpresentatie. Uiteindelijk hebben we deze processen strak getrokken.
      `,
            result: `
        Het eindresultaat is een 'spuugmodel' (prototype) van ons voertuig. 
        Ondanks planningsuitdagingen hebben we een concreet en creatief product neergezet. 
        We hebben geleerd om te gaan met tegenslagen, zoals het tijdelijk kwijtraken van onze projectmap, en dit professioneel opgelost.
      `,
            reflection: `
        Mijn kracht lag in het nemen van de leiding en het aansturen van het team. 
        Ik heb gemerkt dat ik goed ben in het behouden van overzicht en het delegeren van taken ('misschien kan jij dit doen, of dat').
        Dit sluit direct aan bij de competentie 'Samenwerken'. Mijn team bevestigde dit en zag mij als de drijvende kracht achter de structuur.
      `
        }
    },
    {
        id: 2,
        year: 1,
        slug: 'robot-xaar',
        title: 'Project Informatie: Robot XAAR',
        description: 'Een sociale robot die voorlichting geeft over Artificial Intelligence.',
        client: 'Epoch',
        date: '2023',
        grade: { combined: '8,0' },
        team: ['Felix Roeterdink', 'Nouska Steenks', 'Tessa Lock', 'Pieter Oosterling'],
        role: 'Projectleider',
        thumbnail: '/images/Image - Technasium.png',
        content: {
            summary: `
        We hebben onderzoek gedaan naar de perceptie van Artificial Intelligence (A.I.) in de samenleving.
        Uit onze enquête bleek dat de meeste mensen A.I. al als positief ervaren (bijv. in Spotify of WhatsApp), 
        maar dat er ook zorgen zijn over de snelle ontwikkeling. Slechts een kleine minderheid was negatief.
        Op basis hiervan hebben we 'Robot XAAR' bedacht: een robot die door de stad rijdt om vragen te beantwoorden.
      `,
            result: `
        Het concept Robot XAAR is een laagdrempelige manier om A.I. uit te leggen.
        Belangrijkste eisen uit ons Programma van Eisen (PvE) waren:
        niet eng ('uncanny valley' vermijden), begrijpelijk voor alle leeftijden, en overtuigend in communicatie.
      `,
            reflection: `
        Mijn persoonlijke sterke punten kwamen opnieuw naar voren in het leidinggeven.
        De teamfeedback was helder: "Goed in leiding nemen". Ik zorgde ervoor dat neuzen dezelfde kant op stonden.
      `,
            extra: {
                title: 'Programma van Eisen',
                items: [
                    'Positieve uitstraling',
                    'Begrijpelijk voor alle leeftijden',
                    'Overtuigend en educatief',
                    'Laagdrempelig en niet eng'
                ]
            }
        }
    },
    {
        id: 3,
        year: 1,
        slug: 'mosquito-alert',
        title: 'Mosquito Alert',
        description: 'Ecologisch onderzoek naar broedgedrag van muggen.',
        client: 'One Health Pact',
        date: '12-06-2023',
        grade: { combined: '8,5' },
        team: ['Sami Chioua', 'Leusha Kalasok', 'Damin Hassani', 'Pieter Oosterling'],
        role: 'Teamleider & Planner',
        report: 'Verslag - Aardwarmte in Rijswijk-3.pdf', // Using available PDF as placeholder/example if specific one missing, or logic to hide if missing
        thumbnail: '/images/Image - Eindopdracht.png',
        content: {
            summary: `
        In opdracht van het One Health Pact hebben we onderzoek gedaan naar de invloed van temperatuur (zon vs. schaduw) 
        op het leggedrag van muggen in stilstaand water. We hebben experimentele bakken opgezet om dit te monitoren.
      `,
            result: `
        Het resultaat was een 'null-resultaat': we hebben geen muggen in de bakken gekregen.
        De wetenschappelijke conclusie is dat het nog te vroeg in het seizoen was voor de muggenpopulatie om eitjes te leggen.
        Dit is een waardevol inzicht voor vervolgonderzoek.
      `,
            reflection: `
        Dit project was leerzaam op het gebied van groepsprocessen. De samenwerking verliep soms stroef door afleidingen.
        Ik moest mijn teamgenoten vaak aansporen tot focus. Dit heeft mijn leiderschaps-skills aangescherpt.
        Daarnaast heb ik ontdekt dat mijn passie meer ligt bij het 'Ontwerpen' dan bij puur 'Onderzoeken'.
      `,
            feedback: `
        Mijn teamleden waardeerden mijn sturing en hulp bij het plannen en verslaglegging.
        Ze zagen mij als een natuurlijke leider die verantwoordelijkheid neemt.
      `
        }
    },
    // --- JAAR 2 ---
    {
        id: 4,
        year: 2,
        slug: 'mobiliteit-van-de-toekomst',
        title: 'Mobiliteit van de Toekomst',
        description: 'Innovatief concept voor persoons- en goederenvervoer in 2070.',
        client: 'Bas Wilmink (Mobiliteitsdeskundige)',
        date: '11-12-2023',
        grade: { group: '7,0', personal: '7,7' },
        team: ['Nils Vakande', 'Pee van Gorkum', 'Démi Babayigit', 'Pieter Oosterling'],
        role: 'Ontwerper & Onderzoeker',
        thumbnail: '/images/Image - Project VWO 2.png', // Placeholder
        content: {
            summary: `
        Voor dit project hebben we onderzoek gedaan naar de mobiliteit op Delft Campus en hoe dit verbeterd kan worden voor de toekomst.
        Na een uitgebreide brainstormfase hebben we drie concepten samengevoegd tot één integraal ontwerp.
        Het doel was om een efficiënte, duurzame oplossing te vinden die zowel mensen als goederen kan vervoeren.
      `,
            result: `
        Ons eindontwerp combineert een loopband voor personenvervoer (12 km/u) met vacuümbuizen voor pakketbezorging (100-200 km/u).
        Het systeem wordt aangedreven door zonnepanelen in de overkapping, waardoor het volledig energieneutraal is.
        De inkomsten uit het snelle pakketvervoer subsidiëren het personenvervoer.
      `,
            reflection: `
        Dit project leerde mij veel over de harde eisen van ontwerpen. Ik leerde dat een Programma van Eisen (PvE) altijd meetbaar moet zijn.
        Ook de introductie van 'Persona's' was nieuw en waardevol; het dwong ons om echt in de huid van de gebruiker te kruipen.
        Het interviewen van mensen op straat vond ik aanvankelijk spannend, maar het leverde onmisbare inzichten op.
      `
        }
    },
    {
        id: 5,
        year: 2,
        slug: 'spelenderwijs-meer-bewegen',
        title: 'Spelenderwijs Meer Bewegen',
        description: 'Een spelconcept om chronisch zieke kinderen te stimuleren te bewegen.',
        client: 'Kim Kortekaas & Karel van Duijkeren',
        date: '20-03-2024',
        grade: { group: '7,6', personal: '8,0' },
        team: ['Team LAMP', 'Pieter Oosterling'],
        role: 'Conceptontwikkelaar',
        thumbnail: '/images/Image - Technasium.png', // Placeholder
        content: {
            summary: `
        De opdracht was om kinderen met een chronische ziekte op een leuke manier meer te laten bewegen.
        Ons team 'LAMP' heeft zich gericht op een oplossing die bewegen integreert in spel.
        We hebben gewerkt met de 'Cultural Probe' methode om diepgaand inzicht te krijgen in de leefwereld van de doelgroep.
      `,
            result: `
        Het resultaat is een kaartspel met fysieke opdrachten.
        Het concept is getest via meerdere prototypes ("low-fidelity" tot "high-fidelity").
        De feedback loop waarbij andere teams onze prototypes testten, was essentieel voor de verfijning.
      `,
            reflection: `
        De Cultural Probe sprong er voor mij uit: ik leerde dat instructies kraakhelder moeten zijn, zodat proefpersonen ze zonder hulp kunnen uitvoeren.
        Het iteratieve proces van prototypes maken en testen was nieuw voor mij, maar gaf veel voldoening omdat je het product echt ziet verbeteren.
      `
        }
    },
    {
        id: 6,
        year: 2,
        slug: 'afval-bestaat-niet',
        title: 'Aardappelzetmeel of Plastic?',
        description: 'Circulair verpakkingsmateriaal gemaakt van organisch afval.',
        client: 'Virgil Grot',
        date: '21-06-2024',
        grade: { group: '8,3', personal: '8,1' },
        team: ['Thijn', 'Pieter Oosterling', 'Team Inpakdienst Holland'],
        role: 'Onderzoeker &  Materialen',
        thumbnail: '/images/Image - Eindopdracht.png', // Placeholder
        content: {
            summary: `
        Onder de naam 'Inpakdienst Holland' hebben we gezocht naar een milieubewust en circulair alternatief voor plastic verpakkingen.
        Na onderzoek naar de huidige afvalstroom, besloten we ons te richten op bioplastics.
        We experimenteerden met aardappelzetmeel en tapiocazetmeel als basis voor "Eetbaar Plastic".
      `,
            result: `
        We hebben succesvol een recept ontwikkeld voor eetbaar folie.
        Onze testen toonden aan dat 100% tapioca een gelei-achtig materiaal gaf, maar een mix met aardappelzetmeel leverde een sterk, folie-achtig materiaal op.
        Het circulaire concept is compleet: consument eet verpakking -> natuurlijk afval -> wordt mest -> voedt nieuwe grondstoffen.
      `,
            reflection: `
        Dit was een zeer praktisch project. Ik ben trots dat ons experimentele onderzoek naar het recept daadwerkelijk een bruikbaar materiaal opleverde.
        Het zelf maken van het materiaal in de keuken gaf een tastbaar bewijs van ons onderzoek.
        Ik heb geleerd hoe je een theoretisch concept (circulair systeem) vertaalt naar een werkend product.
      `,
            extra: {
                title: 'Het Circulaire Systeem',
                items: [
                    'Consument nuttigt verpakking',
                    'Menselijke uitwerpselen worden opgevangen',
                    'Verwerking tot menselijke mest',
                    'Mest voedt gewassen (aardappel/tapioca)',
                    'Productie van nieuw bioplastic',
                    'Cirkel is rond'
                ]
            }
        }
    },
    // --- JAAR 3 ---
    {
        id: 7,
        year: 3,
        slug: 'huis-van-je-leven',
        title: 'Huis van je Leven',
        description: 'Modulair en levensloopbestendig wonen: "Vandaag besteld, volgende week een nieuw huis!"',
        client: 'Jörgen Haring (Formhet)',
        date: '09-01-2025',
        grade: { group: '7,3', personal: '9,1' },
        team: ['Valentijn Snelleman', 'Julian Scholtens', 'Niek Hanemaaijer', 'Pieter Oosterling'],
        role: 'Ontwerper & Samenwerking',
        thumbnail: '/images/Image - Brugklas Project.png', // Placeholder until assets provided
        content: {
            summary: `
        De opdracht was het ontwerpen van een modulair, flexibel en levensloopbestendig huis op een kavel van 10.5x10.5m.
        Het huis moest aanpasbaar zijn aan verschillende levensfases (student, gezin, oudere).
        Mijn voorkeur ging uit naar ontwerpen, omdat dit het onderzoek tastbaar maakt.
        We hebben een concept ontwikkeld waarbij modules per vrachtwagen geleverd en met een kraan geplaatst kunnen worden.
      `,
            result: `
        Ons eindontwerp is een volledig modulair systeem.
        Modules kunnen horizontaal (blok-kruis) en verticaal (paal-gat) gekoppeld worden, tot 3 hoog en 3 breed.
        We hebben een bijbehorend app-concept bedacht waarmee bewoners hun droomhuis kunnen samenstellen.
        Modules zijn recyclebaar of tweedehands doorverkoopbaar, wat de duurzaamheid bevordert.
      `,
            reflection: `
        Ik heb dit jaar specifiek gewerkt aan de competentie 'Samenwerken', omdat dit vorig jaar stroef verliep.
        Door rustiger te communiceren en regelmatige 'pitstops' (tussenevaluaties) in te lassen, verliep de samenwerking veel soepeler.
        Ik merkte dat ik minder snel geïrriteerd raakte en constructiever was in mijn feedback.
      `,
            extra: {
                title: 'Onderzoek & Stappen',
                items: [
                    'Collage & Lifestyle onderzoek',
                    'Interviews & Persona analyse',
                    'Programma van Eisen (levensfase specifiek)',
                    'Lasersnijden eindmodel',
                    'App ontwikkeling'
                ]
            }
        }
    },
    {
        id: 8,
        year: 3,
        slug: 'aqua-stroom',
        title: 'Aqua Stroom',
        description: 'Alternatieve rotatie voor golfenergie-converter.',
        client: 'Dutch Wave Power',
        date: '08-04-2025',
        grade: { group: '7,3', personal: '9,1' },
        team: ['Micha Doorduin', 'Julia de Graaf', 'Ilian Runderkamp', 'Pieter Oosterling'],
        role: 'Planner (Plannen & Organiseren)',
        thumbnail: '/images/Image - Technasium.png', // Placeholder
        content: {
            summary: `
        De opdrachtgever zocht een alternatief voor het tandheugelsysteem in hun golfenergie-converter.
        Wij hebben 'Aqua Stroom' ontwikkeld: een systeem waarbij de op- en neergaande beweging van golven via strak gespannen HMPE-touwen wordt omgezet in rotatie.
        Dit drijft een dynamo aan voor extra energieopwekking, naast de rotatie van de buis zelf.
      `,
            result: `
        Ons prototype heeft 4 iteraties doorlopen.
        Van een lekkend model (iteratie 1) en omvallende constructies (iteratie 2), naar een stabiel werkend model met een vast anker (iteratie 3 & 4).
        We hebben ook een biomimicry-concept bedacht (vinnen) om de installatie automatisch in de windrichting te laten draaien.
      `,
            reflection: `
        Mijn rol was Planner. Ik heb gewerkt met een dubbele planning: een lange-termijn doelenplanning en een dag/les-planning.
        Dit zorgde voor structuur in het team.
        Een leerpunt voor mijzelf is discipline: ik heb de neiging schoolwerk uit te stellen naar thuis, terwijl ik het ook in de les had kunnen afmaken.
      `,
            extra: {
                title: 'Iteratie Proces',
                items: [
                    'Iteratie 1: Dichten van boorgaten',
                    'Iteratie 2: Verplaatsen ankerpunt naar installatie',
                    'Iteratie 3: Nieuwe 3D-geprinte converters (35mm)',
                    'Iteratie 4: Definitief functionerend model'
                ]
            }
        }
    },
    {
        id: 9,
        year: 3,
        slug: 'gezond-eten',
        title: 'Gezond Eten (SnackCheck)',
        description: 'Een webapp en adviesrapport om jongeren gezonder te laten eten.',
        client: 'Maartje (JOGG - Jong Leren Eten)',
        date: '24-05-2025',
        grade: { group: '6,7', personal: '8,6' },
        team: ['Felix Roeterdink', 'Valentijn Snelleman', 'Resul Eryigit', 'Pieter Oosterling'],
        role: 'Developer & Onderzoeker',
        thumbnail: '/images/Image - Eindopdracht.png', // Placeholder
        content: {
            summary: `
        De opdracht was om onderzoek te doen naar hoe we middelbare scholieren kunnen verleiden tot gezondere voedselkeuzes.
        We hebben een breed onderzoek opgezet met brainstorms, interviews, enquêtes en nudging-experimenten.
        Hieruit bleek dat een combinatie van inzicht (via een app) en onbewuste sturing (nudging) het meest effectief is.
      `,
            result: `
        Ons eindproduct bestaat uit twee delen:
        1. **SnackCheck Webapp**: Een applicatie waarmee leerlingen hun eetgedrag bijhouden, punten verdienen voor gezonde keuzes en AI-gedreven tips krijgen.
        2. **Adviesrapport Supermarkten**: Een plan om winkels anders in te richten (gezond op ooghoogte, kleurgebruik) om jongeren onbewust te sturen.
        Daarnaast hebben we een infographic gemaakt over de impact van voeding.
      `,
            reflection: `
        In dit project heb ik een enorme groei doorgemaakt op technisch vlak.
        Ik heb geleerd te programmeren in HTML, CSS, JavaScript en Python om de webapp te realiseren.
        Het bouwen van een werkende applicatie die data verwerkt was een complexe maar leerzame uitdaging.
      `,
            extra: {
                title: 'Technische & Onderzoeks Skills',
                items: [
                    'Web Development (HTML/CSS/JS)',
                    'Python Scripting',
                    'Nudging Experimenten',
                    'Data Analyse (Enquêtes)',
                    'Infographic Design'
                ]
            }
        }
    },
    // --- JAAR 4 ---
    {
        id: 10,
        year: 4,
        slug: 'aardwarmte-rijswijk',
        title: 'Aardwarmte in Rijswijk',
        description: 'Rendabiliteitsanalyse naar geothermie in vier Rijkswijkse wijken.',
        client: 'Gemeente Rijswijk & TU Delft',
        date: '2025',
        grade: { group: '?', personal: '10' }, // Grade pending
        team: ['Pieter Oosterling', 'Mohammad Khaled Yasin', 'Thijn Merks', 'Nouschka Steenks'],
        role: 'Planner (Plannen & Organiseren)',
        report: 'Verslag - Aardwarmte in Rijswijk-3.pdf',
        thumbnail: '/images/Image - Technasium.png',
        content: {
            summary: `
        In opdracht van de beleidsmedewerker energietransitie van de Gemeente Rijswijk (i.s.m. TU Delft) hebben wij een verkennend onderzoek uitgevoerd naar de mogelijkheden voor geothermie (aardwarmte) in vier wijken: Oud-Rijswijk, Kleurenbuurt, Hoornwijck en Muziekbuurt.

        Het hoofddoel was vast te stellen welke locatie de beste eigenschappen bezat voor een aardwarmtecentrale, met een sterke focus op technisch rendement en financiële haalbaarheid. We hebben hiervoor de bodemgesteldheid, warmtevraag en ruimtelijke inpassing geanalyseerd.
      `,
            result: `
        **Locatiekeuze:**
        Uit het onderzoek bleek de **Kleurenbuurt** (specifiek grasveld 2 nabij het Kruisvaarderspark) de optimale locatie, vanwege de beschikbare bovengrondse ruimte en de gunstige ligging nabij het Warmte LinQ-net.

        **Technisch & Financieel:**
        *   **Scenario:** Doublet-optie 2 (levering aan Kleurenbuurt & Muziekbuurt).
        *   **Bron:** S-gesteentelaag (Schielanden/Nedersaksen) op 2000-2500m diepte (temp ~75°C).
        *   **Energie:** Warmteproductie van 250 TJ/jaar, voldoende voor de warmtevraag.
        *   **Rendement:** Totale kosten €24,88 miljoen vs. opbrengst €141,48 miljoen over 36 jaar.
        *   **Winstgevendheid:** Terugverdientijd van 6,4 jaar met een geschatte winst van €105-112 miljoen.
      `,
            reflection: `
        **Rol: Planner**
        Als Planner zorgde ik voor de structuur. Ik heb de deadlines bewaakt en de taken verdeeld, zodat we binnen de krappe 12 weken klaar zouden zijn. Het was een uitdaging om diepgang te combineren met snelheid ("professioneel tempo").

        **Persoonlijke Groei (Competenties)**
        *   **Werkhouding:** In eerdere projecten merkte ik dat mijn focus in de les soms verslapte door afleiding en doordat ik in de les maar één scherm kan gebruiken. Dit keer heb ik strenge **lesplanningen** voor mezelf gemaakt met deadlines per uur. Daarnaast ben ik strategisch gaan zitten (weg van afleiding) en heb ik mensen die kwamen buurten vriendelijk weggestuurd als het niet over O&O ging. Dit zorgde ervoor dat ik veel sneller werkte; ik had vrijwel geen huiswerk meer omdat ik alles in de les afkreeg.
        *   **Communicatie:** Ik heb bewust gewerkt aan mijn toon. Waar ik voorheen soms kortaf kon zijn, nam ik nu de tijd om eerst goed te luisteren en samen te vatten wat de ander zei ("Bedoel je dat...?"). Ik vroeg mijn teamgenoten (Mohammed, Nouschka) wekelijks om tips. Zij gaven aan dat ik rustiger overkwam, en door handige vragen te stellen ("Begrijpen we allemaal waarom Optie B afvalt?") voorkwam ik misverstanden.
      `
        }
    }
];
