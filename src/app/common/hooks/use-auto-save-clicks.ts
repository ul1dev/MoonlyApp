import {
    markAsSending,
    selectClicksCount,
    sendingFailed,
} from '@/app/store/reducers/clicks';
import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendTapsRequest } from '../api/sendTaps';
import { useTypedSelector } from './useTypedSelector';

export const useAutoSaveClicks = () => {
    const dispatch = useDispatch();
    const totalClicks: number = useSelector(selectClicksCount);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isSendingRef = useRef(false);
    const pendingCountRef = useRef(0);
    const { data: userData } = useTypedSelector((state) => state.user);

    const saveClicks = useCallback(async () => {
        if (totalClicks === 0 || isSendingRef.current) return;

        const countToSend = totalClicks;
        isSendingRef.current = true;
        pendingCountRef.current = countToSend;

        dispatch(markAsSending(countToSend));

        const success = await sendTapsRequest({
            userId: userData.id,
            tapsCount: countToSend,
        });

        if (success) {
        } else {
            dispatch(sendingFailed());
        }

        isSendingRef.current = false;
        pendingCountRef.current = 0;
    }, [dispatch, totalClicks]);

    useEffect(() => {
        if (totalClicks > 0) {
            timerRef.current = setTimeout(saveClicks, 2000);
        }

        return () => {
            timerRef.current && clearTimeout(timerRef.current);
        };
    }, [totalClicks, saveClicks]);

    // Обработка перед закрытием страницы
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (totalClicks > 0) {
                e.preventDefault();
                navigator.sendBeacon(
                    '/api/save-clicks',
                    new Blob([JSON.stringify({ count: totalClicks })], {
                        type: 'application/json',
                    })
                );
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () =>
            window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [totalClicks]);
};
