'use client';

import Footer from '../footer';
import PointsBar from '../home/PointsBar';
import ScoreBar from '../home/ScoreBar';
import ClickPad from '../home/ClickPad';
import { useEffect } from 'react';
import {
    init,
    viewport,
    themeParams,
    isFullscreen,
    requestFullscreen,
    initDataUser,
} from '@telegram-apps/sdk-react';
import { isTMA } from '@telegram-apps/bridge';

export default function HomeClient() {
    useEffect(() => {
        mountTMA();
    }, []);

    async function mountTMA() {
        if (isTMA()) {
            init();

            if (viewport.mount.isAvailable() && !viewport.isMounted()) {
                await viewport.mount();
            }

            if (themeParams.mount.isAvailable() && !themeParams.isMounted()) {
                await themeParams.mount();
            }

            if (viewport.expand.isAvailable()) {
                viewport.expand();
            }

            // НЕ РАБОТАЕТ РАСПОЗНОВАНИЕ ПОАТФОРМЫ!!!!!!!!!!!!!!

            // @ts-ignore
            const platform = window?.platform;

            const isMobile = platform === 'ios' || platform === 'android';

            if (
                requestFullscreen.isAvailable() &&
                !isFullscreen() &&
                isMobile
            ) {
                await requestFullscreen();
            }

            const locale = localStorage.getItem('locale');

            if (!locale) {
                const userData = initDataUser();
                localStorage.setItem('locale', userData?.language_code ?? 'ru');
            }
        }
    }

    return (
        <div className="pb-36">
            <PointsBar />
            <ScoreBar />
            <ClickPad />
            <Footer />
        </div>
    );
}
