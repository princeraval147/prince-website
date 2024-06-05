/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  animation: {
    slidein300: "slidein 1s ease 300ms",
    slidein500: "slidein 1s ease 500ms",
    slidein700: "slidein 1s ease 700ms",
  },
}

