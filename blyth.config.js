const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
  colors: {
    primary: '#0C2641',
    light: '#ffffff',
    dark: '#020f2d',
    'mid-grey': '#464646',
  },
  fonts: {
    base: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  sizeScale: {
    200: 'var(--step--2)',
    300: 'var(--step--1)',
    400: 'var(--step-0)',
    500: 'var(--step-1)',
    600: 'var(--step-2)',
    700: 'var(--step-4)',
    800: 'var(--step-6)',
    900: 'var(--step-8)',
  },
};

module.exports = {
  theme,
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
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      property: 'line-height',
    },
    measure: {
      items: {
        long: '75ch',
        short: '52ch',
        compact: '40ch',
      },
      property: 'max-width',
    },
    pad: {
      items: theme.sizeScale,
      responsive: true,
      property: 'padding',
    },
    'pad-top': {
      items: theme.sizeScale,
      property: 'padding-top',
    },
    'pad-bottom': {
      items: theme.sizeScale,
      property: 'padding-bottom',
    },
    'pad-left': {
      items: theme.sizeScale,
      property: 'padding-left',
    },
    radius: {
      items: {
        normal: '4px',
      },
      property: 'border-radius',
      variable: true,
    },
    size: {
      items: theme.sizeScale,
      variable: true,
    },
    text: {
      items: theme.sizeScale,
      responsive: true,
      property: 'font-size',
    },
    'text-align': {
      items: {
        center: 'center',
      },
      responsive: true,
      property: 'text-align',
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700',
      },
      property: 'font-weight',
      variable: true,
    },
  },
};
