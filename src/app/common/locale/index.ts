import { errorsTexts } from './errors';
import { fortuneTexts } from './fortune';
import { homeTexts } from './home';
import { infoTexts } from './info';
import { nftTexts } from './nft';
import { profileTexts } from './profile';
import { profitTexts } from './profit';
import { shareTexts } from './share';
import { shopTexts } from './shop';

export const allTexts: any = {
    ru: {
        info: infoTexts.ru,
        home: homeTexts.ru,
        shop: shopTexts.ru,
        profile: profileTexts.ru,
        profit: profitTexts.ru,
        nft: nftTexts.ru,
        fortune: fortuneTexts.ru,
        errors: errorsTexts.ru,
        share: shareTexts.ru,
    },
    en: {
        info: infoTexts.en,
        home: homeTexts.en,
        shop: shopTexts.en,
        profile: profileTexts.en,
        profit: profitTexts.en,
        nft: nftTexts.en,
        fortune: fortuneTexts.en,
        errors: errorsTexts.en,
        share: shareTexts.en,
    },
};
