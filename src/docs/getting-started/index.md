---
title: Getting Started
eleventyNavigation:
  key: Getting Started
---

## Getting Started

Blyth CSS is available on [npm](https://www.npmjs.com/package/blyth-css) and requires version 8 of Node.js or higher.

### Installing Blyth into an existing repository

#### Install Blyth into package.json

Install Blyth into your project’s package.json by running:

```bash
npm install blyth-css --save-dev
```

#### Add project config to package.json

Blyth is versatile in it's situation. In theory, it can run in any project and can be adapted to suit _your_ workflow.

To get us started, add the following lines to your package.json:

```json
  "bin": {
    "blyth": "node_modules/blyth-css/src/index.js"
  },
  "blyth": {
    "tokensOutputPath": "css/tokens.css",
    "utilityOutputPath": "css/utility"
  },
```

These lines will do two things:

- the `bin` config will add a shiny new command to your project workspace, so you can run easy to use [commands](/docs/commands/).
- the `blyth` config will allow you to specify where you want Blyth to output generated CSS.

#### Link our command

Use the following command to allow us to use our `blyth` namespace command in the terminal

```bash
npm link
```

Congratulations — you're now ready to go with Blyth!
