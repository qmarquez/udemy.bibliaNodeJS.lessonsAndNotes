const path = require('path');
module.exports = function (file, res) {
  return res.sendFile(path.join(__dirname, '..', '..', 'views', `${file}.html`));
}