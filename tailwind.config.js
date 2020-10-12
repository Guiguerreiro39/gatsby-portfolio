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
        "contact-background": 'url("../assets/images/contact_background.jpg")',
        "timeline-background":
          'url("../assets/images/timeline_background.jpg")',
      }),
      fontSize: theme => ({
        "8xl": "5rem",
        "7xl": "4.3rem",
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
      boxShadow: theme => ({
        outline: "0 0 0 2px rgba(245, 101, 101, 0.75)",
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
    fontSize: ["hover", "responsive"],
    borderWidth: ["first", "responsive", "hover"],
    backgroundOpacity: ["hover", "responsive"],
    backgroundColor: ["hover", "responsive"],
    backgroundSize: ["responsive"],
    scale: ["responsive", "hover", "focus", "active"],
    width: ["responsive", "hover"],
  },
  plugins: [],
}
