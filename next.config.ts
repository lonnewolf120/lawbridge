/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  }, eslint: {
      ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {},
    },
  logging: {
      server: true,
      client: true,
    },
}

module.exports = nextConfig
