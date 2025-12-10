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
    }
];
