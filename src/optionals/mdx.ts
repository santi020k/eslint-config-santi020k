import pluginMdx from 'eslint-plugin-mdx'

const mdx = [
  {
    name: 'mdx-flat',
    files: ['**/*.{mdx}'],
    ...pluginMdx.flat
  },
  {
    name: 'mdx-blocks',
    files: ['**/*.{mdx}'],
    ...pluginMdx.flatCodeBlocks,
    rules: {
      ...pluginMdx.flatCodeBlocks.rules,
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

export { mdx }
