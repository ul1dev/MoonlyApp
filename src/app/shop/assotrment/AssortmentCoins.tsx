import SimpleBar from 'simplebar-react';
import CoinsCard from './CoinsCard';

export default function ShopAssortmentCoins() {
    return (
        <div>
            <h3 className="max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] font-semibold text-white">
                Coins
            </h3>
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
