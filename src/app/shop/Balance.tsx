'use client';

import { useTranslate } from '../common/hooks/useTranslate';
import ShopBalanceCoins from './BalanceCoins';

export default function ShopBalance() {
    const { t } = useTranslate();

    return (
        <div className="flex items-center max-[680px]:gap-3 gap-6 max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] max-[380px]:pt-4 max-[440px]:pt-6 max-[550px]:pt-9 max-[680px]:pt-11 pt-10">
            <div className="max-[550px]:hidden">
                <ShopBalanceCoins />
            </div>

            <div className="bg-white rounded-3xl cursor-pointer">
                <p className="max-[380px]:text-xs max-[500px]:text-sm max-[680px]:text-[15px] text-base font-bold max-[440px]:px-5 max-[680px]:py-1 px-6 py-[5px]">
                    {t('shop.topUp')}
                </p>
            </div>
        </div>
    );
}
