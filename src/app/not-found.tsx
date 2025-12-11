'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

const JOKES = [
    "Mijn PVA was beter dan dit...",
    "Error 404: Motivatie niet gevonden (geintje)",
    "Heeft iemand mijn scalpel gezien?",
    "Dit was vast een user error...",
    "Waarschijnlijk een bug in de matrix.",
    "Zelfs mijn lasersnijder maakt minder fouten.",
];

export default function NotFound() {
    const [clicks, setClicks] = useState(0);
    const [joke, setJoke] = useState('');

    const handleClick = () => {
        const newCount = clicks + 1;
        setClicks(newCount);

        if (newCount === 5) {
            const randomJoke = JOKES[Math.floor(Math.random() * JOKES.length)];
            setJoke(randomJoke);
        }
    };

    return (
        <div className={styles.container}>
            <h1
                className={`${styles.errorCode} ${clicks >= 5 ? styles.glitching : ''}`}
                onClick={handleClick}
                title="Klik mij 5 keer..."
            >
                404
            </h1>
            <h2 className={styles.title}>Oeps, experiment mislukt!</h2>
            <p className={styles.description}>
                Deze pagina lijkt niet (meer) te bestaan. Misschien is het project afgerond of verplaatst?
            </p>

            {joke && (
                <div className={styles.secretMessage}>
                    <strong>Easter Egg Gevonden! 🥚</strong>
                    <p>"{joke}"</p>
                </div>
            )}

            <Link href="/" className={styles.homeButton}>
                Terug naar de Homepage
            </Link>
        </div>
    );
}
