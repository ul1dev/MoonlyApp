'use client';

import classNames from 'classnames';
import { useInfoModal } from '../common/hocs/info-modal';
import useIsMobile from '../common/hooks/use-is-mobile';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { useTranslate } from '../common/hooks/useTranslate';

export default function EnergyBar() {
    const isMobile = useIsMobile();
    const { openModal } = useInfoModal();
    const { t } = useTranslate();
    const { data: userData } = useTypedSelector((state) => state.user);

    return (
        <div
            className={classNames('flex justify-center', {
                'max-[380px]:pt-1 max-[440px]:pt-3 max-[500px]:pt-5 pt-6':
                    !isMobile,
                'max-[500px]:pt-8 pt-12': isMobile,
            })}
        >
            <div
                className="bg-[#1D1D1D] rounded-lg w-full min-w-80 max-w-3xl max-sm:mx-8 mx-12 px-3 py-2"
                onClick={() => openModal(t('info.energy'))}
            >
                <div className="flex justify-between text-sm">
                    <p className="text-[#B2B2B2]">{t('home.energy')}</p>
                    <p className="text-white">{userData.energy}/10000</p>
                </div>
                <div className="relative mt-2">
                    <div className="w-full h-2 bg-[#4E4E4E] rounded-full"></div>
                    <div
                        className="h-2 bg-[#DEE3E7] rounded-full absolute top-0 left-0"
                        style={{ width: `${userData.energy / 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
