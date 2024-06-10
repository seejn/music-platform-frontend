/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#E7E8E8',
        stonegray:'#d6d3d1',
        black: '#10100d',
        lightpink:'#fbcfe8',
        rose:'#fb7185',
        green:'#6E9F8F',
        peach:'#F17361',
        darkgreen:'#224234',
        darkgray:'#AAACA6',
      },
    },
  },
  plugins: [],
}