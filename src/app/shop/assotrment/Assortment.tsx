'use client';

import SimpleBar from 'simplebar-react';
import ShopAssortmentPoints from './AssortmentPoints';
import ShopAssortmentCoins from './AssortmentCoins';
import ShopAssortmentStars from './AssortmentStars';
import ModalProvider from '@/app/common/hocs/info-modal';

export default function ShopAssortment() {
    return (
        <div className="max-[380px]:pl-2 max-[440px]:pl-6 pl-10 min-[700px]:pr-10 max-[440px]:py-5 py-8 my-auto h-full">
            <ModalProvider>
                <SimpleBar style={{ maxHeight: '75vh' }} className="px-2">
                    <div className="flex flex-col gap-7">
                        <ShopAssortmentPoints />
                        <ShopAssortmentCoins />
                        <ShopAssortmentStars />
                    </div>
                </SimpleBar>
            </ModalProvider>
        </div>
    );
}
