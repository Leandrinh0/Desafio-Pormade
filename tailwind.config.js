/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': {'max' : '1100px'},
      'cellphone': {'max' : '530px'},
      'almostCellphone': {'max' : '650px'}
    },

    extend: {
      colors: {
        black_pormade: '#212121',
        green_pormade: '#3CB62C',
        grey_pormade: '#414141',
        light_green: '#509D45',
        transparent: '#61616180',
        grey_text: '#9B9B9B',
        white_pormade: '#D9D9D9',
        black: '#000000;',
        black_modal: '#0A0A0A',
        yellow: '#FFC700',
        green_button: '#3D7736',
        red_button: '#970000',
        cinza_fonte: '#8C8C8C',
        red_pormade: '#C90000', 
      },
      spacing: {
        '80px' : '80px'
      }
    },
  },
  plugins: [],
}

