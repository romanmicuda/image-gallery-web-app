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
        primary: {
          DEFAULT: "#3b82f6", // Tailwind's default blue-500 color
          dark: "#1e40af", // Tailwind's default blue-900 color
        },
      },
    },
  },
  plugins: [],
};
export default config;
