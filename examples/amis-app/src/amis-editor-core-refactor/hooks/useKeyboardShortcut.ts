// hooks/useKeyboardShortcut.js
import { useEffect } from 'react';

const useKeyboardShortcut = (keys, callback) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if all keys in the list are pressed
            if (keys.every(key => event[`${key}Key`] || event.key.toLowerCase() === key)) {
                callback(event);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [keys, callback]);
};

export default useKeyboardShortcut;
