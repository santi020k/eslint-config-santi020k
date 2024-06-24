import { groups } from '../js/rules'

const rules = {
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // Packages `react` related packages come first.
        ['^react'],
        ['^(next)(/.*|$)?'],
        ...groups
      ]
    }
  ]
}

export { rules }
