/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        "actor": ['"Actor", sans-serif'],
        "amethysta": ['"Amethysta", serif'],
        "noto": ['"Noto Sans", sans-serif'],
        "notoKR": ['"Noto Sans KR", sans-serif'],
        "montserrat": ['"Montserrat", sans-serif'],

      },
    },
  },
  plugins: [],
}

