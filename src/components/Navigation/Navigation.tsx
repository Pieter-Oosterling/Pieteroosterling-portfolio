"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
    const pathname = usePathname();

    if (pathname === '/') return null; // Don't show nav on landing page if you want a clean look, or show it. I'll show it but minimal.
    // Actually, users usually want a way back home.

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.homeLink}>
                ← Portfolio
            </Link>
        </nav>
    );
}
