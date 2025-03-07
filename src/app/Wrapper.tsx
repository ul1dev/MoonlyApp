'use client';

import { Provider } from 'react-redux';
import StarsBackground from './common/hocs/stars-bg';
import TelegramWrapper from './common/hocs/telegram';
import store from './store';
import AuthWrapper from './common/hocs/auth';

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={store}>
            <StarsBackground>
                <TelegramWrapper>
                    <AuthWrapper>{children}</AuthWrapper>
                </TelegramWrapper>
            </StarsBackground>
        </Provider>
    );
}
