module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/stories/*'],
  theme: {
    colors: {
      'emerald-primary': '#02E1CE',
      'emerald-primary-dark': '#00BCAC',
      'emerald-primary-accent': '#83FFF4',
      'emerald-primary-surface': '#DDFFFC',
      'emerald-primary-screen': '#FEFEFE',
      'emerald-primary-text' : '#222222',
      'emerald-disabled': '#D9D9D9',
      'emerald-disabled-dark': '#8C8C8C',
      'emerald-primary-surface-black': "#222222",
      'emerald-transparent': '#00000000'
    },
    extend: {
      borderRadius: {
        'tn': '6px',
        'sm': '8px',
        'md': '10px',
        'lg': '15px',
        'xl': '20px',
        '2xl': '25px',
        'full': '1000px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
