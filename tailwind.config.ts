import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      height: {
        heightLessNav: "h-[calc(100vh-64px)]",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        gradient: "gradient 6s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        spotlight_phone: "spotlight_phone 2s ease .75s 1 forwards",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },

        spotlight_phone: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1.8)",
          },
        },
      },
      screens: {
        navbarCollapseMin: { min: "820px" },
        phoneMax: { max: "500px" },
        floatNavbar: { min: "525px" },
        smMax: { max: "640px" },
        mdMax: { max: "768px" },
        navbarCollapseMax: { max: "820px" },
        lgMax: { max: "1024px" },
      },
      maxWidth: {
        "8xl": "1440px",
      },
      boxShadow: {
        "3xl": "0px 0px 9px 1px rgba(0,0,0,0.10)",
      },
      colors: {
        "navy-blue": "#052659",
        "cerenity-blue": "#7DA0CA",
        purple: "#8a00c2",
        pink: "#ff6ec7",
        yellow: "#e6cc00",
        blue: "#0070f0",
        dark: {
          meteors: "#0070f0",
          background: "#000",
          primary: "#052659",
          text: "#ffffff",
          blur: "#8449B4",
          detail: "#000000",
          fill: "rgba(255, 255, 255, 1)",
          "star-mail": "#ff6ec7",
          "box-shadow": "0px 0px 2px 0px rgba(0,0,0,0.75)",
          "background-transparent": "#2b2828bf",
          "mail-color": "#8a00c2",
        },
        light: {
          meteors: "#8a00c2",
          background: "#fff",
          primary: "#c1e8ff",
          text: "#000",
          blur: "#FC9925",
          elastic: "",
          detail: "#808080",
          fill: "rgba(0,0,0,0.75)",
          "star-mail": "#EE6909",
          "box-shadow": "0px 0px 2px 0px rgba(0,0,0,0.75)",
          "background-transparent": "#ffffff",
          "mail-color": "#FF8A00",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
