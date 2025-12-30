import Link from 'next/link';
import styles from '../page.module.css'; // Reuse styles or create new
import metaStyles from '@/components/Portfolio/ProjectMetadata.module.css'; // New Styles
import MissingPortfolio from '@/components/Portfolio/MissingPortfolio';
import DocumentViewer from '@/components/Portfolio/DocumentViewer';

import { projectsData } from '@/data/projects';

export default async function PortfolioDetail({
    params,
}: {
    params: Promise<{ year: string; period: string }>;
}) {
    const { year, period } = await params;
    const yearNumber = parseInt(year.replace('jaar-', ''));
    const periodNumber = parseInt(period);

    // Find Project Data
    // Filter projects by year, then pick by index (period 1 = index 0)
    const yearProjects = projectsData.filter(p => p.year === yearNumber);
    const project = yearProjects[periodNumber - 1];

    // Construct PDF Path (Default Fallback)
    const basePath = `/bestanden/vwo${yearNumber}/project${periodNumber}`;
    const mainPortfolioPath = `${basePath}/portfolio_v${yearNumber}_p${periodNumber}.pdf`;

    // Initialize documents array
    let documents = [
        { title: 'Portfolio', path: mainPortfolioPath }
    ];

    // If project has defined documents in data, us those instead or merge
    // Strategy: If data has 'portfolio' type, replace the default. If data has only extras, append?
    // User request implies specific control. Let's prioritize data.
    if (project?.documents && project.documents.length > 0) {
        // If the data includes a "Portfolio" or "Missing Portfolio", we should use the data list entirely to be precise.
        // However, for VWO 1 P1, user said "found portfolio" AND "custom missing report page".
        // The data I wrote for VWO1 P1 has: [{ title: 'Verslag', type: 'missing_report' }, { title: 'Presentatie', ... }]
        // It DOES NOT have the portfolio in the data list I wrote in previous step (I missed adding the portfolio item itself to the list in projects.ts, 
        // I only handled the Extras in the list for VWO 1 P1 in the thought process? No, wait. 
        // In projects.ts update I wrote: documents: [{ title: 'Verslag', type: 'missing_report' }, { ...Presentation... }]
        // So I need to ensure the Main Portfolio is arguably ALWAYS there unless explicitly excluded.

        // Let's prepend "Portfolio" to the data list if it's not explicitly in there?
        // Or better: Just use exactly what's in data + the default portfolio if not present?

        // Check if data has a portfolio-like entry
        const hasPortfolio = project.documents.some(d => d.type === 'portfolio' || d.title.toLowerCase().includes('portfolio'));

        if (!hasPortfolio) {
            // Prepend default portfolio
            documents = [
                { title: 'Portfolio', path: mainPortfolioPath },
                ...project.documents.map(d => ({ ...d, path: d.path || '' })) // Ensure path string
            ];
        } else {
            // Use data fully
            documents = project.documents.map(d => ({ ...d, path: d.path || '' }));
        }
    } else {
        // VWO 3 Legacy Logic or Fallback (should cover everything via data now, but safe to keep default if no data)
        // (Empty else block as default is set above)
    }

    // Special Case: VWO 1 - Periode 1 -> Missing Portfolio EXCEPTION REMOVED
    // User found the file: /Users/p.oosterling/PieterOosterling/Portfolio/public/bestanden/vwo1/project1/portfolio_v1_p1.pdf
    // This matches the default `mainPortfolioPath` generator.
    const isMissing = false; // Always false now as we found it.

    return (
        <main className={styles.main}>
            {/* Header / Nav */}
            <div style={{ marginBottom: '2rem' }}>
                <Link href={`/portfolios/${year}`} className={styles.backButton}>
                    ← Terug naar VWO {yearNumber}
                </Link>
            </div>

            {/* Project Header Info */}
            <div className={`fade-in`} style={{ marginBottom: '3rem' }}>
                <h1 className={styles.title}>
                    {project ? project.title : `Portfolio VWO ${yearNumber} - Periode ${periodNumber}`}
                </h1>
                {project && (
                    <div className="fade-in delay1">
                        <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6', maxWidth: '800px' }}>
                            {project.description}
                        </p>

                        <div className={metaStyles.metadataContainer}>
                            <div className={`${metaStyles.metadataCard} ${metaStyles.delay1}`}>
                                <span className={metaStyles.label}>Datum</span>
                                <span className={metaStyles.value}>{project.date || 'Onbekend'}</span>
                            </div>

                            <div className={`${metaStyles.metadataCard} ${metaStyles.delay1}`}>
                                <span className={metaStyles.label}>Opdrachtgever</span>
                                <span className={`${metaStyles.value} ${metaStyles.clientValue}`}>
                                    {project.client || 'N.v.t.'}
                                </span>
                            </div>

                            <div className={`${metaStyles.metadataCard} ${metaStyles.delay2}`}>
                                <span className={metaStyles.label}>Team</span>
                                <span className={metaStyles.value}>
                                    {project.team ? project.team.join(', ') : 'Individueel'}
                                </span>
                            </div>

                            <div className={`${metaStyles.metadataCard} ${metaStyles.delay3}`}>
                                <span className={metaStyles.label}>Rol</span>
                                <span className={metaStyles.value}>
                                    {project.role || 'Onbekend'}
                                </span>
                            </div>

                            <div className={`${metaStyles.metadataCard} ${metaStyles.delay4}`}>
                                <span className={metaStyles.label}>Cijfer</span>
                                <span className={metaStyles.gradeValue}>
                                    {project.grade?.combined || project.grade?.personal || 'N.v.t.'}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="fade-in" style={{ animationDelay: '0.2s', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

                {isMissing ? (
                    <MissingPortfolio />
                ) : (
                    <DocumentViewer documents={documents} />
                )}

            </div>
        </main>
    );
}
