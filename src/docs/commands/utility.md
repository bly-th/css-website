---
title: Utility
eleventyNavigation:
  key: utility
  parent: Commands
  order: 2
---

# Utility Command

To add Blyth's baked in [utilities](/docs/utilities/) to your project, just run:

```bash
blyth utility add utility_name_here
```

The files will be generated in your repo, and outputted to the `utilityOutputPath` set in your package.json. For example, to add our [reset](/docs/utilities/reset/) utility, just run:

```bash
blyth utility add reset
```

## Chaining

You can also chain your utilities, so you can add multiple utilities in just one line:

```bash
blyth utility add auto-grid reset
```
