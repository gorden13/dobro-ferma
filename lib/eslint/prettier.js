/**
 * https://github.com/prettier/eslint-config-prettier
 */
module.exports = {
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    curly: ['error', 'all'],
  },
};
