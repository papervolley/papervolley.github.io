module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bc-yellow': '#FFEC37'
      },
      transformOrigin: {
        'hand-wave-emoji': '75% 75%'
      },
      keyframes: {
        swing: {
          '0%, 1.6%, 3.2%, 4.8%, 100%': { transform: 'rotate(0deg)' },
          '0.8%, 2.4%, 4%': { transform: 'rotate(60deg)' }
        }
      },
      animation: {
        swing: 'swing 30s 0.3s ease-out 3'
      }
    },
  },
  plugins: [],
}
