'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    init,
    viewport,
    themeParams,
    isFullscreen,
    requestFullscreen,
    initDataUser,
    miniApp,
} from '@telegram-apps/sdk-react';
import { isTMA } from '@telegram-apps/bridge';
import Footer from '@/app/footer';
import { usePathname } from 'next/navigation';
import useIsMobile from '../../hooks/use-is-mobile';

export default function TelegramWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSmallContent, setIsSmallContent] = useState<boolean>(false);
    const pathname = usePathname();

    const scrollableRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    // Для хранения начальной координаты касания
    const startYRef = useRef<number | null>(null);

    useEffect(() => {
        mountTMA();

        // Блокируем скролл вне контейнера .scrollable-element
        function handleGlobalTouchMove(e: TouchEvent) {
            const target = e.target as HTMLElement | null;
            if (!target?.closest('.scrollable-element')) {
                e.preventDefault();
            }
        }

        window.addEventListener('touchmove', handleGlobalTouchMove, {
            passive: false,
        });
        return () => {
            window.removeEventListener('touchmove', handleGlobalTouchMove);
        };
    }, []);

    // Определяем, мало ли контента (scrollHeight < высота окна)
    useEffect(() => {
        if (contentRef.current) {
            const naturalHeight = contentRef.current.scrollHeight;
            setIsSmallContent(naturalHeight < window.innerHeight);
        }
    }, [pathname]);

    // чтобы не появлялось пустое пространство и приложение не сворачивалось
    useEffect(() => {
        const scrollableEl = scrollableRef.current;
        if (!scrollableEl) return;

        function handleTouchStart(e: TouchEvent) {
            if (e.touches.length > 0) {
                startYRef.current = e.touches[0].pageY;
            }
        }

        function handleTouchMove(e: TouchEvent) {
            // Блокируем только если контента мало
            if (!isSmallContent || startYRef.current === null) return;

            const currentY = e.touches[0].pageY;
            const deltaY = currentY - startYRef.current;
            // Если пользователь тянет вверх (deltaY < 0), блокируем
            if (deltaY < 0) {
                e.preventDefault();
            }
        }

        scrollableEl.addEventListener('touchstart', handleTouchStart, {
            passive: false,
        });
        scrollableEl.addEventListener('touchmove', handleTouchMove, {
            passive: false,
        });

        return () => {
            scrollableEl.removeEventListener('touchstart', handleTouchStart);
            scrollableEl.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isSmallContent]);

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

            const locale = localStorage.getItem('locale');
            if (!locale) {
                const userData = initDataUser();
                localStorage.setItem('locale', userData?.language_code ?? 'ru');
            }
        }
    }

    return (
        <div
            style={{
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
        >
            <div
                className="min-w-80 max-w-3xl w-full mx-auto"
                style={{ height: '100%' }}
            >
                <div
                    ref={scrollableRef}
                    className="scrollable-element"
                    style={{
                        overflowY: 'scroll',
                        height: '100%',
                        overscrollBehaviorY: 'contain',
                    }}
                >
                    <div
                        ref={contentRef}
                        style={isSmallContent ? { minHeight: '101vh' } : {}}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
