/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      primary: "#111c21",
      secondary: "#202d33",
      hover: "#202c33",
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "22px",
    },
    textColor: {
      primary: "#e9edef",
      secondary: "#d1d7db",
      Tertiary: "#8696a0",
    },
    fontWeight: {
      header: "700",
      text: "400",
    },
    fontFamily: {
      sans: [
        "SF Pro Text",
        "SF Pro Icons",
        "system",
        "-apple-system",
        "system-ui",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Lucida Grande",
        "Kohinoor Devanagari",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
