/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    appDir: true,
    optimizeCss: true,
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  poweredByHeader: false,
  compress: true,
  optimizeFonts: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;

