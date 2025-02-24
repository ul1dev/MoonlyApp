import './global.scss';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

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
            <body
                className={`${inter.variable} ${rubikOne.variable} min-w-80 max-w-3xl mx-auto`}
            >
                {children}
            </body>
        </html>
    );
}
