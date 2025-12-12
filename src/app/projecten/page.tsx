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
                    gradient="rgba(96, 165, 250, 0.6)" // Light Blue
                />
                <Card
                    title="Klas 2"
                    description="VWO 2 projecten"
                    href="/projecten/jaar-2"
                    gradient="rgba(74, 222, 128, 0.6)" // Green
                />
                <Card
                    title="Klas 3"
                    description="VWO 3 (Technasium)"
                    href="/projecten/jaar-3"
                    gradient="rgba(251, 146, 60, 0.6)" // Orange
                />
                <Card
                    title="Klas 4"
                    description="VWO 4 (Specialisatie)"
                    href="/projecten/jaar-4"
                    gradient="rgba(248, 113, 113, 0.6)" // Red
                />
                <Card
                    title="Klas 5"
                    description="VWO 5 (Verdieping)"
                    href="/projecten/jaar-5"
                    gradient="rgba(192, 132, 252, 0.6)" // Purple
                />
                <Card
                    title="Klas 6"
                    description="VWO 6 (Eindopdrachten)"
                    href="/projecten/jaar-6"
                    gradient="rgba(250, 204, 21, 0.6)" // Yellow
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
