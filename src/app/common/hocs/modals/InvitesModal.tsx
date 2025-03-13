'use client';

import { MouseEvent, useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';
import TeachIcon from '../../share/icons/Teach';
import { useInfoModal } from '../info-modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface Props {
    closeParentModal: Function;
}

export default function InvitesModal({ closeParentModal }: Props) {
    const { t } = useTranslate();
    const [isModalClosing, setIsModalClosing] = useState(false);
    const { data } = useTypedSelector((state) => state.user);
    const { openModal } = useInfoModal();

    const closeModal = () => {
        setIsModalClosing(true);

        setTimeout(() => {
            setIsModalClosing(false);
            closeParentModal();
        }, 500);
    };

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const shareUserLink = `https://t.me/MoonlyCoinBot/app?startapp=ref_${data.id}`;

    const copyText = async () => {
        closeModal();

        try {
            await navigator.clipboard.writeText(shareUserLink);

            openModal(t('share.copied'), 'success');
        } catch (err) {
            openModal(t('errors.errorTryAgain'), 'success');
        }
    };

    const iconSize = 45;

    return (
        <div
            className="fixed inset-0 z-[10000] flex justify-center items-center bg-black/50"
            onClick={handleBackdropClick}
        >
            <div
                className={`
                          shadow-lg w-full h-min max-w-sm min-w-[304px] bg-[#3b3b3b] rounded-2xl mx-2 max-[380px]:px-4 max-[440px]:px-6 px-8 py-4
                          ${
                              isModalClosing
                                  ? 'animate__bounceOut'
                                  : 'animate__bounceIn'
                          }
                          animate__animated animate__faster text-white flex flex-col items-center
                        `}
            >
                <div>
                    <TeachIcon width={iconSize} height={iconSize} />
                </div>

                <h3 className="text-xl text-[#ffffff] font-medium pt-5 pb-7 text-center">
                    {t('tutorials.inviteFriends')}
                </h3>

                <button
                    className="bg-[#7E69AB] p-3 font-semibold text-xl rounded-lg w-full"
                    onClick={copyText}
                >
                    {t('tutorials.copyLink')}
                </button>
            </div>
        </div>
    );
}
