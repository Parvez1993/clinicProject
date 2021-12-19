// tailwind.config.js

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        menu: "#17252A",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
