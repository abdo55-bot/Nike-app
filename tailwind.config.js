/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xl':{'max':'1200px'},
      'xl':{'lg':'991px'},
      'sm':{'max':'550px'},
      'xsm':{'max':'375px'},

    }
  },
  plugins: [],
}

