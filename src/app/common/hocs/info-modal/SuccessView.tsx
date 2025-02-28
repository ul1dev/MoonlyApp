'use client';

import { MouseEventHandler, useEffect } from 'react';
import { useMediaQuery } from '../../hooks/use-media-query';
import SuccessIcon from './icons/Success';

interface Props {
    handleBackdropClick: MouseEventHandler<HTMLDivElement>;
    closeModal: MouseEventHandler<HTMLButtonElement>;
    isClosing: boolean;
    modalText: string;
}

export default function SuccessModalView({
    closeModal,
    isClosing,
    modalText,
}: Props) {
    const windowWidth = useMediaQuery();

    useEffect(() => {
        setTimeout(closeModal, 3000);
    }, []);

    const iconSize = windowWidth < 500 ? 20 : 24;

    return (
        <div className="fixed inset-0 z-[10000] w-fit h-fit top-14 mx-auto px-2">
            <div
                className={`
            relative shadow-lg h-fit w-full min-w-[304px]
            ${isClosing ? 'animate__fadeOutUp' : 'animate__fadeInDown'}
            animate__animated animate__faster
          `}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#4e4e4e] max-[440px]:rounded-xl rounded-2xl"></div>
                <div className="relative z-10 max-[440px]:px-4 max-[440px]:py-3 px-6 py-4 flex items-center max-[500px]:gap-2 gap-3">
                    <div>
                        <SuccessIcon width={iconSize} height={iconSize} />
                    </div>
                    <p
                        className="text-white font-semibold max-[500px]:text-sm text-base pr-2"
                        dangerouslySetInnerHTML={{ __html: modalText }}
                        style={{ wordBreak: 'break-word' }}
                    ></p>
                </div>
            </div>
        </div>
    );
}
