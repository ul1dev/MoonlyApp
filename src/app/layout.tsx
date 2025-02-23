import './global.scss';

export const metadata = {
    title: 'Moonly App',
    description: 'Описание',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
