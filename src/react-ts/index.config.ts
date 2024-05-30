import { reactConfig } from '../react/index.config.ts'

import { rules } from './rules.ts'

import tseslint from 'typescript-eslint'

const reactTsConfig = [
  ...reactConfig,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: 'ts-custom',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules
  }
]

export { reactTsConfig }
