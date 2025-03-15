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
import LowEnergyModal from './LowEnergyModal';

interface Props {
    children: ReactNode;
}

type TeachModalsType = 'mainGoal' | 'invites' | 'buyBoosts' | 'subscribe';

export default function ModalsWrapper({ children }: Props) {
    const {
        isNewLevel,
        isEnergyLowModal,
        afkPointsCount,
        data: userData,
    } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();
    const [teachOpenedModal, setTeachOpenedModal] =
        useState<null | TeachModalsType>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (userData.energy < 1000) {
                dispatch(incEnergy(1));
            }
        }, 3600);

        if (userData.energy === 1000) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [userData.energy]);

    const tutorItems: {
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

    useEffect(() => {
        let needIntervalCount = 0;

        for (let { localStorageTitle } of tutorItems) {
            const isOpened = localStorage.getItem(localStorageTitle);

            if (!isOpened) {
                needIntervalCount++;
            }
        }

        if (needIntervalCount) {
            setTimeout(checkTutors, 2000);
        }

        if (needIntervalCount > 1) {
            const interval = setInterval(checkTutors, 60000);

            return () => clearInterval(interval);
        }
    }, []);

    function checkTutors() {
        if (
            isEnergyLowModal ||
            isNewLevel ||
            afkPointsCount > 0 ||
            teachOpenedModal
        )
            return;

        for (let { localStorageTitle, itemTitle } of tutorItems) {
            const isOpened = localStorage.getItem(localStorageTitle);

            if (!isOpened) {
                return setTeachOpenedModal(itemTitle);
            }
        }
    }

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

            {isEnergyLowModal && <LowEnergyModal />}

            {isNewLevel && <NewLevelModal />}

            {afkPointsCount > 0 && <AfkPointsModal />}
        </>
    );
}
