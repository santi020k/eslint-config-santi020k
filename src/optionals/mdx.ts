import mdx from 'eslint-plugin-mdx'

export default [
  {
    ...mdx.flat
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules
    }
  }
]
