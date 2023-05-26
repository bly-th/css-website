---
title: Design Tokens
eleventyNavigation:
  key: Design Tokens
  parent: Home
  order: 3
---

## Design Tokens

Design tokens are a great way to keep components and CSS flexible, and highly modifiable. It stops you repeating code across the site, abstracting common properties like colours, backgrounds, fonts, sizing etc.

The best way to see how design tokens work, is for us to jump right in! We use Tailwind CSS to generate tokens on the fly. The following config:

- Looks for classes in njk files (you could change this to .html, .vue, anything)
- Adds your design system, colors, fonts, responsive sizes, spacing
- Adds plugins to generate CSS variables, as well as further utilities, in this case a flow-space class based from the sizing.

```js
// prettier-ignore
{{ "tokens/default/config.js" | blyth | safe }}
```


