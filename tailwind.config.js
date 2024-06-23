/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(10, 104, 255)'
      }
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}

