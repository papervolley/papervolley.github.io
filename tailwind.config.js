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
          '0%, 33.33%, 66.67%, 100%': { transform: 'rotate(0deg)' },
          '16.67%, 50%, 83.33%': { transform: 'rotate(60deg)' }
        },
        "tada-swing": {
          '0%, 100%': { transform: 'scale(1)' },
          '8.33%, 41.67%, 75%': { transform: 'scale(0.9)' },
          '25%, 58.33%, 91.67%': { transform: 'scale(1.1)' }
        },
        /*"confetti-swing": {
          '0%, 5%, 100%': { transform: 'rotate(-30deg)' },
          '0.5%, 2.5%, 4.5%': { transform: 'rotate(-18deg)' },
          '1.5%, 3.5%': { transform: 'rotate(-42deg)' }
        }*/
        "confetti-swing": {
          '0%, 33.33%, 66.67%, 100%': { transform: 'rotate(0deg)' },
          '16.67%, 50%, 83.33%': { transform: 'rotate(-24deg)' }
        },
        "spin": {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(0.84) rotate(180deg)'},
          '100%': { transform: 'scale(1) rotate(360deg)' }
        }
      },
      animation: {
        "hand-wave": 'hand-wave-swing 1.5s 0.3s ease-out 1',
        "tada": 'tada-swing 1.5s 0.3s ease-out 1',
        "confetti": 'confetti-swing 1.5s 0.3s ease-out 1',
        "spin": 'spin 3s linear infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
