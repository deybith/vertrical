/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  swcMinify: true,
  publicRuntimeConfig: {
    // Will only be available on the server side
    appName: process.env.APP_NAME || 'My app',
    appihost: process.env.API_HOST || '/',
  }
}

module.exports = nextConfig
