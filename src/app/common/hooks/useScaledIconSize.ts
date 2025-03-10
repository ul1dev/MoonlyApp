import { useMediaQuery } from './use-media-query';

export const useScaledIconSize = () => {
    const windowWidth = useMediaQuery();

    const BASE_WIDTH = 768;

    const scaleFactor = Math.min(1, windowWidth / BASE_WIDTH);

    const getScaledSize = (originalSize: number, minSize: number) => {
        return Math.max(minSize, originalSize * scaleFactor);
    };

    return getScaledSize;
};
