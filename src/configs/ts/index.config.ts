import tsEslint from 'typescript-eslint'

import { rules } from './rules.ts'

import tsParser from '@typescript-eslint/parser'
import type { TSESLint } from '@typescript-eslint/utils'

const tsConfig = [
  ...tsEslint.configs.stylistic,
  {
    name: 'custom-ts',
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true
      },
      ecmaVersion: 'latest'
    }
  }
] as TSESLint.FlatConfig.Config[]

export { tsConfig }
