/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        sx: { min: "0px", max: "639px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        dark: "#262522",
        light: "#FFFBF2",
        backGround: "#F0EBE1",
        "primaryColor-1": "#9FDC26",
        "primaryColor-2": "#F29C33",
        "primaryColor-3": "#EE6352",
        "primaryColor-4": "#C4E5FC",
        box: "#ff6653",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        "Homemade-Apple": ["Homemade Apple", "cursive"],
      },
      backgroundImage: {
        "hero-image": "url('./imgs/Hero  Section (1).png')",
        "cta-image": "url('./imgs/CTA-images/Recipe Card-1.png')",
      },
      maxWidth: {
        1200: "1200px",
      },
      width: {
        1200: "1200px",
      },
      height: {
        1200: "1200px",
      },
    },
  },
  plugins: [],
};
