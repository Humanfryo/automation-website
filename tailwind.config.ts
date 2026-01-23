import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'rich-black': '#151515',
        'card-dark': '#1A1A1A',
        white: '#FFFFFF',
        'off-white': '#F5F5F5',
        yellow: {
          DEFAULT: '#FFB800',
          light: '#FFC933',
          dark: '#CC9300'
        },
        gray: {
          lightest: '#A3A3A3',
          medium: '#737373',
          dark: '#2A2A2A'
        },
        green: '#22C55E'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
