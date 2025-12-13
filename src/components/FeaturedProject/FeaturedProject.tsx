'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './FeaturedProject.module.css';

interface FeaturedProjectProps {
    project: {
        id: number;
        title: string;
        description: string;
        thumbnail: string;
        year: number;
        slug: string;
        tags: string[];
        featuredSummary?: string;
        conclusion?: string;
        recommendations?: string;
    };
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const summary = project.featuredSummary || project.description;

    return (
        <>
            <section className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Nieuwste Project</span>
                    <h2 className={styles.title}>Laatste Innovatie</h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className={styles.image}
                            />
                            <div className={styles.imageGlow} />
                        </div>
                    </div>

                    <div className={styles.textSection}>
                        <div className={styles.badge}>VWO {project.year}</div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDesc}>{summary}</p>

                        <div className={styles.tags}>
                            {project.tags.map((tag, i) => (
                                <span key={i} className={styles.tag}>{tag}</span>
                            ))}
                        </div>

                        {project.conclusion && project.recommendations ? (
                            <button
                                onClick={() => setModalOpen(true)}
                                className={styles.cta}
                            >
                                Zie meer →
                            </button>
                        ) : (
                            <Link
                                href={`/projecten/jaar-${project.year}/${project.slug}`}
                                className={styles.cta}
                            >
                                Bekijk Project →
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {modalOpen && (
                <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
                            ✕
                        </button>

                        <h2 className={styles.modalTitle}>{project.title}</h2>

                        <div className={styles.modalBody}>
                            {project.conclusion && (
                                <div className={styles.section}>
                                    <div
                                        className={styles.markdown}
                                        dangerouslySetInnerHTML={{ __html: project.conclusion.replace(/\n/g, '<br/>') }}
                                    />
                                </div>
                            )}

                            {project.recommendations && (
                                <div className={styles.section}>
                                    <div
                                        className={styles.markdown}
                                        dangerouslySetInnerHTML={{ __html: project.recommendations.replace(/\n/g, '<br/>') }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className={styles.modalFooter}>
                            <Link
                                href={`/projecten/jaar-${project.year}/${project.slug}`}
                                className={styles.viewProjectBtn}
                            >
                                Bekijk volledig project →
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
