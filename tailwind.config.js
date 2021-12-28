module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'header': '100px',
      },
      fontFamily: {
        'kumbh': ["'Kumbh Sans', sans-serif"]
      },
      colors: {
        'violet': '#5964E0',
        'lightviolet': '#939BF4',
        'gray': '#9DAEC2',
        'darkgray': '#6E8098',
        'darkblue': '#19202D',
        'midnight': '#121721'
      }
    },
  },
  variants: {
    extend: {
      padding: ['last'],
      backgroundColor: ['checked'],
      opacity: ['checked'],
    },
  },
  plugins: [],
}
