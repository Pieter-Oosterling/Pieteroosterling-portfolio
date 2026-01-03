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

    // Calculate period (Assuming 3 projects per year, standard sequence)
    // ID 1,2,3 -> Per 1,2,3. ID 4,5,6 -> Per 1,2,3.
    // If ID is sequential. Verify IDs? Yes 1..10.
    // Period = ((id - 1) % 3) + 1.
    const period = ((project.id - 1) % 3) + 1;

    // Helper to get icon/label
    const getDocLabel = (doc: { title: string, type: string }) => {
        if (doc.type === 'missing_report') return null; // Don't show button for missing
        let icon = 'verslag';
        if (doc.type === 'presentation') icon = 'presentatie';
        if (doc.type === 'poster') icon = 'poster';
        if (doc.type === 'model') icon = 'model';
        return `${icon} ${doc.title}`;
    };

    return (
        <>
            <div className={styles.actions}>
                {/* Legacy Report Support (if no documents array) - e.g. VWO 4 */}
                {(!project.documents || project.documents.length === 0) && project.report && (
                    <a href={`/verslagen/${project.report}`} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                        Download Verslag (PDF)
                    </a>
                )}

                {/* New Documents Support */}
                {project.documents && project.documents.map((doc, idx) => {
                    // Filter out types we don't want as buttons (e.g. 'portfolio' is redundant with the main button)
                    if (doc.type === 'portfolio' || doc.type === 'other') return null;

                    // Special Case: Missing Report
                    // User wants a button, but it should go to Custom Page (Detail Page)
                    if (doc.type === 'missing_report') {
                        return (
                            <Link
                                key={idx}
                                href={`/portfolios/jaar-${project.year}/${period}`}
                                className={`${styles.downloadBtn} ${styles.missingBtn}`} // Add semantic class if needed
                                title="Geen verslag beschikbaar (Klik voor info)"
                            >
                                📄 Verslag
                            </Link>
                        );
                    }

                    // Standard Downloads
                    if (!doc.path) return null;

                    // Special Case: 3D Model
                    // User wants to VIEW it, not download it directly. Link to Detail Page.
                    if (doc.type === 'model') {
                        return (
                            <Link
                                key={idx}
                                href={`/portfolios/jaar-${project.year}/${period}`} // Link to detail page/viewer
                                className={styles.downloadBtn}
                                title={`${doc.title} (Bekijk in 3D Viewer)`}
                            >
                                {getDocLabel(doc as any)}
                            </Link>
                        );
                    }

                    return (
                        <a
                            key={idx}
                            href={doc.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadBtn}
                            title={doc.title}
                        >
                            {getDocLabel(doc as any)}
                        </a>
                    );
                })}

                {project.aiSummaryVideo && (
                    <button
                        onClick={handleAiClick}
                        className={`${styles.downloadBtn} ${styles.aiButton}`}
                    >
                        🤖 Verslag door AI samenvatten in video (Onder 7 min.)
                    </button>
                )}

                <Link href={`/portfolios/jaar-${project.year}/${period}`} className={styles.portfolioBtn}>
                    Ga naar Portfolio Details
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
