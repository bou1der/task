/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/routes/*.{js,jsx}","./src/components/authorization/*.{js,jsx}"],
  theme: {
    colors:{
      "teal-700":"#0f766e",
      "black-button":"#000000",
      "white":"#FFFFFF",
      "cyan-900":"#164e63",
      "inputs":"#E0E0E0",
      "textInputs":"#A5A5A5",
      "selectedCard":"#B1A5FF",

    },
    fontFamily:{
      'koulen':['Koulen',"sans-serif"]
    },
    fontSize:{
      '8Font':"8px",
      '12Font':"12px",
      '15Font':"15px",
      '20Font':"20px",
      '24Font':"24px",
      '36Font':"36px",
      '40Font':"40px",
    },
    screens:{
      'mobile':'380px',
      'table':'640px',
      'laptop':'1040px',
      'desktop':'1280px',
      'largeScreen':'1980px'
    },
    extend: {},
  },
  plugins: [],
}

