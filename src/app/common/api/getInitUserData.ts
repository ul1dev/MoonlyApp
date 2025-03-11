import { UserType } from '@/app/store/types';
import api from './client';

export const getInitUserDataRequest = async (userData: {
    telegramId: string;
    firstName?: string;
    lastName?: string | null;
    userName?: string | null;
    referralId?: string | null;
}) => {
    try {
        const data: { user: UserType; afkPointsCount: number } = await api
            .post(`${process.env.NEXT_PUBLIC_SERVER}/users/init`, {
                json: userData,
            })
            .json();

        return data;
    } catch (e) {}
};
