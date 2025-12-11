import Link from 'next/link';
import styles from './Timeline.module.css';

const TIMELINE_YEARS = [
    { year: 1, label: 'Brugklas', sub: 'De Start', path: '/portfolios/jaar-1' },
    { year: 2, label: 'VWO 2', sub: 'Verbreding', path: '/portfolios/jaar-2' },
    { year: 3, label: 'VWO 3', sub: 'Verdieping', path: '/portfolios/jaar-3' },
    { year: 4, label: 'VWO 4', sub: 'Specialisatie', path: '/portfolios/jaar-4' },
    { year: 5, label: 'VWO 5', sub: 'Pre-Exam', path: '/projecten' },
    { year: 6, label: 'VWO 6', sub: 'Meesterproef', path: '/projecten' },
];

export default function Timeline() {
    return (
        <div className={styles.timelineWrapper}>
            <h2 className={styles.title}>Mijn Reis</h2>
            <div className={styles.timelineContainer}>
                <div className={styles.timelineTrack}>
                    <div className={styles.trackLine}></div>
                    <div className={styles.trackProgress}></div>

                    {TIMELINE_YEARS.map((item) => (
                        <Link key={item.year} href={item.path} className={styles.node}>
                            <div className={styles.circleWrapper}>
                                <div className={styles.circle}>{item.year}</div>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.label}>{item.label}</span>
                                <span className={styles.subLabel}>{item.sub}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
