---
title: Stack
eleventyNavigation:
  key: Stack
  parent: Composition
  order: 4
---

# Stack Utility

Our stack utility is constructed as follows:

```css
{{ "composition/css/stack.css" | blyth | safe }}
```

## Purpose

Our stack utility is for flex-based layouts to save repeating the same lines of code. It allows developers to create horizontal or vertical stacks.

## Example

```html
<ul class="[ card-stack ] [ stack ]"></ul>
```

```css
.card-stack {
  --gutter: 2rem;
  --stack-align: center;
  --stack-justify: space-between;
}
```
