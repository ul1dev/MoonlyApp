'use client';

import { MouseEvent, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTranslate } from '../../hooks/useTranslate';
import { useDispatch } from 'react-redux';
import { resetIsNewLevel } from '@/app/store/reducers/users';
import { getShortFormatedBalance } from '../../assets/getShortFormatedBalance';

export default function NewLevelModal() {
    const { data } = useTypedSelector((state) => state.user);
    const { t } = useTranslate();
    const [isModalClosing, setIsModalClosing] = useState(false);
    const dispatch = useDispatch();

    const closeModal = () => {
        setIsModalClosing(true);

        setTimeout(() => {
            dispatch(resetIsNewLevel());
            setIsModalClosing(false);
        }, 500);
    };

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const levelView = getShortFormatedBalance(String(data.level));

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
                <h3 className="text-xl font-medium">
                    {t('newLevel.newLevel')}
                </h3>

                <h2 className="text-7xl font-black my-8 [text-shadow:_0px_0px_50px_rgb(169_129_255_/_1.00)]">
                    {levelView}
                </h2>

                <p className="text-xs text-[#b5b5b5] text-center pb-2">
                    {t('newLevel.willGet', { level: levelView })}
                </p>

                <button
                    className="bg-[#7E69AB] py-2 px-3 font-medium text-xl rounded-lg w-full"
                    onClick={closeModal}
                >
                    {t('newLevel.great')}
                </button>
            </div>
        </div>
    );
}
