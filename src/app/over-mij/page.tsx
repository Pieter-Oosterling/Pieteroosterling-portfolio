import Link from 'next/link';
import styles from './page.module.css';

export default function OverMijPage() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>

                {/* Hero */}
                <section className={styles.hero}>
                    <h1 className={styles.title}>
                        Mijn Reis in <span className="text-gradient">O&O</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Van nieuwsgierige onderzoeker naar innovatieve ontwerper.
                        Mijn portfolio vertelt het verhaal van 3 jaar groei, technische uitdagingen en teamleiderschap.
                    </p>
                </section>

                {/* Section 1: Growth Arc */}
                <section className={styles.section} style={{ animationDelay: '0.2s' }}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionIcon}>🚀</span>
                        <h2 className={styles.sectionTitle}>Van Onderzoeker naar Ontwerper</h2>
                    </div>
                    <p className={styles.text}>
                        In mijn eerste jaar lag de focus voornamelijk op de basis: hoe doe je goed onderzoek?
                        Projecten zoals <strong>Mosquito Alert</strong> leerden mij werken met hypothesen en experimenten.
                        Maar al snel merkte ik dat mijn ware passie lag bij het <em>creëren</em>.
                    </p>
                    <p className={styles.text}>
                        In VWO 2 en 3 ben ik deze passie gaan volgen. Bij het project <strong>Huis van je Leven</strong>
                        heb ik mijn ontwerp-skills kunnen inzetten voor een modulair woonconcept.
                        Ik ben niet langer iemand die alleen vragen stelt, maar iemand die oplossingen bouwt.
                    </p>
                </section>

                {/* Section 2: Technical Skills */}
                <section className={styles.section} style={{ animationDelay: '0.4s' }}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionIcon}>💻</span>
                        <h2 className={styles.sectionTitle}>Technische Groei</h2>
                    </div>
                    <p className={styles.text}>
                        Mijn technische vaardigheden hebben een enorme sprong gemaakt.
                        Waar ik begon met simpele presentaties, bouw ik nu volwaardige webapplicaties.
                    </p>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Web Development</h3>
                            <p className={styles.cardText}>
                                Voor het project <strong>Gezond Eten</strong> heb ik 'SnackCheck' ontwikkeld.
                                Hierbij heb ik geleerd te werken met HTML, CSS en JavaScript om een interactieve ervaring te creëren.
                            </p>
                            <div>
                                <span className={styles.skillBadge}>HTML/CSS</span>
                                <span className={styles.skillBadge}>JavaScript</span>
                                <span className={styles.skillBadge}>React</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Digital Prototyping</h3>
                            <p className={styles.cardText}>
                                Van laser-gesneden modellen voor <strong>Huis van je Leven</strong> tot 3D-modellen voor <strong>Aqua Stroom</strong>.
                                Ik combineer fysiek bouwen met digitale tools.
                            </p>
                            <div>
                                <span className={styles.skillBadge}>Lasersnijden</span>
                                <span className={styles.skillBadge}>3D Modeling</span>
                                <span className={styles.skillBadge}>Python</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Leadership */}
                <section className={styles.section} style={{ animationDelay: '0.6s' }}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionIcon}>🤝</span>
                        <h2 className={styles.sectionTitle}>Leiderschap & Teamwork</h2>
                    </div>
                    <p className={styles.text}>
                        Techniek is niets zonder een goed team. In VWO 1 nam ik vaak direct de leiding,
                        zoals bij <strong>Robot XAAR</strong>. In de loop der jaren heb ik geleerd dat leiderschap
                        niet gaat om 'de baas spelen', maar om faciliteren.
                    </p>
                    <p className={styles.text}>
                        Bij <strong>Aqua Stroom</strong> (Jaar 3) heb ik als planner gewerkt met een dubbele planning.
                        Dit zorgde voor rust en structuur, waardoor mijn teamgenoten konden excelleren.
                    </p>
                </section>

                {/* Back Button */}
                <div className={styles.backButtonWrapper}>
                    <Link href="/" className={styles.backButton}>
                        ← Terug naar Home
                    </Link>
                </div>

            </div>
        </main>
    );
}
