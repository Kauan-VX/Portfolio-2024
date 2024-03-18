const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPlugins([withPWA ] , nextConfig )  


