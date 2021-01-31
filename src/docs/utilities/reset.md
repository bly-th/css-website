---
title: Reset
eleventyNavigation:
  key: Reset
  parent: Utilities
---

# Reset Utility

Our reset utility is constructed as follows:

```css
{{ "utility/css/reset.css" | blyth | safe }}
```

## Purpose

This reset is a fantastic reset by [Andy Bell](https://piccalil.li/blog/a-modern-css-reset). As quoted:

_In this modern era of web development, we don’t really need a heavy-handed reset, or even a reset at all, because CSS browser compatibility issues are much less likely than they were in the old IE 6 days. That era was when resets such as normalize.css came about and saved us all heaps of hell. Those days are gone now and we can trust our browsers to behave more, so I think resets like that are probably mostly redundant._
