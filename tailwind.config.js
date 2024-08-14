/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
      './components/**/*.{html,ts}',
    ],

  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {},
  plugins: [],
}
