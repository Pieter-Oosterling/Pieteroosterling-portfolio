'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/data/projects';
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut';
import styles from './CommandPalette.module.css';

// Search item types
interface SearchItem {
    id: string;
    title: string;
    description?: string;
    category: 'project' | 'page' | 'action';
    href?: string;
    action?: () => void;
    icon?: string;
}

const PAGES: SearchItem[] = [
    { id: 'home', title: 'Home', category: 'page', href: '/', icon: '🏠' },
    { id: 'projecten', title: 'Projecten', category: 'page', href: '/projecten', icon: '📁' },
    { id: 'portfolios', title: "Portfolio's", category: 'page', href: '/portfolios', icon: '📂' },
    { id: 'over-mij', title: 'Over Mij', category: 'page', href: '/over-mij', icon: '👋' },
    { id: 'competenties', title: 'Competenties', category: 'page', href: '/competenties', icon: '⚡' },
];

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();

    // Build searchable items
    const searchItems = useMemo(() => {
        const projects: SearchItem[] = projectsData.map(p => ({
            id: `project-${p.id}`,
            title: p.title,
            description: `${p.description} • Klas ${p.year}`,
            category: 'project' as const,
            href: `/projecten/jaar-${p.year}/${p.slug}`,
            icon: '📄'
        }));

        const actions: SearchItem[] = [
            {
                id: 'theme-toggle',
                title: 'Toggle Theme',
                description: 'Switch between light and dark mode',
                category: 'action',
                action: () => {
                    const html = document.documentElement;
                    const current = html.getAttribute('data-theme');
                    html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
                },
                icon: '🌓'
            }
        ];

        return [...PAGES, ...projects, ...actions];
    }, []);

    // Filter items based on query
    const filteredItems = useMemo(() => {
        if (!query.trim()) return searchItems.slice(0, 8); // Show recent/top items

        const lowerQuery = query.toLowerCase();
        return searchItems.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(lowerQuery);
            const descMatch = item.description?.toLowerCase().includes(lowerQuery);
            return titleMatch || descMatch;
        }).slice(0, 8);
    }, [query, searchItems]);

    // Keyboard shortcut: CMD/CTRL + K
    useKeyboardShortcut('k', () => setIsOpen(prev => !prev), { ctrl: true });

    // Handle ESC to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            return () => window.removeEventListener('keydown', handleEsc);
        }
    }, [isOpen]);

    // Arrow key navigation
    useEffect(() => {
        const handleArrows = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                handleSelect(filteredItems[selectedIndex]);
            }
        };

        if (isOpen && filteredItems.length > 0) {
            window.addEventListener('keydown', handleArrows);
            return () => window.removeEventListener('keydown', handleArrows);
        }
    }, [isOpen, filteredItems, selectedIndex]);

    // Reset state when closed
    useEffect(() => {
        if (!isOpen) {
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    const handleSelect = useCallback((item: SearchItem) => {
        if (item.href) {
            router.push(item.href);
        } else if (item.action) {
            item.action();
        }
        setIsOpen(false);
    }, [router]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className={styles.backdrop} onClick={() => setIsOpen(false)} />

            {/* Modal */}
            <div className={styles.modal}>
                <div className={styles.searchBox}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input
                        type="text"
                        placeholder="Search projects, pages, or actions..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={styles.input}
                        autoFocus
                    />
                    <kbd className={styles.kbd}>ESC</kbd>
                </div>

                {filteredItems.length > 0 ? (
                    <div className={styles.results}>
                        {filteredItems.map((item, index) => (
                            <button
                                key={item.id}
                                className={`${styles.item} ${index === selectedIndex ? styles.selected : ''}`}
                                onClick={() => handleSelect(item)}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <span className={styles.itemIcon}>{item.icon}</span>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemTitle}>{item.title}</div>
                                    {item.description && (
                                        <div className={styles.itemDesc}>{item.description}</div>
                                    )}
                                </div>
                                <span className={styles.itemCategory}>{item.category}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <p>No results found for "{query}"</p>
                    </div>
                )}

                <div className={styles.footer}>
                    <div className={styles.hint}>
                        <kbd>↑</kbd><kbd>↓</kbd> to navigate
                        <kbd>↵</kbd> to select
                        <kbd>ESC</kbd> to close
                    </div>
                </div>
            </div>
        </>
    );
}
