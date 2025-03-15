'use client';

import { MouseEvent, useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';
import { useDispatch } from 'react-redux';
import { setIsEnergyLowModal } from '@/app/store/reducers/users';
import LowBatteryIcon from '../../share/icons/LowBattery';
import Link from 'next/link';

export default function LowEnergyModal() {
    const { t } = useTranslate();
    const [isModalClosing, setIsModalClosing] = useState(false);
    const dispatch = useDispatch();

    const closeModal = () => {
        setIsModalClosing(true);

        setTimeout(() => {
            setIsModalClosing(false);
            dispatch(setIsEnergyLowModal(false));
        }, 500);
    };

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const iconWidth = 26;
    const iconHeight = 44;

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
                    <LowBatteryIcon width={iconWidth} height={iconHeight} />
                </div>

                <h3 className="text-2xl text-[#ffffff] font-medium pt-5 pb-7 text-center">
                    {t('lowEnergy.title')}
                </h3>

                <p className="text-sm text-[#d5d5d5] font-medium pb-2 text-center">
                    {t('lowEnergy.canBuy')}
                </p>

                <Link href="/shop" className="w-full">
                    <button
                        className="bg-[#7E69AB] p-3 font-semibold text-xl rounded-lg w-full"
                        onClick={closeModal}
                    >
                        {t('lowEnergy.increase')}
                    </button>
                </Link>
            </div>
        </div>
    );
}
