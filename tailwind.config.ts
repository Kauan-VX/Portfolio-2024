import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 9px 1px rgba(0,0,0,0.10)",
      },
      transitionProperty: {},
      colors: {
        "navy-blue": "#052659",
        "cerenity-blue": "#7DA0CA",

        purple: "#8a00c2",
        pink: "#ff6ec7",
        yellow: "#e6cc00",
        blue: "#0070f0",
        dark: {
          "background-transparent": "#2b2828bf",
          background: "#000",
          primary: "#052659",
          text: "#ffffff",
        },
        light: {
          "background-transparent": "#ffffff",
          background: "#fff",
          primary: "#c1e8ff",
          "box-shadow": "0px 0px 2px 0px rgba(0,0,0,0.75)",
          text: "#000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
