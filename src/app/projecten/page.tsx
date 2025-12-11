import Card from '@/components/Card/Card';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';
import { projectsData } from '@/data/projects';
import styles from './page.module.css';

export default function Projecten() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>Projecten</h1>
                <p className={styles.subtitle}>
                    Selecteer een schooljaar of filter hieronder door alle projecten.
                </p>
            </div>

            <div className={styles.grid}>
                <Card
                    title="Klas 1"
                    description="Brugklas projecten (O&O)"
                    href="/projecten/jaar-1"
                    gradient="linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)"
                />
                <Card
                    title="Klas 2"
                    description="VWO 2 projecten"
                    href="/projecten/jaar-2"
                    gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                />
                <Card
                    title="Klas 3"
                    description="VWO 3 (Technasium)"
                    href="/projecten/jaar-3"
                    gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
                />
                <Card
                    title="Klas 4"
                    description="VWO 4 (Specialisatie)"
                    href="/projecten/jaar-4"
                    gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
                />
            </div>

            <div className={styles.extraSection}>
                <h2>Mijn Groei</h2>
                <p>
                    Van simpele kartonnen prototypes in de brugklas naar complexe rendabiliteitsanalyses en Python-applicaties in de bovenbouw.
                </p>
            </div>

            <hr className={styles.divider} />

            <ProjectGrid projects={projectsData} />

        </main>
    );
}
