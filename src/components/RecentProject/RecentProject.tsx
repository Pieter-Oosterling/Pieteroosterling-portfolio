"use client";
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import styles from './RecentProject.module.css';

export default function RecentProject() {
    // Get the project with the highest ID
    const recentProject = [...projectsData].sort((a, b) => b.id - a.id)[0];

    if (!recentProject) return null;

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <span className={styles.label}>Nieuwste Project</span>
                <h2 className={styles.title}>{recentProject.title}</h2>
                <p className={styles.description}>{recentProject.description}</p>

                <Link
                    href={`/projecten/jaar-${recentProject.year}/${recentProject.slug}`}
                    className={styles.button}
                >
                    Bekijk Project →
                </Link>
            </div>

            <div className={styles.imageContainer}>
                <div className={styles.placeholderLabel}>{recentProject.title}</div>
                {/* <img src={recentProject.thumbnail} alt={recentProject.title} className={styles.image} /> */}
                <div className={styles.glow} />
            </div>
        </section>
    );
}
