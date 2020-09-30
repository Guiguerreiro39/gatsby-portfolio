module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-background": 'url("../assets/images/hero_background.jpg")',
      }),
      fontSize: theme => ({
        "8xl": "5rem",
      }),
      fill: theme => ({
        red: theme("color.red.500"),
      }),
      boxShadow: theme => ({
        inner: "inset 0 50px 50px 0 rgba(0, 0, 0, 0.06)",
      }),
      inset: theme => ({
        "1/2n": "-50%",
      }),
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  variants: {
    fontSize: ["hover"],
    borderWidth: ["first", "responsive", "hover"],
    backgroundOpacity: ["hover"],
    backgroundColor: ["hover"],
  },
  plugins: [],
}
