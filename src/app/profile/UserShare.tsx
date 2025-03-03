'use client';

import InfoModalProvider from '../common/hocs/info-modal';
import { useMediaQuery } from '../common/hooks/use-media-query';
import { useTranslate } from '../common/hooks/useTranslate';
import ShareIcon from './icons/Share';
import UserShareFriendsInfo from './UserShareFriendsInfo';

export default function UserShare() {
    const windowWidth = useMediaQuery();
    const { t } = useTranslate();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number) => {
        return Math.max(40, originalSize * scaleFactor);
    };

    const iconsSize = getScaledSize(65);

    return (
        <InfoModalProvider>
            <div className="relative max-[380px]:mx-2 max-[440px]:mx-3 mx-5 my-8">
                <div className="bg-[#4e4e4e]/25 blur-[2px] absolute top-0 left-0 w-full h-full rounded-2xl"></div>

                <div className="relative flex justify-between items-center max-[380px]:px-4 p-6">
                    <UserShareFriendsInfo />

                    <div className="flex max-[380px]:gap-3 max-[440px]:gap-5 gap-[30px]">
                        <div className="text-center">
                            <p className="font-black max-[380px]:text-lg max-[440px]:text-xl max-[680px]:text-2xl text-[28px] text-white">
                                10
                            </p>
                            <p className="font-semibold text-[#B2B2B2] max-[440px]:text-xs max-[680px]:text-sm text-base">
                                {t('profile.invitedUsers')}
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="font-black max-[380px]:text-lg max-[440px]:text-xl max-[680px]:text-2xl text-[28px] text-white">
                                10
                            </p>
                            <p className="font-semibold text-[#B2B2B2] max-[440px]:text-xs max-[680px]:text-sm text-base">
                                {t('profile.receivedCoins')}
                            </p>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <ShareIcon width={iconsSize} height={iconsSize} />
                    </div>
                </div>
            </div>
        </InfoModalProvider>
    );
}
