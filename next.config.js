const createNextIntlPlugin = require('next-intl/plugin');
const { withPWA } = require('next-pwa');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPWA(withNextIntl(nextConfig));
