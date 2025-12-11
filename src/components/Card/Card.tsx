import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    description?: string;
    href: string;
    gradient?: string;
    delay?: string;
}

export default function Card({ title, description, href, gradient, delay }: CardProps) {
    return (
        <Link
            href={href}
            className={styles.card}
            style={{
                '--gradient': gradient,
                animationDelay: delay
            } as React.CSSProperties}
        >
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {title} <span>-&gt;</span>
                </h2>
                {description && <p className={styles.description}>{description}</p>}
            </div>
            <div className={styles.glow} />
        </Link>
    );
}
