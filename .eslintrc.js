module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'airbnb-base',
    'eslint-config-prettier' // Resolves ESLint and Prettier conflicts
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'arrowParens': 'always',
        'singleQuote': true,
        'trailingComma': 'es5'
      }
    ],
    'import/no-unresolved': 'off',
  },
}
