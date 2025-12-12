import { useEffect, useState } from 'react';

export default function useKeyboardShortcut(
    key: string,
    callback: () => void,
    modifiers: { ctrl?: boolean; shift?: boolean; alt?: boolean } = {}
) {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

            const modifiersMatch =
                (modifiers.ctrl === undefined || cmdOrCtrl === modifiers.ctrl) &&
                (modifiers.shift === undefined || e.shiftKey === modifiers.shift) &&
                (modifiers.alt === undefined || e.altKey === modifiers.alt);

            if (e.key.toLowerCase() === key.toLowerCase() && modifiersMatch) {
                e.preventDefault();
                setIsPressed(true);
                callback();
            }
        };

        const handleKeyUp = () => {
            setIsPressed(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [key, callback, modifiers]);

    return isPressed;
}
