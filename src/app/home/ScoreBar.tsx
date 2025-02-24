'use client';

import { useMediaQuery } from '../common/hooks/use-media-query';
import PixelCoinIcon from './icons/PixelCoin';

export default function ScoreBar() {
    const windowWidth = useMediaQuery();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number) => {
        return Math.max(30, originalSize * scaleFactor);
    };

    const pixelCoinWidth = getScaledSize(50);
    const pixelCoinHeight = getScaledSize(50);

    return (
        <div className="flex justify-center gap-3 items-center">
            <PixelCoinIcon width={pixelCoinWidth} height={pixelCoinHeight} />
            <div
                className="max-[340px]:text-2xl max-[500px]:text-3xl max-[680px]:text-4xl text-5xl text-white font-normal"
                style={{ fontFamily: 'var(--font-rubik-one)' }}
            >
                1 123 123 000
            </div>
        </div>
    );
}
