import { ReactNode, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NewLevelModal from './NewLevelModal';
import AfkPointsModal from './AfkPointsModal';
import { useDispatch } from 'react-redux';
import { incEnergy } from '@/app/store/reducers/users';
import MainGoalModal from './MainGoalModal';
import InvitesModal from './InvitesModal';
import BuyBoostsModal from './BuyBoostsModal';
import SubscribeModal from './SubscribeModal';

interface Props {
    children: ReactNode;
}

type TeachModalsType = 'mainGoal' | 'invites' | 'buyBoosts' | 'subscribe';

export default function ModalsWrapper({ children }: Props) {
    const {
        isNewLevel,
        afkPointsCount,
        data: userData,
    } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();
    const [teachOpenedModal, setTeachOpenedModal] =
        useState<null | TeachModalsType>(null);

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

    useEffect(() => {
        const interval = setInterval(() => {
            if (isNewLevel || afkPointsCount > 0 || teachOpenedModal) return;

            const items: {
                localStorageTitle: string;
                itemTitle: TeachModalsType;
            }[] = [
                {
                    localStorageTitle: 'isOpenedMainGoalTutor',
                    itemTitle: 'mainGoal',
                },
                {
                    localStorageTitle: 'isOpenedInvitesTutor',
                    itemTitle: 'invites',
                },
                {
                    localStorageTitle: 'isOpenedBuyBoostsTutor',
                    itemTitle: 'buyBoosts',
                },
                {
                    localStorageTitle: 'isOpenedSybscribeTutor',
                    itemTitle: 'subscribe',
                },
            ];

            for (let { localStorageTitle, itemTitle } of items) {
                const isOpened = localStorage.getItem(localStorageTitle);

                if (!isOpened) {
                    return setTeachOpenedModal(itemTitle);
                }
            }
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    const closeParentModalHandler = (itemTitle: string) => {
        setTeachOpenedModal(null);
        localStorage.setItem(itemTitle, 'true');
    };

    return (
        <>
            {children}

            {teachOpenedModal === 'mainGoal' && (
                <MainGoalModal
                    closeParentModal={() =>
                        closeParentModalHandler('isOpenedMainGoalTutor')
                    }
                />
            )}

            {teachOpenedModal === 'invites' && (
                <InvitesModal
                    closeParentModal={() =>
                        closeParentModalHandler('isOpenedInvitesTutor')
                    }
                />
            )}

            {teachOpenedModal === 'buyBoosts' && (
                <BuyBoostsModal
                    closeParentModal={() =>
                        closeParentModalHandler('isOpenedBuyBoostsTutor')
                    }
                />
            )}

            {teachOpenedModal === 'subscribe' && (
                <SubscribeModal
                    closeParentModal={() =>
                        closeParentModalHandler('isOpenedSybscribeTutor')
                    }
                />
            )}

            {isNewLevel && <NewLevelModal />}

            {afkPointsCount > 0 && <AfkPointsModal />}
        </>
    );
}
