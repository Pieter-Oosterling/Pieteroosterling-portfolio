'use client';

import { useState, useMemo } from 'react';
import galleryItems from './galleryData.json';
import styles from './page.module.css';

interface GalleryItem {
  filename: string;
  src: string;
  isVideo: boolean;
  ext: string;
}

export default function CkvGallery() {
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filteredItems = useMemo(() => {
    return (galleryItems as GalleryItem[]).filter(item => {
      if (filter === 'images') return !item.isVideo;
      if (filter === 'videos') return item.isVideo;
      return true;
    });
  }, [filter]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className={styles.fullGalleryContainer}>
      <div className={styles.fullGalleryHeader}>
        <div className={styles.filterButtonGroup}>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
            onClick={() => { setFilter('all'); setVisibleCount(12); }}
          >
            Alle Media ({galleryItems.length})
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === 'images' ? styles.filterBtnActive : ''}`}
            onClick={() => { setFilter('images'); setVisibleCount(12); }}
          >
            📸 Foto&apos;s ({galleryItems.filter(x => !x.isVideo).length})
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === 'videos' ? styles.filterBtnActive : ''}`}
            onClick={() => { setFilter('videos'); setVisibleCount(12); }}
          >
            🎬 Video&apos;s ({galleryItems.filter(x => x.isVideo).length})
          </button>
        </div>
      </div>

      {/* Grid van thumbnails */}
      <div className={styles.fullGalleryGrid}>
        {displayedItems.map((item, idx) => (
          <div
            key={item.filename}
            className={styles.fullGalleryThumbCard}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(idx); }}
            aria-label={`Open media ${item.filename}`}
          >
            {item.isVideo ? (
              <div className={styles.thumbVideoWrapper}>
                <video src={item.src} className={styles.thumbMedia} muted preload="metadata" />
                <div className={styles.playOverlayBadge}>▶ Video</div>
              </div>
            ) : (
              <div className={styles.thumbImageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.filename}
                  className={styles.thumbMedia}
                  loading="lazy"
                />
                <div className={styles.thumbHoverOverlay}>
                  <span>🔍 Vergroot</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Laad meer knop */}
      {visibleCount < filteredItems.length && (
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button
            type="button"
            className={styles.btnLoadMore}
            onClick={() => setVisibleCount(prev => Math.min(prev + 16, filteredItems.length))}
          >
            Toon meer foto&apos;s ({filteredItems.length - visibleCount} resterend) ↓
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {currentItem && (
        <div className={styles.lightboxBackdrop} onClick={closeLightbox}>
          <div className={styles.lightboxModal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.lightboxCloseBtn}
              onClick={closeLightbox}
              aria-label="Sluit galerij"
            >
              ✕
            </button>

            <button
              type="button"
              className={styles.lightboxNavLeft}
              onClick={prevLightbox}
              aria-label="Vorige foto"
            >
              ‹
            </button>

            <div className={styles.lightboxMediaWrapper}>
              {currentItem.isVideo ? (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  className={styles.lightboxVideo}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentItem.src}
                  alt={currentItem.filename}
                  className={styles.lightboxImg}
                />
              )}
            </div>

            <button
              type="button"
              className={styles.lightboxNavRight}
              onClick={nextLightbox}
              aria-label="Volgende foto"
            >
              ›
            </button>

            <div className={styles.lightboxFooter}>
              <span>{currentItem.filename}</span>
              <span>{lightboxIndex! + 1} / {filteredItems.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
