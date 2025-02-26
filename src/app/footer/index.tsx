'use client';

import Link from 'next/link';
import NftIcon from './icons/NftIcon';
import ShopIcon from './icons/ShopIcon';
import HomeIcon from './icons/HomeIcon';
import CoinsIcon from './icons/CoinsIcon';
import ProfileIcon from './icons/ProfileIcon';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '../common/hooks/use-media-query';

export default function Footer() {
    const pathname = usePathname();
    const windowWidth = useMediaQuery();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number) => {
        return Math.max(30, originalSize * scaleFactor);
    };

    const nftWidth = getScaledSize(47);
    const nftHeight = getScaledSize(50);

    const shopWidth = getScaledSize(50);
    const shopHeight = getScaledSize(42);

    const homeWidth = getScaledSize(45);
    const homeHeight = getScaledSize(45);

    const coinsWidth = getScaledSize(50);
    const coinsHeight = getScaledSize(50);

    const profileWidth = getScaledSize(48);
    const profileHeight = getScaledSize(48);

    return (
        <div className="bg-black flex justify-between gap-3 rounded-2xl py-5 max-sm:px-8 px-12 items-center fixed bottom-0 w-full min-w-80 max-w-3xl">
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
                    strokeColor={pathname === '/profit' ? '#FFFFFF' : '#4E4E4E'}
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
    );
}
