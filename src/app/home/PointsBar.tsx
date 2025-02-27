'use client';

import ModalProvider from '../common/hocs/info-modal';
import PointsBarCards from './PointsBarCards';

export default function PointsBar() {
    return (
        <ModalProvider>
            <div className="flex justify-center max-[340px]:gap-1 max-[400px]:gap-4 max-[440px]:gap-6 max-[540px]:gap-8 max-[680px]:gap-12 gap-16 max-[500px]:py-8 py-12">
                <PointsBarCards />
            </div>
        </ModalProvider>
    );
}
