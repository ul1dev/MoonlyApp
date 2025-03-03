'use client';

import React from 'react';
import PointsBar from '../home/PointsBar';
import ScoreBar from '../home/ScoreBar';
import ClickPad from '../home/ClickPad';
import classNames from 'classnames';
import useIsMobile from '../common/hooks/use-is-mobile';

export default function HomeClient() {
    const isMobile = useIsMobile();

    return (
        <div
            className={classNames('pb-36', {
                'pt-20': isMobile,
            })}
        >
            <PointsBar />
            <ScoreBar />
            <ClickPad />
        </div>
    );
}
