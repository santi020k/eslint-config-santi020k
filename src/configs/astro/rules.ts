import { groups } from '../js/rules'

const rules = {
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // Packages `react` related packages come first.
        ['^react'],
        ['^(astro)(/.*|$)?'],
        ...groups
      ]
    }
  ],
  // Disable no-unresolved rule for .astro files
  'react/jsx-filename-extension': [1, { extensions: ['.astro'] }], // Accept jsx in astro files
  'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
  'react/require-default-props': 'off', // Allow non-defined react props as undefined
  'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
  'react/react-in-jsx-scope': 'off',
  'react/no-unknown-property': 'off',
  // Disable conflicted rules
  '@stylistic/jsx-indent': 'off',
  '@stylistic/jsx-one-expression-per-line': 'off',
  '@stylistic/jsx-tag-spacing': 'off',
  'react/jsx-key': 'off'
}

export { rules }
