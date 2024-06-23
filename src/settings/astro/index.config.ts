import { flatCompat } from '../../utils/flatCompat.ts'

import { fixupConfigRules } from '@eslint/compat'

const astroConfig = [
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
