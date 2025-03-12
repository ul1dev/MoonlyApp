import {
    setAfkPointsCount,
    setLoading,
    setUserData,
} from '@/app/store/reducers/users';
import { useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getInitUserDataRequest } from '../../api/getInitUserData';
import { initDataStartParam, initDataUser } from '@telegram-apps/sdk-react';
import FullPageLoader from '@/app/loader';
import FullPageError from '@/app/error';

interface Props {
    children: ReactNode;
}

export default function AuthWrapper({ children }: Props) {
    const { loading, isLoaded } = useTypedSelector((state) => state.user);
    const { isTmaMounted } = useTypedSelector((state) => state.telegram);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isTmaMounted) {
            setData();
        }
    }, [isTmaMounted]);

    async function setData() {
        const starsParam = initDataStartParam();
        const userData = initDataUser();

        let referralId: string | null = null;

        if (starsParam) {
            for (let paramItem of starsParam.split('__')) {
                if (paramItem.includes('ref')) {
                    referralId = paramItem.split('_')[1];
                }
            }
        }

        let ip;
        let userAgent;

        try {
            const userInfoRes = await fetch('/api/user-info');

            const { ip: userIp, userAgent: userUA } = await userInfoRes.json();
            ip = userIp;
            userAgent = userUA;
        } catch (e) {}

        const initUserData = await getInitUserDataRequest({
            telegramId: String(userData?.id),
            firstName: userData?.first_name,
            lastName: userData?.last_name,
            userName: userData?.username,
            ip,
            userAgent,
            referralId,
        });

        if (initUserData?.user) {
            dispatch(setUserData(initUserData.user));
        }

        if (initUserData?.afkPointsCount && initUserData?.afkPointsCount > 0) {
            dispatch(setAfkPointsCount(initUserData.afkPointsCount));
        }

        dispatch(setLoading(false));
    }

    if (loading || !isTmaMounted) {
        return <FullPageLoader />;
    }

    if (!isLoaded) {
        return <FullPageError />;
    }

    return children;
}
