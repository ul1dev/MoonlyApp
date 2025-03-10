'use client';

import { useCallback, useEffect, useState } from 'react';
import { allTexts } from '../locale';

export const useTranslate = () => {
    const [lang, setLang] = useState('ru');

    useEffect(() => {
        const storedLang = localStorage.getItem('locale') ?? 'ru';
        setLang(storedLang);
    }, []);

    const t = useCallback(
        (path: string, variables?: Record<string, any>) => {
            const keys = path.split('.');
            let current: any = allTexts[lang];

            for (const key of keys) {
                if (current[key] === undefined) {
                    return path;
                }
                current = current[key];
            }

            if (typeof current === 'string' && variables) {
                current = current.replace(/{(\w+)}/g, (match, key) => {
                    return variables.hasOwnProperty(key)
                        ? variables[key].toString()
                        : match;
                });
            }

            return current;
        },
        [lang]
    );

    return { t };
};
