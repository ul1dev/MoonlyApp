import { Inter, Rubik_Mono_One } from 'next/font/google';
import localFont from 'next/font/local';

import './global.scss';
import 'animate.css';
import LayoutWrapper from './Wrapper';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

const rubikOne = localFont({
    src: [
        {
            path: '/fonts/rubik-one/RubikOne-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-rubik-one',
    display: 'swap',
});

const rubikMonoOne = Rubik_Mono_One({
    weight: '400',
    variable: '--font-rubik-mono-one',
    display: 'swap',
    subsets: ['cyrillic', 'latin'],
});

export const metadata = {
    title: 'Moonly App',
    description: "Start now so you won't regret it later...",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                />
            </head>

            <body
                className={`${inter.variable} ${rubikOne.variable} ${rubikMonoOne.variable} min-w-80 max-w-3xl mx-auto`}
                style={{ overflow: 'hidden' }}
            >
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}
