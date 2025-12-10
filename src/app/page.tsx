import Card from '@/components/Card/Card';
import Carousel from '@/components/Carousel/Carousel';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={`${styles.title} fade-in`}>
          Mijn <span className="text-gradient">Portfolio</span>
        </h1>

        <div className={`${styles.carousel} fade-in`} style={{ animationDelay: '0.1s' }}>
          <Carousel />
        </div>

        <div className={`${styles.intro} fade-in`} style={{ animationDelay: '0.2s' }}>
          <p>
            Welkom op mijn O&O portfolio. Hier vind je mijn projecten en persoonlijke ontwikkeling.
          </p>
        </div>
      </div>

      <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.4s' }}>
        <Card
          title="Projecten"
          description="Bekijk mijn O&O projecten van vwo 1 t/m 6."
          href="/projecten"
          gradient="rgba(6, 182, 212, 0.3)"
        />
        <Card
          title="Portfolio's"
          description="Mijn persoonlijke ontwikkelingsportfolio per jaarlaag."
          href="/portfolios"
          gradient="rgba(139, 92, 246, 0.3)"
        />
        <Card
          title="Over Mij"
          description="Wie ben ik en wat drijft mij?"
          href="/over-mij"
          gradient="rgba(236, 72, 153, 0.3)"
        />
        <Card
          title="Competenties"
          description="Overzicht van mijn vaardigheden en groei."
          href="/competenties"
          gradient="rgba(34, 197, 94, 0.3)"
        />
      </div>
    </main>
  );
}
