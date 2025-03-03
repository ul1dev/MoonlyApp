import StarsBackground from './common/hocs/stars-bg';
import TelegramWrapper from './common/hocs/telegram';

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // СДЕЛАТЬ ЗАГРУЗОЧНЫЙ ЭКРАН ПОКА ПОЛУЧАЮТСЯ ДАННЫЕ С БЭКА!!!!!!!!!!!

    return (
        <StarsBackground>
            <TelegramWrapper>{children}</TelegramWrapper>
        </StarsBackground>
    );
}
