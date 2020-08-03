module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-a11y/recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'a11y/media-prefers-reduced-motion': null,
    'a11y/no-outline-none': null,
    'a11y/selector-pseudo-class-focus': null,
    "declaration-block-no-duplicate-properties": true,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'value-keyword-case': null
  },
}