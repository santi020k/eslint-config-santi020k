import pluginVitest from 'eslint-plugin-vitest'
import { flatCompat } from 'src/utils/flat-compat.ts'

import { fixupConfigRules } from '@eslint/compat'

const vitest = [
  ...fixupConfigRules(flatCompat.extends('plugin:testing-library/react')),
  {
    name: 'vitest',
    files: ['tests/**'], // or any other pattern
    plugins: {
      vitest: pluginVitest
    },
    rules: {
      ...pluginVitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      'vitest/max-nested-describe': ['error', { max: 3 }], // you can also modify rules' behavior using option like this
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
