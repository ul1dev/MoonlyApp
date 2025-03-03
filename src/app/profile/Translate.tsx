'use client';

import { useTranslate } from '../common/hooks/useTranslate';
import classNames from 'classnames';
import useIsMobile from '../common/hooks/use-is-mobile';

export default function TranslateBtn() {
    const isMobile = useIsMobile();
    const { t } = useTranslate();

    function handleClick() {
        const locale = localStorage.getItem('locale');

        if (locale === 'en') {
            localStorage.setItem('locale', 'ru');
        } else {
            localStorage.setItem('locale', 'en');
        }

        window.location.reload();
    }

    return (
        <div
            className={classNames('absolute w-full left-0', {
                'top-5': !isMobile,
                'top-28': isMobile,
            })}
        >
            <div className="min-w-80 max-w-2xl mx-auto w-full relative">
                <div className="rounded-lg border-2 border-[#4e4e4e] px-2 py-0.5 cursor-pointer w-fit absolute top-0 right-0 max-[440px]:right-6 max-md:right-8">
                    <div
                        className="text-white max-[380px]:text-xs max-[440px]:text-sm text-base font-semibold uppercase"
                        onClick={handleClick}
                    >
                        {t('profile.locale')}
                    </div>
                </div>
            </div>
        </div>
    );
}
