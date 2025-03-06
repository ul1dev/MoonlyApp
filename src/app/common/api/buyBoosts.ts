import ky from 'ky';

export const buyBoostsRequest = async (reqData: {
    userId: string;
    count: number;
}) => {
    try {
        const data = await ky
            .post(`${process.env.NEXT_PUBLIC_SERVER}/boosts/buy`, {
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
