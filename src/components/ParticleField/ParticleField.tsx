'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import styles from './ParticleField.module.css';

// The individual particles logic
function Particles(props: any) {
    const ref = useRef<any>(null); // Initialized with null
    // Generate random points in a sphere - corrected usage based on typical maath API
    const sphere = useMemo(() => {
        const data = new Float32Array(5000 * 3);
        return random.inSphere(data, { radius: 1.5 });
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotation
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8b5cf6" // Primary purple-ish color
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function ParticleField() {
    return (
        <div className={styles.canvasContainer}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Particles />
            </Canvas>
        </div>
    );
}
