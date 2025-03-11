'use client';

import { Provider } from 'react-redux';
import StarsBackground from './common/hocs/stars-bg';
import TelegramWrapper from './common/hocs/telegram';
import store from './store';
import AuthWrapper from './common/hocs/auth';
import ModalsWrapper from './common/hocs/modals';
import NeedMobileWrapper from './common/hocs/need-mobile';
import { useEffect } from 'react';
import InfoModalProvider from './common/hocs/info-modal';

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });
    }, []);

    return (
        <Provider store={store}>
            <StarsBackground>
                <NeedMobileWrapper>
                    <TelegramWrapper>
                        <AuthWrapper>
                            <ModalsWrapper>
                                <InfoModalProvider>
                                    {children}
                                </InfoModalProvider>
                            </ModalsWrapper>
                        </AuthWrapper>
                    </TelegramWrapper>
                </NeedMobileWrapper>
            </StarsBackground>
        </Provider>
    );
}
