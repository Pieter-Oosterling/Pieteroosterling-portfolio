import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { yearSummaries } from '@/data/yearSummaries';
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
    const yearSummary = yearSummaries.find(y => y.year === yearNumber);

    // Calculate average grade
    const gradesWithData = projects.filter(p => p.grade && (p.grade.combined || p.grade.group || p.grade.personal));
    let averageGrade = 0;

    if (gradesWithData.length > 0) {
        const sum = gradesWithData.reduce((acc, p) => {
            const gradeStr = p.grade?.combined || p.grade?.group || p.grade?.personal || '0';
            const numGrade = parseFloat(gradeStr.replace(',', '.'));
            return acc + (isNaN(numGrade) ? 0 : numGrade);
        }, 0);
        averageGrade = sum / gradesWithData.length;
    }

    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} fade-in`}>Projecten VWO {yearNumber}</h1>

            {yearSummary && (
                <div className={`${styles.yearSummary} fade-in`} style={{ animationDelay: '0.1s' }}>
                    <div className={styles.summaryHeader}>
                        <div className={styles.summaryInfo}>
                            <span className={styles.teacher}>👨‍🏫 {yearSummary.teacher}</span>
                            {averageGrade > 0 && (
                                <span className={styles.avgGrade}>
                                    Gemiddeld cijfer: <strong>{averageGrade.toFixed(1).replace('.', ',')}</strong>
                                </span>
                            )}
                        </div>
                    </div>
                    <p className={styles.summaryDesc}>{yearSummary.description}</p>
                </div>
            )}

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
