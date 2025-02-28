'use client';

import { useState } from 'react';
import { useMediaQuery } from '../../common/hooks/use-media-query';
import classNames from 'classnames';
import TgStar from '@/app/common/share/icons/TgStar';
import { useInfoModal } from '@/app/common/hocs/info-modal';

export default function StarsCardBtn({ price = '100' }) {
    const { openModal } = useInfoModal();
    const [loading, setLoading] = useState(false);

    const windowWidth = useMediaQuery();
    const spinnerSize = windowWidth < 540 ? 20 : 24;
    const starSize = windowWidth < 540 ? 17 : 18;

    const handleClick = () => {
        if (loading) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            openModal('Вы успешно приобрели 100 коинов!', 'success');
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
            <div className="flex justify-center items-center gap-[1px] w-full">
                {!loading && (
                    <>
                        <p className="font-semibold max-[540px]:text-base text-lg">
                            {price}
                        </p>
                        <div className="max-[540px]:-mt-[2px] -mt-[1px]">
                            <TgStar width={starSize} height={starSize} />
                        </div>
                    </>
                )}

                {loading && (
                    <div className="min-[540px]:my-[1.2px] mx-2">
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
