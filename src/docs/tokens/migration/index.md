---
title: Migration from blyth.config.js
eleventyNavigation:
  key: Migration
  parent: Design Tokens
  order: 1
---

## Migration from blyth.config.js

Let's take our sample config:


```js
const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
  colors: {
    primary: '#ff00ff',
    light: '#ffffff',
    dark: '#252525',
  },
  fonts: {
    base: '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
  },
  sizeScale: {
    200: 'var(--space-3xs-2xs)',
    300: 'var(--space-2xs-xs)',
    400: 'var(--space-xs-s)',
    500: 'var(--space-s-m)',
    600: 'var(--space-m-l)',
    700: 'var(--space-l-xl)',
    800: 'var(--space-xl-2xl)',
    900: 'var(--space-2xl-3xl)',
  },
  textScale: {
    200: 'var(--step--2)',
    300: 'var(--step--1)',
    400: 'var(--step-0)',
    500: 'var(--step-1)',
    600: 'var(--step-2)',
    700: 'var(--step-3)',
    800: 'var(--step-4)',
    900: 'var(--step-5)',
  },
};

module.exports = {
  theme: theme,
  tokens: {
    bg: {
      items: theme.colors,
      property: 'background',
    },
    color: {
      items: theme.colors,
      property: 'color',
      variable: true,
    },
    font: {
      items: theme.fonts,
      property: 'font-family',
      variable: true,
    },
    'gap-top': {
      items: theme.sizeScale,
      property: 'margin-top',
    },
    'gap-bottom': {
      items: theme.sizeScale,
      property: 'margin-bottom',
    },
    leading: {
      items: {
        'extra-tight': '1.067',
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      property: 'line-height',
    },
    measure: {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '40ch',
      },
      property: 'max-width',
    },
    'pt-': {
      items: theme.sizeScale,
      property: 'padding-top',
    },
    'pb-': {
      items: theme.sizeScale,
      property: 'padding-bottom',
    },
    size: {
      items: theme.sizeScale,
      variable: true,
    },
    text: {
      items: theme.textScale,
      responsive: true,
      property: 'font-size',
      variable: true,
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        medium: '600',
        bold: '700',
      },
      property: 'font-weight',
      variable: true,
    },
  },
};
```

To migrate to Blyth v1, we need to convert this to Tailwind config:

```js
const tailwindCSSVariables = require('@bly-th/tailwind-css-variables');
const tailwindCustomUtilities = require('@bly-th/tailwind-custom-utilities');

module.exports = {
  content: ["src/**/*.html"],
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    colors: {
      primary: '#ff5400',
      light: '#f3f3f3',
      dark: '#252525'
    },
    fontSize: {
      // https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12
      200: 'clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)',
      300: 'clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)',
      400: 'clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)',
      500: 'clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)',
      600: 'clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)',
      700: 'clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)',
      800: 'clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)',
      900: 'clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)'
    },
    screens: {
      md: '48em',
      lg: '68em'
    },
    spacing: {
      // https://utopia.fyi/space/calculator/?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l
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
```

So, to do this:

- Embed your Utopia scales directly in the file (reduces CSS file size)
- Manually copy across properties from the design system

Now, you'll notice there isn't any basic CSS properties, `gap-top` etc. This is because Tailwind provides this out of the box, and automagically uses our scale system (it's wonderful). So, we need to manually update some of our naming conventions to follow Tailwinds, a few examples of this:

- `gap-top-400` -> `mt-400` [Docs](https://tailwindcss.com/docs/margin#add-margin-to-a-single-side)
- `color-primary` -> `text-primary` [Docs](https://tailwindcss.com/docs/text-color)
- `measure-short` -> `max-w-prose` [Docs](https://tailwindcss.com/docs/max-width)

You can read more on Tailwind's config file [here](https://tailwindcss.com/docs/configuration). You can do all sorts like provide your own properties, extend properties and a bunch more.