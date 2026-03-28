import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f8f6",
        foreground: "#111111",
        muted: "#777777",
        glass: {
          white: "rgba(255, 255, 255, 0.55)",
          border: "rgba(0, 0, 0, 0.08)",
          hover: "rgba(255, 255, 255, 0.7)",
        },
        surface: {
          DEFAULT: "#ffffff",
          warm: "#f5f4f0",
          soft: "#eeeee9",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      boxShadow: {
        glass: "0 4px 24px rgba(0, 0, 0, 0.04)",
        "glass-hover": "0 12px 32px rgba(0, 0, 0, 0.08)",
        soft: "0 2px 12px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
