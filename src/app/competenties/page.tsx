import Link from 'next/link';
import styles from './page.module.css';

const competenties = [
    { title: 'Samenwerken', description: 'Effectief bijdragen aan een groepsproces en gezamenlijke doelen bereiken.' },
    { title: 'Onderzoeken', description: 'Systematisch verzamelen en analyseren van data om vragen te beantwoorden.' },
    { title: 'Ontwerpen', description: 'Creatieve en functionele oplossingen bedenken en uitwerken.' },
    { title: 'Presenteren', description: 'Ideeën en resultaten helder en overtuigend overbrengen.' },
    { title: 'Plannen & Organiseren', description: 'Doelen stellen, tijd indelen en middelen beheren.' },
    { title: 'Reflecteren', description: 'Kritisch kijken naar eigen handelen en daarvan leren.' },
];

export default function CompetentiesPage() {
    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} fade-in`}>Competenties</h1>
            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {competenties.map((comp, index) => (
                    <div key={index} className={styles.card}>
                        <h2 className={styles.cardTitle}>{comp.title}</h2>
                        <p className={styles.cardDesc}>{comp.description}</p>
                        <div className={styles.glow} />
                    </div>
                ))}
            </div>
            <Link href="/" className={styles.backButton}>
                ← Terug naar Home
            </Link>
        </main>
    );
}
