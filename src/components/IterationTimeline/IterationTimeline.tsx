import React from 'react';
import styles from './IterationTimeline.module.css';

interface Iteration {
    number: number;
    title: string;
    description: string;
    weight: number;
    material: string;
}

const iterations: Iteration[] = [
    {
        number: 1,
        title: 'Massief Model',
        description: 'Volledig massief geprint om de vorm en ruimte te testen.',
        weight: 895.1,
        material: 'UHMWPE (Polyethyleen)',
    },
    {
        number: 2,
        title: 'Skelet + Carbon',
        description: 'Overstap naar een skelet-structuur met carbon fiber panelen.',
        weight: 1700, // Roughly, but we'll show it as a failed attempt or just skip to 3? Let's just say ~1700kg.
        material: 'Aluminium T6',
    },
    {
        number: 3,
        title: 'Magnesium Skelet',
        description: 'Lichter materiaal gekozen voor het frame, gewicht nam enorm af.',
        weight: 115.4, // Skelet only, but we'll display this to show progress
        material: 'Magnesiumlegering (AZ31B)',
    },
    {
        number: 4,
        title: 'Eindconcept',
        description: 'Sandwichpanelen met schuim en een geoptimaliseerd frame.',
        weight: 126.9, // Total weight
        material: 'Carbon Fiber + Divinycell + AZ31B',
    }
];

export default function IterationTimeline() {
    // We calculate heights or positions based on weight to make a cool graph-like timeline.
    // The max weight is ~1700, min is 126.9.
    const maxWeight = 1700;

    return (
        <div className={styles.container}>
            <h3 className={styles.headerTitle}>Ontwikkeling Gewicht (Iteraties)</h3>
            <p className={styles.headerSubtitle}>
                Doel: Onder de 300 kg (cargolimiet BAE Systems T-650).
            </p>
            
            <div className={styles.timeline}>
                {iterations.map((iter) => {
                    // Calculate height percentage relative to max weight for visual impact
                    const heightPercent = Math.max((iter.weight / maxWeight) * 100, 15); // min 15% so it doesn't disappear
                    const isSuccess = iter.weight <= 300;

                    return (
                        <div key={iter.number} className={styles.iterationCard}>
                            <div className={styles.barContainer}>
                                <div 
                                    className={`${styles.bar} ${isSuccess ? styles.barSuccess : styles.barFail}`}
                                    style={{ height: `${heightPercent}%` }}
                                >
                                    <span className={styles.weightLabel}>
                                        {iter.weight} kg
                                    </span>
                                </div>
                            </div>
                            
                            <div className={styles.info}>
                                <div className={styles.iterNumber}>Iteratie {iter.number}</div>
                                <h4 className={styles.title}>{iter.title}</h4>
                                <span className={styles.material}>{iter.material}</span>
                                <p className={styles.description}>{iter.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
