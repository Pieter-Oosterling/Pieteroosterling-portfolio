import React from 'react';
import STLViewer from '@/components/3D/STLViewer';
import styles from './page.module.css';
import Link from 'next/link';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function SOSIteratiePage({ params }: PageProps) {
    const { id } = await params;
    
    // Bepaal de STL URL gebaseerd op de iteratie ID
    const stlUrl = `/bestanden/vwo4/project2/iteratie${id}.stl`;

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Link href="/projecten/jaar-4/SOS" className={styles.backButton}>
                    &larr; Terug naar het SOS Project
                </Link>
                <h1 className={styles.title}>SOS - Save Our Soldiers</h1>
                <p className={styles.subtitle}>
                    Vwo 4 Project 2 <br/>
                    Opdracht: EEN MEDISCHE REDDINGSDRONE VOOR HET SLAGVELD
                </p>
            </div>

            <div className={styles.viewerContainer}>
                <h3 className={styles.title} style={{ fontSize: '2.5rem', textAlign: 'center' }}>
                    Iteratie {id} - 3D Model
                </h3>
                <p className={styles.description}>
                    Hieronder zie je het 3D model van iteratie {id}. Je kunt het model slepen om het van alle kanten te bekijken.
                    Zorg ervoor dat het bestand <code>{stlUrl}</code> in de public map staat.
                </p>
                
                <div className={styles.modelWrapper}>
                    {/* Rotatie 90 graden (pi / 2 radiaal) op de X-as voor deze specifieke modellen */}
                    <STLViewer url={stlUrl} rotation={[-Math.PI / 2, 0, 0]} />
                </div>
            </div>
        </main>
    );
}
