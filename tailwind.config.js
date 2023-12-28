// tailwind.config.js
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        md: ' 0 2px 4px -1px rgb(0 0 0 / 0.1), 0 1px 4px 1px rgb(0 0 0 / 0.1);'
      }
    }
  },
  plugins: [typography, forms, aspectRatio]
}
