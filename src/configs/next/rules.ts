import { groups } from 'configs/js/rules.ts'

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
