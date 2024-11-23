/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tiny: { max: "300px" },
        smaller: { min: "301px", max: "410px" },
      },
    },
  },
  plugins: [],
};
