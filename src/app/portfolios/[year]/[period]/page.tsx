
import Link from 'next/link';
import styles from '../page.module.css'; // Reuse styles or create new
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

    // Construct PDF Path
    const basePath = `/bestanden/vwo${yearNumber}/project${periodNumber}`;
    const mainPortfolioPath = `${basePath}/portfolio_v${yearNumber}_p${periodNumber}.pdf`;

    // Initialize documents array
    const documents = [
        { title: 'Portfolio', path: mainPortfolioPath }
    ];

    // VWO 3 Extras
    if (yearNumber === 3) {
        if (periodNumber === 1) {
            documents.push({ title: 'Portfolio (Oud)', path: `${basePath}/portfolio_v3_p1-oud.pdf` });
        }
        documents.push({ title: 'Proces Verslag (PV)', path: `${basePath}/pv_v${yearNumber}_p${periodNumber}.pdf` });
        documents.push({ title: 'Werkhouding', path: `${basePath}/werkhouding_v${yearNumber}_p${periodNumber}.pdf` });
    }

    // Special Case: VWO 1 - Periode 1 -> Missing
    const isMissing = yearNumber === 1 && periodNumber === 1;

    return (
        <main className={styles.main}>
            {/* Header / Nav */}
            <div style={{ marginBottom: '2rem' }}>
                <Link href={`/portfolios/${year}`} className={styles.backButton}>
                    ← Terug naar VWO {yearNumber}
                </Link>
            </div>

            {/* Project Header Info */}
            <div className={`fade-in`} style={{ marginBottom: '2rem' }}>
                <h1 className={styles.title}>
                    {project ? project.title : `Portfolio VWO ${yearNumber} - Periode ${periodNumber}`}
                </h1>
                {project && (
                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        maxWidth: '800px',
                        margin: '0 auto 2rem auto',
                        textAlign: 'left'
                    }}>
                        <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '1rem' }}>{project.description}</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                            <div>
                                <span style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Opdrachtgever</span>
                                <span style={{ color: '#fff' }}>{project.client || 'N.v.t.'}</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Team</span>
                                <span style={{ color: '#fff' }}>{project.team ? project.team.join(', ') : 'Individueel'}</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Rol</span>
                                <span style={{ color: '#fff' }}>{project.role || 'Onbekend'}</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', color: '#666', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Cijfer</span>
                                <span style={{ color: '#4a9eff', fontWeight: 'bold' }}>
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
