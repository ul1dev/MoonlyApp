'use client';

import { useModal } from '../common/hocs/info-modal';
import { useMediaQuery } from '../common/hooks/use-media-query';
import { infoTexts } from '../common/locale/info';
import FriendsIcon from './icons/Friends';

export default function UserShareFriendsInfo() {
    const windowWidth = useMediaQuery();
    const { openModal } = useModal();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number) => {
        return Math.max(40, originalSize * scaleFactor);
    };

    const iconsSize = getScaledSize(65);

    return (
        <div
            className="cursor-pointer"
            onClick={() => openModal(infoTexts.en.friends)}
        >
            <FriendsIcon width={iconsSize} height={iconsSize} />
        </div>
    );
}
