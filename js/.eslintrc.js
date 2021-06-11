module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],

  plugins: [],

  ignorePatterns: ['**/*.min.*'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['warn', {
      code: 100,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'arrow-spacing': 'warn',
    'comma-dangle': 'warn',
    'comma-style': 'warn',
    curly: 'warn',
    indent: 'warn',
    quotes: 'off',
    semi: 'off',
    'semi-spacing': 'warn',
    'brace-style': 'off',
    'block-spacing': 'warn',
    'eol-last': 'warn',
    'object-shorthand': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'no-constant-condition': 'warn',
    'array-bracket-spacing': 'warn',
    'vue/component-tags-order': ['warn', {
      order: ['script', 'template', 'style']
    }],
    // 'vue/no-multiple-template-root': 'off',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    // 'vue/html-comment-content-newline': 'warn',
    // 'vue/html-comment-content-spacing': 'warn',
    // 'vue/html-comment-indent': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': 'warn',
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/attributes-order': 'warn',
    'vue/component-definition-name-casing': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-multi-spaces': 'warn',
    'space-in-parens': 'warn',
    'comma-spacing': 'warn',
    'space-before-function-paren': 'warn',
    'space-before-blocks': 'warn',
    'multiline-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unused-vars': 'warn',
    'no-path-concat': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-multi-spaces': 'warn',
    'keyword-spacing': 'warn',
    'key-spacing': 'warn',
    'vue/no-unused-components': 'warn',
    'operator-linebreak': 'warn',
    'object-curly-spacing': 'warn',
    'object-curly-newline': 'warn',
    'object-property-newline': 'warn',
    'spaced-comment': 'warn',
    'padded-blocks': 'warn',
    'padding-line-between-statements': ['warn',
      { blankLine: 'always', prev: 'import', next: '*' }, // every import statement
      { blankLine: 'never', prev: 'import', next: 'import' }, // ignore consecutive imports
      { blankLine: 'always', prev: '*', next: 'if' }, // every if statement
      { blankLine: 'any', prev: 'if', next: 'if' } // ignore consecutive if statement
    ],
    'space-infix-ops': 'warn',
    'quote-props': ['warn', 'as-needed'],
    'vue/max-attributes-per-line': ['warn', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'vue/new-line-between-multi-line-property': ['warn', {
      minLineOfMultilineProperty: 4
    }]
  }
}
