import { flatCompat } from 'src/utils/flat-compat.ts'

import { rules } from './rules.ts'

import { fixupConfigRules } from '@eslint/compat'
import type { TSESLint } from '@typescript-eslint/utils'

const nextConfig = [
  ...fixupConfigRules(flatCompat.extends('plugin:@next/next/core-web-vitals')),
  {
    name: 'custom-next',
    rules
  },
  {
    name: 'ignore-next-folder',
    ignores: ['.next/*']
  }
] as TSESLint.FlatConfig.ConfigArray

export { nextConfig }
