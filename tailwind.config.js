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
        },
        brightness: {
          25: '0.25',
          30: '0.30',
          35: '0.35',
          40: '0.40',
          45: '0.45',
          50: '0.50',
          55: '0.55',
          60: '0.60',
          65: '0.65',
          70: '0.70',
          75: '0.75',
          80: '0.80',
          85: '0.85',
          90: '0.90',
          95: '0.95',
          105: '1.05',
          110: '1.10',
          115: '1.15',
          120: '1.20',
          125: '1.25',
          130: '1.30',
          135: '1.35',
          140: '1.40',
          145: '1.45',
          150: '1.50',
          155: '1.55',
          160: '1.60',
          165: '1.65',
          170: '1.70',
          175: '1.75',
        }
    },
},
  plugins: [],
}
