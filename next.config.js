/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 i18n: {
  locales: ['en'],
  defaultLocale: 'en',
 },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
 enabled: process.env.ANALYZE === 'true',
})

module.exports = {
 reactStrictMode: true,
 concurrentFeatures: true,
}

module.exports = withBundleAnalyzer({})
module.exports = nextConfig
