import { reactConfig } from '../react/index.config.ts'
import { flatCompat } from '../utils.ts'

import { rules } from './rules.ts'

import { fixupConfigRules } from '@eslint/compat'

const nextConfig = [
  ...reactConfig,
  ...fixupConfigRules(flatCompat.extends('plugin:@next/next/core-web-vitals')),
  {
    name: 'custom-next',
    rules
  }
]

export { nextConfig }
