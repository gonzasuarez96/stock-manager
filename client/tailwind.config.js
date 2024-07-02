/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-custom": "rgba(255, 199, 86, 1)",
        "txt-custom": "rgba(9, 75, 99, 1)",
        "txt-white": "#fff",
        textTitleColor: "#167C8A",
        textColor: "#094B63",
        "bg-img": "rgba(218, 218, 218, 1)",
        yellowBg: "#FFC756",
        greenBg: "#167C8A",
        hoverYellow: "#DD9912",
        hoverGreen: "#054C55",
        background: "#edf4fe",
      },
    },
  },
  plugins: [],
};
