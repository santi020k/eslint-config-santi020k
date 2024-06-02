import { jsConfig } from '../js/index.config.ts'

import { rules } from './rules.ts'

import tseslint from 'typescript-eslint'

const tsConfig = [
  ...jsConfig,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: 'ts-custom',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules
  }
]

export { tsConfig }
