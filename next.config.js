const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  // cacheOnFrontEndNav: true,
  // aggressiveFrontEndNavCaching: true,
  // reloadOnOnline: true,
  // swcMinify: true,
  // disable: false,
  // workboxOptions: {
  //   disableDevLogs: true,
  // },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },

  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  reactStrictMode: true,

  // async headers() {
  //   return [
  //     {
  //       source: "/:all*(svg|jpg|png)",
  //       locale: false,
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=9999999999, must-revalidate",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = withPWA(nextConfig);
