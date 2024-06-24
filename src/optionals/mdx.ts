import pluginMdx from 'eslint-plugin-mdx'

const mdx = [
  {
    ...pluginMdx.flat
  },
  {
    ...pluginMdx.flatCodeBlocks,
    rules: {
      ...pluginMdx.flatCodeBlocks.rules
    }
  }
]

export { mdx }
