const merge = require('lodash.merge');

module.exports = function (baseConfig, extension) {
  return merge(baseConfig, {
    parser: 'babel-eslint',
    'rules': {
      semi: [2, 'never']
    }
  }, extension || {});
}
