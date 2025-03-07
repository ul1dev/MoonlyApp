'use client';

import Image from 'next/image';
import { useTranslate } from '../common/hooks/useTranslate';
import useIsMobile from '../common/hooks/use-is-mobile';
import classNames from 'classnames';

export default function FullPageError() {
    const { t } = useTranslate();
    const isMobile = useIsMobile();

    const imgSize = isMobile ? 150 : 100;

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div>
                <Image
                    src="https://em-content.zobj.net/source/telegram/386/crying-face_1f622.webp"
                    alt="Crying emoji"
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
                    {t('errors.error')}
                </p>
            </div>
        </div>
    );
}
