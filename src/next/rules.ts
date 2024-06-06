import { groups } from '../js/rules.ts'
import { rules as reactRules } from '../react/rules.ts'

const rules = {
  ...reactRules,
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // Packages `react` related packages come first.
        ['^react'],
        ['^next'],
        ...groups
      ]
    }
  ]
}

export { rules }
