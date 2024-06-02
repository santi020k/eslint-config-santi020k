// @ts-check
import { tsEslint } from './dist/esm/index.mjs'

export default [
  ...tsEslint,
  {
    ignores: ['dist/*', 'node_modules/*']
  }
]
