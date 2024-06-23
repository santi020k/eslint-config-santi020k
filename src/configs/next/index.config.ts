import { flatCompat } from '../../utils/flatCompat.ts'

import { rules } from './rules.ts'

import { fixupConfigRules } from '@eslint/compat'

const nextConfig = [
  ...fixupConfigRules(flatCompat.extends('plugin:@next/next/core-web-vitals')),
  {
    name: 'custom-next',
    rules
  }
]

export { nextConfig }
