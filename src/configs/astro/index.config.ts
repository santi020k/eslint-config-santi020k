import pluginAstro from 'eslint-plugin-astro'

import { rules } from './rules.ts'

import type { TSESLint } from '@typescript-eslint/utils'

const astroConfig = [
  ...pluginAstro.configs.recommended as TSESLint.FlatConfig.ConfigArray,
  {
    files: ['**/*.astro'],
    name: 'custom-astro',
    rules
  }
] as TSESLint.FlatConfig.ConfigArray

export { astroConfig }
