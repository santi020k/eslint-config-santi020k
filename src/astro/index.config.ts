import { reactConfig } from '../react/index.config.ts'
import { flatCompat } from '../utils.ts'

import { fixupConfigRules } from '@eslint/compat'

const astroConfig = [
  ...reactConfig,
  ...fixupConfigRules(flatCompat.config({
    overrides: [{
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    },
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': true,
        'mdx/language-mapper': {}
      },
      rules: {
        'max-len': 'off',
        'react/react-in-jsx-scope': 'off'
      }
    }]
  }))
]

export { astroConfig }
