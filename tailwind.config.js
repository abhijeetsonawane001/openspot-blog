module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          light: "#6690FF",
          DEFAULT: "#3366FF",
          dark: "#254EDA"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
