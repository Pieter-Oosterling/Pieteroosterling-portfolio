'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Center, Html } from '@react-three/drei';
import { STLLoader } from 'three-stdlib';
import * as THREE from 'three';

function Model({ url, rotation }: { url: string, rotation?: [number, number, number] }) {
    // Load STL. STLLoader returns a BufferGeometry.
    const geometry = useLoader(STLLoader, url);
    const mesh = useRef<THREE.Mesh>(null!);

    // Auto-rotate or just static nicely lit
    // Let's create a nice material
    return (
        <mesh ref={mesh} geometry={geometry} rotation={rotation} castShadow receiveShadow>
            <meshStandardMaterial
                color="#4facfe"
                roughness={0.5}
                metalness={0.1}
            />
        </mesh>
    );
}

function Loader() {
    return (
        <Html center>
            <div style={{
                color: 'white',
                background: 'rgba(0,0,0,0.7)',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                3D Model Laden...
            </div>
        </Html>
    );
}

interface STLViewerProps {
    url: string;
    rotation?: [number, number, number];
}

export default function STLViewer({ url, rotation }: STLViewerProps) {
    return (
        <div style={{ width: '100%', height: '500px', background: '#111', borderRadius: '12px', overflow: 'hidden' }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={<Loader />}>
                    {/* Stage automatically centers and sets up lighting/shadows */}
                    <Stage environment="city" intensity={0.6}>
                        <Model url={url} rotation={rotation} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault />
            </Canvas>
        </div>
    );
}
