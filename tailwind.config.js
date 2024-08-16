/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tenor': ['Tenor Sans', 'sans-serif'],
        'italiana': ['Italiana', 'sans-serif']
      }
    },
    backgroundImage: {
      'hero-img': "url('/src/assets/images/heroImage.jpg')",
      // 'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}