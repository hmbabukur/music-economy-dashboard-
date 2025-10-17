/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#38BDF8",
        accent: "#F97316",
      },
    },
  },
  plugins: [],
}

