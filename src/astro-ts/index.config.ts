import { astroConfig } from '../astro/index.config.ts'
import { reactTsConfig } from '../react-ts/index.config.ts'
import { flatCompat } from '../utils.ts'

import { fixupConfigRules } from '@eslint/compat'

const astroTsConfig = [
  ...reactTsConfig,
  ...astroConfig,
  ...fixupConfigRules(flatCompat.config({
    overrides: [{
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    }]
  }))
]

export { astroTsConfig }
