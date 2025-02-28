'use client';

import { MouseEventHandler } from 'react';
import InfoIcon from '../../share/icons/Info';
import { useMediaQuery } from '../../hooks/use-media-query';
import CloseIcon from '../../share/icons/Close';

interface Props {
    handleBackdropClick: MouseEventHandler<HTMLDivElement>;
    closeModal: MouseEventHandler<HTMLButtonElement>;
    isClosing: boolean;
    modalText: string;
}

export default function DefaultModalView({
    handleBackdropClick,
    closeModal,
    isClosing,
    modalText,
}: Props) {
    const windowWidth = useMediaQuery();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number, minSize: number) => {
        return Math.max(minSize, originalSize * scaleFactor);
    };

    const infoSize = getScaledSize(35, 30);
    const closeSize = getScaledSize(18, 16);

    return (
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50"
            onClick={handleBackdropClick}
        >
            <div
                className={`
            relative shadow-lg w-full max-w-sm min-w-[304px] bg-black rounded-2xl border-2 border-[#4e4e4e] mx-2 flex flex-col items-center max-[380px]:px-4 max-[440px]:px-6 px-8 py-10 -mt-40
            ${isClosing ? 'animate__fadeOutUp' : 'animate__fadeInDown'}
            animate__animated animate__faster
          `}
            >
                <button
                    className="absolute top-6 right-6 cursor-pointer"
                    onClick={closeModal}
                >
                    <CloseIcon width={closeSize} height={closeSize} />
                </button>
                <InfoIcon width={infoSize} height={infoSize} />

                <div className="w-48 h-[2px] bg-[#4e4e4e] rounded-full my-4"></div>

                <p
                    className="text-white text-center"
                    dangerouslySetInnerHTML={{ __html: modalText }}
                ></p>
            </div>
        </div>
    );
}
