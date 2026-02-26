/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // lend.ro brand colors
        mint: '#00D186',
        navy: '#0B1B3E',
        sage: '#0A2F2F',
        orange: '#FF6B2C',
      },
      fontFamily: {
        sans: ['Rubik', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
