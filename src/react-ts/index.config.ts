import { reactConfig } from '../react/index.config.ts'
import { tsConfig } from '../ts/index.config.ts'

const reactTsConfig = [
  ...reactConfig,
  ...tsConfig
]

export { reactTsConfig }
