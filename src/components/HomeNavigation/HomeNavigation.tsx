'use client';

import Link from 'next/link';
import styles from './HomeNavigation.module.css';

const NAV_ITEMS = [
    {
        label: 'Projecten',
        desc: 'Bekijk mijn O&O projecten van vwo 1 t/m vwo 6',
        path: '/projecten',
        color: 'blue',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
        )
    },
    {
        label: "Portfolio's",
        desc: "Mijn persoonlijke ontwikkelingsportfolio's per jaarlaag.",
        path: '/portfolios',
        color: 'purple',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        )
    },
    {
        label: 'Over Mij',
        desc: 'Wie ben ik en wat drijft mij?',
        path: '/over-mij',
        color: 'orange',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        )
    },
    {
        label: 'Competenties',
        desc: 'Overzicht van mijn vaardigheden en groei.',
        path: '/competenties',
        color: 'green',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
        )
    },
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
                    <div className={styles.cardHeader}>
                        <span className={styles.navTitle}>{item.label}</span>
                        <span className={styles.icon}>{item.icon}</span>
                    </div>

                    <p className={styles.description}>{item.desc}</p>

                    <div className={styles.glow} />
                </Link>
            ))}
        </div>
    );
}
