/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },

      colors: {
        'opacityGray': 'rgb(156 163 175 / 70%)',
      }
    },
  },
  plugins: [],
}

