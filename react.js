var es6 = require('./es6')

module.exports = Object.assign(
  {},
  es6,
  {
    plugins: [].concat(
      es6.plugins,
      [
        'eslint-plugin-react'
      ]
    ),
    rules: Object.assign(
      {},
      es6.rules,
      {
        'react/require-extension': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: [
              '.js',
              '.spec.js'
            ]
          }
        ]
      }
    )
  }
)
