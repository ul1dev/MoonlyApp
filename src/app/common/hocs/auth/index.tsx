import { setLoading, setUserData } from '@/app/store/reducers/users';
import { useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getInitUserDataRequest } from '../../api/getInitUserData';
import { initDataUser } from '@telegram-apps/sdk-react';
import FullPageLoader from '@/app/scroll';

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
        const userData = initDataUser();

        const initUserData = await getInitUserDataRequest({
            telegramId: String(userData?.id),
            firstName: userData?.first_name,
            lastName: userData?.last_name,
            userName: userData?.username,
        });

        if (initUserData) {
            dispatch(setUserData(initUserData));
        }

        dispatch(setLoading(false));
    }

    if (loading || !isTmaMounted || !isLoaded) {
        return <FullPageLoader />;
    }

    return children;
}

// СДЕЛАТЬ ОТОБРАЖЕНИЕ ВСЕХ ЦИФР С СОКРАЩЕНИЕМ И С ПРОБЕЛАМИ В POINTS И ТАК ГДЕ НАДО

// СДЕЛАТЬ РЕФЕРАЛКИ

// СДЕЛАТЬ ТАПЫ
