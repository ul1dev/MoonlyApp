'use client';

import { useState, useEffect } from 'react';
import Star from './Star';

const StarryNight = ({ children }: { children: React.ReactNode }) => {
    const [stars, setStars] = useState<
        {
            id: number;
            size: number;
            delay: number;
            duration: number;
            top: number;
            left: number;
        }[]
    >([]);

    useEffect(() => {
        const starCount = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = Array.from({ length: starCount }, (_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 3000,
            duration: Math.random() * 3 + 2,
            top: Math.random() * 100,
            left: Math.random() * 100,
        }));
        setStars(newStars);
    }, []);

    return (
        <div>
            <div className="fixed inset-0 bg-black overflow-hidden">
                {stars.map((star) => (
                    <Star
                        key={star.id}
                        size={star.size}
                        delay={star.delay}
                        duration={star.duration}
                        top={star.top}
                        left={star.left}
                    />
                ))}
            </div>
            <div className="relative top-0 left-0 z-50">{children}</div>
        </div>
    );
};

export default StarryNight;
