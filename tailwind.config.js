module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  important: true,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // textColor: {
    //   'primary': '#d6f732',
    //   'secondary': '#f36903',
    //   // 'danger': '#e3342f',
    // },
    borderColor: {
      'primary': '#d6f732',
      'secondary': '#f36903',
      // 'danger': '#e3342f',
    }
  },
  variants: {
    extend: {
      zIndex: ['hover', 'active'],
      
      // keyframes: {
      //   horizonbounce: {
      //     '0%, 100%': {
      //       transform: 'translateX(-25%)',
      //       animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
      //     },
      //     '50%': {
      //       transform: 'translateX(0)',
      //       animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
      //     }
      //   }
      // },
      // animation: {
      //   horizonbounce: 'horizonbounce 1s infinite',
      // },
    },
  },
  plugins: [],
}
