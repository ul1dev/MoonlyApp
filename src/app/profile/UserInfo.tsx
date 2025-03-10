'use client';

import { useEffect, useState } from 'react';
import { slicedContinText } from '../common/assets/slicedContinText';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import ProfileIcon from '../footer/icons/ProfileIcon';
import Image from 'next/image';
import { initDataUser } from '@telegram-apps/sdk-react';
import { useScaledIconSize } from '../common/hooks/useScaledIconSize';

export default function UserInfo() {
    const { data } = useTypedSelector((state) => state.user);
    const { isTmaMounted } = useTypedSelector((state) => state.telegram);
    const [userPhotoUrl, setUserPhotoUrl] = useState<null | string>(null);
    const getScaledSize = useScaledIconSize();

    useEffect(() => {
        if (isTmaMounted) {
            const userData = initDataUser();
            if (userData?.photo_url) {
                setUserPhotoUrl(userData?.photo_url);
            }
        }
    }, [isTmaMounted]);

    const profileSize = getScaledSize(130, 80);

    return (
        <div className="flex flex-col items-center max-[440px]:pb-8 pt-20 pb-12">
            {userPhotoUrl ? (
                <Image
                    src={userPhotoUrl}
                    alt="photo"
                    onError={() => setUserPhotoUrl(null)}
                    style={{ width: profileSize, height: profileSize }}
                    width={profileSize}
                    height={profileSize}
                    className="rounded-full"
                />
            ) : (
                <ProfileIcon width={profileSize} height={profileSize} />
            )}

            <div
                className="max-[380px]:text-base max-[440px]:text-lg max-[680px]:text-xl text-2xl text-white max-[440px]:pt-1.5 pt-3"
                style={{ fontFamily: 'var(--font-rubik-mono-one)' }}
            >
                {slicedContinText(data.userName ?? data.firstName, 20)}
            </div>
        </div>
    );
}
