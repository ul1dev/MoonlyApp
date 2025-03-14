'use client';

import { useState } from 'react';
import { useMediaQuery } from '../../common/hooks/use-media-query';
import classNames from 'classnames';
import TgStar from '@/app/common/share/icons/TgStar';
import { useInfoModal } from '@/app/common/hocs/info-modal';
import { invoice } from '@telegram-apps/sdk-react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@/app/common/hooks/useTypedSelector';
import { setEnergy, setMaxEnergy } from '@/app/store/reducers/users';
import { getUserDataByIdRequest } from '@/app/common/api/getUserData';
import { useTranslate } from '@/app/common/hooks/useTranslate';
import { buyEnergyByStarsRequest } from '@/app/common/api/buyEnergyByStars';

export default function StarsEnergyCardBtn({ price = '200', numCount = 100 }) {
    const { openModal } = useInfoModal();
    const [loading, setLoading] = useState(false);
    const { data: userData } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();
    const { t } = useTranslate();

    const windowWidth = useMediaQuery();
    const spinnerSize = windowWidth < 540 ? 20 : 24;
    const starSize = windowWidth < 540 ? 17 : 18;

    const handleClick = async () => {
        if (loading) return;

        setLoading(true);

        const locale = localStorage.getItem('locale');

        try {
            const buyData = await buyEnergyByStarsRequest({
                userId: userData.id,
                count: numCount,
            });

            const payStatus = await invoice.open(
                buyData?.invoiceLink?.replace('https://t.me/$', '')
            );

            if (payStatus === 'paid') {
                const newUserData = await getUserDataByIdRequest(userData.id);

                if (newUserData) {
                    dispatch(setMaxEnergy(newUserData.maxEnergy));
                    dispatch(setEnergy(newUserData.energy));
                }

                if (locale === 'ru') {
                    openModal(
                        `Вы успешно приобрели ${numCount} энергии!`,
                        'success'
                    );
                } else {
                    openModal(
                        `You have successfully purchased ${numCount} energy!`,
                        'success'
                    );
                }
            } else {
                openModal(t('errors.paymentFailed'), 'error');
            }
        } catch (e) {
            openModal(t('errors.errorTryAgain'), 'error');
        } finally {
            setLoading(false);
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
