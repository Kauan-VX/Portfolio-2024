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
            maxWidth:{
"8xl" : "1440px"
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
          background: "#000",
          primary: "#052659",
          text: "#ffffff",
          sky: "#052659",
          sun: "#fff",
          star: "#fff",
          shoe: "#385583",
          table:"#000",
          "box-shadow": "0px 0px 2px 0px rgba(0,0,0,0.75)",
          "background-transparent": "#2b2828bf",
          "monitor-brightness" : "url(#paint10_linear_272_98)",
          "detail": "#000000",
     
        },
        light: {
          background: "#fff",
          primary: "#c1e8ff",
          text: "#000",
          sky: "#0070f0",
          sun: "#FCFF82",
          star: "rgba(0,0,0,0)",
          shoe: "#8a00c2",
          table:"#684337",
          "box-shadow": "0px 0px 2px 0px rgba(0,0,0,0.75)",
          "background-transparent": "#ffffff",
          "monitor-brightness" : "rgba(0,0,0,0)",
          "detail": "#808080",
       
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
