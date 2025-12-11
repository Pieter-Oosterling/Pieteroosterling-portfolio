'use client';

import { useEffect } from 'react';
import styles from './Lightbox.module.css';

interface LightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
            <div className={styles.imageWrapper}>
                <img
                    src={src}
                    alt={alt}
                    className={styles.image}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                />
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
}
