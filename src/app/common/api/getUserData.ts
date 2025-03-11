import { UserType } from '@/app/store/types';
import api from './client';

export const getUserDataByIdRequest = async (userId: string) => {
    try {
        const data: UserType = await api
            .get(`${process.env.NEXT_PUBLIC_SERVER}/users/${userId}`)
            .json();

        return data;
    } catch (e) {}
};
