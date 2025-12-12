import Link from 'next/link';
import SkillsMatrix from '@/components/SkillsMatrix/SkillsMatrix';
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

            {/* Skills Matrix */}
            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                <SkillsMatrix />
            </div>

            {/* Traditional Competenties */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Kerncompetenties</h2>
                <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.3s' }}>
                    {competenties.map((comp, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{comp.title}</h3>
                            <p className={styles.cardDesc}>{comp.description}</p>
                            <div className={styles.glow} />
                        </div>
                    ))}
                </div>
            </div>

            <Link href="/" className={styles.backButton}>
                ← Terug naar Home
            </Link>
        </main>
    );
}
