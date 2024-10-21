/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      accent_text :'#212121',
      accent_blue: '#4054F7',
      bg_white : '#FFFFFF',
      bg_light : '#F1F1F1',
      bg_lighter: '#F3F3F3',
      bg_gray : '#EAEAEA'
    },
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      }}
  },
  plugins: [],
}