"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const projects = [
    { id: 1, title: 'Brugklas Project', image: '/images/Image - Brugklas Project.png' },
    { id: 2, title: 'Technasium', image: '/images/Image - Technasium.png' },
    { id: 3, title: 'Eindopdracht', image: '/images/Image - Eindopdracht.png' },
    // Add more as needed or make dynamic
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                        style={{
                            opacity: index === currentIndex ? 1 : 0,
                            pointerEvents: index === currentIndex ? 'all' : 'none'
                        }}
                    >
                        {/* Fallback to gradient if image fails (common in dev before images exist) */}
                        <div className={styles.imagePlaceholder}>
                            {/* Use Next.js Image if real images exist, but for now robust fallback */}
                            {/* <Image src={project.image} alt={project.title} fill style={{objectFit: 'cover'}} /> */}
                            <div className={styles.placeholderLabel}>{project.title}</div>
                        </div>

                        <div className={styles.caption}>
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={prevSlide} className={`${styles.navBtn} ${styles.prev}`}>❮</button>
            <button onClick={nextSlide} className={`${styles.navBtn} ${styles.next}`}>❯</button>

            <div className={styles.dots}>
                {projects.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </div>
    );
}
