#!/usr/bin/env sh

set -e;

if [ ! -f package.json ]; then
  echo "no package.json file found, are you at the root of your project?";
  exit 1;
fi

npm install --save-dev \
  eslint@latest \
  babel-eslint@latest \
  eslint-config-airbnb@latest \
  eslint-plugin-jsx-a11y@latest \
  eslint-plugin-react@latest \
  eslint-plugin-babel@latest \
  eslint-import-resolver-webpack@latest \
  @spalger/eslint-config-personal@latest \
  webpack@beta \
  https://git.io/vizfd \
  ;

if [ ! -f '.eslintrc.yaml' ]; then
  cp ./node_modules/@spalger/eslint-config-personal/example/.eslintrc.yaml .;
fi

echo "done!";
