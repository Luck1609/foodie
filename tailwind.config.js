/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.png')",
        knife: "url('/images/knife.png')",
      },
      boxShadow: {
        custom: "0px 0px 22px 3px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
}