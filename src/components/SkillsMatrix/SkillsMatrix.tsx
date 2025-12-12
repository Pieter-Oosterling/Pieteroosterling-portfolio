'use client';

import { useState } from 'react';
import Link from 'next/link';
import { extractSkillsFromProjects } from '@/data/skills';
import { projectsData } from '@/data/projects';
import styles from './SkillsMatrix.module.css';

export default function SkillsMatrix() {
    const skills = extractSkillsFromProjects();
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    // Get unique projects for matrix
    const allProjects = projectsData.slice().reverse(); // Newest first

    // Category colors
    const categoryColors: Record<string, string> = {
        'Design': '#ec4899',        // Pink
        'Onderzoek': '#3b82f6',     // Blue
        'Tech': '#8b5cf6',          // Purple
        'Management': '#10b981'     // Green
    };

    const filteredProjects = selectedSkill
        ? allProjects.filter(p => {
            const skill = skills.find(s => s.name === selectedSkill);
            return skill?.projects.some(sp => sp.id === p.id);
        })
        : allProjects;

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h2 className={styles.title}>Skills Matrix</h2>
                <p className={styles.subtitle}>
                    Overzicht van skills per project • Klik op een skill om te filteren
                </p>
            </div>

            {/* Skills Overview */}
            <div className={styles.skillsGrid}>
                {skills.map((skill) => (
                    <button
                        key={skill.name}
                        className={`${styles.skillCard} ${selectedSkill === skill.name ? styles.active : ''}`}
                        onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                        style={{
                            '--skill-color': categoryColors[skill.category]
                        } as React.CSSProperties}
                    >
                        <div className={styles.skillName}>{skill.name}</div>
                        <div className={styles.skillCount}>{skill.count} project{skill.count !== 1 ? 'en' : ''}</div>
                        <div className={styles.skillGlow} />
                    </button>
                ))}
            </div>

            {/* Filter Info */}
            {selectedSkill && (
                <div className={styles.filterInfo}>
                    <span>Gefiltered op: <strong>{selectedSkill}</strong></span>
                    <button onClick={() => setSelectedSkill(null)} className={styles.clearBtn}>
                        ✕ Wis filter
                    </button>
                </div>
            )}

            {/* Matrix */}
            <div className={styles.matrix}>
                <div className={styles.matrixHeader}>
                    <div className={styles.projectCol}>Project</div>
                    {skills.slice(0, 4).map((skill) => (
                        <div key={skill.name} className={styles.skillCol}>
                            {skill.name}
                        </div>
                    ))}
                </div>

                {filteredProjects.map((project) => {
                    const projectSkills = skills
                        .filter(s => s.projects.some(p => p.id === project.id))
                        .map(s => s.name);

                    return (
                        <Link
                            key={project.id}
                            href={`/projecten/jaar-${project.year}/${project.slug}`}
                            className={styles.matrixRow}
                        >
                            <div className={styles.projectInfo}>
                                <div className={styles.projectTitle}>{project.title}</div>
                                <div className={styles.projectMeta}>Klas {project.year}</div>
                            </div>
                            {skills.slice(0, 4).map((skill) => (
                                <div key={skill.name} className={styles.cell}>
                                    {projectSkills.includes(skill.name) && (
                                        <div
                                            className={styles.checkmark}
                                            style={{
                                                background: categoryColors[skill.category]
                                            }}
                                        >
                                            ✓
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
