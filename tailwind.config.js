import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ou conforme sua estrutura
  theme: {
    extend: {},
  },
  plugins: [
    forms, // ← adicione aqui
  ],
}
