module.exports = {
  root: true,
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
