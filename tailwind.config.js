
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003366", // Deep Blue
          light: "#1a4d80",
          dark: "#001f3f",
        },
        secondary: {
          DEFAULT: "#CC0000", // Red
          light: "#ff3333",
          dark: "#990000",
        },
        accent: {
          DEFAULT: "#D4AF37", // Gold
          light: "#e6c96b",
        },
      },
      fontFamily: {
        sans: [
          '"Times New Roman"',
          "Times",
          "serif"
        ],
      },
    },
  },
  plugins: [],
};
