/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c3e50", // Deep blue as mentioned in PRD
        secondary: "#8b0000", // Burgundy as alternate accent color
      },
    },
  },
  plugins: [],
}
