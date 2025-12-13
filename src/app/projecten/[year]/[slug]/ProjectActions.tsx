'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Project } from '@/data/projects';

interface ProjectActionsProps {
    project: Project;
}

export default function ProjectActions({ project }: ProjectActionsProps) {
    const [showAiModal, setShowAiModal] = useState(false);

    const handleAiClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowAiModal(true);
    };

    const handleConfirm = () => {
        if (project.aiSummaryVideo) {
            window.open(project.aiSummaryVideo, '_blank');
        }
        setShowAiModal(false);
    };

    return (
        <>
            <div className={styles.actions}>
                {project.report && (
                    <a href={`/verslagen/${project.report}`} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                        Download Verslag (PDF)
                    </a>
                )}
                {project.aiSummaryVideo && (
                    <button
                        onClick={handleAiClick}
                        className={`${styles.downloadBtn} ${styles.aiButton}`}
                    >
                        🤖 Verslag door AI samenvatten in video (Onder 7 min.)
                    </button>
                )}
                <Link href={`/portfolios/jaar-${project.year}`} className={styles.portfolioBtn}>
                    Ga naar Portfolio
                </Link>
            </div>

            {/* AI Warning Modal */}
            {showAiModal && (
                <div className={styles.modalOverlay} onClick={() => setShowAiModal(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <h3 className={styles.modalTitle}>⚠️ Let op: AI Gegenereerd</h3>
                        <p className={styles.modalText}>
                            Deze video samenvatting is gemaakt door AI. De inhoud is gecheckt op feiten, maar niet handmatig aangepast.
                        </p>
                        <p className={styles.modalSubtext}>
                            Voor de volledige en exacte informatie verwijzen we je naar het originele verslag.
                        </p>
                        <div className={styles.modalButtons}>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setShowAiModal(false)}
                            >
                                Annuleren
                            </button>
                            {project.report && (
                                <a
                                    href={`/verslagen/${project.report}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.secondaryBtn}
                                    onClick={() => setShowAiModal(false)}
                                >
                                    Verslag Openen
                                </a>
                            )}
                            <button
                                className={styles.confirmBtn}
                                onClick={handleConfirm}
                            >
                                Video Openen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
