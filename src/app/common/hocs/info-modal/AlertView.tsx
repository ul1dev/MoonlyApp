'use client';

import { MouseEventHandler, useEffect } from 'react';
import { useMediaQuery } from '../../hooks/use-media-query';
import SuccessIcon from './icons/Success';
import classNames from 'classnames';
import useIsMobile from '../../hooks/use-is-mobile';
import ErrorIcon from './icons/Error';

interface Props {
    handleBackdropClick: MouseEventHandler<HTMLDivElement>;
    closeModal: MouseEventHandler<HTMLButtonElement>;
    isClosing: boolean;
    modalText: string;
    modalId: number;
    type: 'success' | 'error';
}

export default function AlertModalView({
    closeModal,
    isClosing,
    modalText,
    modalId,
    type = 'success',
}: Props) {
    const windowWidth = useMediaQuery();
    const isMobile = useIsMobile();

    useEffect(() => {
        setTimeout(closeModal, 3000);
    }, [modalId]);

    const iconSize = windowWidth < 400 ? 20 : 24;

    return (
        <div
            className={classNames(
                'fixed inset-0 z-[10000] w-fit h-fit mx-auto px-2',
                {
                    'top-5': !isMobile,
                    'top-28': isMobile,
                }
            )}
        >
            <div
                className={`
            relative shadow-lg h-fit w-full min-w-[304px]
            ${isClosing ? 'animate__fadeOutUp' : 'animate__fadeInDown'}
            animate__animated animate__faster
          `}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#4e4e4e] max-[400px]:rounded-xl rounded-2xl"></div>
                <div className="relative z-10 max-[400px]:px-4 max-[400px]:py-3 px-6 py-4 flex items-center max-[400px]:gap-2 gap-3">
                    <div>
                        {type === 'success' && (
                            <SuccessIcon width={iconSize} height={iconSize} />
                        )}
                        {type === 'error' && (
                            <ErrorIcon width={iconSize} height={iconSize} />
                        )}
                    </div>
                    <p
                        className="text-white font-semibold max-[400px]:text-sm text-base pr-2"
                        dangerouslySetInnerHTML={{ __html: modalText }}
                        style={{ wordBreak: 'break-word' }}
                    ></p>
                </div>
            </div>
        </div>
    );
}
