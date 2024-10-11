import { flatCompat } from 'src/utils/flat-compat.ts'

import { rules } from './rules.ts'

import { fixupConfigRules } from '@eslint/compat'
import type { TSESLint } from '@typescript-eslint/utils'

const expoConfig = [
  ...fixupConfigRules(flatCompat.extends('expo')),
  {
    name: 'custom-expo',
    rules
  }
] as TSESLint.FlatConfig.ConfigArray

export { expoConfig }
