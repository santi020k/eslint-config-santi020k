// @ts-check
import { nextTsEslint } from '../../../dist/esm/index.mjs'

export default [...nextTsEslint, {
  rules: {
    '@next/next/no-html-link-for-pages': 0
  }
}]
