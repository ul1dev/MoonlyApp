import { slicedContinText } from './slicedContinText';

export const getShortFormatedBalance = (balance: string) => {
    const length = balance.length;
    if (length <= 3) {
        return balance;
    }

    const steps = Math.floor((length - 1) / 3);
    if (steps === 0) {
        return balance;
    }

    const suffixes = [
        'K',
        'M',
        'B',
        'T',
        'Q',
        'Qi',
        'Sx',
        'Sp',
        'Oc',
        'No',
        'Dc',
    ];
    const suffixIndex = steps - 1;

    if (suffixIndex >= suffixes.length) {
        return slicedContinText(balance, 10);
    }

    const suffix = suffixes[suffixIndex];
    const integerLength = length - 3 * steps;
    const integerPartStr = balance.substring(0, integerLength);
    const remainderPart = balance.substring(integerLength, integerLength + 3);

    let formattedNumber = integerPartStr;
    const integerPart = parseInt(integerPartStr, 10);

    if (integerPart < 10 && remainderPart.length > 0) {
        const firstRemainderDigit = remainderPart[0];
        if (firstRemainderDigit !== '0') {
            formattedNumber += `.${firstRemainderDigit}`;
        }
    }

    return formattedNumber + suffix;
};
