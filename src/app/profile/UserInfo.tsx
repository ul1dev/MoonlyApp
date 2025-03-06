'use client';

import { useMediaQuery } from '../common/hooks/use-media-query';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import ProfileIcon from '../footer/icons/ProfileIcon';

export default function UserInfo() {
    const { data } = useTypedSelector((state) => state.user);
    const windowWidth = useMediaQuery();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number) => {
        return Math.max(80, originalSize * scaleFactor);
    };

    const profileSize = getScaledSize(130);

    return (
        <div className="flex flex-col items-center max-[440px]:pb-8 pt-20 pb-12">
            <ProfileIcon width={profileSize} height={profileSize} />

            <div
                className="max-[380px]:text-base max-[440px]:text-lg max-[680px]:text-xl text-2xl text-white max-[440px]:pt-1.5 pt-3"
                style={{ fontFamily: 'var(--font-rubik-mono-one)' }}
            >
                {data.userName ?? data.firstName}
            </div>
        </div>
    );
}
