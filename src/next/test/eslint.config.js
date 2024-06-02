// @ts-check
import { nextEslint } from '../../../dist/esm/index.mjs'

export default [...nextEslint, {
  rules: {
    '@next/next/no-html-link-for-pages': 0
  }
}]
