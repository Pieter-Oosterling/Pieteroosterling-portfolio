'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/Card/Card'; // Keep for type safety if needed, or remove if unused. It's unused but harmless for now.
import Carousel from '@/components/Carousel/Carousel';
import RecentProject from '@/components/RecentProject/RecentProject';
import Toolkit from '@/components/Toolkit/Toolkit';
import Timeline from '@/components/Timeline/Timeline';
import HomeNavigation from '@/components/HomeNavigation/HomeNavigation';
import { projectsData } from '@/data/projects';
import styles from './page.module.css';

// Animated Number Component
const AnimatedNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const finalValue = parseFloat(value.replace(',', '.'));

  useEffect(() => {
    if (isNaN(finalValue)) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = finalValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        setDisplayValue(finalValue);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [finalValue]);

  return (
    <span>{displayValue.toFixed(1).replace('.', ',')}</span>
  );
};

export default function Home() {
  // Parsing helper that returns NaN for invalid inputs
  const parseGrade = (g?: string) => {
    if (!g || g === '?') return NaN;
    return parseFloat(g.replace(/\s/g, '').replace(',', '.'));
  };

  // Calculate Averages (Years 2-6) - Filter out projects with invalid/missing grades
  const validProjects = projectsData.filter(p => {
    if (p.year < 2) return false;
    const personal = parseGrade(p.grade?.personal);
    const group = parseGrade(p.grade?.group);
    return !isNaN(personal) && !isNaN(group);
  });

  const totalPersonal = validProjects.reduce((sum, p) => sum + parseGrade(p.grade?.personal), 0);
  const totalGroup = validProjects.reduce((sum, p) => sum + parseGrade(p.grade?.group), 0);

  const average = validProjects.length > 0 ? (totalPersonal / validProjects.length).toFixed(1).replace('.', ',') : '-';
  const groupAverage = validProjects.length > 0 ? (totalGroup / validProjects.length).toFixed(1).replace('.', ',') : '-';

  return (
    <main className={styles.main}>
      <section className={`${styles.hero} fade-in`}>
        <h1 className={styles.title}>
          Mijn <span className={styles.gradientPortfolio}>Portfolio</span>
        </h1>
        <RecentProject />

        <div className={styles.intro}>
          <p className={styles.slogan}>
            Innovatie door <span className="highlight">Onderzoek</span> & <span className="highlight">Design</span>
          </p>
        </div>
      </section>

      {/* Navigation Grid (Replaces old Cards) */}
      <div className="fade-in" style={{ animationDelay: '0.1s' }}>
        <HomeNavigation />
      </div>

      {/* Grade Stats */}
      <div className={`${styles.statsContainer} fade-in`} style={{ animationDelay: '0.4s' }}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Gemiddeld Cijfer</span>
          <span className={styles.statValue}>
            <AnimatedNumber value={average} />
          </span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Groepsgemiddelde</span>
          <span className={styles.statValue}>
            <AnimatedNumber value={groupAverage} />
          </span>
        </div>
      </div>

      {/* Featured Report Section (Top Priority) */}
      <div className={`${styles.reportSection} fade-in`} style={{ animationDelay: '0.45s' }}>
        <h2 className={styles.sectionTitle}>Nieuwste Verslag</h2>
        <div className={styles.reportCard}>
          <div className={styles.reportContent}>
            <h3 className={styles.reportTitle}>Aardwarmte in Rijswijk</h3>
            <p className={styles.reportDesc}>
              Een uitgebreid onderzoek naar geothermie in vier Rijkswijkse wijken.
              Inclusief technisch advies en kostenplaatje.
            </p>
            <a
              href="/Verslagen/Verslag - Aardwarmte in Rijswijk-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reportButton}
            >
              Lees Volledig Verslag (PDF) →
            </a>
          </div>
          <div className={styles.reportIcon}>
            📄
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <div className={`${styles.carouselSection} fade-in`} style={{ animationDelay: '0.5s' }}>
        <h2 className={styles.sectionTitle}>Project Galerij</h2>
        <Carousel />
      </div>

      {/* Premium Timeline */}
      <div className="fade-in" style={{ animationDelay: '0.6s' }}>
        <Timeline />
      </div>

      {/* Toolkit Section */}
      <div className="fade-in" style={{ animationDelay: '0.7s' }}>
        <Toolkit />
      </div>
    </main>
  );
}
