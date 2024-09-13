module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'es', 'vue', 'typescript', 'import', 'prettier']
    .map((p) => `./lib/eslint/${p}`)
    .map(require.resolve),

  rules: {
    // TODO: разобраться позже с этими правилами, возможно что-то из этого полезно включить
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'vue/no-reserved-component-names': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-button-has-type': 'off',
    'vue/object-shorthand': 'off',
    'vue/prefer-template': 'off',
    'vue/dot-notation': 'off',
    'vue/no-dupe-keys': 'off',

    'no-empty-function': 'off',
  },
};
