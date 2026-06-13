/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f5f0",
        navy: "#0a1128",
        ink: "#1c1c1c",
        gold: "#c5a358",
        rule: "rgba(28, 28, 28, 0.1)",
        mist: "#f0f2f5",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
