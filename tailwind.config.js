/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html",
            "./app.js"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary1: "hsl(4, 100%, 67%)",
        neutral1: "hsl(234, 29%, 20%)",
        neutral2: "hsl(235, 18%, 26%)",
        neutral3: "hsl(231, 7%, 60%)",
        neutral4: "hsl(0, 0%, 100%)",
        error: "hsl(4 58% 78%)",
      },
    },
  },
  plugins: [],
}

