module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'no-constant-condition': 0,
    'no-unused-vars': 1,
    'react-hooks/exhaustive-deps': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
