import React from 'react';
import DroneConfigurator from '@/components/SOS/DroneConfigurator';
import Link from 'next/link';

export const metadata = {
    title: 'SOS Drone Configurator',
    description: 'Configureer je medische reddingsdrone en blijf onder de 300kg.',
};

export default function MakeYourDronePage() {
    return (
        <main style={{ padding: '8rem 2rem', minHeight: '100vh', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link href="/projecten/jaar-4/SOS" style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: 'var(--surface-hover)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                }}>
                    &larr; Terug naar het SOS Project
                </Link>
            </div>
            <DroneConfigurator />
        </main>
    );
}
