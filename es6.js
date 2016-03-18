module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-airbnb/base'),
  ],
  rules: {
    semi: [2, 'never']
  }
}
