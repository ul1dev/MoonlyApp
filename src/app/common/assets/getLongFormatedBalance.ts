export const getLongFormatedBalance = (balance: string, maxLength = 20) => {
    const cleaned = balance.replace(/[^\d]/g, '');
    if (cleaned === '') return '';

    const suffixes = [
        { suffix: 'K', power: 3 },
        { suffix: 'M', power: 6 },
        { suffix: 'B', power: 9 },
        { suffix: 'T', power: 12 },
        { suffix: 'P', power: 15 },
        { suffix: 'E', power: 18 },
    ];

    const formatWithSpaces = (numStr: string) =>
        numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const baseFormatted = formatWithSpaces(cleaned);
    if (baseFormatted.length <= maxLength) return baseFormatted;

    for (const { suffix, power } of suffixes) {
        const digitsToKeep = cleaned.length - power;
        if (digitsToKeep <= 0) continue;

        const remaining = cleaned.slice(0, digitsToKeep);
        const formatted = formatWithSpaces(remaining) + suffix;

        if (formatted.length <= maxLength) {
            return formatted;
        }
    }

    return cleaned.slice(0, 1) + 'E';
};
