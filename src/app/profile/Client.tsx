'use client';

import UserInfo from './UserInfo';
import UserBalance from './Balance';
import UserShare from './UserShare';
import TranslateBtn from './Translate';
import classNames from 'classnames';
import useIsMobile from '../common/hooks/use-is-mobile';

export default function ProfileClient() {
     const isMobile = useIsMobile();

    return (
        <div
            className={classNames('pb-24', {
                'pt-32': isMobile,
            })}
        >
            <TranslateBtn />
            <UserInfo />
            <UserBalance />
            <UserShare />
        </div>
    );
}
