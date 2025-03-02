'use client';

import ShopAssortmentPoints from './AssortmentPoints';
import ShopAssortmentCoins from './AssortmentCoins';
import ShopAssortmentStars from './AssortmentStars';
import InfoModalProvider from '@/app/common/hocs/info-modal';

export default function ShopAssortment() {
    return (
        <div className="min-[700px]:px-10 max-[440px]:py-5 py-8 my-auto h-full">
            <InfoModalProvider>
                <div className="flex flex-col gap-7">
                    <ShopAssortmentPoints />
                    <ShopAssortmentCoins />
                    <ShopAssortmentStars />
                </div>
            </InfoModalProvider>
        </div>
    );
}
