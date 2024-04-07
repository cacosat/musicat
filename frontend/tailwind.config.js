/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        "accent-blur-light": "#5B9BE7",
        // "gray-300": "#D4D4D4",
        // "gray-400": "#A3A3A3",
        // "gray-600": "#525252",
        // "gray-800": "#262626",
        // "gray-900": "#171717",
      }
    },
  },
  plugins: [],
};
