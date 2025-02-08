import { fixupPluginRules } from '@eslint/compat'
import stencilPlugin from '@stencil-community/eslint-plugin'

const stencil = [
  {
    name: 'stencil-community',
    files: ['**/*.{tsx,ts}'],
    plugins: {
      '@stencil-community': fixupPluginRules({
        rules: stencilPlugin.rules
      })
    },
    rules: {
      '@stencil-community/async-methods': 'error',
      '@stencil-community/ban-prefix': ['error', ['stencil', 'stnl', 'st']],
      '@stencil-community/decorators-context': 'error',
      '@stencil-community/decorators-style': [
        'error', {
          prop: 'inline',
          state: 'inline',
          element: 'inline',
          event: 'inline',
          method: 'multiline',
          watch: 'multiline',
          listen: 'multiline'
        }],
      '@stencil-community/element-type': 'error',
      '@stencil-community/host-data-deprecated': 'error',
      '@stencil-community/methods-must-be-public': 'error',
      '@stencil-community/no-unused-watch': 'error',
      '@stencil-community/own-methods-must-be-private': 'error',
      '@stencil-community/own-props-must-be-private': 'error',
      '@stencil-community/prefer-vdom-listener': 'error',
      '@stencil-community/props-must-be-public': 'error',
      '@stencil-community/props-must-be-readonly': 'error',
      '@stencil-community/render-returns-host': 'error',
      '@stencil-community/required-jsdoc': 'error',
      '@stencil-community/reserved-member-names': 'error',
      '@stencil-community/single-export': 'error',
      '@stencil-community/strict-mutable': 'error'
    }
  }
]

export { stencil }
