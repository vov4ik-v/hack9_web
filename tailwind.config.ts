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
        'hack-dark-green' : '#20441d',
        'hack-green' : '#33F569'
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
export default config;
