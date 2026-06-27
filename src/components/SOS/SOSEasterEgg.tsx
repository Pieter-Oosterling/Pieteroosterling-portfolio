'use client';
import { useEffect, useState } from 'react';
import styles from './SOSEasterEgg.module.css';

export default function SOSEasterEgg() {
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        let keySequence: string[] = [];
        const targetSequence = ['s', 'o', 's'];

        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();
            keySequence.push(key);
            
            // Keep only the last 3 keys
            if (keySequence.length > 3) {
                keySequence.shift();
            }

            // Check if sequence matches 's' 'o' 's'
            if (keySequence.join('') === 'sos') {
                setTriggered(true);
                keySequence = []; // reset
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!triggered) return null;

    return (
        <div className={styles.overlay} onClick={() => setTriggered(false)}>
            <div className={styles.alertBox}>
                <h1 className={styles.alertTitle}>🚨 RED ALERT 🚨</h1>
                <p>SOS Protocol Geactiveerd!</p>
                <div className={styles.blueprint}>
                    {/* Fake blueprint or text */}
                    <pre>
                        {`
      __
     /  \\
    |    |
     \\__/
      ||
    __||__
   /      \\
  /________\\
  |        |
  |  S.O.S |
  |________|
                        `}
                    </pre>
                </div>
                <button className={styles.dismissBtn} onClick={() => setTriggered(false)}>
                    Sluiten
                </button>
            </div>
        </div>
    );
}
