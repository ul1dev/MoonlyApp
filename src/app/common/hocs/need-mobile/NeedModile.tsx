'use client';

import classNames from 'classnames';
import useIsMobile from '../../hooks/use-is-mobile';
import { useTranslate } from '../../hooks/useTranslate';
import Image from 'next/image';

export default function NeedMobileView() {
    const { t } = useTranslate();
    const isMobile = useIsMobile();

    const imgSize = isMobile ? 150 : 100;

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center">
                <Image
                    src="https://em-content.zobj.net/source/telegram/386/mobile-phone_1f4f1.webp"
                    alt="Iphone emoji"
                    width={imgSize}
                    height={imgSize}
                />
                <p
                    className={classNames(
                        'text-white text-center font-bold pt-3',
                        {
                            'text-2xl': !isMobile,
                            'text-3xl': isMobile,
                        }
                    )}
                >
                    {t('needPhone.title')}
                </p>
            </div>
        </div>
    );
}
