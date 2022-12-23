/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.src/pages/***.{.tsx}',
  '.src/components/***.{.tsx}',],
  theme: {
    extend: {gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    }},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
