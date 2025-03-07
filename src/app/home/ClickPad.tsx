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

    const handleClick = (e: React.MouseEvent) => {
        dispatch(addPointsBalance(String(pointsByTapCount)));
        dispatch(increment());

        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const newClick = { x, y, id: Date.now() };
        setClicks((prev) => [...prev, newClick]);

        setTimeout(() => {
            setClicks((state) =>
                state.filter((item) => item.id !== newClick.id)
            );
        }, 550);

        if (hapticFeedback?.isSupported()) {
            hapticFeedback.impactOccurred('soft');
        }
    };

    return (
        <div
            className="pt-6 mx-auto cursor-pointer relative"
            style={{
                width: coinSize,
                height: coinSize,
            }}
            onClick={handleClick}
        >
            <BigMoonlyCoin width={coinSize} height={coinSize} />

            {clicks.map((click) => (
                <div
                    key={click.id}
                    className="select-none absolute text-white font-bold max-[380px]:text-3xl max-[440px]:text-4xl text-5xl animate__animated animate__fadeOutUp animate__bounce animate__fast"
                    style={{
                        left: `${click.x - 25}px`,
                        top: `${click.y - 25}px`,
                    }}
                >
                    +{getShortFormatedBalance(String(pointsByTapCount))}
                </div>
            ))}
        </div>
    );
}
