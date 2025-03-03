'use client';

import ShopFortune from './Fortune';
import ShopBalance from './Balance';
import TgStarSystem from '../common/share/icons/TgStarSystem';
import ShopAssortment from './assotrment/Assortment';

import 'simplebar-react/dist/simplebar.min.css';
import './index.scss';
import classNames from 'classnames';
import useIsMobile from '../common/hooks/use-is-mobile';
import UnscrollWrapper from '../common/hocs/telegram/Unscroll';

export default function ShopClient() {
    const isMobile = useIsMobile();

    return (
        <UnscrollWrapper>
            <div
                className={classNames('pb-20', {
                    'pt-14': !isMobile,
                    'pt-36': isMobile,
                })}
            >
                <div
                    className={classNames(
                        'max-[380px]:px-4 max-[440px]:px-8 pb-4 px-12 fixed w-full h-fit inset-0 bg-black shadow-xl min-w-80 max-w-3xl z-[1000] mx-auto',
                        {
                            'pt-24': isMobile,
                        }
                    )}
                >
                    <div className="flex justify-between items-center">
                        <ShopFortune />
                        <ShopBalance />
                    </div>
                </div>
                <ShopAssortment />
                <TgStarSystem />
            </div>
        </UnscrollWrapper>
    );
}
