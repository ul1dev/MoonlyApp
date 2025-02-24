'use client';

import { useMediaQuery } from '../common/hooks/use-media-query';
import BigMoonlyCoin from './icons/BigMoonlyCoin';

export default function ClickPad() {
    const windowWidth = useMediaQuery();

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

    return (
        <div
            className="flex pt-6 mx-auto cursor-pointer"
            style={{
                width: coinSize,
                height: coinSize,
            }}
        >
            <BigMoonlyCoin width={coinSize} height={coinSize} />
        </div>
    );
}
