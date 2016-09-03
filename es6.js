module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-airbnb/base')
  ],
  plugins: [
    'eslint-plugin-babel'
  ],
  rules: {
    semi: [2, 'never'],
    'max-len': ['error', 120],
    'import/no-reaching-inside': 'error',
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'babel/generator-star-spacing': 'error',
    'babel/new-cap': 'error',
    'babel/array-bracket-spacing': ['error', 'always'],
    'babel/object-curly-spacing': ['error', 'always'],
    'babel/object-shorthand': 'error',
    'babel/arrow-parens': ['error', 'as-needed'],
    'generator-star-spacing': 'off',
    'new-cap': 'off',
    'array-bracket-spacing': 'off',
    'object-curly-spacing': 'off',
    'object-shorthand': 'off',
    'arrow-parens': 'off'
  }
}
