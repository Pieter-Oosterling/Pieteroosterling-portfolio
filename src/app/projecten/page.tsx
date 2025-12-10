import Link from 'next/link';
import styles from './page.module.css';

const years = [
    { id: 1, title: 'VWO 1', description: 'Projecten uit het eerste jaar' },
    { id: 2, title: 'VWO 2', description: 'Projecten uit het tweede jaar' },
    { id: 3, title: 'VWO 3', description: 'Projecten uit het derde jaar' },
    { id: 4, title: 'VWO 4', description: 'Projecten uit het vierde jaar' },
    { id: 5, title: 'VWO 5', description: 'Projecten uit het vijfde jaar' },
    { id: 6, title: 'VWO 6', description: 'Projecten uit het zesde jaar' },
];

export default function ProjectenPage() {
    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} fade-in`}>Kies een Jaarlaag</h1>
            <div className={`${styles.grid} fade-in`} style={{ animationDelay: '0.2s' }}>
                {years.map((year) => (
                    <Link
                        key={year.id}
                        href={`/projecten/jaar-${year.id}`}
                        className={styles.card}
                    >
                        <h2 className={styles.cardTitle}>{year.title}</h2>
                        <p className={styles.cardDesc}>{year.description}</p>
                        <div className={styles.glow} />
                    </Link>
                ))}
            </div>
        </main>
    );
}
