import Card from '@/components/Card/Card';
import styles from './page.module.css'; // Reusing similar styles structure, but from its own module

const years = [
    { id: 1, title: 'VWO 1', description: 'De basis van reflectie', gradient: 'rgba(6, 182, 212, 0.4)' },
    { id: 2, title: 'VWO 2', description: 'Samenwerking en rollen', gradient: 'rgba(139, 92, 246, 0.4)' },
    { id: 3, title: 'VWO 3', description: 'Zelfstandigheid', gradient: 'rgba(236, 72, 153, 0.4)' },
    { id: 4, title: 'VWO 4', description: 'Professionele houding', gradient: 'rgba(34, 197, 94, 0.4)' },
    { id: 5, title: 'VWO 5', description: 'Leiderschap', gradient: 'rgba(249, 115, 22, 0.4)' },
    { id: 6, title: 'VWO 6', description: 'Klaar voor de toekomst', gradient: 'rgba(59, 130, 246, 0.4)' },
];

export default function PortfoliosPage() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={`${styles.title} fade-in`}>Selecteer een <span className="text-gradient">Jaarlaag</span></h1>
                <p className={`${styles.subtitle} fade-in`}>
                    Mijn persoonlijke portfolio's, reflectieverslagen en competentie-ontwikkeling per schooljaar.
                </p>
            </div>

            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {years.map((year) => (
                    <Card
                        key={year.id}
                        title={year.title}
                        description={year.description}
                        href={`/portfolios/jaar-${year.id}`}
                        gradient={year.gradient}
                    />
                ))}
            </div>
            <section className={`${styles.extraSection} fade-in`} style={{ animationDelay: '0.4s' }}>
                <div className={styles.extraContent}>
                    <h2 className={styles.extraTitle}>Competentie Gerichte Ontwikkeling</h2>
                    <p className={styles.extraText}>
                        Naast de technische resultaten (in 'Projecten') draait O&O ook om persoonlijke groei.
                        In deze portfolio's reflecteer ik op mijn sterke en zwakke punten, mijn rol in teams, en mijn ambities.
                    </p>
                </div>
            </section>
        </main>
    );
}
