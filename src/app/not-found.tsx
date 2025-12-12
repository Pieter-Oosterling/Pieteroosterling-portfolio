import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <div className={styles.glitchWrapper}>
                    <h1 className={styles.glitch} data-text="404">404</h1>
                </div>

                <h2 className={styles.title}>Pagina Niet Gevonden</h2>
                <p className={styles.description}>
                    De pagina die je zoekt bestaat niet of is verplaatst.
                </p>

                <div className={styles.actions}>
                    <Link href="/" className={styles.primaryBtn}>
                        🏠 Naar Homepage
                    </Link>
                    <Link href="/projecten" className={styles.secondaryBtn}>
                        📁 Bekijk Projecten
                    </Link>
                </div>

                <div className={styles.suggestions}>
                    <p className={styles.suggestionTitle}>Misschien zoek je:</p>
                    <div className={styles.links}>
                        <Link href="/projecten">Projecten</Link>
                        <Link href="/portfolios">Portfolio's</Link>
                        <Link href="/over-mij">Over Mij</Link>
                        <Link href="/competenties">Competenties</Link>
                    </div>
                </div>

                <div className={styles.hint}>
                    <kbd>CMD/CTRL</kbd> + <kbd>K</kbd> om snel te navigeren
                </div>
            </div>

            {/* Decorative background */}
            <div className={styles.bg}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>
        </main>
    );
}
