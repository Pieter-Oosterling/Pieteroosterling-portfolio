'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    };
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
    const summary = project.featuredSummary || project.description;

    return (
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

                    <Link
                        href={`/projecten/jaar-${project.year}/${project.slug}`}
                        className={styles.cta}
                    >
                        Bekijk Project →
                    </Link>
                </div>
            </div>
        </section>
    );
}
