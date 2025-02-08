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
      'react/react-in-jsx-scope': 0,
      'no-unused-vars': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/jsx-closing-bracket-location': 'off',
      indent: 'off',
      'no-multi-spaces': 'off',
      '@stylistic/no-multi-spaces': 'off',
      'comma-dangle': 'off',
      '@stylistic/jsx-tag-spacing': 'off'
    }
  }
]

export { mdx }
