import Link from 'next/link';
import styles from './page.module.css';

// This would typically come from a CMS or database
const projectsData = {
    1: [
        { id: 1, title: 'Project 1: Brugklas', description: 'Eerste O&O project.' },
        { id: 2, title: 'Project 2: Technasium', description: 'Onderzoek naar...' },
        { id: 3, title: 'Project 3: Eindopdracht', description: 'Grote finale.' },
    ],
    2: [
        { id: 1, title: 'Project 1: VWO 2', description: 'Jaar 2 project.' },
        { id: 2, title: 'Project 2', description: 'Jaar 2 project.' },
        { id: 3, title: 'Project 3', description: 'Jaar 2 project.' },
    ],
    // ... can fill more if needed, default fallbacks below
};

export async function generateStaticParams() {
    return [1, 2, 3, 4, 5, 6].map((year) => ({
        year: `jaar-${year}`,
    }));
}

export default async function ProjectYearPage({
    params,
}: {
    params: Promise<{ year: string }>;
}) {
    const { year } = await params;
    const yearNumber = parseInt(year.replace('jaar-', ''));

    // Mock data fallback
    const projects = projectsData[yearNumber as keyof typeof projectsData] || [
        { id: 1, title: 'Project 1', description: `Project 1 van VWO ${yearNumber}` },
        { id: 2, title: 'Project 2', description: `Project 2 van VWO ${yearNumber}` },
        { id: 3, title: 'Project 3', description: `Project 3 van VWO ${yearNumber}` },
    ];

    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} fade-in`}>Projecten VWO {yearNumber}</h1>
            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h2 className={styles.cardTitle}>{project.title}</h2>
                        <p className={styles.cardDesc}>{project.description}</p>
                        <div className={styles.glow} />
                    </div>
                ))}
            </div>
            <Link href="/projecten" className={styles.backButton}>
                ← Terug naar overzicht
            </Link>
        </main>
    );
}
