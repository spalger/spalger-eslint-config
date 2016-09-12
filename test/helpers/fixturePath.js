var resolve = require('path').resolve

module.exports = function(name) {
  return resolve(__dirname, '../../fixtures', name)
}
