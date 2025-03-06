'use client';

import { useMediaQuery } from '../../common/hooks/use-media-query';
import BoostsIcon from '@/app/common/share/icons/Boosts';
import CoinsCardBtn from './CoinsCardBtn';

export default function CoinsCard({
    count = '10',
    price = '100',
    numCount = 1,
}) {
    const windowWidth = useMediaQuery();

    const boostsHeight =
        windowWidth < 380
            ? 28
            : windowWidth < 440
            ? 33
            : windowWidth < 540
            ? 34
            : 36;

    const boostsWidth =
        windowWidth < 380
            ? 17
            : windowWidth < 440
            ? 19
            : windowWidth < 540
            ? 20
            : 22;

    return (
        <div className="relative max-[380px]:px-4 px-6 py-4">
            <div className="left-0 top-0 absolute bg-[#4e4e4e]/70 rounded-2xl w-full h-full" />

            <div className="relative z-[100]">
                <div className="flex items-center justify-center gap-[3px] max-[380px]:pt-10 max-[380px]:pb-7 pt-14 pb-9">
                    <p className="text-white max-[380px]:text-2xl max-[540px]:text-3xl max-[680px]:text-[34px] text-4xl font-semibold">
                        {count}
                    </p>
                    <BoostsIcon width={boostsWidth} height={boostsHeight} />
                </div>
                <CoinsCardBtn price={price} numCount={numCount} />
            </div>
        </div>
    );
}
