import SimpleBar from 'simplebar-react';
import StarsCard from './PointsStars';

export default function ShopAssortmentStars() {
    return (
        <div>
            <h3 className="max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] font-semibold text-white">
                Stars
            </h3>
            <h4 className="text-[#A7A7A7] max-[440px]:text-sm text-base pt-2">
                Coins
            </h4>

            <SimpleBar className="p-2 w-full">
                <div className="flex gap-4">
                    <StarsCard count="1" price="20" />
                    <StarsCard count="10" price="180" />
                    <StarsCard count="50" price="850" />
                    <StarsCard count="100" price="1.5K" />
                    <StarsCard count="500" price="7K" />
                    <StarsCard count="1K" price="13K" />
                    <StarsCard count="5K" price="60K" />
                    <div className="-ml-4">.</div>
                </div>
            </SimpleBar>
        </div>
    );
}
