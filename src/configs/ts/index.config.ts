import { rules } from './rules.ts'

import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import tsEslint from 'typescript-eslint'

const tsConfig = [
  ...tsEslint.configs.stylistic,
  {
    name: 'custom-ts',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules
  }
] as FlatConfig.Config[]

export { tsConfig }