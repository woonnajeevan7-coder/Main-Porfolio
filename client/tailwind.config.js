/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#a855f7",
        background: "#0f172a",
        card: "#1e293b",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-33.33%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 40s linear infinite",
        "scroll-right": "scroll-right 40s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
