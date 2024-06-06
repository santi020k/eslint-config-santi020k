import { nextConfig } from '../next/index.config.ts'
import { reactTsConfig } from '../react-ts/index.config.ts'

import { rules } from './rules.ts'

const nextTsConfig = [
  ...nextConfig,
  ...reactTsConfig,
  {
    name: 'custom-next-ts',
    rules
  }
]

export { nextTsConfig }
