/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
