/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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
        "hero-image": "url('../imgs/main-hero-image.png')",
      },
      maxWidth: {
        custom: "1200px",
      },
      width: {
        "custom-Secondary": "2450px",
        1200: "1200px",
      },
      height: {
        "custom-Secondary": "1200px",
        custom: "3500px",
        "hero-primary": "80vh",
        "hero-secondary": "56vh",
        "sm-height-card": "320px",
        "lg-height-card": "250px",
      },
      animation: {
        appear: "appear 4s forwards",
        fadeIn: "fadeIn linear 2s",
        fadeOut: "fadeOut linear 2s",
        flowerOpen: "flowerOpen 2s forwards",
        "slide-left": "slide-left 2s forwards", // Adjust duration as needed
        "slide-right": "slide-right 2s forwards", // Adjust duration as needed
        "slide-left-fast": "slide-left-fast forwards",
        "slide-bottom": "slide-bottom 2s forwards",
        "circle-open": "circle-Open 2s forwards",
        "slide-top": "slide-top 2s forwards",
        "spin-slow": "spin 7s linear infinite", // Adjust the duration (5 seconds)
        // "animation-timeline": "view()",
        // "animation-range": " entry 0% cover 40%",
      },
      fadeOut: {
        "0%": {
          opacity: "0",
          transform: "translateX(200px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0px)",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scroll-animate": {
          animationTimeline: "view()",
          animationRange: "entry 0% cover 40%",
        },
      };

      // Add utilities with responsive and hover variants
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
