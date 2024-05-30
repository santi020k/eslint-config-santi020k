// @ts-check
import { reactTsEslint } from './dist/esm/index.mjs'

export default [
  ...reactTsEslint,
  {
    ignores: ['dist/*', 'node_modules/*']
  }
]
