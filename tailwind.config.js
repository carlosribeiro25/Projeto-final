module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ou conforme sua estrutura
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // ← adicione aqui
  ],
}
