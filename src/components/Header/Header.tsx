"use client";
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Portfolio<span>.</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/projecten" className={styles.link}>Projecten</Link>
                    <Link href="/portfolios" className={styles.link}>Portfolios</Link>
                    <Link href="/over-mij" className={styles.link}>Over Mij</Link>
                    <Link href="/competenties" className={styles.link}>Competenties</Link>
                </nav>

                <ThemeToggle />
            </div>
        </header>
    );
}
