'use client';

import classNames from 'classnames';
import { getLongFormatedBalance } from '../common/assets/getLongFormatedBalance';
import { useMediaQuery } from '../common/hooks/use-media-query';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import PixelCoinIcon from '../common/share/icons/PixelPurpleCoin';
import useIsMobile from '../common/hooks/use-is-mobile';

export default function ScoreBar() {
    const { data } = useTypedSelector((state) => state.user);
    const windowWidth = useMediaQuery();
    const isMobile = useIsMobile();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number) => {
        return Math.max(30, originalSize * scaleFactor);
    };

    const pixelCoinWidth = getScaledSize(50);
    const pixelCoinHeight = getScaledSize(50);

    return (
        <div
            className={classNames('flex justify-center gap-3 items-center', {
                'pt-6': isMobile,
            })}
        >
            <PixelCoinIcon width={pixelCoinWidth} height={pixelCoinHeight} />
            <div
                className="max-[340px]:text-2xl max-[500px]:text-3xl max-[680px]:text-4xl text-5xl text-white font-normal"
                style={{ fontFamily: 'var(--font-rubik-one)' }}
            >
                {getLongFormatedBalance(data.pointsBalance, 15)}
            </div>
        </div>
    );
}
