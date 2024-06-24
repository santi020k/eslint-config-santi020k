// @ts-check
import { rules } from './rules'

import { fixupConfigRules } from '@eslint/compat'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

const languageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  ...pluginReactConfig.languageOptions,
  globals: {
    ...globals.browser,
    ...globals.node
  }
}

const reactConfig = [
  ...(fixupConfigRules(pluginReactConfig).map(react => ({
    ...react,
    name: 'react',
    languageOptions,
    settings: {
      react: {
        version: 'detect'
      }
    }
  })) as FlatConfig.ConfigArray),
  {
    name: 'custom-react',
    plugins: {
      'react-hooks': pluginReactHooks
    },
    languageOptions,
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...rules
    }
  }
]

export { reactConfig }
