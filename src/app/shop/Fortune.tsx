'use client';

import Link from 'next/link';
import { useMediaQuery } from '../common/hooks/use-media-query';
import FortuneIcon from './icons/Fortune';

export default function ShopFortune() {
    const windowWidth = useMediaQuery();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number, minSize: number) => {
        return Math.max(minSize, originalSize * scaleFactor);
    };

    const fortuneWidth = getScaledSize(48, 32);
    const fortuneHeight = getScaledSize(50, 34);

    return (
        <Link
            href="/fortune"
            className="max-[380px]:pt-4 max-[440px]:pt-6 pt-10"
        >
            <FortuneIcon width={fortuneWidth} height={fortuneHeight} />
        </Link>
    );
}
