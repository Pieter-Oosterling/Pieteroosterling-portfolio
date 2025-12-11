'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AdminPage() {
    const [primaryColor, setPrimaryColor] = useState('#8b5cf6');
    const [secondaryColor, setSecondaryColor] = useState('#ec4899');
    const [hacked, setHacked] = useState(false);

    // Apply colors to :root
    useEffect(() => {
        document.documentElement.style.setProperty('--primary', primaryColor);
        document.documentElement.style.setProperty('--secondary', secondaryColor);
    }, [primaryColor, secondaryColor]);

    const toggleHacks = () => {
        setHacked(!hacked);
        if (!hacked) {
            document.body.classList.add(styles.matrixMode);
        } else {
            document.body.classList.remove(styles.matrixMode);
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.dashboard}>
                <div className={styles.header}>
                    <h1>🛠️ Admin Dashboard</h1>
                    <span className={styles.badge}>SECRET ACCESS</span>
                </div>

                <p className={styles.intro}>
                    Welkom in het geheime controlepaneel. Hier kun je de "source code" van de site live aanpassen.
                </p>

                <section className={styles.panel}>
                    <h2>Theme Studio</h2>
                    <div className={styles.controlGroup}>
                        <label>Primary Color</label>
                        <div className={styles.colorPickerWrapper}>
                            <input
                                type="color"
                                value={primaryColor}
                                onChange={(e) => setPrimaryColor(e.target.value)}
                                className={styles.colorInput}
                            />
                            <span>{primaryColor}</span>
                        </div>
                    </div>

                    <div className={styles.controlGroup}>
                        <label>Secondary Color</label>
                        <div className={styles.colorPickerWrapper}>
                            <input
                                type="color"
                                value={secondaryColor}
                                onChange={(e) => setSecondaryColor(e.target.value)}
                                className={styles.colorInput}
                            />
                            <span>{secondaryColor}</span>
                        </div>
                    </div>
                </section>

                <section className={styles.panel}>
                    <h2>System Hacks</h2>
                    <button
                        onClick={toggleHacks}
                        className={`${styles.hackBtn} ${hacked ? styles.active : ''}`}
                    >
                        {hacked ? 'DISABLE MATRIX MODE' : 'ENABLE MATRIX MODE'}
                    </button>
                </section>

                <Link href="/" className={styles.backLink}>
                    ← Terug naar de "normale" wereld
                </Link>
            </div>
        </main>
    );
}
