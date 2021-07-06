---
title: Split Child
eleventyNavigation:
  key: Split Child
  parent: Utilities
  order: 5
---

# Split Child Utility

Our split-child utility is constructed as follows:

```css
{{ "utility/css/split-child.css" | blyth | safe }}
```

## Purpose

The split child utility is a small utility to create a side-by-side layout that stacks at a specific breakpoint. Similar to our [auto-grid utility](/docs/utilities/auto-grid/), it allows us to control columns within a horizontal access. It uses flex instead of grid to give us various size of columns, for example one column that's 25% and one that fills the rest of the space. It also creates a gap that remains consistent both horizontally and vertically as the layout stacks.

## Example

```html
<article class="[ article ] [ split-child ]">
  <div class="article__body"></div>
  <div class="article__sidebar"></div>
</article>
```

```css
.article {
  --split-child-space: 2rem;
  --split-child-align: center;
}
```
