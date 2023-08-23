/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FFD700",
        "dark-subtle": "#181818",
        dark: "#0f0f0f",
        "main-m": "#D4AF37",
        light: "#D9D9D9",
      },
      fontFamily: {
        heading: "Playfair Display",
        description: "Poppins",
      },
      width: {
        "90%": "90%",
      },
      borderWidth: {
        10: "10px",
      },
      minHeight: {
        100: "400px",
      },
    },
  },
  plugins: [],
};
