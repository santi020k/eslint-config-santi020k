import { reactConfig } from '../react/index.config.ts'
import { tsConfig } from '../ts/index.config.ts'

import { rules } from './rules.ts'

const reactTsConfig = [
  ...reactConfig,
  ...tsConfig,
  {
    name: 'custom-react-ts',
    rules
  }
]

export { reactTsConfig }
