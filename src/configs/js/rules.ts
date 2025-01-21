import type { TSESLint } from '@typescript-eslint/utils'

const groups = [
  // Internal packages.
  // Atomic Design and components
  ['^(components|@/components|@components)(/.*|$)'],
  ['^(ui|@/ui|@ui)(/.*|$)'],
  ['^(atoms|@/atoms|@atoms)(/.*|$)'],
  ['^(molecules|@/molecules|@molecules)(/.*|$)'],
  ['^(organisms|@/organisms|@organisms)(/.*|$)'],
  ['^(templates|@/templates|@templates)(/.*|$)'],
  ['^(pages|@/pages|@pages)(/.*|$)'],
  // Other posible folders
  ['^(store|@/store|@store)(/.*|$)'],
  ['^(api|@/api|@api)(/.*|$)'],
  ['^(contexts|@/contexts|@contexts)(/.*|$)'],
  ['^(hooks|@/hooks|@hooks)(/.*|$)'],
  ['^(lib|@/lib|@lib)(/.*|$)'],
  ['^(services|@/services|@services)(/.*|$)'],
  ['^(models|@/models|@models)(/.*|$)'],
  ['^(utils|@/utils|@utils)(/.*|$)'],
  ['^(ws|@/ws|@ws)(/.*|$)'],
  // npm packages
  // Anything that starts with a letter (or digit or underscore), or `@` followed by a letter.
  ['^\\w'],
  // Side effect imports.
  ['^\\u0000'],
  // Other relative imports. Put same-folder imports and `.` last.
  ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
  // Parent imports. Put `..` last.
  ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  // Style imports.
  ['^.+\\.?(css|scss)$']
]

const rules: TSESLint.Linter.RulesRecord = {
  'unused-imports/no-unused-imports': 'warn',
  indent: 'off',
  'brace-style': 'off',
  '@stylistic/brace-style': ['warn', '1tbs'],
  '@stylistic/indent': ['warn', 2],
  '@stylistic/quote-props': ['warn', 'as-needed'],
  quotes: 'off',
  '@stylistic/quotes': ['warn', 'single'],
  '@stylistic/semi': ['warn', 'never'],
  'quote-props': 'off',
  'comma-dangle': 'off',
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
  '@stylistic/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'none',
      requireLast: false
    },
    singleline: {
      delimiter: 'comma',
      requireLast: false
    },
    overrides: {
      interface: {
        multiline: {
          delimiter: 'none',
          requireLast: false
        }
      }
    }
  }],
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
      groups
    }
  ],
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
  'no-useless-return': 'warn',
  'prefer-promise-reject-errors': 'warn',
  'no-useless-constructor': 'warn',
  'no-new': 'warn',
  'prefer-regex-literals': 'warn',
  '@stylistic/multiline-comment-style': 'off',
  'space-before-function-paren': 'off',
  'operator-linebreak': 'off'
}

export { rules, groups }
