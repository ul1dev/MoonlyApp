import {
    markAsSending,
    selectClicksCount,
    sendingFailed,
    sendingSuccessful,
} from '@/app/store/reducers/clicks';
import { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendTapsRequest } from '../api/sendTaps';
import { useTypedSelector } from './useTypedSelector';
import { setNewLevel } from '@/app/store/reducers/users';

export const useAutoSaveClicks = () => {
    const dispatch = useDispatch();
    const totalClicks: number = useSelector(selectClicksCount);
    const { data: userData } = useTypedSelector((state) => state.user);

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isSendingRef = useRef(false);
    const isAsyncSendingRef = useRef(false);
    const clicksRef = useRef(totalClicks);
    const isMountedRef = useRef(true);

    useEffect(() => {
        clicksRef.current = totalClicks;
    }, [totalClicks]);

    const saveClicks = useCallback(async () => {
        const countToSend = clicksRef.current;
        if (countToSend === 0 || isSendingRef.current) return;

        isSendingRef.current = true;
        try {
            dispatch(markAsSending(countToSend));

            const success = await sendTapsRequest({
                userId: userData.id,
                tapsCount: countToSend,
            });

            if (success) {
                dispatch(sendingSuccessful());

                if (success.isNewLevel) {
                    dispatch(setNewLevel(success.userLevel));
                }
            } else {
                dispatch(sendingFailed());
            }
        } catch (error) {
            dispatch(sendingFailed());
        } finally {
            isSendingRef.current = false;
        }
    }, [dispatch, userData.id]);

    useEffect(() => {
        if (totalClicks === 0) return;

        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            if (isMountedRef.current) {
                saveClicks();
            }
        }, 1000);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [totalClicks, saveClicks]);

    useEffect(() => {
        isMountedRef.current = true;

        return () => {
            isMountedRef.current = false;
            if (clicksRef.current > 0) {
                saveClicks();
            }
        };
    }, [saveClicks]);

    useEffect(() => {
        if (!isAsyncSendingRef.current) {
            isAsyncSendingRef.current = true;

            setTimeout(async () => {
                await saveClicks();
                isAsyncSendingRef.current = false;
            }, 5000);
        }
    }, [totalClicks]);
};
