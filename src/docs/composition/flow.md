---
title: Flow
eleventyNavigation:
  key: Flow
  parent: Composition
  order: 3
---

# Flow Utility

Our flow utility is constructed as follows:

```css
{{ "composition/css/flow.css" | blyth | safe }}
```

## Purpose

Our flow utility is heavily inspired by [Every Layout's Flow utility](https://every-layout.dev/layouts/stack/). As quoted:

_The trick is to style the context, not the individual element(s). The Stack layout primitive injects margin between elements via their common parent:_

## Example

```html
<ul class="[ stacked-list ] [ flow ]"></ul>
```

```css
.stacked-list {
  --flow-space: 1.5em;
}
```
