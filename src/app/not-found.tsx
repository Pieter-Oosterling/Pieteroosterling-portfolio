import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.title}>Oeps, experiment mislukt!</h2>
            <p className={styles.description}>
                Deze pagina lijkt niet (meer) te bestaan. Misschien is het project afgerond of verplaatst?
            </p>
            <Link href="/" className={styles.homeButton}>
                Terug naar de Homepage
            </Link>
        </div>
    );
}
