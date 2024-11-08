import pluginMarkdown from '@eslint/markdown'

const markdown = [
  {
    name: 'markdown',
    files: ['**/*.md'],
    plugins: {
      markdown: pluginMarkdown
    },
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
      '@stylistic/indent': 'off'
    }
  }
]

export { markdown }
