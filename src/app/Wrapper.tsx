'use client';

import { Provider } from 'react-redux';
import StarsBackground from './common/hocs/stars-bg';
import TelegramWrapper from './common/hocs/telegram';
import store from './store';
import AuthWrapper from './common/hocs/auth';
import ModalsWrapper from './common/hocs/modals';
import NeedMobileWrapper from './common/hocs/need-mobile';

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={store}>
            <StarsBackground>
                <NeedMobileWrapper>
                    <TelegramWrapper>
                        <AuthWrapper>
                            <ModalsWrapper>{children}</ModalsWrapper>
                        </AuthWrapper>
                    </TelegramWrapper>
                </NeedMobileWrapper>
            </StarsBackground>
        </Provider>
    );
}
