---
title: Breakout Button
eleventyNavigation:
  key: Breakout Button
  parent: Utilities
---

# Breakout Button Utility

Our breakout-button utility is constructed as follows:

```css
{{ "utility/css/breakout-button.css" | blyth | safe }}
```

## Purpose

The breakout button utility is a small utility to create accessible links that often take up the full size of a parent. Take a common card component. Quite often, you'll have some sort of image, title and description and you want the whole card to be clickable. Breakout button allows you to create this. This allows us to create good link user experience, whilst also making sure the link is accessible for keyboard users.

## Example

```html
<article class="card">
  <img src="/your-image.jpg" alt="The Welsh Countrside" />
  <h2><a href="/wales" class="breakout-button">Wales</a></h2>
  <p>A great Welsh landscape</p>
</article>
```

```css
.card {
  position: relative;
}
```
