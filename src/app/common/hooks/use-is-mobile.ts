'use client';

import { useEffect, useState } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsModile] = useState(true);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        setIsModile(/android|iphone|ipad|mobile/i.test(ua));
    }, []);

    return isMobile;
};

export default useIsMobile;
