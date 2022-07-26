---
title: Grid
eleventyNavigation:
  key: Grid
  parent: Composition
  order: 1
---

# Grid Utility

Our grid utility is constructed as follows:

```css
{{ "composition/css/grid.css" | blyth | safe }}
```

## Purpose

This utility allows developers to create a reusable responsive grid system that is fluid and can adapt across sizes. We have CSS variables to control certain parts of the grid.

### grid-placement

Allows us to control whether columns fit the container, or whether they should fill the container. Options are `auto-fill` or `auto-fit`. You can [read more](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/#fill-or-fit-whats-the-difference) about these options. E.g:

`--grid-placement: auto-fit`

### grid-min-item-size

This is where we control how the columns are sized. By default, we set a min of `16rem` and a max of `1fr` which tells the grid to make sure each column is a minimum of 16rem, and a maximum of 1fr to fit the columns to the container. So when the columns can't fit the container, it'll begin to calculate and make sure the columns are a minimum 16rem. For example, this may give you the functionality depending on container width, where columns are 4 columns on desktop, 2 on tablet and then 1 on mobile.

This would make sure the minimum size is either 50% of the screen, or 16rem depending on which is bigger!

## Example

```html
<ul class="[ feature-grid ] [ grid ]">
  <li>Column 1</li>
  <li>Column 2</li>
  <li>Column 3</li>
</ul>
```

```css
.feature-grid {
  --gutter: 2rem;
  --grid-min-item-size: 12rem;
}
```

This shows that we're not repeating the same lines of CSS over and over, `display: grid` etc. We're keeping CSS reusable, with clear separations of concerns.
