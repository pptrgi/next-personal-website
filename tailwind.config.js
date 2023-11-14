/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        titleColor: "#333333",
        titleColorDark: "black",
        textColor: "#777777",
        bodyColor: "#fafafa",
        extraGrey: "#9194A2",
        containerColor: "#fff",
      },
      screens: {
        xs: { max: "320px" },
        sm: "360px",
        md480: "480px",
        md800: "800px",
        lg1023: "1023px",
        lg1120: "1120px",
        xl1300: "1300px",
        xl2048: "2048px",
      },
      fontSize: {
        largeFont: "3rem",
        h1Font: "2rem",
        h2Font: "1.5rem",
        h3Font: "1.25rem",
        normalFont: "1rem",
        smallFont: "0.825rem",
        smallerFont: "0.816rem",
        tinyFont: "0.625rem",
      },
      fontWeight: {
        unbolded: 400,
        semibolded: 500,
        bolded: 700,
      },
    },
  },
  plugins: [],
};
