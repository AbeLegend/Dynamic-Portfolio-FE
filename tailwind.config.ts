// lib
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/containers/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "portfolio-primary": '0px 2px 15px -4px rgba(0, 0, 0, 0.06)',
        "portfolio-secondary": '0px 4px 4px 0px rgba(215, 225, 238, 0.58)'
      },
      fontSize: {
        'heading-1': [
          "24px",
          {
            fontWeight: 700,
            lineHeight: "29.05px",
          },
        ],
        'heading-2': [
          "16px",
          {
            lineHeight: "19.36px", // or 24px
          },
        ],
        'heading-3': [
          "15px",
          {
            fontWeight: 700,
            lineHeight: "26px",
          },
        ],
        'sub-heading': [
          "14px",
          {
            fontWeight: 500,
            lineHeight: "21px",
          },
        ],
        'body': [
          "12px",
          {
            fontWeight: 400,
            lineHeight: "18px", // or 20px
          },
        ],

      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary-default) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary-default) / <alpha-value>)",
        },
        gray: {
          100: "rgb(var(--color-gray-100) / <alpha-value>)",
          200: "rgb(var(--color-gray-200) / <alpha-value>)",
          300: "rgb(var(--color-gray-300) / <alpha-value>)",
          400: "rgb(var(--color-gray-400) / <alpha-value>)",
          500: "rgb(var(--color-gray-500) / <alpha-value>)",
          600: "rgb(var(--color-gray-600) / <alpha-value>)",
          700: "rgb(var(--color-gray-700) / <alpha-value>)",
        },
      },
      screens: {
        "mobile": "360px",
        "tablet": "640px",
        "laptop": "1024px",
        "desktop": "1280px",
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        // Default Colors
        ":root": {
          // PRIMARY
          "--color-primary-default": "5 132 249", // #0584F9
          // END PRIMARY
          // SECONDARY
          "--color-secondary-default": "16 164 176", // #10A4B0
          // END SECONDARY

          // GRAY COLOR
          "--color-gray-100": "145 158 171", // #919EAB
          "--color-gray-200": "159 159 159", // #9F9F9F
          "--color-gray-300": "135 135 135", // #878787
          "--color-gray-400": "113 121 132", // #717984
          "--color-gray-500": "107 107 107", // #6B6B6B
          "--color-gray-600": "21 27 38", // #151B26
          "--color-gray-700": "0 0 0", // #000000
          // END GRAY COLOR
        },
      })
    }),
  ],
}
export default config
