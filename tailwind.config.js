// tailwind.config.js
import { BorderWidth } from "react-icons/bs";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fuentPrincipal: ["EB Garamond", "serif"],
      },
      colors: {
        customColor: "rgba(9, 0, 19, 255)", // Color personalizado para el footer
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
