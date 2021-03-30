---
title: Type Scale
eleventyNavigation:
  key: Type Scale
  parent: Utilities
  order: 6
---

# Type Scale Utility

Our wrapper utility is constructed as follows:

```css
{{ "utility/css/type-scale.css" | blyth | safe }}
```

## Purpose

The type-scale utility uses [Utopia](https://utopia.fyi/) to 'Elegantly scale type and space without breakpoints'. It provides a fluid type scale that can be defined by you. By default, the utility gives you a starting point, but you can feel free to override the file by using the [Utopia calculator](https://utopia.fyi/calculator) directly.

## Example

```js
const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
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
    text: {
      items: theme.sizeScale,
      responsive: true,
      property: 'font-size',
    },
  },
};
```

```html
<h2 class="text-900">Heading</h2>
```
