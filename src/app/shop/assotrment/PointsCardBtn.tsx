'use client';

import { useState } from 'react';
import { useMediaQuery } from '../../common/hooks/use-media-query';
import classNames from 'classnames';
import PixelPurpleCoinIcon from '@/app/common/share/icons/PixelPurpleCoin';
import { useInfoModal } from '@/app/common/hocs/info-modal';
import { setCoinsBalance, setPointsBalance } from '@/app/store/reducers/users';
import { useTypedSelector } from '@/app/common/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { buyCoinsByPointsRequest } from '@/app/common/api/buyCoinsByPoints';

export default function PointsCardBtn({ price = '100', numCount = 1 }) {
    const { openModal } = useInfoModal();
    const [loading, setLoading] = useState(false);
    const { data: userData } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();

    const windowWidth = useMediaQuery();
    const pCoinSize = windowWidth < 540 ? 13 : 15;
    const spinnerSize = windowWidth < 540 ? 20 : 24;

    const handleClick = async () => {
        if (loading) return;

        setLoading(true);

        const buyData = await buyCoinsByPointsRequest({
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
            dispatch(setPointsBalance(buyData.pointsBalance));
            dispatch(setCoinsBalance(buyData.coinsBalance));

            if (locale === 'ru') {
                openModal(
                    `Вы успешно приобрели ${numCount} коин(ов)!`,
                    'success'
                );
            } else {
                openModal(
                    `You have successfully purchased ${numCount} coin(s)!`,
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
                        <PixelPurpleCoinIcon
                            width={pCoinSize}
                            height={pCoinSize}
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
