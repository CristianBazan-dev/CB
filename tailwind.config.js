/** @type {import('tailwindcss').Config} */
import twElements from "tw-elements/dist/plugin.cjs"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('tw-elements/dist/plugin.cjs')],

}

