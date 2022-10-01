module.exports = {
  env: {
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'react/style-prop-object': [0]
  }
};
