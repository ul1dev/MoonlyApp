'use client';

import PointsBarCards from './PointsBarCards';

export default function PointsBar() {
    return (
        <div className="flex justify-center max-[340px]:gap-1 max-[400px]:gap-4 max-[440px]:gap-6 max-[540px]:gap-8 max-[680px]:gap-12 gap-16 max-[500px]:pb-8 pb-12 max-[400px]:pt-4 max-[440px]:pt-6 pt-8">
            <PointsBarCards />
        </div>
    );
}
