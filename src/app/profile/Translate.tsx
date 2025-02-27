'use client';

import { useTranslate } from '../common/hooks/useTranslate';

export default function TranslateBtn() {
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
        <div className="absolute top-5 max-[380px]:right-6 max-[440px]:right-8 right-12 rounded-lg border-2 border-[#4e4e4e] px-2 py-0.5 cursor-pointer">
            <div
                className="text-white max-[380px]:text-xs max-[440px]:text-sm text-base font-semibold uppercase"
                onClick={handleClick}
            >
                {t('profile.locale')}
            </div>
        </div>
    );
}
