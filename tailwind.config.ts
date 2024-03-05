import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
        gradient: 'gradient 6s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      screens: {
        smMax: { max: '640px' },
        lgMax: { max: '1024px' },
      },
      maxWidth: {
        '8xl': '1440px',
      },
      boxShadow: {
        '3xl': '0px 0px 9px 1px rgba(0,0,0,0.10)',
      },
      colors: {
        'navy-blue': '#052659',
        'cerenity-blue': '#7DA0CA',

        purple: '#8a00c2',
        pink: '#ff6ec7',
        yellow: '#e6cc00',
        blue: '#0070f0',
        dark: {
          meteors: '#0070f0',
          background: '#000',
          primary: '#052659',
          text: '#ffffff',
          sky: '#052659',
          sun: '#fff',
          star: '#fff',
          shoe: '#385583',
          table: '#000',
          blur: '#8449B4',
          elastic: '',
          detail: '#000000',
          fill: 'rgba(255, 255, 255, 1)',
          'star-mail': '#ff6ec7',
          'box-shadow': '0px 0px 2px 0px rgba(0,0,0,0.75)',
          'background-transparent': '#2b2828bf',
          'monitor-brightness': 'url(#paint10_linear_272_98)',
          'mail-color': '#8a00c2',
        },
        light: {
          meteors: '#8a00c2',
          background: '#fff',
          primary: '#c1e8ff',
          text: '#000',
          sky: '#0070f0',
          sun: '#FCFF82',
          star: 'rgba(0,0,0,0)',
          shoe: '#052659',
          table: '#684337',
          blur: '#FC9925',
          elastic: '',
          detail: '#808080',
          fill: 'rgba(0,0,0,0.75)',
          'star-mail': '#EE6909',
          'box-shadow': '0px 0px 2px 0px rgba(0,0,0,0.75)',
          'background-transparent': '#ffffff',
          'monitor-brightness': 'rgba(0,0,0,0)',
          'mail-color': '#FF8A00',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
