import SimpleBar from 'simplebar-react';
import PointsCard from './PointsCard';

export default function ShopAssortmentPoints() {
    return (
        <div>
            <h3 className="max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] font-semibold text-white">
                Points
            </h3>
            <h4 className="text-[#A7A7A7] max-[440px]:text-sm text-base pt-2">
                Coins
            </h4>

            <SimpleBar className="p-2 w-full">
                <div className="flex gap-4">
                    <PointsCard count="10" price="1K" />
                    <PointsCard count="100" price="8K" />
                    <PointsCard count="1K" price="80K" />
                    <PointsCard count="10K" price="800K" />
                    <div className="-ml-4">.</div>
                </div>
            </SimpleBar>
        </div>
    );
}
