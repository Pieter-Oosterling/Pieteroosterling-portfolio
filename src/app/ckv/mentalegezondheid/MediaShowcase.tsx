'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface ImageSlotProps {
  src: string;
  alt: string;
  title: string;
  tip: string;
  height?: string;
  icon?: string;
}

export function ImageSlot({ src, alt, title, tip, height, icon = '📸' }: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={styles.photoPlaceholderSlot} style={height ? { minHeight: height } : undefined}>
        <div className={styles.photoPlaceholderIcon}>{icon}</div>
        <strong className={styles.photoPlaceholderTitle}>{title}</strong>
        <p className={styles.photoPlaceholderFilename}>Bestand: <code>{src}</code></p>
        <span className={styles.photoPlaceholderTip}>{tip}</span>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: height || '100%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={styles.heroArtworkImg}
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export function ProcessGallery() {
  const steps = [
    {
      id: 'proces-1',
      src: '/ckv/mentalegezondheid/proces-1.jpg',
      step: 'Fase 1',
      title: 'Brainstorm & Schetsontwerp',
      desc: 'Inspiratie opdoen bij Gillian Wearing en conceptschetsen van de schedel met de twee helften.',
      tip: 'Foto van je eerste schetsen of moodboard'
    },
    {
      id: 'proces-2',
      src: '/ckv/mentalegezondheid/proces-2.jpg',
      step: 'Fase 2',
      title: '3D-Print & Vormgeving',
      desc: 'Het modelleren en 3D-printen van de hoofdsculptuur en het uitzagen/creëren van de opengewerkte hersenkamer.',
      tip: 'Foto van het printen of assembleren van het hoofd'
    },
    {
      id: 'proces-3',
      src: '/ckv/mentalegezondheid/proces-3.jpg',
      step: 'Fase 3',
      title: 'Techniek, IJzerdraad & NFC',
      desc: 'Inbouwen van de tikkende wekker, tandwielen, ijzerdraad, smartphone en de NFC-chip voor de website-koppeling.',
      tip: 'Foto van het inbouwen van raderen en draden'
    },
    {
      id: 'proces-4',
      src: '/ckv/mentalegezondheid/proces-4.jpg',
      step: 'Fase 4',
      title: 'Details & Eindpresentatie',
      desc: 'Aanbrengen van de scheuren, de mondsticker "Blijf glimlachen!" en het opgevouwen briefje "Met mij gaat het GOED".',
      tip: 'Foto van het voltooide werk op sokkel / tentoonstelling'
    }
  ];

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  return (
    <div className={styles.galleryGrid}>
      {steps.map(step => (
        <div key={step.id} className={styles.galleryCard}>
          <div className={styles.galleryImgSlot}>
            {!errors[step.id] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={step.src}
                alt={step.title}
                className={styles.galleryImg}
                onError={() => setErrors(prev => ({ ...prev, [step.id]: true }))}
              />
            ) : (
              <div className={styles.photoPlaceholderSlot} style={{ minHeight: '100%', borderRadius: 0 }}>
                <span style={{ fontSize: '1.5rem' }}>📷</span>
                <strong style={{ fontSize: '0.85rem' }}>{step.title}</strong>
                <p className={styles.photoPlaceholderFilename}><code>{step.src}</code></p>
              </div>
            )}
          </div>
          <div className={styles.galleryContent}>
            <span className={styles.galleryStepBadge}>{step.step}</span>
            <h4 className={styles.galleryCardTitle}>{step.title}</h4>
            <p className={styles.galleryCardDesc}>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function VideoPlayerSlot() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className={styles.videoCard}>
      <span className={styles.tag}>Video &amp; Impressie</span>
      <h3 style={{ fontSize: '1.4rem', marginTop: '0.25rem', marginBottom: '0.5rem' }}>Het Kunstwerk in Beeld</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
        Bekijk de rondgang om het 3D-hoofd en zie hoe de fysieke sculptuur reageert met de NFC-chip.
      </p>

      {!videoError ? (
        <div className={styles.videoPlayerContainer}>
          <video
            controls
            className={styles.videoPlayer}
            poster="/ckv/mentalegezondheid/kunstwerk-totaal.jpg"
            onError={() => setVideoError(true)}
          >
            <source src="/ckv/mentalegezondheid/kunstwerk-video.mp4" type="video/mp4" />
            Je browser ondersteunt geen video-tag.
          </video>
        </div>
      ) : (
        <div className={styles.photoPlaceholderSlot} style={{ minHeight: '260px', marginTop: '1.25rem' }}>
          <div className={styles.photoPlaceholderIcon}>🎬</div>
          <strong className={styles.photoPlaceholderTitle}>Video van het Kunstwerk</strong>
          <p className={styles.photoPlaceholderFilename}>Plaats: <code>/ckv/mentalegezondheid/kunstwerk-video.mp4</code></p>
          <span className={styles.photoPlaceholderTip}>Rondgang om het werk, detailvideo of demonstratie van de NFC-scan</span>
        </div>
      )}
    </div>
  );
}
