module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      fonts: {
        sans: "Poppins",
      },
      margin: {
        12.5: "3.1125rem",
        5.5: "1.375rem",
      },
      padding: {
        12.5: "3.1225rem",
      },
      width: {
        "8/25": "32%",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      colors: {
        "pink-lady": {
          DEFAULT: "#FFF1D7",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFF1D7",
          600: "#FFDD9F",
          700: "#FFCA67",
          800: "#FFB62F",
          900: "#F6A000",
        },
        "fair-pink": {
          DEFAULT: "#FFEEE7",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFEEE7",
          600: "#FFC6AF",
          700: "#FF9F77",
          800: "#FF773F",
          900: "#FF4F07",
        },
        feta: {
          DEFAULT: "#EEFDED",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#EEFDED",
          600: "#BEF7BB",
          700: "#8FF288",
          800: "#5FEC56",
          900: "#2FE723",
        },
        celadon: {
          DEFAULT: "#BAE1A1",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FEFFFE",
          300: "#E7F5DF",
          400: "#D1EBC0",
          500: "#BAE1A1",
          600: "#9BD376",
          700: "#7CC64C",
          800: "#61A535",
          900: "#487B27",
        },
        "brink-pink": {
          DEFAULT: "#FF747C",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFEEEF",
          300: "#FFC6C9",
          400: "#FF9DA2",
          500: "#FF747C",
          600: "#FF3C47",
          700: "#FF0412",
          800: "#CB000C",
          900: "#930008",
        },
      },
    },
  },
  plugins: [],
};
