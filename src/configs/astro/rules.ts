import { groups } from '../js/rules.ts'

const rules = {
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // Packages `react` related packages come first.
        ['^react'],
        ['^astro'],
        ...groups
      ]
    }
  ]
}

export { rules }