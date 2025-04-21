import * as pluginMdx from 'eslint-plugin-mdx'

const rules = {
  ...pluginMdx.flatCodeBlocks.rules,
  'no-var': 'error',
  'prefer-const': 'error',
  'react/react-in-jsx-scope': 0,
  'no-unused-vars': 'off',
  '@stylistic/indent': 'off',
  '@stylistic/jsx-closing-bracket-location': 'off',
  indent: 'off',
  'no-multi-spaces': 'off',
  '@stylistic/no-multi-spaces': 'off',
  'comma-dangle': 'off',
  '@stylistic/jsx-tag-spacing': 'off',
  'import/export': 'off'
}

const mdx = [
  {
    files: ['**/*.mdx'],
    ...pluginMdx.flat,
    processor: pluginMdx.createRemarkProcessor({
      lintCodeBlocks: true,
      languageMapper: {}
    }),
    rules
  },
  {
    files: ['**/*.mdx'],
    ...pluginMdx.flatCodeBlocks,
    rules
  }
]

export { mdx }
