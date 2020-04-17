module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    "airbnb-base"
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "arrowParens": "always",
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    "import/no-unresolved": "off",
  },
}
