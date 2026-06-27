'use client';

import React, { useState } from 'react';
import styles from './DroneConfigurator.module.css';
import { sosEquipment, baseModuleWeightKg, maxDronePayloadKg } from '@/data/sosData';

export default function DroneConfigurator() {
    // Keep track of how many of each item the user has added
    const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({});

    // Calculate total weight
    const totalEquipmentWeightGrams = sosEquipment.reduce((total, item) => {
        const count = selectedItems[item.id] || 0;
        return total + (count * item.weightGrams);
    }, 0);

    const totalWeightKg = baseModuleWeightKg + (totalEquipmentWeightGrams / 1000);
    const isOverweight = totalWeightKg > maxDronePayloadKg;
    
    // Percentage for progress bar
    const weightPercentage = Math.min((totalWeightKg / maxDronePayloadKg) * 100, 100);

    const handleAddItem = (id: string) => {
        setSelectedItems(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const handleRemoveItem = (id: string) => {
        setSelectedItems(prev => {
            const current = prev[id] || 0;
            if (current <= 0) return prev;
            return { ...prev, [id]: current - 1 };
        });
    };

    const handleReset = () => {
        setSelectedItems({});
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Drone Configurator</h1>
                <p className={styles.subtitle}>
                    Kies je payload voor de BAE Systems T-650. Blijf onder de maximale capaciteit van {maxDronePayloadKg} kg!
                </p>
            </div>

            <div className={styles.dashboard}>
                <div className={styles.weightDisplay}>
                    <h2>Huidig Totaalgewicht</h2>
                    <div className={`${styles.weightValue} ${isOverweight ? styles.overweightText : ''}`}>
                        {totalWeightKg.toFixed(2)} <span className={styles.unit}>kg</span>
                    </div>
                    
                    <div className={styles.progressBarContainer}>
                        <div 
                            className={`${styles.progressBar} ${isOverweight ? styles.progressBarDanger : ''}`} 
                            style={{ width: `${weightPercentage}%` }}
                        ></div>
                        <div className={styles.maxMarker} style={{ left: '100%' }}></div>
                    </div>
                    
                    <div className={styles.status}>
                        {isOverweight ? (
                            <span className={styles.statusDanger}>⚠️ Te zwaar! De drone zal neerstorten.</span>
                        ) : (
                            <span className={styles.statusOk}>✅ Ready for take-off</span>
                        )}
                    </div>
                    <p className={styles.baseWeightNote}>Inclusief basismodule van {baseModuleWeightKg} kg.</p>
                </div>

                <div className={styles.equipmentList}>
                    <div className={styles.listHeader}>
                        <h3>Beschikbare Uitrusting</h3>
                        <button onClick={handleReset} className={styles.resetBtn}>Reset Alles</button>
                    </div>
                    <div className={styles.itemsGrid}>
                        {sosEquipment.map(item => {
                            const count = selectedItems[item.id] || 0;
                            return (
                                <div key={item.id} className={`${styles.itemCard} ${count > 0 ? styles.itemActive : ''}`}>
                                    <div className={styles.itemInfo}>
                                        <h4 className={styles.itemName}>{item.name}</h4>
                                        <span className={styles.itemWeight}>{(item.weightGrams / 1000).toFixed(3)} kg</span>
                                    </div>
                                    <div className={styles.controls}>
                                        <button onClick={() => handleRemoveItem(item.id)} disabled={count === 0} className={styles.controlBtn}>-</button>
                                        <span className={styles.count}>{count}</span>
                                        <button onClick={() => handleAddItem(item.id)} className={styles.controlBtn}>+</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
