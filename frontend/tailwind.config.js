/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#E5E7EB'
        },
        brand: {
          primary: '#E73C5B'
        }
      }
    }
  },
  plugins: []
};
