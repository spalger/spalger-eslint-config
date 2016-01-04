const merge = require('lodash.merge');

module.exports = function (baseConfig, extension) {
  return merge(baseConfig, {
    'rules': {
      semi: [2, 'never']
    }
  }, extension || {});
}
