module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        128: '26rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
