import Link from 'next/link';
import styles from './page.module.css';

export default function OverMijPage() {
    return (
        <main className={styles.main}>
            <div className={`${styles.content} fade-in`}>
                <h1 className={styles.title}>Over Mij</h1>

                <div className={styles.section}>
                    <h2 className={styles.subtitle}>Wie ben ik?</h2>
                    <p className={styles.text}>
                        Mijn naam is [Naam]. Ik zit op het VWO en heb een grote passie voor onderzoek en ontwerpen.
                        Tijdens mijn schoolcarrière heb ik geleerd om kritisch te denken, creatieve oplossingen te vinden
                        en samen te werken in teams.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.subtitle}>Mijn Passie</h2>
                    <p className={styles.text}>
                        Het vak O&O heeft mij de mogelijkheid gegeven om...
                    </p>
                </div>

                <Link href="/" className={styles.backButton}>
                    ← Terug naar Home
                </Link>
            </div>
        </main>
    );
}
