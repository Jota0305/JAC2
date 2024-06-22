import { BorderWidth } from 'react-icons/bs';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'fuentPrincipal': ['EB Garamond', 'serif']
      }
    },
    variants:{
      borderWidth: ['responsive','hover','focus'],
    }
  },
  plugins: [],
}