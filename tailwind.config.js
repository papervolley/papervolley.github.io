module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bc-yellow': '#FFEC37'
      },
      transformOrigin: {
        'hand-wave': '75% 75%',
        'confetti': '60% 15%',
        'tada': '0% 90%'
      },
      keyframes: {
        "hand-wave-swing": {
          '0%, 1.6%, 3.2%, 4.8%, 100%': { transform: 'rotate(0deg)' },
          '0.8%, 2.4%, 4%': { transform: 'rotate(60deg)' }
        },
        "tada-swing": {
          '0%, 4.8%, 100%': { transform: 'scale(1)' },
          '0.4%, 2.0%, 3.6%': { transform: 'scale(0.9)' },
          '1.2%, 2.8%, 4.4%': { transform: 'scale(1.1)' }
        },
        "confetti-swing": {
          '0%, 5%, 100%': { transform: 'rotate(-30deg)' },
          '0.5%, 2.5%, 4.5%': { transform: 'rotate(-18deg)' },
          '1.5%, 3.5%': { transform: 'rotate(-42deg)' }
        }
      },
      animation: {
        "hand-wave": 'hand-wave-swing 30s 0.3s ease-out 12',
        "tada": 'tada-swing 30s 0.3s ease-out 12',
        "confetti": 'confetti-swing 30s 0.3s ease-out 12'
      }
    },
  },
  plugins: [],
}
