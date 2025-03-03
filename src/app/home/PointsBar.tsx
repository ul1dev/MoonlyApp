'use client';

import classNames from 'classnames';
import InfoModalProvider from '../common/hocs/info-modal';
import useIsMobile from '../common/hooks/use-is-mobile';
import PointsBarCards from './PointsBarCards';

export default function PointsBar() {
    const isMobile = useIsMobile();

    return (
        <InfoModalProvider>
            <div
                className={classNames(
                    'flex justify-center max-[340px]:gap-1 max-[400px]:gap-4 max-[440px]:gap-6 max-[540px]:gap-8 max-[680px]:gap-12 gap-16',
                    {
                        'max-[500px]:pb-8 pb-12 max-[380px]:pt-1 max-[440px]:pt-3 max-[500px]:pt-5 pt-6':
                            !isMobile,
                        'max-[500px]:py-8 py-12': isMobile,
                    }
                )}
            >
                <PointsBarCards />
            </div>
        </InfoModalProvider>
    );
}
