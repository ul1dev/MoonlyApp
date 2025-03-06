'use client';

import { useMediaQuery } from '../common/hooks/use-media-query';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import BoostsIcon from '../common/share/icons/Boosts';
import PixelGreenCoinIcon from '../common/share/icons/PixelGreenCoin';
import PixelPurpleCoinIcon from '../common/share/icons/PixelPurpleCoin';

export default function ShopBalanceCoins() {
    const { data } = useTypedSelector((state) => state.user);
    const windowWidth = useMediaQuery();

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
        <div className="flex items-center max-[680px]:gap-3 gap-6">
            <div className="flex gap-[3px] items-center">
                <p className="text-white font-medium">{data.pointsBalance}</p>
                <div className="max-[680px]:-mt-[1px] -mt-0.5">
                    <PixelPurpleCoinIcon width={iconsSize} height={iconsSize} />
                </div>
            </div>
            <div className="flex gap-[3px] items-center">
                <p className="text-white font-medium">{data.coinsBalance}</p>
                <div className="max-[680px]:-mt-[1px] -mt-0.5">
                    <PixelGreenCoinIcon width={iconsSize} height={iconsSize} />
                </div>
            </div>
            <div className="flex gap-[3px] items-center">
                <p className="text-white font-medium">{data.boostsBalance}</p>
                <div className="max-[680px]:-mt-[1px] -mt-0.5">
                    <BoostsIcon width={boostWidth} height={iconsSize} />
                </div>
            </div>
        </div>
    );
}
