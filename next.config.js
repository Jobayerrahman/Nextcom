/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: isProduction ? 'nextcom-company-site.vercel.app' : 'localhost',
        port: '3000',
        pathname: '/Image/**',
      },
    ],
    domains: ['nextcom-company-site.vercel.app']
  },
  assetPrefix: isProduction ? 'https://nextcom-company-site.vercel.app/' : 'http://localhost:3000',
}

module.exports = nextConfig