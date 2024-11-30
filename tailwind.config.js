/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { min: '300px', max: '425px' }, // Define a custom range for mobile devices
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      laptopL: '1440px',
      desktop: '1880px',
    },
  },
  plugins: [],
};