'use client';

import SimpleBar from 'simplebar-react';
import CoinsCard from './CoinsCard';
import { infoTexts } from '@/app/common/locale/info';
import InfoIcon from '@/app/common/share/icons/Info';
import { useMediaQuery } from '@/app/common/hooks/use-media-query';
import { useModal } from '@/app/common/hocs/info-modal';

export default function ShopAssortmentCoins() {
    const windowWidth = useMediaQuery();
    const { openModal } = useModal();

    const infoSize =
        windowWidth < 380
            ? 12
            : windowWidth < 440
            ? 14
            : windowWidth < 680
            ? 16
            : 18;

    return (
        <div>
            <div
                className="flex items-center cursor-pointer max-[440px]:gap-[3px] gap-[5px]"
                onClick={() => openModal(infoTexts.en.coins)}
            >
                <h3 className="max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] font-semibold text-white">
                    Coins
                </h3>
                <div className="max-[440px]:-mb-[3px] -mb-0.5">
                    <InfoIcon
                        width={infoSize}
                        height={infoSize}
                        color="#FFFFFF"
                        strokeWidth={4}
                    />
                </div>
            </div>
            <h4 className="text-[#A7A7A7] max-[440px]:text-sm text-base pt-2">
                Boosts
            </h4>

            <SimpleBar className="p-2 w-full">
                <div className="flex gap-4">
                    <CoinsCard count="1" price="30" />
                    <CoinsCard count="10" price="270" />
                    <CoinsCard count="100" price="2.5K" />
                    <CoinsCard count="200" price="4K" />
                    <CoinsCard count="300" price="5K" />
                    <div className="-ml-4">.</div>
                </div>
            </SimpleBar>
        </div>
    );
}
