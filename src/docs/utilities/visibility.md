---
title: Visibility
eleventyNavigation:
  key: Visibility
  parent: Utilities
---

# Visibility Utility

Our visibility utility is constructed as follows:

```css
{{ "utility/css/visibility.css" | blyth | safe }}
```

## Purpose

The visibility utility is to help create an accessible visually hidden element. Often designers give us a design where certain expected elements are missing, let's take a form input label as an example. Labels are expected on inputs and are great for accessibility, but often designers use placeholders in inputs. We can use a visually hidden class on the label to make sure the label is within the document flow and remain available for screen readers. You can read more about this [here](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/).

## Example

```html
<label for="name" class="visually-hidden">Your full name</label> <input type="text" id="name" placeholder="Your full name" />
```
