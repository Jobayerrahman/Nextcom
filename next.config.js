/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/Image/**',
      },
    ],
  },
  assetPrefix: isProduction ? 'https://jsonplaceholder.typicode.com/posts' : 'http://localhost:3000',
}

module.exports = nextConfig