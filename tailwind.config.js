/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b5e3c",
        secondary: "#a5795b",
        light: "#f9f6f1",
        hover: "#e6ddd3"
      },
    },  
  },
  plugins: [],
}
