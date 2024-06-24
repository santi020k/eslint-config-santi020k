import { flatCompat } from '../utils/flatCompat'

import { fixupConfigRules } from '@eslint/compat'
import pluginVitest from 'eslint-plugin-vitest'

const vitest = [
  ...fixupConfigRules(flatCompat.extends('plugin:testing-library/react')),
  pluginVitest.configs.recommended,
  {
    name: 'custom-vitest',
    rules: {
      'vitest/expect-expect': [
        'error',
        {
          assertFunctionNames: ['expect', 'assert', 'should']
        }
      ]
    }
  }
]

export { vitest }
