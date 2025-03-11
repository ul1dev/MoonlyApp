import { ReactNode } from 'react';
import useIsMobile from '../../hooks/use-is-mobile';
import NeedMobileView from './NeedModile';

interface Props {
    children: ReactNode;
}

export default function NeedMobileWrapper({ children }: Props) {
    const isMobile = useIsMobile();

    if (!isMobile) {
        return <NeedMobileView />;
    }

    return children;
}
