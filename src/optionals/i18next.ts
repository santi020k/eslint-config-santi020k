import { flatCompat } from 'src/utils/flat-compat.ts'

import { fixupConfigRules } from '@eslint/compat'

const i18next = [
  ...fixupConfigRules(flatCompat.plugins('i18next'))
]

export { i18next }
