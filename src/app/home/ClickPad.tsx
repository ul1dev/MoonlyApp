'use client';

import { useState } from 'react';
import { useMediaQuery } from '../common/hooks/use-media-query';
import BigMoonlyCoin from './icons/BigMoonlyCoin';
import { hapticFeedback } from '@telegram-apps/sdk-react';
import { useDispatch } from 'react-redux';
import { addPointsBalance } from '../store/reducers/users';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { getShortFormatedBalance } from '../common/assets/getShortFormatedBalance';
import { increment } from '../store/reducers/clicks';
import { useAutoSaveClicks } from '../common/hooks/use-auto-save-clicks';

export default function ClickPad() {
    const [clicks, setClicks] = useState<any[]>([]);
    const windowWidth = useMediaQuery();
    const dispatch = useDispatch();
    const { data: userData } = useTypedSelector((state) => state.user);

    useAutoSaveClicks();

    const coinSize =
        windowWidth < 340
            ? 270
            : windowWidth < 380
            ? 300
            : windowWidth < 400
            ? 350
            : windowWidth < 440
            ? 370
            : windowWidth < 540
            ? 400
            : windowWidth < 680
            ? 450
            : 500;

    const pointsByTapCount = 1 * userData.level;

    const processInteraction = (
        clientX: number,
        clientY: number,
        currentTarget: EventTarget
    ) => {
        dispatch(addPointsBalance(String(pointsByTapCount)));
        dispatch(increment());

        const rect = (currentTarget as HTMLElement).getBoundingClientRect();

        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

        const newClick = { x, y, id: Date.now() };
        setClicks((prev) => [...prev, newClick]);

        setTimeout(() => {
            setClicks((state) =>
                state.filter((item) => item.id !== newClick.id)
            );
        }, 550);

        if (typeof window !== 'undefined' && hapticFeedback?.isSupported()) {
            hapticFeedback.impactOccurred('soft');
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('.click-effect')) return;

        const { clientX, clientY, currentTarget } = e;
        processInteraction(clientX, clientY, currentTarget);
    };

    const handleTouch = (e: React.TouchEvent) => {
        if ((e.target as HTMLElement).closest('.click-effect')) return;

        const touchEvent = e.nativeEvent;
        const currentTarget = e.currentTarget;

        let clientX: number;
        let clientY: number;

        if (touchEvent.touches?.length > 0) {
            clientX = touchEvent.touches[0].clientX;
            clientY = touchEvent.touches[0].clientY;
        } else {
            clientX = touchEvent.changedTouches[0].clientX;
            clientY = touchEvent.changedTouches[0].clientY;
        }

        processInteraction(clientX, clientY, currentTarget);
    };

    return (
        <div
            className="pt-6 mx-auto cursor-pointer relative"
            style={{
                width: coinSize,
                height: coinSize,
            }}
            onTouchStart={handleTouch}
        >
            <BigMoonlyCoin width={coinSize} height={coinSize} />

            {clicks.map((click) => (
                <div
                    key={click.id}
                    className="click-effect select-none absolute text-white font-bold max-[380px]:text-3xl max-[440px]:text-4xl text-5xl animate__animated animate__fadeOutUp animate__bounce animate__fast"
                    style={{
                        left: `${click.x - 25}px`,
                        top: `${click.y - 25}px`,
                        pointerEvents: 'none',
                    }}
                >
                    +{getShortFormatedBalance(String(pointsByTapCount))}
                </div>
            ))}
        </div>
    );
}
