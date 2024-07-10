const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    extend: {
      boxShadow: {
        "inner-top": "inset 0 17px 18px 0px rgba(0, 0, 0, 0.019)",
      },
      variants: {
        extend: {
          boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
        },
      },
    },
  },
  plugins: [],
});
