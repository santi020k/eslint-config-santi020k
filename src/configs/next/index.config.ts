import { flatCompat } from '../../utils/flatCompat'

import { rules } from './rules'

import { fixupConfigRules } from '@eslint/compat'

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
]

export { nextConfig }
