const fs = require('fs');

module.exports = function blyth(file) {
  const data = fs.readFileSync(`./node_modules/@bly-th/css/src/${file}`, 'utf8');
  return data;
};
