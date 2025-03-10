'use client';

import { MouseEvent } from 'react';
import { useInfoModal } from '../common/hocs/info-modal';
import { useTranslate } from '../common/hooks/useTranslate';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import CloseIcon from '../common/share/icons/Close';
import { useScaledIconSize } from '../common/hooks/useScaledIconSize';
import { QRCodeSVG } from 'qrcode.react';
import Link from 'next/link';
import { useMediaQuery } from '../common/hooks/use-media-query';

interface Props {
    setIsShareModalClosing: Function;
    setIsOpenShareModal: Function;
    isShareModalClosing: boolean;
}

export default function ShareModal({
    setIsShareModalClosing,
    setIsOpenShareModal,
    isShareModalClosing,
}: Props) {
    const { data } = useTypedSelector((state) => state.user);
    const { t } = useTranslate();
    const getScaledSize = useScaledIconSize();
    const { openModal } = useInfoModal();
    const windowWidth = useMediaQuery();

    const closeSize = getScaledSize(18, 16);

    const closeModal = () => {
        setIsShareModalClosing(true);

        setTimeout(() => {
            setIsOpenShareModal(false);
            setIsShareModalClosing(false);
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

    return (
        <div
            className="fixed inset-0 z-[10000] flex justify-center items-center bg-black/50"
            onClick={handleBackdropClick}
        >
            <div
                className={`
                          shadow-lg w-full h-min max-w-sm min-w-[304px] bg-[#3b3b3b] rounded-2xl mx-2 max-[380px]:px-4 max-[440px]:px-6 px-8 py-4
                          ${
                              isShareModalClosing
                                  ? 'animate__fadeOutDown'
                                  : 'animate__fadeInUp'
                          }
                          animate__animated animate__faster text-white flex flex-col items-center
                        `}
            >
                <div className="flex justify-between w-full items-center">
                    <div></div>
                    <h3 className="text-xl font-medium">
                        {t('share.inviteFriend')}
                    </h3>
                    <button className=" cursor-pointer" onClick={closeModal}>
                        <CloseIcon
                            width={closeSize}
                            height={closeSize}
                            color="#ffffff"
                        />
                    </button>
                </div>

                <div className="py-7">
                    <QRCodeSVG
                        value={shareUserLink}
                        size={windowWidth > 340 ? 320 : 300}
                        includeMargin={true}
                        marginSize={2}
                        className="rounded-lg"
                        level="H"
                        imageSettings={{
                            src: '/moonly-1024.png',
                            height: 100,
                            width: 100,
                            excavate: true,
                        }}
                    />
                </div>

                <div className="flex flex-col gap-5 font-medium w-full">
                    <Link href={`https://t.me/share/url?url=${shareUserLink}`}>
                        <button className="bg-[#525252] py-2 px-3 rounded-lg w-full">
                            {t('share.send')}
                        </button>
                    </Link>

                    <button
                        className="bg-[#525252] py-2 px-3 rounded-lg"
                        onClick={copyText}
                    >
                        {t('share.copy')}
                    </button>

                    <button className="px-3 rounded-lg" onClick={closeModal}>
                        {t('share.close')}
                    </button>
                </div>
            </div>
        </div>
    );
}
