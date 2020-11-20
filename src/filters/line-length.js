const HTMLParser = require('node-html-parser');

module.exports = function lineLength(txt) {
  const el = HTMLParser.parse(txt);

  return Math.max.apply(
    Math,
    el.querySelectorAll('pre').map((item) => item.innerHTML.split('<br>').length)
  );
};
