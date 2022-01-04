module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        keyframes: {
            wiggle: {
                '0%': {
                    transform: 'rotateY(90deg)'
                },
                '50%': {
                    transform: 'rotateY(180deg)'
                },
                '100%': {
                  transform: 'rotate'
                }
            },
            wiggleBack: {
              '0%': {
                  transform: 'rotateY(-90deg)'
              },
              '50%': {
                  transform: 'rotateY(-180deg)'
              },
              '100%': {
                transform: 'rotate'
              }
          },
          colors: {
            base: "#303390"
          }           
        },
        animation: {
            wiggle: 'wiggle 0.6s ease-in-out',
            wiggleBack: 'wiggleBack 0.6s ease-in-out',
        }
    },
},
  plugins: [],
}
