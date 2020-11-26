---
title: Getting Started
eleventyNavigation:
  key: Getting Started
  parent: Home
  order: 1
---

## Getting Started

Blyth CSS is available on [npm](https://www.npmjs.com/package/blyth-css) and requires version 8 of Node.js or higher.

### Installing Blyth into an existing repository

#### Install Blyth CLI

Install Blyth globally by running:

```bash
npm install @bly-th/css@alpha -g
```

This will install Blyth CLI globally, so you can run `blyth` commands from any directory.

#### Add project config to package.json

Blyth is versatile in it's situation. In theory, it can run in any project and can be adapted to suit _your_ workflow.

To get us started, add the following lines to your package.json:

```json
  "blyth": {
    "tokensOutputPath": "css/tokens.css",
    "utilityOutputPath": "css/utility"
  },
```

The `blyth` config will allow you to specify where you want Blyth to output generated CSS.

Congratulations — you're now ready to go with Blyth!

#### Add Blyth locally

Blyth can work locally, too:

```bash
npm install @bly-th/css@alpha --save-dev
```

You can include it within a projects dependencies so it can create new tokens as part of a build at deployment.

```json
  "scripts": {
    "tokens": "blyth tokens",
  },
  "bin": {
    "blyth": "node_modules/@bly-th/css/src/index.js"
  },
  "blyth": {
    "tokensOutputPath": "css/tokens.css",
    "utilityOutputPath": "css/utility"
  },
```

The `bin` config will add a shiny new command to your project workspace, so you can run easy to use [commands](/docs/commands/). For example, you could update the `blyth.config.js` file on GitHub directly, and then run `npm run tokens` to generate tokens when the project is being deployed. Nifty.
