module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/stories/*'],
  theme: {
    colors: {
      'primary': '#02E1CE',
      'primary-dark': '#00BCAC',
      'primary-accent': '#83FFF4',
      'primary-surface': '#DDFFFC',
      'primary-screen': '#FEFEFE',
      'primary-text' : '#222222',
      'disabled': '#D9D9D9',
      'disabled-dark': '#8C8C8C',
      'primary-surface-black': "#222222",
    },
    extend: {
      borderRadius: {
        'md': '10px',
        'lg': '15px',
        'xl': '20px',
        '2xl': '25px',
        'full': '1000px',
      }
    },
  },
  plugins: [],
}
