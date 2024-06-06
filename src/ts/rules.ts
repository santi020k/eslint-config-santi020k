import { rules as jsRules } from '../js/rules.ts'

const rules = {
  ...jsRules,
  semi: 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/no-unused-vars': [
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
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/ban-types': 'warn',
  '@typescript-eslint/no-var-requires': 'warn',
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-invalid-void-type': 'warn',
  '@typescript-eslint/no-dynamic-delete': 'warn',
  '@typescript-eslint/no-useless-constructor': 'warn',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/no-duplicate-enum-values': 'warn'
}

export { rules }
