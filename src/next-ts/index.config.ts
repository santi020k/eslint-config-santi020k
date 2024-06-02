import { nextConfig } from '../next/index.config.ts'
import { reactTsConfig } from '../react-ts/index.config.ts'

const nextTsConfig = [
  ...nextConfig,
  ...reactTsConfig
]

export { nextTsConfig }
