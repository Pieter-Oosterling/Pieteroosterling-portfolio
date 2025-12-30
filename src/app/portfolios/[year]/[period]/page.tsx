
import Link from 'next/link';
import styles from '../page.module.css'; // Reuse styles or create new
import MissingPortfolio from '@/components/Portfolio/MissingPortfolio';
import ReflectionForm from '@/components/Reflection/ReflectionForm';
import DocumentViewer from '@/components/Portfolio/DocumentViewer';

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
    const basePath = `/bestanden/vwo${yearNumber}/project${periodNumber}`;
    const mainPortfolioPath = `${basePath}/portfolio_v${yearNumber}_p${periodNumber}.pdf`;

    // Initialize documents array
    const documents = [
        { title: 'Portfolio', path: mainPortfolioPath }
    ];

    // VWO 3 Extras
    if (yearNumber === 3) {
        // Add "Portfolio Oud" if it exists (assuming for Project 1 based on request, or maybe all? 
        // User pattern suggests Project 1 had "oud". I'll add it conditionally or just for P1 for now to be safe,
        // or add it and if it 404s it's minor, but better to be precise. 
        // User listed: vwo3/project1/portfolio_v3_p1-oud.pdf. 
        if (periodNumber === 1) {
            documents.push({ title: 'Portfolio (Oud)', path: `${basePath}/portfolio_v3_p1-oud.pdf` });
        }

        // Add Proces Verslag (PV)
        documents.push({ title: 'Proces Verslag (PV)', path: `${basePath}/pv_v${yearNumber}_p${periodNumber}.pdf` });

        // Add Werkhouding
        documents.push({ title: 'Werkhouding', path: `${basePath}/werkhouding_v${yearNumber}_p${periodNumber}.pdf` });
    }

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
                    <DocumentViewer documents={documents} />
                )}

                {!isMissing && showReflection && (
                    <ReflectionForm />
                )}

            </div>
        </main>
    );
}
