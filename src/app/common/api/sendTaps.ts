import ky from 'ky';

export const sendTapsRequest = async (reqData: {
    userId: string;
    tapsCount: number;
}) => {
    try {
        const data = await ky
            .post(`${process.env.NEXT_PUBLIC_SERVER}/points/add-farmed`, {
                json: reqData,
                keepalive: true,
            })
            .json();

        return data;
    } catch (error: any) {}
};
