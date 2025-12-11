import Link from 'next/link';
import styles from './Timeline.module.css';

const TIMELINE_YEARS = [
    { year: 1, label: 'Klas 1', path: '/portfolios/jaar-1' },
    { year: 2, label: 'Klas 2', path: '/portfolios/jaar-2' },
    { year: 3, label: 'Klas 3', path: '/portfolios/jaar-3' },
    { year: 4, label: 'Klas 4', path: '/portfolios/jaar-4' },
    { year: 5, label: 'Klas 5', path: '/projecten' }, // Fallback if no specific year page
    { year: 6, label: 'Klas 6', path: '/projecten' }, // Fallback
];

export default function Timeline() {
    return (
        <div className={styles.timelineWrapper}>
            <h2 className={styles.title}>Tijdlijn</h2>
            <div className={styles.timelineTrack}>
                <div className={styles.line}></div>
                {TIMELINE_YEARS.map((item) => (
                    <Link key={item.year} href={item.path} className={styles.node}>
                        <div className={styles.circle}>{item.year}</div>
                        <span className={styles.label}>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
