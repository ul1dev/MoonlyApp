import StarryNight from './StarryNight';

export default function StarsBackground({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <StarryNight>{children}</StarryNight>;
}
