import { Linter } from '@typescript-eslint/utils/ts-eslint'

const rules: Linter.RulesRecord = {
  'react/react-in-jsx-scope': 'off',
  'react/jsx-max-depth': ['warn', { max: 7 }],
  'react/prop-types': 'off',
  'unused-imports/no-unused-imports': 'warn',
  'react-hooks/exhaustive-deps': 'off',
  '@stylistic/indent': ['warn', 2],
  '@stylistic/quote-props': ['warn', 'as-needed'],
  quotes: 'off',
  '@stylistic/quotes': ['warn', 'single'],
  '@stylistic/semi': ['warn', 'never'],
  '@stylistic/comma-dangle': ['warn', 'never'],
  '@stylistic/object-curly-spacing': ['warn', 'always'],
  '@stylistic/padded-blocks': ['warn', 'never'],
  '@stylistic/arrow-parens': ['warn', 'as-needed'],
  '@stylistic/dot-location': ['warn', 'property'],
  '@stylistic/function-call-argument-newline': ['warn', 'never'],
  '@stylistic/object-property-newline': [
    'warn',
    { allowAllPropertiesOnSameLine: true }
  ],
  '@stylistic/multiline-ternary': ['warn', 'always-multiline'],
  '@stylistic/member-delimiter-style': 'off',
  '@stylistic/no-extra-parens': 'off',
  '@stylistic/max-len': [
    'warn',
    {
      code: 120,
      tabWidth: 2,
      comments: 200,
      ignoreStrings: true
    }
  ],
  '@stylistic/max-statements-per-line': ['warn', { max: 1 }],
  '@stylistic/array-element-newline': ['warn', 'consistent'],
  '@stylistic/no-extra-semi': 'off',
  '@stylistic/no-multi-spaces': 'off',
  '@stylistic/padding-line-between-statements': [
    'warn',
    { blankLine: 'always', prev: '*', next: '*' },
    { blankLine: 'any', prev: 'import', next: 'import' },
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var']
    },
    {
      blankLine: 'never',
      prev: ['singleline-const', 'singleline-let', 'singleline-var'],
      next: ['singleline-const', 'singleline-let', 'singleline-var']
    },
    { blankLine: 'always', prev: 'block-like', next: 'const' },
    { blankLine: 'always', prev: 'const', next: 'block-like' }
  ],
  '@stylistic/function-paren-newline': ['warn', 'consistent'],
  'arrow-body-style': ['warn', 'as-needed'],
  'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
  'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // Packages `react` related packages come first.
        ['^react'],
        // Internal packages.
        ['^(store)(/.*|$)'],
        ['^(api)(/.*|$)'],
        ['^(components)(/.*|$)'],
        ['^(contexts)(/.*|$)'],
        ['^(hooks)(/.*|$)'],
        ['^(lib)(/.*|$)'],
        ['^(services)(/.*|$)'],
        ['^(models)(/.*|$)'],
        ['^(utils)(/.*|$)'],
        ['^(ws)(/.*|$)'],
        // Side effect imports.
        ['^\\u0000'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports.
        ['^.+\\.?(css)$']
      ]
    }
  ],
  'react/button-has-type': 'warn',
  'react/display-name': 'warn',
  'react/no-children-prop': 'warn',
  'react/no-danger-with-children': 'warn',
  'react/no-unstable-nested-components': 'warn',
  'react/self-closing-comp': ['warn', { component: true, html: true }],
  'react/jsx-curly-brace-presence': [
    'warn',
    { props: 'never', children: 'never' }
  ],
  'react/jsx-curly-newline': 'warn',
  'react/destructuring-assignment': 'warn',
  'react/jsx-pascal-case': 'warn',
  'react/boolean-prop-naming': 'warn',
  'react/hook-use-state': 'warn',
  'react/jsx-boolean-value': 'warn',
  'react/jsx-closing-tag-location': 'warn',
  'react/jsx-closing-bracket-location': 'warn',
  'react/jsx-wrap-multilines': 'warn',
  'react/jsx-no-target-blank': 'warn',
  'react/jsx-no-leaked-render': 'warn',
  'react/jsx-handler-names': 'warn',
  'react/jsx-fragments': 'warn',
  'react/no-deprecated': 'warn',
  'react/no-multi-comp': 'warn',
  'react/no-unescaped-entities': 'warn',
  'jsx-a11y/alt-text': 'warn',
  'no-empty': 'warn',
  'no-nested-ternary': 'warn',
  'no-undef': 'warn',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true
    }
  ],
  'no-void': 'warn',
  camelcase: 'warn',
  'react/jsx-no-undef': 'warn',
  'array-callback-return': 'warn',
  'no-fallthrough': 'warn',
  eqeqeq: 'warn',
  'no-constant-binary-expression': 'warn',
  '@stylistic/lines-around-comment': 'warn',
  'import/no-duplicates': 'warn',
  'valid-typeof': 'warn',
  'no-constant-condition': 'warn',
  'no-use-before-define': 'warn',
  '@stylistic/implicit-arrow-linebreak': 'warn',
  'import/export': 'warn',
  'no-useless-escape': 'warn',
  '@stylistic/brace-style': 'warn',
  'no-useless-return': 'warn',
  'prefer-promise-reject-errors': 'warn',
  'no-useless-constructor': 'warn',
  'no-new': 'warn',
  'prefer-regex-literals': 'warn',
  'react/no-unknown-property': 'warn',
  '@stylistic/multiline-comment-style': 'off'
}

export { rules }
