module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'no-plusplus': 'off',
    'no-useless-constructor': 'off',
    'global-require': 'off',
    'max-len': ['error', { code: 120 }],
    'no-shadow': 'off',
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'no-param-reassign': [0, { props: false }],
    curly: ['error', 'all'],
  },
};
