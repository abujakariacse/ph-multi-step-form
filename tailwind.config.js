/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#B991FF",
        secondary: "#C8C8D0",
        circle: "#D4D4D8",
        accent: "#F4F4F5",
        placeholder: "#C8C8D0",
      },
      fontSize: {
        heading: "28px",
        subHeading: "14px",
      },
    },
  },
  plugins: [],
};
