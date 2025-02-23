import StarryNight from './StarryNight';

export default function StartBackground({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <StarryNight>{children}</StarryNight>;
}
