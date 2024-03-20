/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F4F4F4',
          200: '#E5E7EB',
          300: '#E4E4E4',
          400: '#AFAFAF',
          500: '#515151',
          700: '#282828'
        },
        brand: {
          primary: '#E73C5B'
        },
        support: {
          error: '#E73C3C',
          success: '#30D158'
        }
      }
    }
  },
  plugins: []
};
