/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#e7e1de',
        stonegray:'#d6d3d1',
        black: '#10100d',
        pink: '#ff0040',
        lightpink:'#fbcfe8',
        rose:'#fb7185'
      },
    },
  },
  plugins: [],
}