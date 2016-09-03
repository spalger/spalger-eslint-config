module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-airbnb/index'),
  ],
  rules: {
    semi: [2, 'never'],
    'max-len': ['error', 120]
    'import/no-reaching-inside': 'error'
    'import/named': 'error'
    'import/prefer-default-export': 'off'
    'no-underscore-dangle': ['error', { allowAfterThis: true }]
    'react/require-extension': 'off'
    'react/jsx-filename-extension': ['error', {
      extensions: [
        '.js',
        '.spec.js'
      ]
    }]
  }
}
