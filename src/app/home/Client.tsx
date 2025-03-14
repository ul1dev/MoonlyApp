'use client';

import React from 'react';
import PointsBar from '../home/PointsBar';
import ScoreBar from '../home/ScoreBar';
import ClickPad from '../home/ClickPad';
import classNames from 'classnames';
import useIsMobile from '../common/hooks/use-is-mobile';
import UnscrollWrapper from '../common/hocs/telegram/Unscroll';
import EnergyBar from './Energy';

export default function HomeClient() {
    const isMobile = useIsMobile();

    return (
        <UnscrollWrapper>
            <div
                className={classNames('pb-36 select-none', {
                    'pt-20': isMobile,
                })}
            >
                <PointsBar />
                <ScoreBar />
                <ClickPad />
                <EnergyBar />
            </div>
        </UnscrollWrapper>
    );
}
