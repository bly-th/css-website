---
title: Embed
eleventyNavigation:
  key: Embed
  parent: Utilities
  order: 2
---

# Embed Utility

Our embed utility is constructed as follows:

```css
{{ "utility/css/embed.css" | blyth | safe }}
```

## Purpose

The embed utility is a small helper to create responsive embeds (from sites like YouTube and Vimeo) that scale responsively in terms of aspect ratio.

## Example

```html
<div class="[ youtube-embed ] [ embed ]"><iframe></iframe></div>
```

```css
.youtube-embed {
  --embed-ratio: (1920 / 1080);
}
```
