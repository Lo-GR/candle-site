module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-moss': {
          400: '#727D47',
        },
        'purple-smoke': {
          400: '#6D6073',
        },
        'grey-moss': {
          300: 'rgba(0, 0, 0, .40)',
          400: 'rgba(0, 0, 0, .65)'
        },
        'white-bg': {
          300: '#dfd8c8'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};