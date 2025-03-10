'use client';

import { Provider } from 'react-redux';
import StarsBackground from './common/hocs/stars-bg';
import TelegramWrapper from './common/hocs/telegram';
import store from './store';
import AuthWrapper from './common/hocs/auth';
import ModalsWrapper from './common/hocs/modals';

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={store}>
            <StarsBackground>
                <TelegramWrapper>
                    <AuthWrapper>
                        <ModalsWrapper>{children}</ModalsWrapper>
                    </AuthWrapper>
                </TelegramWrapper>
            </StarsBackground>
        </Provider>
    );
}
