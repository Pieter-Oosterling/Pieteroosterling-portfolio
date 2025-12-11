import styles from './SkeletonCard.module.css';

export default function SkeletonCard() {
    return (
        <div className={styles.card}>
            <div className={`${styles.image} ${styles.shimmer}`}></div>
            <div className={styles.content}>
                <div className={`${styles.line} ${styles.short} ${styles.shimmer}`}></div>
                <div className={`${styles.line} ${styles.long} ${styles.shimmer}`}></div>
                <div className={`${styles.line} ${styles.medium} ${styles.shimmer}`}></div>
            </div>
        </div>
    );
}
