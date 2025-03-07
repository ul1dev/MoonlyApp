'use client';

import Link from 'next/link';
import { useMediaQuery } from '../common/hooks/use-media-query';
import BoostsIcon from '../common/share/icons/Boosts';
import PixelGreenCoinIcon from '../common/share/icons/PixelGreenCoin';
import PixelPurpleCoinIcon from '../common/share/icons/PixelPurpleCoin';
import { useTranslate } from '../common/hooks/useTranslate';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { getLongFormatedBalance } from '../common/assets/getLongFormatedBalance';

export default function UserBalance() {
    const { data } = useTypedSelector((state) => state.user);
    const windowWidth = useMediaQuery();
    const { t } = useTranslate();

    const iconsSize =
        windowWidth < 380
            ? 16
            : windowWidth < 440
            ? 20
            : windowWidth < 680
            ? 22
            : 24;

    const boostWidth =
        windowWidth < 380
            ? 12
            : windowWidth < 440
            ? 15
            : windowWidth < 680
            ? 16.5
            : 18;

    return (
        <div className="max-[380px]:px-6 max-[440px]:px-8 px-12 flex flex-col gap-y-3">
            <div className="flex justify-between gap-3 items-center">
                <div className="flex gap-[10px] max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] items-center">
                    <p className="text-[#B2B2B2] font-medium">
                        {t('profile.points')}
                    </p>
                    <div className="flex gap-[3px] items-center">
                        <p className="text-white font-bold">
                            {getLongFormatedBalance(data.pointsBalance, 8)}
                        </p>
                        <div className="max-[680px]:-mt-[1px] -mt-0.5">
                            <PixelPurpleCoinIcon
                                width={iconsSize}
                                height={iconsSize}
                            />
                        </div>
                    </div>
                </div>
                <Link href="/">
                    <div className="bg-white rounded-3xl cursor-pointer -mt-1">
                        <p className="max-[380px]:text-xs max-[500px]:text-sm max-[680px]:text-[15px] text-base font-bold max-[440px]:px-5 max-[680px]:py-1 px-6 py-[5px]">
                            {t('profile.farm')}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="flex justify-between gap-3 items-center">
                <div className="flex gap-[10px] max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] items-center">
                    <p className="text-[#B2B2B2] font-medium">
                        {t('profile.coins')}
                    </p>
                    <div className="flex gap-[3px] items-center">
                        <p className="text-white font-bold">
                            {getLongFormatedBalance(data.coinsBalance, 8)}
                        </p>
                        <div className="max-[680px]:-mt-[1px] -mt-0.5">
                            <PixelGreenCoinIcon
                                width={iconsSize}
                                height={iconsSize}
                            />
                        </div>
                    </div>
                </div>
                <Link href="/shop">
                    <div className="border-2 border-white rounded-3xl cursor-pointer -mt-1">
                        <p className="max-[380px]:text-xs max-[500px]:text-sm max-[680px]:text-[15px] text-base font-bold max-[440px]:px-5 max-[680px]:py-1 px-6 py-[5px] text-white">
                            {t('profile.buy')}
                        </p>
                    </div>
                </Link>
            </div>
            <div className="flex justify-between gap-3 items-center">
                <div className="flex gap-[10px] max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] items-center">
                    <p className="text-[#B2B2B2] font-medium">
                        {t('profile.boosts')}
                    </p>
                    <div className="flex gap-[3px] items-center">
                        <p className="text-white font-bold">
                            {getLongFormatedBalance(
                                String(data.boostsBalance),
                                8
                            )}
                        </p>
                        <div className="max-[680px]:-mt-[1px] -mt-0.5">
                            <BoostsIcon width={boostWidth} height={iconsSize} />
                        </div>
                    </div>
                </div>
                <Link href="/shop">
                    <div className="border-2 border-white rounded-3xl cursor-pointer -mt-1">
                        <p className="max-[380px]:text-xs max-[500px]:text-sm max-[680px]:text-[15px] text-base font-bold max-[440px]:px-5 max-[680px]:py-1 px-6 py-[5px] text-white">
                            {t('profile.buy')}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
