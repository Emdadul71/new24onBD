import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
export default config;
