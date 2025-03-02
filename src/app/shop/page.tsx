import Footer from '../footer';
import ShopFortune from './Fortune';
import ShopBalance from './Balance';
import TgStarSystem from '../common/share/icons/TgStarSystem';
import ShopAssortment from './assotrment/Assortment';

import 'simplebar-react/dist/simplebar.min.css';
import './index.scss';

export default function Shop() {
    return (
        <div className="pt-14 pb-20">
            <div className="max-[380px]:px-4 max-[440px]:px-8 py-4 px-12 fixed w-full h-fit inset-0 bg-black shadow-xl min-w-80 max-w-3xl z-[1000] mx-auto">
                <div className="flex justify-between items-center">
                    <ShopFortune />
                    <ShopBalance />
                </div>
            </div>
            <ShopAssortment />
            <Footer />
            <TgStarSystem />
        </div>
    );
}
