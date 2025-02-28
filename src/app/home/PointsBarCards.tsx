'use client';

import { useInfoModal } from '../common/hocs/info-modal';
import { useMediaQuery } from '../common/hooks/use-media-query';
import { useTranslate } from '../common/hooks/useTranslate';
import BoostsIcon from '../common/share/icons/Boosts';
import PixelGreenCoinIcon from '../common/share/icons/PixelGreenCoin';

export default function PointsBarCards() {
    const windowWidth = useMediaQuery();
    const { openModal } = useInfoModal();
    const { t } = useTranslate();

    const gpCoinSize = windowWidth < 440 ? 10 : windowWidth < 680 ? 12 : 14;
    const boostsWidth = windowWidth < 440 ? 9 : windowWidth < 680 ? 10.5 : 12;
    const boostsHeight = windowWidth < 440 ? 12 : windowWidth < 680 ? 14 : 16;

    return (
        <>
            <div
                className="cursor-pointer flex items-center justify-center relative max-[440px]:min-w-24 max-[440px]:min-h-16 max-[500px]:min-w-28 max-[500px]:min-h-20 max-[680px]:min-w-32 max-[680px]:min-h-[85px] min-w-40 min-h-24"
                onClick={() => openModal(t('info.boosts'))}
            >
                <div className="bg-[#4e4e4e]/25 rounded-2xl max-[400px]:border max-[400px]:border-[#777777] max-[400px]:shadow-none max-[440px]:shadow-[0px_0px_20px_0px_rgba(119,119,119,1.00)] shadow-[0px_0px_30px_0px_rgba(119,119,119,1.00)] max-[400px]:blur-[1px] blur-[2px] absolute top-0 left-0 w-full h-full"></div>
                <div className="max-[680px]:px-6 max-[680px]:py-3 px-12 py-5 text-center relative z-[100] mb-1">
                    <div className="text-white max-[680px]:text-2xl text-4xl font-black">
                        10
                    </div>
                    <div className="flex items-center max-[440px]:gap-[1.5px] max-[680px]:gap-[2px] gap-[3px] -ml-1.5">
                        <BoostsIcon width={boostsWidth} height={boostsHeight} />

                        <div className="text-[#b1b1b1] max-[440px]:text-xs max-[680px]:text-sm text-base font-semibold">
                            {t('home.boosts')}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="cursor-pointer flex items-center justify-center relative max-[440px]:min-w-24 max-[440px]:min-h-16 max-[500px]:min-w-28 max-[500px]:min-h-20 max-[680px]:min-w-32 max-[680px]:min-h-[85px] min-w-40 min-h-24"
                onClick={() => openModal(t('info.level'))}
            >
                <div className="bg-[#4e4e4e]/25 rounded-2xl max-[400px]:border max-[400px]:border-[#7E69AB] max-[400px]:shadow-none max-[440px]:shadow-[0px_0px_20px_0px_rgba(126,105,171,1.00)] shadow-[0px_0px_30px_0px_rgba(126,105,171,1.00)] max-[400px]:blur-[1px] blur-[2px] absolute top-0 left-0 w-full h-full"></div>
                <div className="max-[680px]:px-6 max-[680px]:py-3 px-12 py-5 text-center relative z-[100] mb-1">
                    <div className="text-white max-[680px]:text-2xl text-4xl font-black">
                        112
                    </div>
                    <div className="text-[#b1b1b1] max-[440px]:text-xs max-[680px]:text-sm text-base font-semibold">
                        {t('home.level')}
                    </div>
                </div>
            </div>
            <div
                className="cursor-pointer flex items-center justify-center relative max-[440px]:min-w-24 max-[440px]:min-h-16 max-[500px]:min-w-28 max-[500px]:min-h-20 max-[680px]:min-w-32 max-[680px]:min-h-[85px] min-w-40 min-h-24"
                onClick={() => openModal(t('info.coins'))}
            >
                <div className="bg-[#4e4e4e]/25 rounded-2xl max-[400px]:border max-[400px]:border-[#777777] max-[400px]:shadow-none max-[440px]:shadow-[0px_0px_20px_0px_rgba(119,119,119,1.00)] shadow-[0px_0px_30px_0px_rgba(119,119,119,1.00)] max-[400px]:blur-[1px] blur-[2px] absolute top-0 left-0 w-full h-full"></div>
                <div className="max-[680px]:px-6 max-[680px]:py-3 px-12 py-5 text-center relative z-[100] mb-1">
                    <div className="text-white max-[680px]:text-2xl text-4xl font-black">
                        13K
                    </div>
                    <div className="flex items-center max-[440px]:gap-[1.5px] max-[680px]:gap-[2px] gap-[3px] -ml-1.5">
                        <PixelGreenCoinIcon
                            width={gpCoinSize}
                            height={gpCoinSize}
                        />

                        <div className="text-[#b1b1b1] max-[440px]:text-xs max-[680px]:text-sm text-base font-semibold">
                            {t('home.coins')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
