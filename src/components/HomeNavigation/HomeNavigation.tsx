'use client';

import Link from 'next/link';
import styles from './HomeNavigation.module.css';

const NAV_ITEMS = [
    { label: 'Projecten', path: '/projecten', color: 'blue', icon: '🚀' },
    { label: "Portfolio's", path: '/portfolios', color: 'purple', icon: '📂' },
    { label: 'Over Mij', path: '/over-mij', color: 'orange', icon: '👋' },
    { label: 'Competenties', path: '/competenties', color: 'green', icon: '🌱' },
];

export default function HomeNavigation() {
    return (
        <div className={styles.grid}>
            {NAV_ITEMS.map((item) => (
                <Link
                    key={item.label}
                    href={item.path}
                    className={`${styles.card} ${styles[item.color]}`}
                >
                    <span className={styles.icon}>{item.icon}</span>
                    <div className={styles.contentRow}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.arrow}>→</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
