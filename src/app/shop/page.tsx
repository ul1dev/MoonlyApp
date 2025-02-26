import StartBackground from '@/app/common/hocs/stars-bg';
import Footer from '../footer';
import ShopFortune from './Fortune';
import ShopBalance from './Balance';
import ShopBalanceCoins from './BalanceCoins';
import TgStarSystem from '../common/share/icons/TgStarSystem';
import ShopAssortment from './assotrment/Assortment';

import 'simplebar-react/dist/simplebar.min.css';
import './index.scss';

export default function Shop() {
    return (
        <StartBackground>
            <div>
                <div className="max-[380px]:px-4 max-[440px]:px-8 px-12">
                    <div className="flex justify-between items-center">
                        <ShopFortune />
                        <ShopBalance />
                    </div>
                    <div className="max-[550px]:flex hidden justify-center max-[380px]:pt-2 pt-3">
                        <ShopBalanceCoins />
                    </div>
                </div>
                <ShopAssortment />
                <Footer />
                <TgStarSystem />
            </div>
        </StartBackground>
    );
}
