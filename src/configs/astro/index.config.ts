import pluginAstro from 'eslint-plugin-astro'

import { rules } from './rules'

const astroConfig = [
  ...pluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    name: 'custom-astro',
    rules
  }
]

export { astroConfig }
