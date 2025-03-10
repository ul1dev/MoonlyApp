'use client';

import Link from 'next/link';
import FortuneIcon from './icons/Fortune';
import { useScaledIconSize } from '../common/hooks/useScaledIconSize';

export default function ShopFortune() {
    const getScaledSize = useScaledIconSize();

    const fortuneWidth = getScaledSize(48, 32);
    const fortuneHeight = getScaledSize(50, 34);

    return (
        <Link href="/fortune">
            <FortuneIcon width={fortuneWidth} height={fortuneHeight} />
        </Link>
    );
}
