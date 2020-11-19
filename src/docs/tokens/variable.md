---
title: Variable
eleventyNavigation:
  key: Variable
  parent: Design Tokens
---

## Variables

Let's take a look at how the variable property works for our tokens:

```js
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
```

Let's break this down. So, we know that this will generate some handy classes for us, e.g:

```html
<h2 class="weight-bold"></h2>
```

But what if we wanted to sync our classes with some handy CSS variables? Well, including the variable property will auto-generate a handy CSS variable, like so:

```css
h2 {
  font-weight: var(--weight-bold);
}
```

This gives us great control over our CSS. Blyth doesn't dictate how you want to code, it just gives you the toolkit to do so.

Now, what if we only need CSS variables? Well, just exclude the `property` key and it'll just generate CSS variables. Magic!

```js
size: {
  items: theme.sizeScale,
  variable: true,
},
```
