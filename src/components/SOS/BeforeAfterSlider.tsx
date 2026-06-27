'use client';
import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import styles from './BeforeAfterSlider.module.css';
import Image from 'next/image';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({ 
    beforeImage, 
    afterImage, 
    beforeLabel = 'Iteratie 1 (Zwaar & Log)', 
    afterLabel = 'Iteratie 4 (Geoptimaliseerd)'
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current || !isDragging) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const stopDragging = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mouseup', stopDragging);
            window.addEventListener('touchend', stopDragging);
        } else {
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchend', stopDragging);
        }
        return () => {
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchend', stopDragging);
        };
    }, [isDragging]);

    return (
        <div className={styles.wrapper}>
            <div 
                ref={containerRef}
                className={styles.container}
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
                onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
                onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            >
                {/* Background Image (After) */}
                <div className={styles.imageContainer}>
                    <img src={afterImage} alt={afterLabel} className={styles.image} draggable={false} />
                    <span className={styles.labelRight}>{afterLabel}</span>
                </div>

                {/* Foreground Image (Before) clipped by slider */}
                <div 
                    className={styles.foregroundContainer} 
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                    <img src={beforeImage} alt={beforeLabel} className={styles.image} draggable={false} />
                    <span className={styles.labelLeft}>{beforeLabel}</span>
                </div>

                {/* Slider Line & Handle */}
                <div className={styles.sliderLine} style={{ left: `${sliderPosition}%` }}>
                    <div className={styles.sliderHandle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
