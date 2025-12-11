'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export function useKonamiCode() {
    const [input, setInput] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newInput = [...input, e.key];
            // Keep only as many keys as the code length
            if (newInput.length > KONAMI_CODE.length) {
                newInput.shift();
            }
            setInput(newInput);

            // Check pattern
            if (JSON.stringify(newInput) === JSON.stringify(KONAMI_CODE)) {
                // Success!
                alert('Cheat Code Activated: Admin Mode Unlocked 👾');
                router.push('/admin');
                setInput([]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [input, router]);

    return input;
}
