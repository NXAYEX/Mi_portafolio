/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Escala tipográfica fija: 14, 16, 20, 28, 40, 64, 112
    fontSize: {
      sm: ["14px", { lineHeight: "20px" }],
      base: ["16px", { lineHeight: "24px" }],
      lg: ["20px", { lineHeight: "28px" }],
      xl: ["28px", { lineHeight: "32px" }],
      "2xl": ["40px", { lineHeight: "44px" }],
      "3xl": ["64px", { lineHeight: "60px" }],
      "4xl": ["112px", { lineHeight: "100px" }],
    },
    extend: {
      colors: {
        paper: "#F2F3EF",
        ink: "#16161D",
        mint: "#B8E6CF",
        lavender: "#CFC6F2",
        peach: "#FFCDB8",
        line: "#C9CBC4",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "sans-serif"],
        body: ['"Instrument Sans"', "sans-serif"],
        mono: ["ui-monospace", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
