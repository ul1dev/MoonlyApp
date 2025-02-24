'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery() {
    const [windowWidth, setWindowWidth] = useState<number>(420);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        setWindowWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
}
