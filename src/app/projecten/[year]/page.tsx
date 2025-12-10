import Link from 'next/link';
import styles from './page.module.css';

// This would typically come from a CMS or database
const projectsData = {
    1: [
        { id: 1, title: 'Brugklas Project', description: 'Eerste O&O project.', image: 'Image - Brugklas Project.png', report: 'Verslag - Brugklas Project.pdf' },
        { id: 2, title: 'Technasium', description: 'Onderzoek naar...', image: 'Image - Technasium.png', report: 'Verslag - Technasium.pdf' },
        { id: 3, title: 'Eindopdracht', description: 'Grote finale.', image: 'Image - Eindopdracht.png', report: 'Verslag - Eindopdracht.pdf' },
    ],
    2: [
        { id: 1, title: 'Project VWO 2', description: 'Jaar 2 project.', image: 'Image - Project VWO 2.png', report: 'Verslag - Project VWO 2.pdf' },
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

    const projects = projectsData[yearNumber as keyof typeof projectsData] || [];

    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} fade-in`}>Projecten VWO {yearNumber}</h1>
            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {projects.length > 0 ? projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        {/* Image Placeholder */}
                        <div className={styles.imageContainer}>
                            {/* In a real app, use Next/Image. Here using div for layout proofing if image missing */}
                            <div className={styles.imagePlaceholder}>{project.title[0]}</div>
                            {/* <img src={`/images/${project.image}`} alt={project.title} className={styles.image} /> */}
                        </div>

                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>{project.title}</h2>
                            <p className={styles.cardDesc}>{project.description}</p>

                            <div className={styles.actions}>
                                {project.report && (
                                    <a href={`/verslagen/${project.report}`} target="_blank" rel="noopener noreferrer" className={styles.button}>
                                        Bekijk Verslag
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className={styles.glow} />
                    </div>
                )) : (
                    <p className={styles.empty}>Nog geen projecten toegevoegd voor dit jaar.</p>
                )}
            </div>
            <Link href="/projecten" className={styles.backButton}>
                ← Terug naar overzicht
            </Link>
        </main>
    );
}
