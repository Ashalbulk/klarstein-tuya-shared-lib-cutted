module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      // Pragma to use, default to "React"
      version: 'detect',
    },
  },
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'eslint-plugin-prettier', 'simple-import-sort'],
  rules: {
    'max-len': ['error', { code: 100, ignoreComments: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        offsetTernaryExpressions: true,
      },
    ],
    'comma-spacing': ['error', { after: true }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-var': ['error'],
    eqeqeq: ['error'],
  },
  globals: {
    fetch: true,
    __TEST__: true,
    __DEV__: true,
  },
};
  