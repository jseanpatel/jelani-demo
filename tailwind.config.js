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
                  transform: 'rotate(0deg)'
                }
            },          
        },
        animation: {
            wiggle: 'wiggle 0.5s ease-in-out',
        }
    },
},
  plugins: [],
}
