/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: true
    }
  },
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  output: 'standalone'
}

module.exports = nextConfig