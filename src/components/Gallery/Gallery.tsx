'use client';

import { useState } from 'react';
import Lightbox from '@/components/Lightbox/Lightbox';
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

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Show first 4 images as preview
    const previewImages = images.slice(0, 4);
    const hasMore = images.length > 4;

    return (
        <>
            <div className={styles.galleryContainer}>
                <div className={styles.carousel}>
                    {previewImages.map((image, index) => (
                        <div
                            key={index}
                            className={styles.carouselItem}
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.caption}
                                className={styles.carouselImage}
                            />
                            <div className={styles.carouselOverlay}>
                                <span className={styles.zoomIcon}>🔍</span>
                            </div>
                        </div>
                    ))}
                    {hasMore && (
                        <div
                            className={styles.moreIndicator}
                            onClick={() => openLightbox(0)}
                        >
                            <span className={styles.moreText}>+{images.length - 4}</span>
                            <span className={styles.moreSubtext}>meer foto's</span>
                        </div>
                    )}
                </div>
                <p className={styles.instruction}>
                    Klik op de afbeelding om de gehele gallerij te zien en de beschrijving
                </p>
            </div>

            {lightboxOpen && (
                <div className={styles.lightboxContainer}>
                    <div className={styles.lightboxBackdrop} onClick={() => setLightboxOpen(false)} />
                    <div className={styles.lightboxContent}>
                        <button className={styles.closeBtn} onClick={() => setLightboxOpen(false)}>
                            ✕
                        </button>

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
                        </div>

                        <button className={styles.navBtn} style={{ right: '2rem' }} onClick={nextImage}>
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
