import eslintMdx from 'eslint-mdx'
import pluginMdx from 'eslint-plugin-mdx'

const mdx = [
  {
    files: ['**/*.mdx'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser: eslintMdx,
      globals: {
        React: false
      }
    },
    plugins: {
      mdx: pluginMdx
    },
    rules: {
      'mdx/remark': 'warn',
      'react/react-in-jsx-scope': 0
    }
  }
]

export { mdx }
