import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),

    {
        rules: {
            // Отключаем базовое правило ESLint
            'prefer-const': 'off',
            // Отключаем все правила TypeScript
            ...Object.fromEntries(
                Object.keys(
                    await import('@typescript-eslint/eslint-plugin').then(
                        (m) => m.rules
                    )
                ).map((rule) => [`@typescript-eslint/${rule}`, 'off'])
            ),
        },
    },
];

export default eslintConfig;
