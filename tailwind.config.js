/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./resources/**/*.{js,ts,jsx,tsx}",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.{js, ts, jsx, tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.{js, ts, jsx, tsx}',
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: '680px',
      md: '968px',
      lg: '1076px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ],
}
