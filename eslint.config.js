// @ts-check
import { ConfigOption, eslintConfig } from './dist/index.js'

export default [
  {
    ignores: ['dist/*']
  },
  ...eslintConfig({ config: [ConfigOption.Ts] })
]
