/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js.ts,jsx,tsx}", "./src/**/*.{js.ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["CalcSans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: {
        100: "#e1e1e6",
        300: "#A9ADC1",
        500: "#6B7280",
        700: "#323238",
        800: "#29292e",
        850: "#1f2729",
        900: "#121214",
      },
      yellow: {
        500: "#eba417",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
