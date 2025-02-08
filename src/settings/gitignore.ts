// @ts-check

import { includeIgnoreFile } from '@eslint/compat'

const gitignore = [
  includeIgnoreFile(`${process.cwd()}/.gitignore`)
]

export { gitignore }
