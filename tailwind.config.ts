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
        bg: "#F9F8F6",
        ink: "#0A0A0A",
        muted: "#6B6B6B",
        accent: "#2563EB",
        green: "#16A34A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      maxWidth: {
        content: "680px",
      },
    },
  },
  plugins: [],
};
export default config;
