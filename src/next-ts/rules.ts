import { groups } from '../js/rules.ts'
import { rules as reacTsRules } from '../react/rules.ts'

const rules = {
  ...reacTsRules,
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
