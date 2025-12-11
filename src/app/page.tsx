'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/Card/Card';
import Carousel from '@/components/Carousel/Carousel';
import RecentProject from '@/components/RecentProject/RecentProject';
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

  const avgPersonal = validProjects.length > 0 ? (totalPersonal / validProjects.length).toFixed(1).replace('.', ',') : '-';
  const avgGroup = validProjects.length > 0 ? (totalGroup / validProjects.length).toFixed(1).replace('.', ',') : '-';

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={`${styles.title} fade-in`}>
          Mijn <span className="text-gradient">Portfolio</span>
        </h1>

        <div className="fade-in" style={{ animationDelay: '0.1s', width: '100%' }}>
          <RecentProject />
        </div>

        <div className={`${styles.intro} fade-in`} style={{ animationDelay: '0.2s' }}>
          <p className={styles.slogan}>
            Innovatie door <span className="text-gradient">Onderzoek</span> & <span className="text-gradient">Design</span>
          </p>
        </div>
      </div>

      <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.3s' }}>
        <Card
          title="Projecten"
          description="Bekijk mijn O&O projecten van vwo 1 t/m 6."
          href="/projecten"
          gradient="rgba(6, 182, 212, 0.4)"
        />
        <Card
          title="Portfolio's"
          description="Mijn persoonlijke ontwikkelingsportfolio per jaarlaag."
          href="/portfolios"
          gradient="rgba(139, 92, 246, 0.4)"
        />
        <Card
          title="Over Mij"
          description="Wie ben ik en wat drijft mij?"
          href="/over-mij"
          gradient="rgba(236, 72, 153, 0.4)"
        />
        <Card
          title="Competenties"
          description="Overzicht van mijn vaardigheden en groei."
          href="/competenties"
          gradient="rgba(34, 197, 94, 0.4)"
        />
      </div>

      {/* Stats Section - Now below text */}
      <div className={`${styles.statsContainer} fade-in`} style={{ animationDelay: '0.4s' }}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Gemiddeld Persoonlijk</span>
          <span className={styles.statValue}>
            <AnimatedNumber value={avgPersonal} />
          </span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Gemiddeld Groepscijfer</span>
          <span className={styles.statValue}>
            <AnimatedNumber value={avgGroup} />
          </span>
        </div>
      </div>

      <div className={`${styles.carouselSection} fade-in`} style={{ animationDelay: '0.5s' }}>
        <h2 className={styles.sectionTitle}>Project Galerij</h2>
        <Carousel />
      </div>

      {/* Featured Report Section */}
      <div className={`${styles.reportSection} fade-in`} style={{ animationDelay: '0.6s' }}>
        <h2 className={styles.sectionTitle}>Nieuwste Verslag</h2>
        <div className={styles.reportCard}>
          <div className={styles.reportContent}>
            <h3 className={styles.reportTitle}>Aardwarmte in Rijswijk</h3>
            <p className={styles.reportDesc}>
              Een uitgebreide rendabiliteitsanalyse naar geothermie in vier Rijkswijkse wijken.
              Inclusief technisch advies en kosten-batenanalyse.
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
    </main>
  );
}
