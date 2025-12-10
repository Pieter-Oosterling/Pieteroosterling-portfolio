import Card from '@/components/Card/Card';
import styles from './page.module.css';

const years = [
    { id: 1, title: 'VWO 1', description: 'Ontdekken en Onderzoeken', gradient: 'rgba(6, 182, 212, 0.4)' },
    { id: 2, title: 'VWO 2', description: 'Technisch Ontwerpen & Prototyping', gradient: 'rgba(139, 92, 246, 0.4)' },
    { id: 3, title: 'VWO 3', description: 'Complexe Probleemoplossing', gradient: 'rgba(236, 72, 153, 0.4)' },
    { id: 4, title: 'VWO 4', description: 'Ondernemerschap en Innovatie', gradient: 'rgba(34, 197, 94, 0.4)' },
    { id: 5, title: 'VWO 5', description: 'Meest en Gezel', gradient: 'rgba(249, 115, 22, 0.4)' },
    { id: 6, title: 'VWO 6', description: 'Eindwerkstuk (Meesterproef)', gradient: 'rgba(59, 130, 246, 0.4)' },
];

export default function ProjectenPage() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={`${styles.title} fade-in`}>Selecteer een <span className="text-gradient">Jaarlaag</span></h1>
                <p className={`${styles.subtitle} fade-in`}>
                    Bekijk hier mijn O&O projecten per leerjaar. Elk jaar staat in het teken van specifieke vaardigheden en uitdagingen.
                </p>
            </div>

            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {years.map((year) => (
                    <Card
                        key={year.id}
                        title={year.title}
                        description={year.description}
                        href={`/projecten/jaar-${year.id}`}
                        gradient={year.gradient}
                    />
                ))}
            </div>

            <section className={`${styles.extraSection} fade-in`} style={{ animationDelay: '0.4s' }}>
                <div className={styles.extraContent}>
                    <h2 className={styles.extraTitle}>Mijn Groei in O&O</h2>
                    <p className={styles.extraText}>
                        Gedurende mijn tijd op het VWO heb ik mij ontwikkeld van een beginnend onderzoeker naar een ervaren ontwerper.
                        De focus is verschoven van simpele opdrachten naar complexe, integrale ontwerpvraagstukken met echte opdrachtgevers.
                        Klik op een jaarlaag hierboven om de specifieke projecten en resultaten te zien.
                    </p>
                </div>
            </section>
        </main>
    );
}
