'use client';

import React, { useEffect } from 'react';
import {
    init,
    viewport,
    themeParams,
    isFullscreen,
    requestFullscreen,
    initDataUser,
    miniApp,
    initData,
} from '@telegram-apps/sdk-react';
import { isTMA } from '@telegram-apps/bridge';
import { useDispatch } from 'react-redux';
import { setIsTmaMounted } from '@/app/store/reducers/telegram';

export default function TelegramWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const dispatch = useDispatch();

    useEffect(() => {
        mountTMA();
    }, []);

    async function mountTMA() {
        if (isTMA()) {
            init();

            if (viewport.mount.isAvailable() && !viewport.isMounted()) {
                await viewport.mount();
                if (viewport.expand.isAvailable()) {
                    viewport.expand();
                }
            }

            if (themeParams.mount.isAvailable() && !themeParams.isMounted()) {
                await themeParams.mount();
            }

            if (!miniApp.isMounted()) {
                await miniApp.mount();
                miniApp.setBottomBarColor('#000000');
                miniApp.setBackgroundColor('#000000');
                miniApp.setHeaderColor('#000000');
            }

            const ua = navigator.userAgent.toLowerCase();
            const isMobile = /android|iphone|ipad|mobile/i.test(ua);

            if (
                requestFullscreen.isAvailable() &&
                !isFullscreen() &&
                isMobile
            ) {
                await requestFullscreen();
            }

            initData.restore();

            const locale = localStorage.getItem('locale');
            if (!locale) {
                const userData = initDataUser();
                const userLang = userData?.language_code ?? '';

                const cisLanguages = ['ru', 'be', 'uk', 'kk', 'hy', 'az', 'et'];

                if (cisLanguages.includes(userLang)) {
                    localStorage.setItem('locale', 'ru');
                } else {
                    localStorage.setItem('locale', 'en');
                }
            }

            dispatch(setIsTmaMounted(true));
        }
    }

    return children;
}
