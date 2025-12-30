import styles from './MissingPortfolio.module.css';

export default function MissingPortfolio() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>📂</div>
                <h2 className={styles.title}>Portfolio Niet Beschikbaar</h2>
                <p className={styles.message}>
                    Voor deze periode is er helaas geen digitaal portfolio beschikbaar.
                    <br />
                    Mijn excuses voor het ongemak.
                </p>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}
