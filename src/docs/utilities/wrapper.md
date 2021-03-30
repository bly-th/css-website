---
title: Wrapper
eleventyNavigation:
  key: Wrapper
  parent: Utilities
  order: 8
---

# Wrapper Utility

Our wrapper utility is constructed as follows:

```css
{{ "utility/css/wrapper.css" | blyth | safe }}
```

## Purpose

The wrapper utility is a common utility used for container a site to a max width. Quite often certain designs contain multiple widths, so multiple wrappers may be needed.

## Example

```html
<div class="wrapper wrapper--short"></div>
```

```css
.wrapper--short {
  --wrapper-max-width: 48rem;
  --wrapper-padding: 2rem;
}
```
