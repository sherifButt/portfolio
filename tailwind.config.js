const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   mode: "jit",
   purge: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   darkMode: "class", // or 'media' or 'class'

   theme: {
      colors: {
         ...defaultTheme.colors,
         indigo: {
            50: "#f9f8fe",
            100: "#f4f0fd",
            200: "#e3daf9",
            300: "#d2c3f5",
            400: "#b096ee",
            500: "#8e69e6",
            600: "#805fcf",
            700: "#6b4fad",
            800: "#553f8a",
            900: "#463371",
         },
         black: "#121445",
      },
      extend: {
         fontFamily: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            honey: ["honey", ...defaultTheme.fontFamily.sans],
            lagag: ["lagag", ...defaultTheme.fontFamily.sans],
         },
      },
   },
   variants: {
      extend: {},
      },
   plugins: [],
};
