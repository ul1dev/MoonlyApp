'use client';

import PixelGreenCoinIcon from '../../common/share/icons/PixelGreenCoin';
import { useMediaQuery } from '../../common/hooks/use-media-query';
import PixelPurpleCoinIcon from '../../common/share/icons/PixelPurpleCoin';

export default function PointsCard({ count = '10', price = '100' }) {
    const windowWidth = useMediaQuery();

    const gCoinSize =
        windowWidth < 380
            ? 24
            : windowWidth < 440
            ? 26
            : windowWidth < 540
            ? 28
            : windowWidth < 680
            ? 30
            : 34;

    const pCoinSize = windowWidth < 540 ? 13 : 15;

    return (
        <div className="relative max-[380px]:px-4 px-6 py-4">
            <div className="left-0 top-0 absolute bg-[#4e4e4e]/70 rounded-2xl blur w-full h-full" />

            <div className="relative z-[100]">
                <div className="flex items-center justify-center gap-[3px] max-[380px]:pt-10 max-[380px]:pb-7 pt-14 pb-9">
                    <p className="text-white max-[380px]:text-2xl max-[540px]:text-3xl max-[680px]:text-[34px] text-4xl font-semibold">
                        {count}
                    </p>
                    <PixelGreenCoinIcon width={gCoinSize} height={gCoinSize} />
                </div>

                <div className="bg-white rounded-3xl py-1 px-14 cursor-pointer">
                    <div className="flex justify-center items-center gap-0.5 w-full">
                        <p className="font-semibold  max-[540px]:text-base text-lg">
                            {price}
                        </p>
                        <PixelPurpleCoinIcon
                            width={pCoinSize}
                            height={pCoinSize}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
