/** @type {import('tailwindcss').Config} */

const colors = {
  background: {
    blue: 'var(--color-background-blue)',
  },
  border: {
    gray: 'var(--color-border-gray)',
  },
}
export default {
  content: ['./index.html', './src/**/*.{css,vue,js,ts}'],
  theme: {
    extend: {},
    colors,
  },
  plugins: [],
}
