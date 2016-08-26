# Personal, Shareable, ESLint Config

Simply a set of modification to the fantastic [airbnb style](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Install

```bash
npm install --save-dev @spalger/eslint-config-personal eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

## Usage

Use this as your .eslintrc file. the babel-eslint parser is required

```
{
  "parser": "babel-eslint",
  "extends": "@spalger/personal/es6"
}
```
