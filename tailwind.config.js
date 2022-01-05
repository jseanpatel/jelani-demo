module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        keyframes: {
            wiggle: {
                '0%': {
                    transform: 'rotateY(0deg)'
                },
           
                '100%': {
                  transform: 'rotateY(90deg)'
                }
            },
            wiggleBack: {
              '0%': {
                  transform: 'rotateY(90deg)'
              },
              '100%': {
                transform: 'rotateY(0deg)'
              }
          },
          colors: {
            base: "#303390"
          }           
        },
        animation: {
            wiggle: 'wiggle 0.2s ease-in-out',
            wiggleBack: 'wiggleBack 0.2s ease-in-out',
        }
    },
},
  plugins: [],
}
