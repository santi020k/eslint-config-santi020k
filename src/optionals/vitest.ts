import testingLibrary from 'eslint-plugin-testing-library'
import pluginVitest from 'eslint-plugin-vitest'

import { fixupPluginRules } from '@eslint/compat'

const vitest = [
  {
    name: 'vitest',
    files: ['tests/**', '**/__tests__/**', '**/__mocks__/**', '**/test/**', '**/spec/**', '**/__spec__/**', '**/*.test.{js,ts,jsx,tsx}'], // or any other pattern
    plugins: {
      vitest: pluginVitest,
      'testing-library': fixupPluginRules({
        rules: testingLibrary.rules
      })
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
