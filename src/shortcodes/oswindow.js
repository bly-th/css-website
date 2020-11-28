const nunjucks = require('nunjucks');
const lineLengthFilter = require('../filters/line-length.js');

module.exports = (content, type = 'css', title = '') => {
  const env = nunjucks.configure();
  env.addFilter('lineLength', lineLengthFilter);

  return env.render('./src/_includes/partials/os-window.njk', {
    title,
    content,
    type,
  });
};
