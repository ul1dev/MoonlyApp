import api from './client';

export const sendTapsRequest = async (reqData: {
    userId: string;
    tapsCount: number;
}) => {
    try {
        const data: {
            pointsBalance: string;
            userEnergy: number;
            userLevel: number;
            isNewLevel: boolean;
        } = await api
            .post(`${process.env.NEXT_PUBLIC_SERVER}/points/add-farmed`, {
                json: reqData,
                keepalive: true,
            })
            .json();

        return data;
    } catch (error: any) {}
};
