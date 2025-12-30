import styles from './MissingPortfolio.module.css'; // Reusing styles to keep consistency

export default function MissingReport() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>📄</div>
                <h2 className={styles.title}>Geen Verslag Beschikbaar</h2>
                <p className={styles.message}>
                    Voor dit project is er helaas geen digitaal verslag beschikbaar.
                </p>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}
