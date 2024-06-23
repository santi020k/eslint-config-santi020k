// @ts-check
import { ConfigOptions, eslintConfig } from './dist/index.mjs'

export default [
  ...eslintConfig([ConfigOptions.Ts]),
  {
    name: 'custom-local',
    ignores: ['dist/*', 'node_modules/*']
  }
]
