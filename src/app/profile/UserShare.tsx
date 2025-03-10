'use client';

import { useState } from 'react';
import { getShortFormatedBalance } from '../common/assets/getShortFormatedBalance';
import InfoModalProvider from '../common/hocs/info-modal';
import { useTranslate } from '../common/hooks/useTranslate';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import ShareIcon from './icons/Share';
import UserShareFriendsInfo from './UserShareFriendsInfo';
import { useScaledIconSize } from '../common/hooks/useScaledIconSize';
import ShareModal from './ShareModal';

export default function UserShare() {
    const { data } = useTypedSelector((state) => state.user);
    const { t } = useTranslate();
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [isShareModalClosing, setIsShareModalClosing] = useState(false);
    const getScaledSize = useScaledIconSize();

    const iconsSize = getScaledSize(65, 40);

    return (
        <InfoModalProvider>
            <div className="relative max-[380px]:mx-2 max-[440px]:mx-3 mx-5 my-8">
                <div className="bg-[#4e4e4e]/25 blur-[2px] absolute top-0 left-0 w-full h-full rounded-2xl"></div>

                <div className="relative flex justify-between items-center max-[380px]:px-4 p-6">
                    <UserShareFriendsInfo />

                    <div className="flex max-[440px]:gap-3 gap-[30px]">
                        <div className="text-center">
                            <p className="font-black max-[380px]:text-lg max-[440px]:text-xl max-[680px]:text-2xl text-[28px] text-white">
                                {getShortFormatedBalance(
                                    String(data.invitedUsersCount)
                                )}
                            </p>
                            <p className="font-semibold text-[#B2B2B2] max-[440px]:text-xs max-[680px]:text-sm text-base">
                                {t('profile.invitedUsers')}
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="font-black max-[380px]:text-lg max-[440px]:text-xl max-[680px]:text-2xl text-[28px] text-white">
                                {getShortFormatedBalance(
                                    String(data.invitedUsersCount * 100)
                                )}
                            </p>
                            <p className="font-semibold text-[#B2B2B2] max-[440px]:text-xs max-[680px]:text-sm text-base">
                                {t('profile.receivedCoins')}
                            </p>
                        </div>
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => setIsOpenShareModal(true)}
                    >
                        <ShareIcon width={iconsSize} height={iconsSize} />
                    </div>
                </div>
            </div>

            {isOpenShareModal && (
                <ShareModal
                    setIsShareModalClosing={setIsShareModalClosing}
                    setIsOpenShareModal={setIsOpenShareModal}
                    isShareModalClosing={isShareModalClosing}
                />
            )}
        </InfoModalProvider>
    );
}
