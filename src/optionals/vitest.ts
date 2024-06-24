import { flatCompat } from '../utils/flatCompat'

import { fixupConfigRules } from '@eslint/compat'
import pluginVitest from 'eslint-plugin-vitest'

const vitest = [
  ...fixupConfigRules(flatCompat.extends('plugin:testing-library/react')),
  pluginVitest.configs.recommended
]

export { vitest }
