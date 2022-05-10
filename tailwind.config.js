module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: 'lightgreen',
      },
      keyframes: {
        'bounce-right': {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translate(10px)' },
        },
      },
      animation: {
        'bounce-right': 'bounce-right 1s infinite ease',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
