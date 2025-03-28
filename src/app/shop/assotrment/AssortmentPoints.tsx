'use client';

import SimpleBar from 'simplebar-react';
import PointsCard from './PointsCard';
import InfoIcon from '@/app/common/share/icons/Info';
import { useMediaQuery } from '@/app/common/hooks/use-media-query';
import { useInfoModal } from '@/app/common/hocs/info-modal';
import { useTranslate } from '@/app/common/hooks/useTranslate';

export default function ShopAssortmentPoints() {
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
                    onClick={() => openModal(t('info.points'))}
                >
                    <h3 className="max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] font-semibold text-white">
                        {t('shop.points')}
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
                    <PointsCard count="1" price="100" numCount={1} />
                    <PointsCard count="10" price="1K" numCount={10} />
                    <PointsCard count="100" price="8K" numCount={100} />
                    <PointsCard count="1K" price="80K" numCount={1000} />
                    <PointsCard count="10K" price="800K" numCount={10000} />
                    <div className="-ml-4">.</div>
                </div>
            </SimpleBar>
        </div>
    );
}
