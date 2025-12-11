'use client';

import { useKonamiCode } from '@/hooks/useKonamiCode';

export default function KonamiListener() {
    useKonamiCode(); // Activates key listener
    return null; // Renders nothing
}
