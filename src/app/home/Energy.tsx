'use client';

import { useInfoModal } from '../common/hocs/info-modal';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { useTranslate } from '../common/hooks/useTranslate';
import useIsMobile from '../common/hooks/use-is-mobile';
import classNames from 'classnames';

export default function EnergyBar() {
    const { openModal } = useInfoModal();
    const { t } = useTranslate();
    const { data: userData } = useTypedSelector((state) => state.user);
    const isMobile = useIsMobile();

    const openInfoModal = () => openModal(t('info.energy'));

    return (
        <div
            className={classNames('fixed left-0 w-full', {
                'bottom-28': isMobile,
                'bottom-16 min-[540px]:bottom-20': !isMobile,
            })}
        >
            <div className="w-full min-w-80 max-w-3xl mx-auto">
                <div
                    className="bg-[#1D1D1D] rounded-lg px-3 py-2 max-[400px]:mx-4 max-sm:mx-8 mx-12"
                    onClick={openInfoModal}
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
        </div>
    );
}
