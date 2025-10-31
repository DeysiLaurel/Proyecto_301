/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D97706",
        secondary: "#F59E0B",
      },
      fontFamily:{
        sans: ["Quicksand","sans-serif"]
      }
    },
  },
  plugins: [],
}

