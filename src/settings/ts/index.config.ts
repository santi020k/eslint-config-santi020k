import { rules } from './rules.ts'

import tseslint from 'typescript-eslint'

const tsConfig = [
  ...tseslint.configs.stylistic,
  {
    name: 'custom-ts',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules
  }
]

export { tsConfig }
