import Link from 'next/link';
import { useState } from 'react';
import styles from './Timeline.module.css';
import YearModal from '@/components/YearModal/YearModal';

interface TimelineNode {
    year: number;
    label: string;
    subLabel: string;
    summary: string;
    stats: { label: string; value: string }[];
}

const TIMELINE_DATA: TimelineNode[] = [
    {
        year: 1,
        label: 'BRUGKLAS',
        subLabel: 'De Start',
        summary: 'Mijn eerste kennismaking met O&O. Projecten zoals "Het Voertuig van de Toekomst" leerden mij de basis van samenwerken en creatief denken.',
        stats: [{ label: 'Gem. Cijfer', value: '7,8' }]
    },
    {
        year: 2,
        label: 'VWO 2',
        subLabel: 'Verbreding',
        summary: 'Een jaar van onderzoek en experimenteren. Van eetbaar plastic tot sociale robots.',
        stats: [{ label: 'Gem. Cijfer', value: '7,9' }]
    },
    {
        year: 3,
        label: 'VWO 3',
        subLabel: 'Verdieping',
        summary: 'Technisch en complexer. Grote projecten zoals Aqua Stroom en Modulair Wonen vroegen om strakke planning.',
        stats: [{ label: 'Gem. Cijfer', value: '8,1' }]
    },
    {
        year: 4,
        label: 'VWO 4',
        subLabel: 'Specialisatie',
        summary: 'Professionele opdrachten voor echte bedrijven (Gemeente Rijswijk). Focus op Geothermie en data-analyse.',
        stats: [{ label: 'Gem. Cijfer', value: 'TBD' }]
    },
    {
        year: 5,
        label: 'VWO 5',
        subLabel: 'Pre-Exam',
        summary: 'Voorbereiding op het meesterproef. Verdere specialisatie in Design & Technology.',
        stats: [{ label: 'Focus', value: 'Design' }]
    },
    {
        year: 6,
        label: 'VWO 6',
        subLabel: 'Meesterproef',
        summary: 'De finale. Het ultieme bewijs van bekwaamheid als technasium student.',
        stats: [{ label: 'Status', value: 'Komt eraan' }]
    },
];

export default function Timeline() {
    const [selectedYear, setSelectedYear] = useState<TimelineNode | null>(null);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Mijn Reis</h2>
            <div className={styles.timelineWrapper}>
                {/* The glowing line */}
                <div className={styles.line}></div>

                <div className={styles.nodesContainer}>
                    {TIMELINE_DATA.map((node) => (
                        <div
                            key={node.year}
                            className={styles.nodeWrapper}
                            onClick={() => setSelectedYear(node)}
                        >
                            <div className={styles.node}>
                                <span className={styles.yearNumber}>{node.year}</span>
                            </div>
                            <div className={styles.labels}>
                                <span className={styles.mainLabel}>{node.label}</span>
                                <span className={styles.subLabel}>{node.subLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <YearModal
                isOpen={!!selectedYear}
                onClose={() => setSelectedYear(null)}
                year={selectedYear?.year || 0}
                title={selectedYear?.label || ''}
                summary={selectedYear?.summary || ''}
                stats={selectedYear?.stats}
            />
        </div>
    );
}
