// hooks/useEventListener.js
import { useEffect } from 'react';

const useEventListener = (eventName, handler, element = window) => {
    useEffect(() => {
        // Ensure element supports addEventListener
        if (!element || !element.addEventListener) return;

        const eventListener = (event) => handler(event);

        element.addEventListener(eventName, eventListener);

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, handler, element]);
};

export default useEventListener;
