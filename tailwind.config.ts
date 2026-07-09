import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          black:  "#111111",
          white:  "#F5F0E8",
          yellow: "#FFD60A",
          teal:   "#00C9B1",
          pink:   "#FF6B9D",
          blue:   "#4ECDC4",
        },
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        mono:    ["Space Mono", "monospace"],
      },
      boxShadow: {
        brutal:    "4px 4px 0px #111111",
        "brutal-lg": "8px 8px 0px #111111",
        "brutal-sm": "2px 2px 0px #111111",
        "brutal-hover": "7px 7px 0px #111111",
      },
      borderWidth: {
        brutal: "2.5px",
      },
      animation: {
        ticker: "ticker 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
