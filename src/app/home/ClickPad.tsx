'use client';

import { useState } from 'react';
import { useMediaQuery } from '../common/hooks/use-media-query';
import BigMoonlyCoin from './icons/BigMoonlyCoin';

export default function ClickPad() {
    const [clicks, setClicks] = useState<any[]>([]);
    const windowWidth = useMediaQuery();

    const coinSize =
        windowWidth < 340
            ? 270
            : windowWidth < 380
            ? 300
            : windowWidth < 400
            ? 350
            : windowWidth < 440
            ? 370
            : windowWidth < 540
            ? 400
            : windowWidth < 680
            ? 450
            : 500;

    const handleClick = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const newClick = { x, y, id: Date.now() };
        setClicks((prev) => [...prev, newClick]);
    };

    return (
        <div
            className="pt-6 mx-auto cursor-pointer relative"
            style={{
                width: coinSize,
                height: coinSize,
            }}
            onClick={handleClick}
        >
            <BigMoonlyCoin width={coinSize} height={coinSize} />
            {clicks.map((click) => (
                <div
                    key={click.id}
                    className="absolute text-white font-bold max-[380px]:text-3xl max-[440px]:text-4xl text-5xl animate__animated animate__fadeOut animate__bounce animate__fast"
                    style={{
                        left: `${click.x - 25}px`,
                        top: `${click.y - 25}px`,
                    }}
                >
                    +1
                </div>
            ))}
        </div>
    );
}
