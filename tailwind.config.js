/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#aa3d42',    // Tono claro del rojo
          DEFAULT: '#800e13', // Rojo base
          dark: '#4d090b',     // Tono oscuro del rojo
        },
        secondary: {
          light: '#ffe58a',   // Amarillo claro, contraste para detalles
          DEFAULT: '#ffc700', // Amarillo vibrante (dorado pixel art)
          dark: '#b58900',    // Tono mostaza
        },
        neutral: {
          light: '#eaeaea',   // Gris claro para fondos
          DEFAULT: '#7e7e7e', // Gris neutro
          dark: '#2e2e2e',    // Gris oscuro para contraste
        },
        accent: {
          light: '#569bd3',   // Azul claro
          DEFAULT: '#2364a8', // Azul base para detalles llamativos
          dark: '#123653',    // Azul oscuro para profundidad
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'], // Títulos pixel art
        body: ['"Inter"', 'sans-serif'],        // Textos regulares
      },
    },
  },
  plugins: [], // Este bloque debe estar fuera de `theme`
};
