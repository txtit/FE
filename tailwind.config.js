module.exports = {
  purge: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '100': '1',
      },
      boxShadow: {
        custom: '#b8b9be 2px 2px 5px 0px, -3px -3px 7px #fff', // Định nghĩa shadow tùy chỉnh
        customInset: 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff', // Định nghĩa shadow tùy chỉnh cho inset
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
