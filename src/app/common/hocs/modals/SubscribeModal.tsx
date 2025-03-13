'use client';

import { MouseEvent, useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';
import TeachIcon from '../../share/icons/Teach';
import Link from 'next/link';

interface Props {
    closeParentModal: Function;
}

export default function SubscribeModal({ closeParentModal }: Props) {
    const { t } = useTranslate();
    const [isModalClosing, setIsModalClosing] = useState(false);

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
                    {t('tutorials.needSubscribe')}
                </h3>

                <Link href="https://t.me/moonly_coin" className="w-full">
                    <button
                        className="bg-[#7E69AB] p-3 font-semibold text-xl rounded-lg w-full"
                        onClick={closeModal}
                    >
                        {t('tutorials.subscribe')}
                    </button>
                </Link>
            </div>
        </div>
    );
}
