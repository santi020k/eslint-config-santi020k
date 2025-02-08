import pluginMarkdown from '@eslint/markdown'

const markdown = [
  ...pluginMarkdown.configs.recommended,
  {
    name: 'markdown',
    files: ['**/*.md'],
    language: 'markdown/commonmark',
    rules: {
      'markdown/fenced-code-language': 'error',
      'markdown/heading-increment': 'error',
      'markdown/no-duplicate-headings': 'off',
      'markdown/no-empty-links': 'error',
      'markdown/no-html': 'off',
      'markdown/no-invalid-label-refs': 'error',
      'markdown/no-missing-label-refs': 'off',
      // Disable js/ts Eslint rules, markdown issues
      indent: 'off',
      'no-irregular-whitespace': 'off',
      '@stylistic/indent': 'off',
      'no-unused-vars': 'off',
      '@stylistic/jsx-closing-bracket-location': 'off',
      'no-multi-spaces': 'off',
      '@stylistic/no-multi-spaces': 'off',
      'comma-dangle': 'off',
      '@stylistic/jsx-tag-spacing': 'off'
    }
  }
]

export { markdown }
