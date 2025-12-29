'use client';

import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h2 className={styles.title}>Wie ben ik?</h2>
                    <p className={styles.description}>
                        Ik ben Pieter Oosterling, een VWO 4 leerling met een passie voor innovatie en technologie.
                        Door het vak Onderzoek & Ontwikkelen (o&o) te volgen heb ik geleerd om creatieve oplossingen te bedenken
                        voor complexe vraagstukken. Van het ontwerpen van duurzame mobiliteitsconcepten tot het ontwikkelen
                        van technische prototypes – ik combineer onderzoek, design en techniek om impact te maken.
                        Verder heb ik ook geleerd dat reflecteren heel belangrijk is en dat je altijd nog kan leren, 
                        want zoals meneer Sluiter zegt: "Niks is perfect en er is altijd nog ruimte voor verbetering".
                    </p>
                    <p className={styles.description}>
                        Wat mij drijft is nieuwsgierigheid en de wil om te blijven leren. Elk project is een kans om
                        mijn grenzen te verleggen en nieuwe vaardigheden op te doen.
                    </p>
                </div>

                <div className={styles.avatarSection}>
                    <div className={styles.avatar}>
                        <div className={styles.avatarPlaceholder}>
                            <span className={styles.initials}>PO</span>
                        </div>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>10</div>
                            <div className={styles.statLabel}>Projecten</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>4</div>
                            <div className={styles.statLabel}>Jaren O&O</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>6</div>
                            <div className={styles.statLabel}>Competenties</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
