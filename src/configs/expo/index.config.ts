import { flatCompat } from '../../utils/flatCompat'

import { rules } from './rules'

import { fixupConfigRules } from '@eslint/compat'

const expoConfig = [
  ...fixupConfigRules(flatCompat.extends('expo')),
  {
    name: 'custom-expo',
    rules
  }
]

export { expoConfig }
