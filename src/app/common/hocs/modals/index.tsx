import { ReactNode } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NewLevelModal from '../auth/NewLevelModal';
import AfkPointsModal from '../auth/AfkPointsModal';

interface Props {
    children: ReactNode;
}

export default function ModalsWrapper({ children }: Props) {
    const { isNewLevel, afkPointsCount } = useTypedSelector(
        (state) => state.user
    );

    return (
        <>
            {children}

            {isNewLevel && <NewLevelModal />}

            {afkPointsCount > 0 && <AfkPointsModal />}
        </>
    );
}
