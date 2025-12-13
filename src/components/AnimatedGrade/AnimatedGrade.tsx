'use client';

import useCountUp from '@/hooks/useCountUp';
import styles from './AnimatedGrade.module.css';

interface AnimatedGradeProps {
    label: string;
    grade: string; // "7,5" or "8,0"
}

export default function AnimatedGrade({ label, grade }: AnimatedGradeProps) {
    // Parse Dutch format (7,5) to number
    const numericGrade = parseFloat(grade.replace(',', '.'));
    const animatedValue = useCountUp(numericGrade, 2000);

    // Format back to Dutch (7,5)
    const displayGrade = animatedValue.toFixed(1).replace('.', ',');

    return (
        <div className={styles.gradeCard}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{displayGrade}</span>
        </div>
    );
}
