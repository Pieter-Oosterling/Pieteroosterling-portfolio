'use client';

import { useState } from 'react';
import styles from './DocumentViewer.module.css';
import MissingReport from './MissingReport';
import STLViewer from '@/components/3D/STLViewer';

interface Document {
    title: string;
    type?: 'report' | 'presentation' | 'poster' | 'model' | 'other' | 'portfolio' | 'missing_report';
    path?: string;
}

interface DocumentViewerProps {
    documents: Document[];
}

export default function DocumentViewer({ documents }: DocumentViewerProps) {
    const [activeDocIndex, setActiveDocIndex] = useState(0);

    if (!documents || documents.length === 0) {
        return <div className={styles.empty}>Geen documenten beschikbaar.</div>;
    }

    const activeDoc = documents[activeDocIndex];

    const renderContent = () => {
        if (activeDoc.type === 'missing_report') {
            return <MissingReport />;
        }

        if (activeDoc.type === 'model') {
            return (
                <div className={styles.modelContainer}>
                    <STLViewer url={activeDoc.path || ''} />
                    <div className={styles.modelFooter} style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <a href={activeDoc.path} download className={styles.downloadBtnLarge}>
                            Download 3D Model (.stl)
                        </a>
                    </div>
                </div>
            );
        }

        if (activeDoc.path) {
            // Check if it's an image (poster) or PDF
            const isImage = activeDoc.path.toLowerCase().endsWith('.png') || activeDoc.path.toLowerCase().endsWith('.jpg');

            if (isImage) {
                return (
                    <div className={styles.imageContainer}>
                        {/* Using standard img for simplicity with external/static files or next/image if configured */}
                        <img src={activeDoc.path} alt={activeDoc.title} className={styles.posterImage} />
                    </div>
                );
            }

            return (
                <iframe
                    src={activeDoc.path}
                    className={styles.iframe}
                    title={activeDoc.title}
                />
            );
        }

        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabsScrollContainer}>
                <div className={styles.tabs}>
                    {documents.map((doc, index) => (
                        <button
                            key={index}
                            className={`${styles.tab} ${index === activeDocIndex ? styles.activeTab : ''}`}
                            onClick={() => {
                                // Als het een model is en de link niet eindigt op .stl (maar bijv naar /sos/3d/iteratie/1 gaat), redirect dan:
                                if (doc.type === 'model' && doc.path && !doc.path.toLowerCase().endsWith('.stl')) {
                                    window.location.href = doc.path;
                                } else {
                                    setActiveDocIndex(index);
                                }
                            }}
                        >
                            {doc.title}
                            {index === activeDocIndex && <div className={`${styles.glow} fade-in`} />}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.viewerWrapper}>
                <div className={styles.viewerHeader}>
                    <span className={styles.filename}>
                        {activeDoc.path ? activeDoc.path.split('/').pop() : ''}
                    </span>
                    {activeDoc.path && (
                        <a href={activeDoc.path} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                            Open in nieuw tabblad
                        </a>
                    )}
                </div>
                <div className={styles.iframeContainer}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
