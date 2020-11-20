---
title: Utilities
eleventyNavigation:
  key: Utilities
  parent: Home
  order: 4
---

## Utilities

Utilities allow CSS programmers to write consistent, reusable code that's versatile, reusable and flexible. They're small CSS classes that can be used reused across the site, and tweaked where necessary.

A [wrapper](/docs/utilities/wrapper) is a great example. Quite often, we need to contain a site at a max-width so content is readable, and we have a nice padding on smaller devices that isn't at max-width size. Taking our wrapper example, imagine if we needed variations of our wrapper, we could do the following:

```css
.wrapper--short {
  --wrapper-max-width: 40rem;
}
```

This means we're not duplicating the other lines of CSS, keeping our code neat, reusable but the key thing here is also allowing it to be flexible!

Take a look at other utilities baked into Blyth.
