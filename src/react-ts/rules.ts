import { rules as reactRules } from '../react/rules.ts'
import { rules as tsRules } from '../ts/rules.ts'

const rules = {
  ...tsRules,
  ...reactRules
}

export { rules }
