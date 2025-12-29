// Year summaries with teacher information
export interface YearSummary {
    year: number;
    teacher: string;
    description: string;
}

export const yearSummaries: YearSummary[] = [
    {
        year: 1,
        teacher: 'Mevrouw van Well',
        description: 'Dit jaar hebben jullie kennisgemaakt met O&O door drie verschillende projecten. Jullie leerden de basis van onderzoek doen, samenwerken in teams, en presenteren van resultaten.'
    },
    {
        year: 2,
        teacher: 'Meneer Sluiter',
        description: 'Het tweede jaar stond in het teken van verdieping. Citaat: "Niks is perfect en er is altijd nog ruimte voor verbetering".'
    },
    {
        year: 3,
        teacher: 'Mevrouw van der Brand',
        description: 'In VWO 3 hebben jullie gefocust op maatschappelijke problemen, zoals de woningcrisis, duurzaamheid en gezondheid. De projecten waren grootschaliger en jullie moesten samenwerken met échte opdrachtgevers, wat een belangrijke stap was in jullie ontwikkeling.'
    },
    {
        year: 4,
        teacher: 'Meneer Sluiter',
        description: 'Citaat: "De opdrachtgever was echt heel tevreden met het resultaat van jullie verslag en hoe jullie je voor zo ver mogelijk konden verdiepen in het verslag." - citaat van: 19-12-2025'
    },
    {
        year: 5,
        teacher: 'onbekend',
        description: 'VWO 5 - Nog te bepalen'
    },
    {
        year: 6,
        teacher: 'onbekend',
        description: 'VWO 6 - Nog te bepalen'
    }
];
