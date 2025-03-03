'use client';

import { useTranslate } from '../common/hooks/useTranslate';

export default function Nft() {
    const { t } = useTranslate();

    return (
        <div className="h-full">
            <div className="flex flex-col gap-3 justify-center items-center h-full w-full text-center pt-40 max-[380px]:px-6 max-[440px]:px-8 max-[580px]:px-10 px-20">
                <h3 className="text-white max-[440px]:text-2xl text-3xl">
                    {t('nft.soon')}
                </h3>
                <p className="max-[440px]:text-base text-lg text-gray-400">
                    {t('nft.soonDescr')}
                </p>
            </div>
        </div>
    );
}
