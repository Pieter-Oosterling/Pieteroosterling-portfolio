import Link from 'next/link';
import styles from './page.module.css';

export async function generateStaticParams() {
    return [1, 2, 3, 4, 5, 6].map((year) => ({
        year: `jaar-${year}`,
    }));
}

export default async function PortfolioYearPage({
    params,
}: {
    params: Promise<{ year: string }>;
}) {
    const { year } = await params;
    const yearNumber = parseInt(year.replace('jaar-', ''));

    // Generate 3 periods for each year as per standard structure
    // We can adjust this if some years have more/fewer, but standard seems to be 3-4.
    const portfolios = [
        { id: 1, title: 'Periode 1', description: `Portfolio & Projecten uit Periode 1` },
        { id: 2, title: 'Periode 2', description: `Portfolio & Projecten uit Periode 2` },
        { id: 3, title: 'Periode 3', description: `Portfolio & Projecten uit Periode 3` },
        // Optional: Add period 4 if needed, but sticking to 3 for now based on typical school years or check data.
        // User mentioned "project1", "project2", etc.
    ];

    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} fade-in`}>Portfolio VWO {yearNumber}</h1>
            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {portfolios.map((item) => (
                    <Link
                        key={item.id}
                        href={`/portfolios/${year}/${item.id}`}
                        className={styles.card}
                    >
                        <h2 className={styles.cardTitle}>{item.title}</h2>
                        <p className={styles.cardDesc}>{item.description}</p>
                        <div className={styles.glow} />
                    </Link>
                ))}
            </div>
            <Link href="/portfolios" className={styles.backButton}>
                ← Terug naar overzicht
            </Link>
        </main>
    );
}
