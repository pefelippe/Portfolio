/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js.ts,jsx,tsx}", "./src/**/*.{js.ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    fontFamily: {
      fontFamily: {
        sans: ['"Fira Sans"', "sans-serif"],
        Matter: ["Matter", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#5865f2",
      dark: {
        DEFAULT: "#FAFAFA",
      },
      gray: {
        100: "#9BA0B3",
        300: "#A9ADC1",
        500: "#6B7280",
        700: "#323238",
        800: "#29292e",
        850: "#16171d",
        900: "#101014",
      },
      yellow: {
        500: "#F4F1D0",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
