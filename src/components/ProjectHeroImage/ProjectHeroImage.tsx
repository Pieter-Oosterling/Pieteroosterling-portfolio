'use client';

import { useState } from 'react';
import Lightbox from '@/components/Lightbox/Lightbox';
import styles from './ProjectHeroImage.module.css';

interface ProjectHeroImageProps {
    src: string;
    alt: string;
}

export default function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={styles.imageContainer}
                onClick={() => setIsOpen(true)}
                title="Klik om te vergroten"
            >
                <img src={src} alt={alt} className={styles.image} />
                <div className={styles.overlay}>
                    🔍 Vergroot
                </div>
            </div>

            {isOpen && (
                <Lightbox
                    src={src}
                    alt={alt}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
