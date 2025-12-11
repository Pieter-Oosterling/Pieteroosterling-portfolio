'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './YearModal.module.css';

interface YearModalProps {
    isOpen: boolean;
    onClose: () => void;
    year: number;
    title: string;
    summary: string;
    stats?: { label: string; value: string }[];
}

export default function YearModal({ isOpen, onClose, year, title, summary, stats }: YearModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                <div className={styles.header}>
                    <span className={styles.badge}>VWO {year}</span>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <div className={styles.body}>
                    <p>{summary}</p>
                    {stats && (
                        <div className={styles.statsGrid}>
                            {stats.map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                    <span className={styles.statValue}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={styles.footer}>
                    <a href={`/projecten/jaar-${year}`} className={styles.ctaBtn}>
                        Bekijk Projecten
                    </a>
                </div>
            </div>
        </div>,
        document.body
    );
}
