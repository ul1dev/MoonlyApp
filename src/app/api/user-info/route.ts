// app/api/user-info/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Получаем IP из заголовков
        const forwardedFor = req.headers.get('x-forwarded-for');
        const realIp = req.headers.get('x-real-ip');
        const ip = forwardedFor
            ? forwardedFor.split(',')[0].trim()
            : realIp || null;

        // Получаем User Agent
        const userAgent = req.headers.get('user-agent') || null;

        // Формируем ответ
        const responseData = {
            ip: ip,
            userAgent: userAgent,
        };

        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
