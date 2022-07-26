---
title: Space Scale
eleventyNavigation:
  key: Space Scale
  parent: Utilities
  order: 4
---

# Space Scale Utility

Our space scale utility is constructed as follows:

```css
{{ "utility/css/space-scale.css" | blyth | safe }}
```

## Purpose

The space-scale utility uses [Utopia](https://utopia.fyi/)'s space scale calculator to create a fluid space system that's connected to the type system. By default, the utility gives you a starting point, but you can feel free to override the file by using the [Utopia calculator](https://utopia.fyi/calculator) directly.

## Example

```js
const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
  spaceScale: {
    200: 'var(--space-3xs-2xs)',
    300: 'var(--space-2xs-xs)',
    400: 'var(--space-xs-s)',
    500: 'var(--space-s-m)',
    600: 'var(--space-m-l)',
    700: 'var(--space-l-xl)',
    800: 'var(--space-xl-2xl)',
    900: 'var(--space-2xl-3xl)',
  },
};

module.exports = {
  theme,
  tokens: {
    'pad-top': {
      items: theme.spaceScale,
      property: 'padding-top',
    },
  },
};
```

```html
<div class="pad-top-900"></div>
```
