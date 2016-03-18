module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-airbnb/index'),
  ],
  rules: {
    semi: [2, 'never']
  }
}
