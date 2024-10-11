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
      parserOptions: {
        parser: tsParser
      },
      ecmaVersion: 'latest'
    }
  }
  // TODO: Temporal
  // {
  //   name: 'ignore-node-modules-ts',
  //   ignores: ['node_modules/*']
  // }
] as TSESLint.FlatConfig.Config[]

export { tsConfig }
