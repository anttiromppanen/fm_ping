/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        userBlue: "hsl(223, 87%, 63%)",
        userPaleBlue: "hsl(223, 100%, 88%)",
        userLightRed: "hsl(354, 100%, 66%)",
        userGray: "hsl(0, 0%, 59%)",
        userVeryDarkBlue: "hsl(209, 33%, 12%)",
      },
    },
    backgroundImage: {
      "dashboard-pattern": "url('/illustration-dashboard.png')",
    },
  },
  plugins: [],
}