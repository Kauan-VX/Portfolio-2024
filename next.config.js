const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {};
const i18n =  {
  // These are all the locales you want to support in
  // your application
  locales: ['en-US', 'pt-BR'],
  // This is the default locale you want to be used when visiting
  // a non-locale prefixed path e.g. `/hello`
  defaultLocale: 'pt-BR',
  // This is a list of locale domains and the default locale they
  // should handle (these are only required when setting up domain routing)
  // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  domains: [
    {
      domain: 'example.com',
      defaultLocale: 'pt-BR',
    },
    {
      domain: 'example.nl',
      defaultLocale: 'pt-BR',
    },
    {
      domain: 'example.fr',
      defaultLocale: 'pt-BR',
      // an optional http field can also be used to test
      // locale domains locally with http instead of https
      http: true,
    },
  ],
}

module.exports = withPlugins([withPWA , i18n] , nextConfig )  


