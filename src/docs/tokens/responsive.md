---
title: Responsive
eleventyNavigation:
  key: Responsive
  parent: Design Tokens
---

## Responsive

Let's take a look at how the responsive property works for our tokens:

```js
text: {
  items: theme.sizeScale,
  responsive: true,
  property: 'font-size',
},
```

By including `responsive: true,` in the token, Blyth will automatically generate responsive classes for you! It'll allow you to create HTML like this:

```html
<h3 class="text-400 lg:text-900">Test</h2>
```

This will generate a heading that's small on mobile, but large on large devices. You have complete control over your breakpoints, too:

```js
breakpoints: {
  md: '48em',
  lg: '68em',
},
```

So in theory, you could add `xl: 80em`, and utilise a handy little utility like `xl:text-900`. Super handy, huh?
