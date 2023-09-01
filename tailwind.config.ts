import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1000: '#050608',
          950: '#0A0C0F',
          900: '#0C0F12',
          800: '#13171D',
          700: '#1A2028',
          600: '#222933',
          500: '#2A323E',
          400: '#333C49',
          300: '#3D4654',
          200: '#48515E',
          100: '#5A6372',
          50: '#77818F',
          40: '#AFB9C9',
          30: '#D7DDE4',
        },
        green: {
          900: '#003311',
          800: '#005B1E',
          700: '#008528',
          600: '#00AC2E',
          500: '#00CB2C',
          400: '#17E134',
          300: '#30F03B',
          200: '#84F97F',
          100: '#D8FFD1',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      screens: {
        xs: '475px',
      },
      letterSpacing: {
        snug: '-0.0125em',
      },
      backgroundImage: {
        dotted: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0.75C1.5 1.16421 1.16421 1.5 0.75 1.5C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0C1.16421 0 1.5 0.335786 1.5 0.75Z' fill='%2339393D'/%3E%3C/svg%3E%0A");`,
      },
      cursor: {
        draw: `url("data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.86423 7.57945C1.49244 7.20766 0.786025 6.62501 0.701189 6.09568L0.0150511 1.81444C-0.000827288 1.71537 -0.00415711 1.61469 0.00513756 1.51479C0.0483285 1.05053 0.296127 0.702572 0.499312 0.499375C0.70249 0.296182 1.05046 0.0483317 1.51477 0.00513481C1.61467 -0.0041595 1.71535 -0.000828594 1.81442 0.015049L6.09566 0.701187C6.65607 0.791002 7.19236 1.47725 7.57933 1.86412C11.2257 5.50952 14.8722 9.15474 18.5181 12.8006C19.1606 13.4431 19.1606 14.486 18.5182 15.1285L15.1284 18.5181C14.486 19.1605 13.4432 19.1606 12.8007 18.5182C9.158 14.8692 5.51009 11.2253 1.86423 7.57945Z' fill='white'/%3E%3Cpath d='M11.5058 15.5319L15.5341 11.5058L6.73487 2.7088L2.70877 6.7349L11.5058 15.5319Z' fill='black'/%3E%3Cpath d='M1.19437 1.62541L1.8805 5.90665L1.90984 5.87729L5.87727 1.90984L5.90663 1.8805L1.62539 1.19437C1.43133 1.21242 1.21242 1.43135 1.19437 1.62541Z' fill='black'/%3E%3Cpath d='M12.334 16.3601L16.3624 12.334L17.6736 13.6452C17.8496 13.8212 17.8496 14.1079 17.6736 14.2839L14.2839 17.6736C14.1078 17.8496 13.8212 17.8496 13.6452 17.6736L12.334 16.3601Z' fill='black'/%3E%3C/svg%3E%0A"), pointer`,
      },
    },
    fontFamily: {
      sans: ['var(--font-satoshi)', 'sans-serif'],
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
      'spin-slower': 'spin 10s linear infinite',
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}

export default config
