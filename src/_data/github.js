const fetch = require('node-fetch');

module.exports = async function () {
  return fetch('https://api.github.com/repos/bly-th/css/releases')
    .then((res) => res.json())
    .then((json) => {
      if (json[0]) {
        return {
          tag: json.filter((release) => release.prerelease == false)[0].name,
        };
      }

      return '';
    });
};
