// @ts-check
import { rules } from './rules.ts'

import { fixupConfigRules } from '@eslint/compat'
import eslint from '@eslint/js'
import pluginStylistic from '@stylistic/eslint-plugin'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import configStandard from 'eslint-config-standard'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginSimpleImport from 'eslint-plugin-simple-import-sort'
import pluginSonarjs from 'eslint-plugin-sonarjs'
import pluginUnusedImport from 'eslint-plugin-unused-imports'
import globals from 'globals'

const reactConfig: FlatConfig.ConfigArray = [
  {
    name: 'eslint-config',
    ...eslint.configs.recommended
  },
  {
    name: 'plugins',
    plugins: {
      n: pluginN,
      promise: pluginPromise,
      import: { rules: pluginImport.rules },
      'simple-import-sort': pluginSimpleImport,
      'jsx-a11y': pluginJsxA11y,
      'unused-imports': pluginUnusedImport,
      'react-rooks': pluginReactHooks,
      sonarjs: pluginSonarjs
    },
    rules: {
      ...configStandard.rules,
      ...pluginSonarjs.configs.recommended.rules,
      'import/first': 0
    }
  },
  {
    name: 'stylistic',
    ...pluginStylistic.configs['recommended-flat']
    // ...pluginStylistic.configs['all-flat']
  },
  ...(fixupConfigRules(pluginReactConfig).map(react => ({
    ...react,
    name: 'react',
    settings: {
      react: {
        version: 'detect'
      }
    }
  })) as FlatConfig.ConfigArray),
  {
    name: 'custom',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ...pluginReactConfig.languageOptions,
      globals: {
        ...globals.browser
      }
    },
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules
  }
]

export { reactConfig }
