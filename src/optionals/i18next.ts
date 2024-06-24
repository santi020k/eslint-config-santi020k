import { flatCompat } from '../utils/flatCompat'

import { fixupConfigRules } from '@eslint/compat'

const i18next = [
  ...fixupConfigRules(flatCompat.plugins('i18next'))
]

export { i18next }
