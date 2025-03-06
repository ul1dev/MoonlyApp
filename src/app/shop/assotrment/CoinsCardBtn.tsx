'use client';

import { useState } from 'react';
import { useMediaQuery } from '../../common/hooks/use-media-query';
import PixelGreenCoinIcon from '../../common/share/icons/PixelGreenCoin';
import classNames from 'classnames';
import { useInfoModal } from '@/app/common/hocs/info-modal';
import { buyBoostsRequest } from '@/app/common/api/buyBoosts';
import { useTypedSelector } from '@/app/common/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setBoostsBalance, setCoinsBalance } from '@/app/store/reducers/users';

export default function CoinsCardBtn({ price = '100', numCount = 1 }) {
    const { openModal } = useInfoModal();
    const [loading, setLoading] = useState(false);
    const { data: userData } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();

    const windowWidth = useMediaQuery();
    const gCoinSize = windowWidth < 540 ? 13 : 15;
    const spinnerSize = windowWidth < 540 ? 20 : 24;

    const handleClick = async () => {
        if (loading) return;

        setLoading(true);

        const buyData = await buyBoostsRequest({
            userId: userData.id,
            count: numCount,
        });

        setLoading(false);

        const locale = localStorage.getItem('locale');

        if (buyData.error) {
            if (locale === 'ru') {
                openModal(buyData.error.ruMessage ?? '', 'error');
            } else {
                openModal(buyData.error.enMessage ?? '', 'error');
            }
        } else {
            dispatch(setCoinsBalance(buyData.coinsBalance));
            dispatch(setBoostsBalance(buyData.boostsBalance));

            if (locale === 'ru') {
                openModal(
                    `Вы успешно приобрели ${numCount} буст(ов)!`,
                    'success'
                );
            } else {
                openModal(
                    `You have successfully purchased ${numCount} boost(s)!`,
                    'success'
                );
            }
        }
    };

    return (
        <div
            className={classNames('bg-white rounded-3xl py-1 px-14', {
                'cursor-pointer': !loading,
            })}
            onClick={handleClick}
            aria-disabled={loading}
        >
            <div className="flex justify-center items-center gap-0.5 w-full">
                {!loading && (
                    <>
                        <p className="font-semibold max-[540px]:text-base text-lg">
                            {price}
                        </p>
                        <PixelGreenCoinIcon
                            width={gCoinSize}
                            height={gCoinSize}
                        />
                    </>
                )}

                {loading && (
                    <div className="min-[540px]:my-[1.5px] mx-2">
                        <svg
                            className="spinner"
                            viewBox="0 0 50 50"
                            width={spinnerSize}
                            height={spinnerSize}
                        >
                            <circle
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                className="circular"
                                stroke="black"
                                strokeWidth={8}
                            />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
}
