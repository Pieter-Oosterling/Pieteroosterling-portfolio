import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import ProjectHeroImage from '@/components/ProjectHeroImage/ProjectHeroImage';
import Gallery from '@/components/Gallery/Gallery';
import AnimatedGrade from '@/components/AnimatedGrade/AnimatedGrade';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import styles from './page.module.css';

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        year: `jaar-${project.year}`,
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}) {
    const { year, slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Helper: Simple Markdown Renderer (Bold + Bullets + Paragraphs)
    const TextRenderer = ({ content }: { content: string }) => {
        // 1. Split by double newline for paragraphs/blocks
        const blocks = content.split('\n\n');

        return (
            <div className={styles.richText}>
                {blocks.map((block, i) => {
                    const trimmed = block.trim();
                    if (!trimmed) return null;

                    // 2. Handle Lists (lines starting with '*')
                    if (trimmed.includes('\n* ') || trimmed.startsWith('* ')) {
                        const lines = trimmed.split('\n');
                        const listItems = lines.filter(l => l.trim().startsWith('* ')).map(l => l.trim().slice(2));
                        // If lines had other content mixed, this simple parser treats the whole block as list-heavy
                        // For this specific use case, our data is structured well.
                        return (
                            <ul key={i} className={styles.list}>
                                {listItems.map((item, j) => (
                                    <li key={j}>
                                        {item.split(/(\*\*.*?\*\*)/).map((part, k) =>
                                            part.startsWith('**') && part.endsWith('**')
                                                ? <strong key={k}>{part.slice(2, -2)}</strong>
                                                : part
                                        )}
                                    </li>
                                ))}
                            </ul>
                        );
                    }

                    // 3. Handle Paragraphs with Bold
                    return (
                        <p key={i} className={styles.paragraph}>
                            {trimmed.split(/(\*\*.*?\*\*)/).map((part, j) =>
                                part.startsWith('**') && part.endsWith('**')
                                    ? <strong key={j}>{part.slice(2, -2)}</strong>
                                    : part
                            )}
                        </p>
                    );
                })}
            </div>
        );
    };

    // Determine Prev/Next logic
    const yearProjects = projectsData.filter(p => p.year === project.year);
    const currentIndex = yearProjects.findIndex(p => p.id === project.id);
    const prevProject = yearProjects[currentIndex - 1];
    const nextProject = yearProjects[currentIndex + 1];

    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={`${styles.hero} fade-in`}>
                <Link href={`/portfolios/${year}`} className={styles.backLink}>
                    &larr; Terug naar Jaar {project.year}
                </Link>

                <div className={styles.heroLayout}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>VWO {project.year}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.subtitle}>{project.description}</p>

                        <div className={styles.metaGrid}>
                            {project.client && (
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Opdrachtgever</span>
                                    <span className={styles.metaValue}>{project.client}</span>
                                </div>
                            )}
                            {project.date && (
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Datum</span>
                                    <span className={styles.metaValue}>{project.date}</span>
                                </div>
                            )}
                            {project.role && (
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Mijn Rol</span>
                                    <span className={styles.metaValue}>{project.role}</span>
                                </div>
                            )}
                        </div>

                        {/* Links Card */}
                        {(project.report || project.aiSummaryVideo) && (
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Downloads & Media</h3>
                                <div className={styles.links}>
                                    {project.report && (
                                        <a
                                            href={project.report}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.linkButton}
                                        >
                                            📄 Bekijk Verslag (PDF)
                                        </a>
                                    )}
                                    {project.aiSummaryVideo && (
                                        <div className={styles.aiVideoWrapper}>
                                            <a
                                                href={project.aiSummaryVideo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${styles.linkButton} ${styles.aiButton}`}
                                            >
                                                🤖 Verslag door AI samenvatten in video (Max. 10 min.)
                                            </a>
                                            {/* Optional: Add inline video player for this specifically if requested later, for now just a link/button as requested */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.heroImageWrapper}>
                        <ProjectHeroImage src={project.thumbnail} alt={project.title} />
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>

                {/* Left Column: Content */}
                <div className={styles.contentColumn}>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Samenvatting</h2>
                        <TextRenderer content={project.content.summary} />
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Resultaat</h2>
                        <TextRenderer content={project.content.result} />
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Persoonlijke Reflectie</h2>
                        <TextRenderer content={project.content.reflection} />
                    </div>

                    {/* Videos Section */}
                    {project.videos && project.videos.length > 0 && (
                        <VideoPlayer videos={project.videos} />
                    )}

                    {project.content.feedback && (
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Feedback Team</h2>
                            <TextRenderer content={project.content.feedback} />
                        </div>
                    )}

                    {project.content.extra && (
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{project.content.extra.title}</h2>
                            <ul className={styles.list}>
                                {project.content.extra.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Right Column: Sidebar */}
                <div className={styles.sidebar}>
                    {/* Team Card */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Teamleden</h3>
                        <ul className={styles.teamList}>
                            {project.team?.map((member, i) => (
                                <li key={i} className={member.includes('Pieter') ? styles.me : ''}>
                                    {member}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Galerij</h3>
                            <Gallery images={project.gallery} />
                        </div>
                    )}

                    {/* Actions */}
                    {(project.grade?.combined || project.grade?.group || project.grade?.personal) && (
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Cijfer</h3>
                            <div className={styles.gradeContainer}>
                                {project.grade?.combined && (
                                    <AnimatedGrade label="Cijfer" grade={project.grade.combined} />
                                )}
                                {project.grade?.group && (
                                    <AnimatedGrade label="Groep" grade={project.grade.group} />
                                )}
                                {project.grade?.personal && (
                                    <AnimatedGrade label="Persoonlijk" grade={project.grade.personal} />
                                )}
                            </div>
                        </div>
                    )}

                    <div className={styles.actions}>
                        {project.report && (
                            <a href={`/verslagen/${project.report}`} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                                Download Verslag (PDF)
                            </a>
                        )}
                        <Link href={`/portfolios/jaar-${project.year}`} className={styles.portfolioBtn}>
                            Ga naar Portfolio
                        </Link>
                    </div>
                </div>

            </div>

            {/* Bottom Navigation */}
            <div className={styles.bottomNav}>
                {prevProject ? (
                    <Link href={`/projecten/${year}/${prevProject.slug}`} className={styles.navLink}>
                        <span>← Vorige</span>
                        <span className={styles.navTitle}>{prevProject.title}</span>
                    </Link>
                ) : <div />}

                {nextProject ? (
                    <Link href={`/projecten/${year}/${nextProject.slug}`} className={`${styles.navLink} ${styles.next}`}>
                        <span>Volgende →</span>
                        <span className={styles.navTitle}>{nextProject.title}</span>
                    </Link>
                ) : <div />}
            </div>
        </main>
    );
}
