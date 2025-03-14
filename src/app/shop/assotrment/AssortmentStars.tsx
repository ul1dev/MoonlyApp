'use client';

import SimpleBar from 'simplebar-react';
import StarsCard from './StarsCard';
import InfoIcon from '@/app/common/share/icons/Info';
import { useMediaQuery } from '@/app/common/hooks/use-media-query';
import { useInfoModal } from '@/app/common/hocs/info-modal';
import { useTranslate } from '@/app/common/hooks/useTranslate';
import StarsEnergyCard from './StarsEnergyCard';

export default function ShopAssortmentStars() {
    const windowWidth = useMediaQuery();
    const { openModal } = useInfoModal();
    const { t } = useTranslate();

    const infoSize =
        windowWidth < 380
            ? 12
            : windowWidth < 440
            ? 14
            : windowWidth < 680
            ? 16
            : 18;

    return (
        <div className="pr-2">
            <div className="pl-2">
                <div
                    className="flex items-center cursor-pointer w-fit max-[440px]:gap-[3px] gap-[5px]"
                    onClick={() => openModal(t('info.stars'))}
                >
                    <h3 className="max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] font-semibold text-white">
                        {t('shop.stars')}
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
                    {t('shop.coins')}
                </h4>
            </div>

            <SimpleBar className="p-2 w-full">
                <div className="flex gap-4">
                    <StarsCard count="1" price="20" numCount={1} />
                    <StarsCard count="10" price="180" numCount={10} />
                    <StarsCard count="50" price="850" numCount={50} />
                    <StarsCard count="100" price="1.5K" numCount={100} />
                    <StarsCard count="500" price="7K" numCount={500} />
                    <StarsCard count="1K" price="13K" numCount={1000} />
                    <StarsCard count="5K" price="60K" numCount={5000} />
                    <div className="-ml-4">.</div>
                </div>
            </SimpleBar>

            <div className="pl-2">
                <h4 className="text-[#A7A7A7] max-[440px]:text-sm text-base pt-2">
                    {t('shop.energy')}
                </h4>
            </div>

            <SimpleBar className="p-2 w-full">
                <div className="flex gap-4">
                    <StarsEnergyCard count="+100" price="200" numCount={100} />
                    <StarsEnergyCard count="+500" price="900" numCount={500} />
                    <StarsEnergyCard
                        count="+1000"
                        price="1700"
                        numCount={1000}
                    />
                    <StarsEnergyCard
                        count="+5000"
                        price="8000"
                        numCount={8000}
                    />
                    <div className="-ml-4">.</div>
                </div>
            </SimpleBar>
        </div>
    );
}
