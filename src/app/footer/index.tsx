'use client';

import Link from 'next/link';
import NftIcon from './icons/NftIcon';
import ShopIcon from './icons/ShopIcon';
import HomeIcon from './icons/HomeIcon';
import CoinsIcon from './icons/CoinsIcon';
import ProfileIcon from './icons/ProfileIcon';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import useIsMobile from '../common/hooks/use-is-mobile';
import { useScaledIconSize } from '../common/hooks/useScaledIconSize';

export default function Footer() {
    const pathname = usePathname();
    const getScaledSize = useScaledIconSize();
    const isMobile = useIsMobile();

    const nftWidth = getScaledSize(47, 30);
    const nftHeight = getScaledSize(50, 30);

    const shopWidth = getScaledSize(50, 30);
    const shopHeight = getScaledSize(42, 30);

    const homeWidth = getScaledSize(45, 30);
    const homeHeight = getScaledSize(45, 30);

    const coinsWidth = getScaledSize(50, 30);
    const coinsHeight = getScaledSize(50, 30);

    const profileWidth = getScaledSize(48, 30);
    const profileHeight = getScaledSize(48, 30);

    return (
        <div className="fixed bottom-0 left-0 w-full">
            <div
                className={classNames(
                    'bg-black flex justify-between gap-3 pt-5 max-sm:px-8 px-12 items-center w-full min-w-80 max-w-3xl mx-auto z-[1000]',
                    {
                        'pb-12': isMobile,
                        'pb-1': !isMobile,
                    }
                )}
            >
                <Link href="/nft">
                    <NftIcon
                        width={nftWidth}
                        height={nftHeight}
                        color={pathname === '/nft' ? '#FFFFFF' : '#4E4E4E'}
                    />
                </Link>
                <Link href="/profit">
                    <CoinsIcon
                        width={coinsWidth}
                        height={coinsHeight}
                        color={pathname === '/profit' ? '#CACACA' : '#313131'}
                        strokeColor={
                            pathname === '/profit' ? '#FFFFFF' : '#4E4E4E'
                        }
                        strokeWidth={5}
                    />
                </Link>
                <Link href="/">
                    <HomeIcon
                        width={homeWidth}
                        height={homeHeight}
                        color={pathname === '/' ? '#FFFFFF' : '#4E4E4E'}
                    />
                </Link>
                <Link href="/shop">
                    <ShopIcon
                        width={shopWidth}
                        height={shopHeight}
                        color={pathname === '/shop' ? '#FFFFFF' : '#4E4E4E'}
                    />
                </Link>
                <Link href="/profile">
                    <ProfileIcon
                        width={profileWidth}
                        height={profileHeight}
                        color={pathname === '/profile' ? '#FFFFFF' : '#4E4E4E'}
                    />
                </Link>
            </div>
        </div>
    );
}
