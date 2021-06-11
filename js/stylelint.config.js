module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss'],

  // add your custom config here
  // https://stylelint.io/user-guide/configuration

  rules: {
    indentation: 2,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'error', 'debug',
        'import', 'use',
        'mixin', 'include', 'extend',
        'if', 'else if', 'else',
        'for'
      ]
    }],
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'declaration-block-trailing-semicolon': ['always', {
      ignore: ['single-declaration']
    }],
    'declaration-colon-space-after': 'always',
    'number-leading-zero': 'never',
    'function-url-quotes': 'always',
    'font-weight-notation': 'numeric',
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-missing-generic-family-keyword': [true, {
      ignoreFontFamilies: ['remixicon']
    }],
    'comment-whitespace-inside': 'always',
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested', 'after-single-line-comment']
    }],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-parentheses-space-inside': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'value-keyword-case': ['lower', {
      ignoreProperties: [/\$.*/] // ignore sass variables
    }]
  }
}
