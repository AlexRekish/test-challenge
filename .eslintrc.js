module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'off',
    'no-nested-ternary': 'off',
    camelcase: 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
