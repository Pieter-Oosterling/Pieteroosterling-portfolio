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

    // Mock data fallback
    const portfolios = [
        { id: 1, title: 'Portfolio Deel 1', description: `Ontwikkeling in VWO ${yearNumber} deel 1` },
        { id: 2, title: 'Portfolio Deel 2', description: `Ontwikkeling in VWO ${yearNumber} deel 2` },
        { id: 3, title: 'Reflectie', description: `Jaarreflectie VWO ${yearNumber}` },
    ];

    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} fade-in`}>Portfolio VWO {yearNumber}</h1>
            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {portfolios.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <h2 className={styles.cardTitle}>{item.title}</h2>
                        <p className={styles.cardDesc}>{item.description}</p>
                        <div className={styles.glow} />
                    </div>
                ))}
            </div>
            <Link href="/portfolios" className={styles.backButton}>
                ← Terug naar overzicht
            </Link>
        </main>
    );
}
