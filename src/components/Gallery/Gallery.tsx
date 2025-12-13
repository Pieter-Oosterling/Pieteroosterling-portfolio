'use client';

import { useState } from 'react';
import styles from './Gallery.module.css';

interface GalleryImage {
    src: string;
    caption: string;
}

interface GalleryProps {
    images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAllImages, setShowAllImages] = useState(false);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        setShowAllImages(false);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setShowAllImages(false);
    };

    return (
        <>
            {/* Single Featured Image */}
            <div className={styles.featuredContainer}>
                <div className={styles.featuredImage} onClick={() => openLightbox(0)}>
                    <img src={images[0].src} alt={images[0].caption} />
                    <div className={styles.overlay}>
                        <span className={styles.zoomIcon}>🔍</span>
                    </div>
                </div>
                <p className={styles.instruction}>
                    Klik voor meer foto's ({images.length} totaal)
                </p>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className={styles.lightboxContainer}>
                    <div className={styles.lightboxBackdrop} onClick={closeLightbox} />
                    <div className={styles.lightboxContent}>
                        <button className={styles.closeBtn} onClick={closeLightbox}>
                            ✕
                        </button>

                        {!showAllImages ? (
                            <>
                                <button className={styles.navBtn} style={{ left: '2rem' }} onClick={prevImage}>
                                    ←
                                </button>

                                <div className={styles.imageWrapper}>
                                    <img
                                        src={images[currentIndex].src}
                                        alt={images[currentIndex].caption}
                                        className={styles.lightboxImage}
                                    />
                                    <p className={styles.lightboxCaption}>
                                        {images[currentIndex].caption}
                                        <span className={styles.counter}> ({currentIndex + 1}/{images.length})</span>
                                    </p>
                                    <button
                                        className={styles.viewAllBtn}
                                        onClick={() => setShowAllImages(true)}
                                    >
                                        Zie alle afbeeldingen →
                                    </button>
                                </div>

                                <button className={styles.navBtn} style={{ right: '2rem' }} onClick={nextImage}>
                                    →
                                </button>
                            </>
                        ) : (
                            <div className={styles.gridView}>
                                <h3 className={styles.gridTitle}>Alle Afbeeldingen ({images.length})</h3>
                                <div className={styles.imageGrid}>
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={styles.gridItem}
                                            onClick={() => {
                                                setCurrentIndex(index);
                                                setShowAllImages(false);
                                            }}
                                        >
                                            <img src={image.src} alt={image.caption} />
                                            <p className={styles.gridCaption}>{image.caption}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
