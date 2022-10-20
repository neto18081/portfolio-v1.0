/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#474A59",
        transparent: "rgba(0,0,0,0)",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
