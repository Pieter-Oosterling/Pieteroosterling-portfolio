'use client';

import { useState } from 'react';
import styles from './DocumentViewer.module.css';

interface Document {
    title: string;
    path: string;
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

    return (
        <div className={styles.container}>
            <div className={styles.tabsScrollContainer}>
                <div className={styles.tabs}>
                    {documents.map((doc, index) => (
                        <button
                            key={index}
                            className={`${styles.tab} ${index === activeDocIndex ? styles.activeTab : ''}`}
                            onClick={() => setActiveDocIndex(index)}
                        >
                            {doc.title}
                            {index === activeDocIndex && <div className={`${styles.glow} fade-in`} />}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.viewerWrapper}>
                <div className={styles.viewerHeader}>
                    <span className={styles.filename}>{activeDoc.path.split('/').pop()}</span>
                    <a href={activeDoc.path} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                        Open in nieuw tabblad
                    </a>
                </div>
                <div className={styles.iframeContainer}>
                    <iframe
                        src={activeDoc.path}
                        className={styles.iframe}
                        title={activeDoc.title}
                    />
                </div>
            </div>
        </div>
    );
}
