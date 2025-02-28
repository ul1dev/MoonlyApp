'use client';

import { useState } from 'react';
import { useMediaQuery } from '../../common/hooks/use-media-query';
import PixelGreenCoinIcon from '../../common/share/icons/PixelGreenCoin';
import classNames from 'classnames';
import { useInfoModal } from '@/app/common/hocs/info-modal';

export default function CoinsCardBtn({ price = '100' }) {
    const { openModal } = useInfoModal();
    const [loading, setLoading] = useState(false);

    const windowWidth = useMediaQuery();
    const gCoinSize = windowWidth < 540 ? 13 : 15;
    const spinnerSize = windowWidth < 540 ? 20 : 24;

    const handleClick = () => {
        if (loading) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            openModal('Вы успешно приобрели 100 бустов!', 'success');
        }, 2000);
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
                            />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
}
