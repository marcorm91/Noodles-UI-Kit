/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
    theme: {
      extend: {
        fontFamily: {
          sans: ['IBM Plex Sans Condensed', 'Helvetica', 'Arial', 'sans-serif'],
        },
        colors: {
          primary: {
            '50': '#ebf5fc', 
            '100': '#d5e7f8',
            '200': '#abd2f2',
            '300': '#81bcef',
            '400': '#569ce8',
            '500': '#2c7ce1',
            '600': '#2361b9',
            '700': '#1b4a8f',
            '800': '#133766',
            '900': '#0c2355',
          },
        }
      },
    },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}

