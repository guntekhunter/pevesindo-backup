// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:slug*',
                destination: 'https://pevesindo.co.id',
                permanent: false, // 302 = temporary
            },
        ];
    },
};

module.exports = nextConfig;
