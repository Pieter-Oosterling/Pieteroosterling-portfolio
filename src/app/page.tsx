import Card from '@/components/Card/Card';
import Carousel from '@/components/Carousel/Carousel';
import RecentProject from '@/components/RecentProject/RecentProject';
import { projectsData } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  // Calculate Averages (Years 2-6)
  const validProjects = projectsData.filter(p => p.year >= 2 && p.grade?.personal && p.grade?.group);

  const totalPersonal = validProjects.reduce((sum, p) => sum + parseFloat(p.grade!.personal!.replace(',', '.')), 0);
  const totalGroup = validProjects.reduce((sum, p) => sum + parseFloat(p.grade!.group!.replace(',', '.')), 0);

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

        {/* Stats Section */}
        <div className={`${styles.statsContainer} fade-in`} style={{ animationDelay: '0.15s' }}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Gemiddeld Persoonlijk</span>
            <span className={styles.statValue}>{avgPersonal}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Gemiddeld Groepscijfer</span>
            <span className={styles.statValue}>{avgGroup}</span>
          </div>
        </div>

        <div className={`${styles.intro} fade-in`} style={{ animationDelay: '0.2s' }}>
          <p>
            Welkom op mijn O&O portfolio. Hieronder vind je mijn persoonlijke ontwikkeling en projecten.
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

      <div className={`${styles.carouselSection} fade-in`} style={{ animationDelay: '0.4s' }}>
        <h2 className={styles.sectionTitle}>Project Galerij</h2>
        <Carousel />
      </div>
    </main>
  );
}
