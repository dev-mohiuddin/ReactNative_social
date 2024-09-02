/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray': {
          5: "#292C35",
          10: "#141A22",
          20: "#131621",
          30: "#141416",
        },
        'secondary': '#d97706',
        'light': {
          10: "#ACADB9",
          20: "#E6E8EC",
          30: "#FFFFFF",
        },
      },
      colors: {
        'gray': '#131621',
        'secondary': '#d97706',
        'light': {
          10: "#ACADB9",
          20: "#E6E8EC",
          30: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}

