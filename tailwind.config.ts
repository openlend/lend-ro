import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4D3C',
          50: '#E6F5F0',
          100: '#CCE8E1',
          200: '#99D1C3',
          300: '#66BAA5',
          400: '#33A387',
          500: '#0A4D3C',
          600: '#083D30',
          700: '#062E24',
          800: '#041F18',
          900: '#020F0C',
        },
        accent: {
          coral: '#F87171',
          orange: '#FB923C',
          yellow: '#FBBF24',
          lime: '#A3E635',
          cyan: '#22D3EE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
