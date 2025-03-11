import api from './client';

export const buyCoinsByStarsRequest = async (reqData: {
    userId: string;
    count: number;
}) => {
    try {
        const data = await api
            .post(`${process.env.NEXT_PUBLIC_SERVER}/coins/buy/stars`, {
                json: reqData,
            })
            .json();

        return data;
    } catch (error: any) {
        if (error.response) {
            const errorBody = await error.response.json();
            return errorBody;
        }

        return {
            error: {
                code: 500,
                emMessage: 'Error, try again',
                jumesaage: 'Ошибка, попробуйте еще раз',
            },
        };
    }
};
