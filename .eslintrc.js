module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
    'prettier/babel',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
};
