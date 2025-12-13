import { useState, useEffect } from 'react';

export default function useCountUp(end: number, duration: number = 2000): number {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isNaN(end) || end === 0) {
            setCount(0);
            return;
        }

        let startTime: number | null = null;
        const startValue = 0;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = startValue + (end - startValue) * easeOutQuart;

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
}
