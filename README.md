# Personal, Shareable, ESLint Config

Simply a set of modification to the fantastic [airbnb style](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Install

```bash
npm install --save-dev babel-eslint @spalger/eslint-config-personal
## initialize your .eslintrc file if you please
cp node_modules/\@spalger/eslint-config-personal/.eslintrc.example .eslintrc
```

## Usage

Then, add this to your .eslintrc file. the babel-eslint parser is required

```
{
  "parser": "babel-eslint",
  "extends": "@spalger/personal/es6"
}
```
