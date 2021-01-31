---
title: Property
eleventyNavigation:
  key: Property
  parent: Design Tokens
---

## Properties

Let's take a look at how the property works for our tokens:

```js
weight: {
  items: {
    light: '300',
  },
  property: 'font-weight',
  variable: true,
},
```

The property value tells Blyth what CSS property to create the token with. In our example of, the CSS property will be `font-weight`, so we can get our light font weight.
