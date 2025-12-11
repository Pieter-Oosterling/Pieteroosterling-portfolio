'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './ProjectGrid.module.css';
import SkeletonCard from '@/components/SkeletonCard/SkeletonCard';

interface ProjectGridProps {
    projects: Project[];
}

const FILTERS = ['Alles', 'Klas 1', 'Klas 2', 'Klas 3', 'Klas 4', 'Klas 5', 'Klas 6'];

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [activeFilter, setActiveFilter] = useState('Alles');
    const [loading, setLoading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false); // New state

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'Alles') return projects;
        return projects.filter((p) => p.tags.includes(activeFilter as any));
    }, [projects, activeFilter]);

    const handleFilterChange = (filter: string) => {
        if (filter === activeFilter) return;
        setLoading(true);
        setActiveFilter(filter);
        setTimeout(() => setLoading(false), 400);
    };

    if (!isExpanded) {
        return (
            <section className={styles.container}>
                <div className={styles.startWrapper}>
                    <h2 className={styles.title}>Projecten Overzicht</h2>
                    <p className={styles.subtitle}>Ontdek wat ik heb gemaakt.</p>
                    <button className={styles.revealBtn} onClick={() => setIsExpanded(true)}>
                        🔍 Bekijk Alle Projecten
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.container}>
            <div className={`${styles.header} fade-in`}>
                <h2 className={styles.title}>Alle Projecten</h2>
                <div className={styles.filterBar}>
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterChange(filter)}
                            disabled={loading}
                            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                {loading
                    ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
                    : filteredProjects.map((project) => (
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

                            {/* Persistent Glow Effect */}
                            <div className={styles.glow} style={{ '--glow-color': 'rgba(139, 92, 246, 0.4)' } as React.CSSProperties} />
                        </Link>
                    ))}
            </div>
        </section>
    );
}
