/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

const shouldAnalyzeBundles = process.env.ANALYZE;

let nextConfig = {
  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,
  images: {
    domains: [
      'media.graphassets.com',
      'via.placeholder.com',
      'res.cloudinary.com',
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  //compiler: {
  //  removeConsole: process.env.NODE_ENV === 'production',
  //},
  //trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  rewrites: async () => [
    {
      source: '/sitemap.xml',
      destination: '/sitemap',
    },
    {
      source: '/product-sitemap-:page.xml',
      destination: '/sitemap/product-sitemap',
    },
    {
      source: '/content-sitemap.xml',
      destination: '/sitemap/content-sitemap',
    },
  ],
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  async redirects() {
    const fullFilePath = path.join(process.cwd(), 'static', 'redirects.json');
    if (!fs.existsSync(fullFilePath)) {
      return [];
    }
    const redirectsFileData = await fs.promises.readFile(fullFilePath);
    return JSON.parse(redirectsFileData);
  },
};

if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer =
    require('next-bundle-analyzer')(/* options come there */);
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
