---
title: Items
eleventyNavigation:
  key: Items
  parent: Design Tokens
---

## Items

Let's take a look at how the items property works for our tokens:

```js
weight: {
  items: {
    light: '300',
  },
  property: 'font-weight',
  variable: true,
},
```

The items value tells Blyth what tokens to create for our token. In the example above, we're creating a `light` font-weight with a value of `300`. The `light` part is the design token name, whilst the `300` is the value of the property you're looking to use.
