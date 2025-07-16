import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
   theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#597BFF',
          hover: '#CBD3FF',
          disabled: '#E6EBFF',
          outline: '#F0F3FF',
        },
        danger: {
          DEFAULT: '#FF5E2E',
          hover: '#FF3D00',
          disabled: '#FFD8C9',
        },
        gray: {
          100: '#F5F5F5',
          200: '#F2F2F2',
          300: '#DCDCDC',
          400: '#C2C2C2',
          500: '#999EBF',
          600: '#6B7280',
          900: '#1D1D1D',
        },
      },
    },
  },
  plugins: [],
};

export default config;
