import Link from 'next/link';
import { projectsData } from '@/data/projects';
import styles from './page.module.css';

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

    const projects = projectsData.filter(p => p.year === yearNumber);

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
                            {/* <img src={project.thumbnail} alt={project.title} className={styles.image} /> */}
                        </div>

                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>{project.title}</h2>
                            <p className={styles.cardDesc}>{project.description}</p>

                            <div className={styles.actions}>
                                <Link href={`/projecten/${year}/${project.slug}`} className={styles.button}>
                                    Bekijk Project
                                </Link>
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
