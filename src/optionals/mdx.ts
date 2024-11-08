import pluginMdx from 'eslint-plugin-mdx'

const mdx = [
  {
    name: 'mdx-flat',
    ...pluginMdx.flat
  },
  {
    name: 'mdx-blocks',
    ...pluginMdx.flatCodeBlocks,
    rules: {
      ...pluginMdx.flatCodeBlocks.rules,
      // Disable js/ts Eslint rules, markdown issues
      indent: 'off',
      'no-irregular-whitespace': 'off',
      '@stylistic/indent': 'off'
    }
  }
]

export { mdx }
