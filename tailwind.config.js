const tailwindCSSVariables = require('@bly-th/tailwind-css-variables');
const tailwindCustomUtilities = require('@bly-th/tailwind-custom-utilities');

module.exports = {
  content: ["./src/**/*.njk"],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    colors: {
      light: '#ffffff',
      'dark-background': '#000',
      dark: '#1F2021',
      'dark-elevated': '#22262B',
      green: '#61C453',
      amber: '#F4BD4E',
      red: '#ED695F',
    },
    fontFamily: {
      heading: ["Work Sans", "sans-serif"],
      base: ["Fira Code", "monospace"],
    },
    fontSize: {
      /* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1140,20,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      200: 'clamp(0.69rem, calc(0.69rem + 0.02vw), 0.70rem)',
      300: 'clamp(0.83rem, calc(0.79rem + 0.20vw), 0.94rem)',
      400: 'clamp(1.00rem, calc(0.90rem + 0.49vw), 1.25rem)',
      500: 'clamp(1.20rem, calc(1.02rem + 0.91vw), 1.67rem)',
      600: 'clamp(1.44rem, calc(1.14rem + 1.52vw), 2.22rem)',
      700: 'clamp(1.73rem, calc(1.25rem + 2.40vw), 2.96rem)',
      800: 'clamp(2.07rem, calc(1.34rem + 3.65vw), 3.95rem)',
      900: 'clamp(2.49rem, calc(1.41rem + 5.41vw), 5.26rem)',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    spacing: {
      /* @link https://utopia.fyi/space/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      200: 'clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)',
      300: 'clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)',
      400: 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)',
      500: 'clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)',
      600: 'clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)',
      700: 'clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)',
      800: 'clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)',
      900: 'clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)'
    }
  },
  plugins: [
    // Generates custom property values from tailwind config
    tailwindCSSVariables({
      colors: 'color',
      spacing: 'size',
      fontSize: 'text',
      fontFamily: 'font',
      fontWeight: 'font',
      lineHeight: 'leading',
    }),
    tailwindCustomUtilities({
      spacing: {
        name: 'flow-space',
        property: '--flow-space',
      },
    })
  ]
};