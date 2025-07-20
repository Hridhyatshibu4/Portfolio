// tailwind.config.js
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",          // ⟵ add this line
  theme: {
    extend: {
      colors: {
        primary: "#7E74F1",
        offwhite: "#F1F1F1",
        bgdark: "#1E1E1E",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        plus: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

