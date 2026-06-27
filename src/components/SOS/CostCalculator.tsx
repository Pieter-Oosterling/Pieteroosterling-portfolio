'use client';
import { useState } from 'react';
import { sosCostBreakdown, totalCost } from '@/data/sosData';
import styles from './CostCalculator.module.css';
import StatsCounter from './StatsCounter';

export default function CostCalculator() {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(val);
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.title}>Totale Kostenraming Module</h3>
                    <p className={styles.subtitle}>Inclusief apparatuur & materialen</p>
                </div>
                <div className={styles.totalDisplay}>
                    <span className={styles.euroSign}>€</span>
                    <StatsCounter end={Math.floor(totalCost)} duration={2000} />
                </div>
            </div>

            <div className={styles.barContainer}>
                {sosCostBreakdown.map((item, index) => {
                    const width = `${(item.cost / totalCost) * 100}%`;
                    return (
                        <div 
                            key={index} 
                            className={`${styles.barSegment} ${hoveredCategory === item.category ? styles.active : ''}`}
                            style={{ width, backgroundColor: `var(--chart-color-${index + 1})` }}
                            onMouseEnter={() => setHoveredCategory(item.category)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            {/* Tooltip on hover */}
                            <div className={styles.tooltip}>
                                <strong>{item.category}</strong>
                                <span>{formatCurrency(item.cost)} ({item.percentage}%)</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <ul className={styles.legend}>
                {sosCostBreakdown.map((item, index) => (
                    <li 
                        key={index} 
                        className={`${styles.legendItem} ${hoveredCategory === item.category ? styles.highlight : ''}`}
                        onMouseEnter={() => setHoveredCategory(item.category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <span className={styles.legendColor} style={{ backgroundColor: `var(--chart-color-${index + 1})` }}></span>
                        <span className={styles.legendName}>{item.category}</span>
                        <span className={styles.legendValue}>{formatCurrency(item.cost)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
