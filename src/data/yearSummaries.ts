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
        description: 'In het eerste jaar hebben we kennisgemaakt met O&O door drie verschillende projecten. We leerden de basis van onderzoek doen, samenwerken in teams, en presenteren van resultaten.'
    },
    {
        year: 2,
        teacher: 'Meneer Sluiter',
        description: 'Het tweede jaar stond in het teken van verdieping. We werkten aan complexere projecten waarbij we leerden om zelfstandiger onderzoek te doen en meer verantwoordelijkheid te nemen binnen het team.'
    },
    {
        year: 3,
        teacher: 'Mevrouw van der Brand',
        description: 'In VWO 3 hebben we ons gefocust op maatschappelijke vraagstukken. De projecten waren grootschaliger en we moesten samenwerken met échte opdrachtgevers, wat een belangrijke stap was in onze ontwikkeling.'
    },
    {
        year: 4,
        teacher: 'Meneer Sluiter',
        description: 'Het vierde jaar was het meest uitdagend tot nu toe. We hebben gewerkt aan een grootschalig onderzoeksproject voor de Gemeente Rijswijk waarbij we gebruik maakten van professionele tools en methoden.'
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
