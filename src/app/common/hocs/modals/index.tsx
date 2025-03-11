import { ReactNode, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NewLevelModal from './NewLevelModal';
import AfkPointsModal from './AfkPointsModal';
import { useDispatch } from 'react-redux';
import { decEnergy, incEnergy } from '@/app/store/reducers/users';

interface Props {
    children: ReactNode;
}

export default function ModalsWrapper({ children }: Props) {
    const {
        isNewLevel,
        afkPointsCount,
        data: userData,
    } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            if (userData.energy < 10000) {
                if (userData.energy >= 9997) {
                    dispatch(incEnergy(10000 - userData.energy));
                } else {
                    dispatch(incEnergy(3));
                }
            }
        }, 1000);

        if (userData.energy === 10000) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [userData.energy]);

    return (
        <>
            {children}

            {isNewLevel && <NewLevelModal />}

            {afkPointsCount > 0 && <AfkPointsModal />}
        </>
    );
}
