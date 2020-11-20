const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
  colors: {
    light: '#ffffff',
    'dark-background': '#000',
    dark: '#1F2021',
    'dark-elevated': '#22262B',
    green: '#61C453',
    amber: '#F4BD4E',
    red: '#ED695F',
  },
  fonts: {
    heading: "'Work Sans', sans-serif",
    base: "'Fira Code', monospace",
  },
  sizeScale: {
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
        mid: '500',
        bold: '700',
      },
      property: 'font-weight',
      variable: true,
    },
  },
};
