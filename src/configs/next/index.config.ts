import { rules } from './rules.ts'

import pluginNext from '@next/eslint-plugin-next'
import type { TSESLint } from '@typescript-eslint/utils'

const nextConfig = [
  {
    plugins: {
      '@next/next': pluginNext
    },
    rules: {
      ...pluginNext.configs['core-web-vitals'].rules
    }
  },
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
