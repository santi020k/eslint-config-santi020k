import { groups } from '../js/rules'

import { Linter } from '@typescript-eslint/utils/ts-eslint'

const rules: Linter.RulesRecord = {
  'react/react-in-jsx-scope': 'off',
  'react/jsx-max-depth': ['warn', { max: 7 }],
  'react/prop-types': 'off',
  'react-hooks/exhaustive-deps': 'off',
  'react/button-has-type': 'warn',
  'react/display-name': 'warn',
  'react/no-children-prop': 'warn',
  'react/no-danger-with-children': 'warn',
  'react/no-unstable-nested-components': 'warn',
  'react/self-closing-comp': ['warn', { component: true, html: true }],
  'react/jsx-curly-brace-presence': [
    'warn',
    { props: 'never', children: 'never' }
  ],
  'react/jsx-curly-newline': 'warn',
  'react/destructuring-assignment': 'warn',
  'react/jsx-pascal-case': 'warn',
  'react/boolean-prop-naming': 'warn',
  'react/hook-use-state': 'warn',
  'react/jsx-boolean-value': 'warn',
  'react/jsx-closing-tag-location': 'warn',
  'react/jsx-closing-bracket-location': 'warn',
  'react/jsx-wrap-multilines': 'warn',
  'react/jsx-no-target-blank': 'warn',
  'react/jsx-no-leaked-render': 'warn',
  'react/jsx-handler-names': 'warn',
  'react/jsx-fragments': 'warn',
  'react/no-deprecated': 'warn',
  'react/no-multi-comp': 'warn',
  'react/no-unescaped-entities': 'warn',
  'react/jsx-no-undef': 'warn',
  'react/no-unknown-property': 'warn',
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // Packages `react` related packages come first.
        ['^react'],
        ...groups
      ]
    }
  ]
}

export { rules }
