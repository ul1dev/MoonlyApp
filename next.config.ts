import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**.moonlycoin.com',
            },
            {
                protocol: 'https',
                hostname: '**.moonlycoin.com',
            },
        ],
    },
};

export default nextConfig;
