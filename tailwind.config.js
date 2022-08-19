/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode : "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color": "#a18d6b",
        "navbar-color": "#18181b",
        "abu-abu": "#464b4f",
        "abu-muda": "#282c30",
      },
      fontFamily: {
        poppins: ["Poppins"]
      },

      screens: {
        sm: "500px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
