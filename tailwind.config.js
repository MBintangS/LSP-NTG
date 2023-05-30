/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '598': '598px',
        '400' : '400px',
        '500' : '500px',
        '300' : '300px',
        '450' : '450px',
      },
        height: {
          '598': '598px',
          '400' : '400px',
          '500' : '500px',
          '300' : '300px',
          '450' : '450px',
        },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#008797',
        'secondary-gray': '#848484',
        'secondary-blue' : '#E8F1F1',
        'cirlce-border' : '#87AB87',
        'tertiary-bg-blue' : '#EFF5F5',
        
      }
    },
  },
  plugins: [],
}
