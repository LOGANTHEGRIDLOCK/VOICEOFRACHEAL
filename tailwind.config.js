/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["Roboto", "sans-serif"],
      },
      colors: {
        brown: {
          50:  '#FAEBEB',
          100: '#F0C6C6',
          200: '#E7A2A2',
          300: '#DE7D7D',
          400: '#D45959',
          500: '#CB3434',
          600: '#A52A2A',
          700: '#822121',
          800: '#5D1818',
          900: '#390F0F',
        },
      },
    },
  },
  plugins: [],
};
