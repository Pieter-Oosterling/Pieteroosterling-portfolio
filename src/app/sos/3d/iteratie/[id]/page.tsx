import React from 'react';
import STLViewer from '@/components/3D/STLViewer';

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
        <main className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8 border-b border-gray-700 pb-4">
                    <h1 className="text-4xl font-bold mb-2">SOS - Save Our Soldiers</h1>
                    <h2 className="text-2xl text-blue-400 mb-2">Vwo 4 Project 2</h2>
                    <p className="text-lg text-gray-300 uppercase tracking-wider">
                        Opdracht: EEN MEDISCHE REDDINGSDRONE VOOR HET SLAGVELD
                    </p>
                </header>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">
                        Iteratie {id} - 3D Model
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Hieronder zie je het 3D model van iteratie {id}. Je kunt het model slepen om het van alle kanten te bekijken.
                        Zorg ervoor dat het bestand <code>{stlUrl}</code> in de public map staat.
                    </p>
                    
                    <div className="bg-black rounded-xl p-2 border border-gray-800 shadow-2xl">
                        <STLViewer url={stlUrl} />
                    </div>
                </div>
            </div>
        </main>
    );
}
