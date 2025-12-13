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
    gallery?: {
        src: string;
        caption: string;
    }[];
    videos?: {
        type: 'youtube' | 'local';
        url: string;
        title?: string;
    }[];
    featuredSummary?: string;
    conclusion?: string;
    recommendations?: string;
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
    tags: ('Design' | 'Onderzoek' | 'Tech' | 'Management')[];
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
        tags: ['Management', 'Design'],
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
        tags: ['Onderzoek', 'Management'],
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
        tags: ['Onderzoek', 'Management'],
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
        tags: ['Design', 'Onderzoek'],
        thumbnail: '/images/vwo3/project1/FormHet_Logo.png',
        gallery: [
            {
                src: '/images/vwo3/project1/FormHet_Logo.png',
                caption: 'FormHet Logo - Formaat Hergebruik project voor schakelwoningen'
            },
            {
                src: '/images/vwo3/project1/logo - floppers - team.jpg',
                caption: 'Team Floppers Logo - Projectteam VWO 3'
            },
            {
                src: '/images/vwo3/project1/Persona.jpg',
                caption: 'Persona Analyse - Doelgroep onderzoek voor schakelwoning gebruikers'
            },
            {
                src: '/images/vwo3/project1/Levensfases.png',
                caption: 'Levensfases Diagram - Verschillende gebruikersfasen voor schakelwoningen'
            },
            {
                src: '/images/vwo3/project1/PVE.jpg',
                caption: 'Programma van Eisen (PvE) - Technische en functionele requirements'
            },
            {
                src: '/images/vwo3/project1/plattegrond-oudere woning.jpg',
                caption: 'Plattegrond oudere bewoner - Woning configuratie voor senioren'
            },
            {
                src: '/images/vwo3/project1/plategrond-studenten_woning.jpg',
                caption: 'Plattegrond studenten woning - Flexibele indeling voor jongeren'
            },
            {
                src: '/images/vwo3/project1/Uitleg1.png',
                caption: 'Uitleg Concept 1 - Modulaire schakelwoning principes'
            },
            {
                src: '/images/vwo3/project1/Uitleg2_Plattegrond.jpg',
                caption: 'Uitleg Concept 2 - Gedetailleerde plattegrond met afmetingen'
            },
            {
                src: '/images/vwo3/project1/Eindproduct.jpg',
                caption: 'Eindproduct - Fysiek model van de schakelwoning'
            },
            {
                src: '/images/vwo3/project1/Collage.jpg',
                caption: 'Collage - Visualisatie van het complete FormHet concept'
            },
            {
                src: '/images/vwo3/project1/Poster.jpg',
                caption: 'Project Poster - Presentatie van onderzoek en ontwerp'
            }
        ],
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
        tags: ['Design', 'Onderzoek'],
        thumbnail: '/images/vwo2/project2/Logo - LAMP.png',
        gallery: [
            {
                src: '/images/vwo2/project2/Logo - LAMP.png',
                caption: 'Team LAMP Logo - Spelenderwijs Meer Bewegen project team'
            },
            {
                src: '/images/vwo2/project2/logo_product.png',
                caption: 'Product Logo - Bewegingsspel voor chronisch zieke kinderen'
            },
            {
                src: '/images/vwo2/project2/schets-product-LETOP:draai90gradennaarlinks.png',
                caption: 'Product schets - Initieel ontwerp van het kaartspel concept'
            },
            {
                src: '/images/vwo2/project2/prototype2(spuugmodel)-Spelenderwijsbewegen.jpg',
                caption: 'Spuugmodel (Low-Fidelity Prototype) - Vroege iteratie voor concept testing'
            },
            {
                src: '/images/vwo2/project2/prototype1(eindproduct)-Spelenderwijsbewegen.jpg',
                caption: 'Eindproduct Prototype 1 - Verfijnd kaartspel met fysieke opdrachten'
            },
            {
                src: '/images/vwo2/project2/prototype3(eindproduct-dicht)-Spelenderwijsbewegen.jpg',
                caption: 'Eindproduct (Gesloten) - Verpakking van het bewegingsspel'
            },
            {
                src: '/images/vwo2/project2/prototype4(eindproduct-open)-Spelenderwijsbewegen.jpg',
                caption: 'Eindproduct (Geopend) - Speelkaarten met bewegingsopdrachten zichtbaar'
            }
        ],
        videos: [
            {
                type: 'youtube',
                url: 'https://youtu.be/zHYxul0iaGw',
                title: 'Move Madness - Reclame Video'
            }
        ],
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
        tags: ['Onderzoek', 'Tech'],
        thumbnail: '/images/vwo2/project3/logo-Inpak_Dienst_Holland-zero waste.png',
        gallery: [
            {
                src: '/images/vwo2/project3/logo-Inpak_Dienst_Holland-zero waste.png',
                caption: 'Opdrachtgever Logo: Inpak Dienst Holland - Zero Waste verpakkingen'
            },
            {
                src: '/images/vwo2/project3/3d-model-optie-verpakking.png',
                caption: '3D Model - Verpakkingsontwerp optie voor duurzaam materiaal'
            },
            {
                src: '/images/vwo2/project3/eindproduct-iteratie_1-(100%-tapiocazetmeel).jpg',
                caption: 'Iteratie 1: Eindproduct met 100% tapioca zetmeel'
            },
            {
                src: '/images/vwo2/project3/eindproduct-iteratie_2-(50%-tapiocazetmeel-50%_aardappelzetmeel).jpg',
                caption: 'Iteratie 2: Mix van 50% tapioca en 50% aardappelzetmeel'
            },
            {
                src: '/images/vwo2/project3/eindproduct-uitgebreid-eindproduct(100%_aardappelzetmeel).jpg',
                caption: 'Eindproduct: 100% aardappelzetmeel - Optimale samenstelling'
            },
            {
                src: '/images/vwo2/project3/eindproduct-ingezoemd-letop:draai90graden.jpg',
                caption: 'Close-up van eindproduct - Detail van bioplastic structuur'
            },
            {
                src: '/images/vwo2/project3/presentatiemarkt.png',
                caption: 'Presentatie op de markt - Publieke demonstratie circulaire verpakking'
            }
        ],
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
        tags: ['Design', 'Management'],
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
        tags: ['Tech', 'Management'],
        thumbnail: '/images/vwo3/project2/logo-AquaStroom.png',
        gallery: [
            {
                src: '/images/vwo3/project2/logo-AquaStroom.png',
                caption: 'AquaStroom Logo - Golfenergie conversie systeem'
            },
            {
                src: '/images/vwo3/project2/logo - opdrachtgever.png',
                caption: 'Opdrachtgever Logo - Samenwerkingspartner voor duurzame energie'
            },
            {
                src: '/images/vwo3/project2/brainstrom-LETOP:kleine-inzoemgebruiken.jpg',
                caption: 'Brainstorm Sessie - Initiële ideeën voor golfenergie conversie'
            },
            {
                src: '/images/vwo3/project2/Concept-1-LETOP:DRAAI90graden(linksom).jpg',
                caption: 'Concept 1 - Eerste ontwerp voor AquaStroom mechanisme'
            },
            {
                src: '/images/vwo3/project2/Concept-2.jpg',
                caption: 'Concept 2 - Alternatieve benadering voor energie-opwekking'
            },
            {
                src: '/images/vwo3/project2/Concept-3-LETOP:DRAAI90graden(linksom).jpg',
                caption: 'Concept 3 - Verfijnd ontwerp met tandwiel systeem'
            },
            {
                src: '/images/vwo3/project2/Tandwielen-orientatie-aquastroom.png',
                caption: 'Tandwielen Oriëntatie - Technisch schema van aandrijving'
            },
            {
                src: '/images/vwo3/project2/iteratie-planning.png',
                caption: 'Iteratie 4 - Prototype fysieke uitvoering voor testen'
            },
            {
                src: '/images/vwo3/project2/eindontwerp-vanaf_voren.png',
                caption: 'Eindontwerp Voorkant - Complete AquaStroom opstelling'
            },
            {
                src: '/images/vwo3/project2/eindontwerp-vanaf_boven.png',
                caption: 'Eindontwerp Bovenaanzicht - Overzicht mechanisme layout'
            },
            {
                src: '/images/vwo3/project2/eindontwerp-vanaf_studio.jpg',
                caption: 'Eindontwerp Studio - Professionele product fotografie'
            },
            {
                src: '/images/vwo3/project2/eindontwerp-vanaf_inactie.jpg',
                caption: 'Eindontwerp in Actie - Werkend prototype tijdens demonstratie'
            },
            {
                src: '/images/vwo3/project2/eindontwerp-online.png',
                caption: 'Eindontwerp Render - Digitale visualisatie van AquaStroom'
            },
            {
                src: '/images/vwo3/project2/poster.png',
                caption: 'Project Poster - Presentatie van onderzoek en resultaten'
            }
        ],
        videos: [
            {
                type: 'youtube',
                url: 'https://youtu.be/qK52XXuNM-Y',
                title: 'Iteratie 1 - Omval test'
            },
            {
                type: 'youtube',
                url: 'https://youtu.be/35-lQ_0GVn0',
                title: 'Iteratie 2 - Golven test'
            },
            {
                type: 'youtube',
                url: 'https://youtu.be/BT2sYu-hHzM',
                title: 'Uitleg Werking - Aqua Stroom systeem'
            },
            {
                type: 'youtube',
                url: 'https://youtu.be/jNgm06Izjjc',
                title: 'Zij-stroming test'
            },
            {
                type: 'youtube',
                url: 'https://youtu.be/-LJrYY_5kG0',
                title: 'Eindpresentatie Video + Poster'
            }
        ],
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
        tags: ['Tech', 'Design'],
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
        description: 'Kostenonderzoek naar geothermie in vier Rijkswijkse wijken.',
        client: 'Gemeente Rijswijk & TU Delft',
        date: '2025',
        grade: { group: '?', personal: '?' }, // Grade pending
        team: ['Pieter Oosterling', 'Mohammad Khaled Yasin', 'Thijn Merks', 'Nouschka Steenks'],
        role: 'Planner (Plannen & Organiseren)',
        tags: ['Onderzoek', 'Management'],
        report: 'Verslag - Aardwarmte in Rijswijk-3.pdf',
        thumbnail: '/images/vwo4/project1/logo - Aardwarmte in Rijswkijk.png',
        gallery: [
            {
                src: '/images/vwo4/project1/logo - Aardwarmte in Rijswkijk.png',
                caption: 'Project Logo: Aardwarmte in Rijswijk - Geothermie verkennend onderzoek'
            },
            {
                src: '/images/vwo4/project1/opdrachtgever-bedrijf-gemeente_Rijswijk.png',
                caption: 'Opdrachtgever: Gemeente Rijswijk - Beleidsmedewerker Energietransitie'
            },
            {
                src: '/images/vwo4/project1/Hulp-opdrachtgever(bedrijf)-TUDelft.png',
                caption: 'Samenwerking met TU Delft - Technische ondersteuning en expertise'
            },
            {
                src: '/images/vwo4/project1/kaartRijswijk-opbasisvanwarmtevraag+warmtelinq.png',
                caption: 'Kaart van Rijswijk - Warmtevraag analyse en Warmte LinQ netwerk'
            },
            {
                src: '/images/vwo4/project1/samenvatting_warmtevraag.png',
                caption: 'Samenvatting van de warmtevraag per wijk in Rijswijk'
            },
            {
                src: '/images/vwo4/project1/doublet_samenvatting_1 - buurten en wijken.png',
                caption: 'Doublet Scenario 1: Analyse van buurten en wijken voor aardwarmte'
            },
            {
                src: '/images/vwo4/project1/doublet_samenvatting_1 - optimaal Rijswijk.png',
                caption: 'Doublet Scenario - Optimale configuratie voor Rijswijk'
            },
            {
                src: '/images/vwo4/project1/doublet_samenvatting_1 - toekomst visie.png',
                caption: 'Doublet Scenario - Toekomstvisie voor duurzame warmtevoorziening'
            },
            {
                src: '/images/vwo4/project1/Doublet - optimaal Rijswijk - Breakthourgh time.png',
                caption: 'Doorbraaktijd (Breakthrough Time) analyse voor de optimale doublet in Rijswijk'
            },
            {
                src: '/images/vwo4/project1/Doublet - optimaal Rijswijk - energy - TJ.png',
                caption: 'Energieproductie optimale doublet: 250 TJ per jaar in Rijswijk'
            },
            {
                src: '/images/vwo4/project1/Doublet - toekomst visie - informatie over breakthrough time.png',
                caption: 'Toekomstvisie: Technische informatie over doorbraaktijd en duurzaamheid'
            },
            {
                src: '/images/vwo4/project1/heatmap-3_Toekomst-TJ.png',
                caption: 'Heatmap: Toekomstige warmtevraag in TJ (Terajoules) per gebied'
            },
            {
                src: '/images/vwo4/project1/Toekomst aardwarme - CBS-ontrokken aardwarmte.png',
                caption: 'CBS Data: Ontrokken aardwarmte toekomstscenario in Nederland'
            },
            {
                src: '/images/vwo4/project1/locatie_bovengrond - kleurenbuurt - grasveld 2.png',
                caption: 'Gekozen locatie: Grasveld 2 in de Kleurenbuurt nabij Kruisvaarderspark'
            },
            {
                src: '/images/vwo4/project1/image-warmtewisselaar.png',
                caption: 'Technische schema: Warmtewisselaar voor geothermisch systeem'
            },
            {
                src: '/images/vwo4/project1/double2.png',
                caption: 'Doublet technologie: Tweeling-boorgatensysteem voor aardwarmte-extractie'
            }
        ],
        featuredSummary: `In opdracht van de Gemeente Rijswijk en in samenwerking met TU Delft hebben wij een uitgebreid verkennend onderzoek uitgevoerd naar de haalbaarheid van geothermie (aardwarmte) in vier Rijkswijkse wijken: Oud-Rijswijk, Kleurenbuurt, Hoornwijck en Muziekbuurt.

Het project richtte zich op het identificeren van de meest geschikte locatie voor een aardwarmtecentrale, waarbij zowel technische als financiële aspecten in overweging werden genomen. We onderzochten de ondergrond structuur, de warmtevraag per wijk, beschikbare bovengrondse ruimte, en de aansluiting op bestaande warmtenetten zoals Warmte LinQ.

Na grondige analyse blijkt de Kleurenbuurt de optimale locatie. Deze keuze is gebaseerd op de gunstige ondergrond (S-gesteentelaag op 2000-2500m diepte), beschikbare ruimte bij het Kruisvaarderspark (grasveld 2, ~4400m²), en de nabijheid van infrastructuur voor warmtelevering aan omliggende wijken.

Het gekozen doublet-scenario "Buurten en Wijken" levert 250 TJ warmte per jaar met een levensduur van 36 jaar. De totale investering bedraagt €24,88 miljoen, met een terugverdientijd van slechts 6,4 jaar en een geschatte winst van €105-112 miljoen over de gehele levensduur.`,
        conclusion: `<h2>Conclusie</h2>

<p>Dit project heeft onderzoek gedaan naar meerdere aspecten om een optimale locatie voor de realisatie van een aardwarmtecentrale te kiezen. Uiteindelijk is besloten dat de <strong>Kleurenbuurt</strong> over de beste specificaties beschikt van alle wijken.</p>

<h3>Deelvragen</h3>

<p><strong>1. Is het voor de gemeente rendabel om een aardwarmtecentrale te bouwen?</strong></p>

<p>Voor de gemeente is het zeer rendabel om een aardwarmtecentrale te bouwen op één van de grasvelden in het nabijgelegen park bij de Kleurenbuurt. Op basis van de doublet opties is er gekozen voor de doublet met de langste levensduur: <strong>36,37 jaar</strong> (het "Doublet buurten en wijken" scenario).</p>

<p>In de jaren dat de centrale actief is kan de aardwarmtecentrale een <strong>totale opbrengst van €141,48 miljoen</strong> leveren, wanneer alle warmte gebruikt wordt die de centrale opwekt. De algemene prijs voor een aardwarmtecentrale ligt rond de <strong>€24.880.000</strong>.</p>

<p>Daarnaast is er onderhoud nodig van ongeveer €200.000 per jaar, wat betekent dat er over de levensduur ongeveer <strong>€7,8 miljoen</strong> gebruikt wordt voor onderhoud. Dus in totaal is er een <strong>winst van ongeveer €105-112 miljoen</strong>.</p>

<p>De aardwarmtecentrale kan deze winst bereiken door ook de omliggende wijken om de Kleurenbuurt (Muziekbuurt, Artiestenbuurt, etc.) te verwarmen.</p>

<p><strong>2. Welke van de toegewezen locaties is het meest geschikt voor dit project?</strong></p>

<p>Van de vier verschillende wijken binnen Rijswijk is de <strong>Kleurenbuurt</strong> het meest geschikt. Dit komt doordat de Kleurenbuurt buiten de wijk over vele gasvelden beschikt.</p>

<p>Het meest geschikte grasveld in de Kleurenbuurt is <strong>grasveld 2</strong>, doordat deze:</p>
<ul>
<li>Naast infrastructuur ligt voor bereikbaarheid van bouwverkeer</li>
<li>Groot genoeg is voor de realisatie van een aardwarmtecentrale (4400 m²)</li>
<li>Omringd is door bomen voor esthetische beschutting</li>
<li>In de nabijheid ligt van de Warmte LinQ warmteleiding</li>
</ul>

<p><strong>3. Naar welke ondergrondse locatie is het meest geschikt om te boren?</strong></p>

<p>De meest geschikte ondergrondse locatie is <strong>gesteente laag S</strong> (Schielanden en Nedersaksen groepen). Deze laag ligt bij de Kleurenbuurt op een diepte van <strong>2000 tot 2500 meter</strong> onder de grond.</p>

<p>Voor het eerder besproken rendement moet er ongeveer <strong>2400 meter diep</strong> geboord worden en moeten de buizen ongeveer <strong>1000 meter uit elkaar</strong> liggen (injectie en productieput) om een optimale levensduur te behalen.</p>

<h3>Hoofdvraag</h3>

<p><strong>Welke van de toegewezen locaties heeft de beste eigenschappen voor de gemeente om een aardwarmtecentrale te bouwen?</strong></p>

<p>De <strong>Kleurenbuurt</strong> heeft de beste eigenschappen voor de gemeente om een aardwarmtecentrale te realiseren:</p>

<ul>
<li><strong>Ondergrond</strong>: Beschikt over een ondergrond met de juiste permeabele eigenschappen op de juiste diepte (S-gesteentelaag)</li>
<li><strong>Bovengrondse locatie</strong>: Dichtstbijzijnde grasvelden naast het Kruisvaarderspark met veel mogelijkheid tot realisatie door het oppervlak</li>
<li><strong>Warmtevraag</strong>: De Kleurenbuurt heeft zelf niet genoeg vraag, maar de warmtelevering kan gedeeld worden over verschillende omliggende wijken met hoogbouw en dus veel vraag (bijvoorbeeld de Muziekbuurt met 101,4 TJ warmteverbruik)</li>
</ul>

<p>Dit plan sluit aan bij het warmteplan van de gemeente Rijswijk zelf, waarin dit concept al genoemd wordt.</p>`,
        recommendations: `<h2>Aanbevelingen</h2>

<p>Naast de conclusie voor de boorlocatie zijn er aanbevelingen voor de opdrachtgever op basis van de boorspecificaties en de diepte voor de doublet. Deze aanbevelingen zijn gebaseerd op de eerder uitgewerkte onderzoeken in dit verslag en vormen een richtlijn waaraan gehouden kan worden tijdens de realisatie van de aardwarmtecentrale.</p>

<h3>Boren</h3>

<p>Voor boren wordt er geadviseerd om tot een diepte van ongeveer <strong>2000 tot 2500 meter</strong> te boren. Op deze diepte bevindt zich de gesteentelaag met de gesteentegroep onder de afkorting <strong>S</strong> (Schielanden/Nedersaksen), die over de meest geschikte eigenschappen beschikt voor permeabiliteit.</p>

<p>Daarnaast bevindt zich onder deze grondlaag een slecht permeabele ondergrondstructuur, waardoor er mogelijk al water in de ondergrond aanwezig is. Hierbij wordt ook geadviseerd om rekening te houden met plaatselijke fluctuaties in diepte, waardoor een diepte van 2500 meter zich al kan bevinden op de hoogte van de slecht permeabele ondergrond.</p>

<p>Voor de twee buizen voor aardwarmte (de injectie en productieputten) wordt geadviseerd om deze tot een diepte van <strong>2000 meter</strong> te laten lopen. Verder zouden deze buizen ook ongeveer <strong>1000 meter van elkaar</strong> af moeten liggen voor een optimale warmteproductie. Deze waarden zijn deel van het doublet-scenario met de langste levensduur: <strong>"Doublet buurten en wijken"</strong>.</p>

<h3>Locatie</h3>

<p>Het is aangetoond dat de aardwarmtecentrale het meeste rendement zal hebben als deze warmte levert aan de <strong>Kleurenbuurt en de Muziekbuurt</strong>.</p>

<p>Hierbij wordt geadviseerd om de centrale op <strong>grasveld 2</strong> te plaatsen. Dit grasveld heeft de volgende voordelen:</p>

<ul>
<li><strong>Esthetische beschutting</strong>: Omringende bomenbeschutting werkt tegen eventuele esthetische kwesties</li>
<li><strong>Infrastructuur</strong>: Naast dit grasveld ligt grote infrastructuur wat leidt tot makkelijk vervoer van bouwmaterialen</li>
<li><strong>Warmtenet aansluiting</strong>: Daaronder ligt een warmteleiding van het warmteprogramma <strong>Warmte LinQ</strong></li>
</ul>

<h3>Aansluiting op Warmte LinQ</h3>

<p>De aardwarmtecentrale kan aangesloten worden op het Warmte LinQ warmtenet om zo een groter gedeelte van Rijswijk te voorzien van duurzame energie. Dit moet alleen gedaan worden als de aardwarmtecentrale <strong>niet alle</strong> gebouwen die zijn aangesloten aan dit warmtenet hoeft te verwarmen.</p>

<p>In combinatie met de huidige bron voor warmte (de fabrieken in de Rotterdamse haven) zou de aardwarmtecentrale de levering van warmte wel aankunnen. Natuurlijk is het geadviseerd om hierbij nog <strong>grondige berekeningen</strong> uit te voeren om de mogelijkheid van dit concept te bewijzen, aangezien de aardwarmte ook de energie van de Kleurenbuurt en de Muziekbuurt moet leveren.</p>

<h3>Vervolgstappen</h3>

<ul>
<li><strong>Gedetailleerde bodemonderzoek</strong>: Uitvoeren van specifieke boringen op grasveld 2 voor exacte parameters</li>
<li><strong>Vergunningen aanvragen</strong>: Proces starten voor bouw- en milieuvergunningen</li>
<li><strong>Businesscase verfijnen</strong>: Exacte kostenberekening met lokale leveranciers</li>
<li><strong>Stakeholder consultatie</strong>: Bewoners van Kleurenbuurt en Muziekbuurt informeren en betrekken</li>
</ul>`,
        content: {
            summary: `
        In opdracht van de beleidsmedewerker energietransitie van de Gemeente Rijswijk (i.s.m. TU Delft) hebben wij een verkennend onderzoek uitgevoerd naar de mogelijkheden voor geothermie (aardwarmte) in vier wijken: Oud-Rijswijk, Kleurenbuurt, Hoornwijck en Muziekbuurt.

        Het hoofddoel was te kijken welke buurt het handigst was voor een aardwarmtecentrale. We hebben hierbij vooral gekeken naar wat technisch kan en wat het kost (financieel haalbaar). We hebben onderzocht hoe de bodem eruitziet, hoeveel warmte er nodig is en of er plek is.
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
