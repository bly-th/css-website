const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

// Import filters
const lineLengthFilter = require('./src/filters/line-length.js');
const cssMinFilter = require('./src/filters/css-min.js');
const blythFilter = require('./src/filters/blyth.js');

// Import shortcodes
const osWindowShortcode = require('./src/shortcodes/oswindow.js');

module.exports = (config) => {
  // Deep data merge
  config.setDataDeepMerge(true);

  // Add plugins
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginRss);

  // Add filters
  config.addFilter('lineLength', lineLengthFilter);
  config.addFilter('blyth', blythFilter);
  config.addFilter('cssmin', cssMinFilter);

  // Add shortcodes
  config.addPairedShortcode('oswindow', osWindowShortcode);

  // Pass through
  config.addPassthroughCopy('./src/_redirects');
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/js');
  config.addPassthroughCopy('./src/fonts/');
  config.addPassthroughCopy('./src/apple-touch-icon-57x57.png');
  config.addPassthroughCopy('./src/apple-touch-icon-72x72.png');
  config.addPassthroughCopy('./src/apple-touch-icon-76x76.png');
  config.addPassthroughCopy('./src/apple-touch-icon-114x114.png');
  config.addPassthroughCopy('./src/apple-touch-icon-152x152.png');
  config.addPassthroughCopy('./src/apple-touch-icon-180x180.png');
  config.addPassthroughCopy('./src/apple-touch-icon.png');
  config.addPassthroughCopy('./src/favicon.ico');
  config.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
  };
};
