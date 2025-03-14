'use client';

import { useInfoModal } from '../common/hocs/info-modal';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { useTranslate } from '../common/hooks/useTranslate';
import useIsMobile from '../common/hooks/use-is-mobile';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export default function EnergyBar() {
    const { openModal } = useInfoModal();
    const { t } = useTranslate();
    const { data: userData } = useTypedSelector((state) => state.user);
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);
    const [startY, setStartY] = useState<number>(0);

    const openInfoModal = () => openModal(t('info.energy'));

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            setStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            const currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;

            if (deltaY >= 1) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove, {
            passive: false,
        });

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
        };
    }, [startY]);

    return (
        <div
            ref={containerRef}
            className={classNames('fixed left-0 w-full', {
                'bottom-28': isMobile,
                'bottom-16 min-[540px]:bottom-20': !isMobile,
            })}
            style={{ touchAction: 'pan-x' }}
        >
            <div className="w-full min-w-80 max-w-3xl mx-auto">
                <div
                    className="bg-[#1D1D1D] rounded-lg px-3 py-2 max-[400px]:mx-4 max-sm:mx-8 mx-12"
                    onClick={openInfoModal}
                >
                    <div className="flex justify-between text-sm">
                        <p className="text-[#B2B2B2]">{t('home.energy')}</p>
                        <p className="text-white">
                            {userData.energy}/{userData.maxEnergy}
                        </p>
                    </div>
                    <div className="relative mt-2 rounded-[100px] overflow-hidden">
                        <div className="w-full h-2 bg-[#4E4E4E] rounded-[100px]"></div>
                        <div
                            className="h-2 bg-[#DEE3E7] rounded-[100px] absolute top-0 left-0"
                            style={{
                                width: `${(
                                    (userData.energy / userData.maxEnergy) *
                                    100
                                ).toFixed(2)}%`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
