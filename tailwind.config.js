/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '300px', // Extream small devices
        'xs': '450px', // Extra small devices
      }
    },
  },
  plugins: [],
}

