
import Link from 'next/link';
import styles from '../page.module.css'; // Reuse styles or create new
import MissingPortfolio from '@/components/Portfolio/MissingPortfolio';
import ReflectionForm from '@/components/Reflection/ReflectionForm';

export default async function PortfolioDetail({
    params,
}: {
    params: Promise<{ year: string; period: string }>;
}) {
    const { year, period } = await params;
    const yearNumber = parseInt(year.replace('jaar-', ''));
    const periodNumber = parseInt(period);

    // Construct PDF Path based on user convention:
    // /public/bestanden/vwo1/project1/portfolio_v1_p1.pdf
    // Note: Next.js public folder serving means we don't include 'public' in the URL.
    const pdfPath = `/bestanden/vwo${yearNumber}/project${periodNumber}/portfolio_v${yearNumber}_p${periodNumber}.pdf`;

    // Special Case: VWO 1 - Periode 1 -> Missing
    const isMissing = yearNumber === 1 && periodNumber === 1;

    // Reflection Form: Only for VWO 3 and above
    const showReflection = yearNumber >= 3;

    return (
        <main className={styles.main}>
            {/* Header / Nav */}
            <div style={{ marginBottom: '2rem' }}>
                <Link href={`/portfolios/${year}`} className={styles.backButton}>
                    ← Terug naar VWO {yearNumber}
                </Link>
            </div>

            <h1 className={`${styles.title} fade-in`}>
                Portfolio VWO {yearNumber} - Periode {periodNumber}
            </h1>

            <div className="fade-in" style={{ animationDelay: '0.2s', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

                {isMissing ? (
                    <MissingPortfolio />
                ) : (
                    <div style={{
                        height: '80vh',
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <iframe
                            src={pdfPath}
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title={`Portfolio PDF VWO ${yearNumber} Periode ${periodNumber}`}
                        />
                    </div>
                )}

                {!isMissing && showReflection && (
                    <ReflectionForm />
                )}

            </div>
        </main>
    );
}
