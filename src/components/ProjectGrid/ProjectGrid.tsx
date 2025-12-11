'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
    projects: Project[];
}

const FILTERS = ['Alles', 'Design', 'Onderzoek', 'Tech', 'Management'];

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [activeFilter, setActiveFilter] = useState('Alles');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'Alles') return projects;
        return projects.filter((p) => p.tags.includes(activeFilter as any));
    }, [projects, activeFilter]);

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Alle Projecten</h2>
                <div className={styles.filterBar}>
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                {filteredProjects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projecten/jaar-${project.year}/${project.slug}`}
                        className={styles.card}
                    >
                        <div className={styles.imageWrapper}>
                            {/* 
                  Using a colored placeholder if image fails or is generic.
                  In a real app, use next/image. 
                  For now, assuming standard img tag for simplicity with the 'thumbnail' path 
               */}
                            <div
                                className={styles.thumbnail}
                                style={{ backgroundImage: `url('${project.thumbnail}')` }}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.viewText}>Bekijk Project</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.tags}>
                                {project.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
