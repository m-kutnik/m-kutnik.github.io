module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
    'stylelint-config-sass-guidelines',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'order/properties-alphabetical-order': null,
    'string-no-newline': null,
    'selector-class-pattern': /^[a-zA-Z-]*(-(enter|leave)(-(active|to))?)?$/,
    'selector-id-pattern': /^[a-zA-Z-]*$/,
    'selector-max-universal': 1,
    'selector-max-type': [0, { ignore: ['child', 'descendant', 'compounded'] }],
    // ===
    // SCSS
    // ===
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': /^[a-z-]+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
