module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1/5': '1fr 5fr',
      },
    },
    fontFamily: {
      sans: ['Open Sans'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
