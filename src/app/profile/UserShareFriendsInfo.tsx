'use client';

import { useInfoModal } from '../common/hocs/info-modal';
import { useScaledIconSize } from '../common/hooks/useScaledIconSize';
import { useTranslate } from '../common/hooks/useTranslate';
import FriendsIcon from './icons/Friends';

export default function UserShareFriendsInfo() {
    const { openModal } = useInfoModal();
    const { t } = useTranslate();
    const getScaledSize = useScaledIconSize();

    const iconsSize = getScaledSize(65, 40);

    return (
        <div
            className="cursor-pointer"
            onClick={() => openModal(t('info.friends'))}
        >
            <FriendsIcon width={iconsSize} height={iconsSize} />
        </div>
    );
}
