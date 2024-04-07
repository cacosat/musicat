/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {
        // color palette de figma, no incluye white ni black porque están en tailwind, 
        // tampoco incluye los grises de figma en favor de gray neutral (gray-000)
        "background": "#0C1218",
        "lefter": "#1E282D",
        "cards": "#1C232B",
        "cards-light": "#1D3449",
        "accent-green-dark": "#028090",
        "accent-green-light": "#5BE7A1",
        "accent-blue-dark": "#6590FE",
        "accent-blue-light": "#5B9BE7",
        // "gray-300": "#D4D4D4",
        // "gray-400": "#A3A3A3",
        // "gray-600": "#525252",
        // "gray-800": "#262626",
        // "gray-900": "#171717",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}