module.exports = {
  content: ["./*.html"],
  theme: {
    // screens: {
    //   sm: { max: "640px" },
    //   md: { max: "768px" },
    //   lg: { max: "1280px" },
    //   xl: { max: "1536px" },
    // },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
      boxShadow: {
        focus: "0 0 0 8px rgba(3, 219, 252,0.2)",
      },
    },
  },
  plugins: [],
};
