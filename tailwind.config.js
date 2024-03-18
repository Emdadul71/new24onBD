/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        csm: "400px",
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "#1E184E ",
        secondary: "#D32027",
        secondarylight: "#fbedee",
        bluelight: "#f4fbff",
        body: "#666371",
        paragraph: "#2b2a29",
        black: "#111111",
        white: "#ffffff",
        grey: "#f8f9fa",
        greylight: "#eeeeee",
        danger: "#ff5a5a;",
        hoverprimary: "#1b1646",
        hoversecondary: "#be1d23",
      },
      fontSize: {
        headerLg: "56px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
