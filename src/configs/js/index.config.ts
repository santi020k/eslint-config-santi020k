// @ts-check
import configStandard from 'eslint-config-standard'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginSimpleImport from 'eslint-plugin-simple-import-sort'
// TODO: Temporal issues
// import pluginSonarJs from 'eslint-plugin-sonarjs'
import pluginUnusedImport from 'eslint-plugin-unused-imports'
import globals from 'globals'

import { rules } from './rules.ts'

import eslint from '@eslint/js'
import pluginStylistic from '@stylistic/eslint-plugin'
import type { TSESLint } from '@typescript-eslint/utils'

const languageOptions: TSESLint.FlatConfig.LanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.browser,
    ...globals.node
  }
}

const jsConfig: TSESLint.FlatConfig.ConfigArray = [
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
      'unused-imports': pluginUnusedImport
      // sonarjs: pluginSonarJs
    },
    languageOptions,
    rules: {
      ...configStandard.rules,
      // ...pluginSonarJs.configs.recommended.rules,
      'import/first': 'off'
    }
  },
  {
    name: 'stylistic',
    ...pluginStylistic.configs['recommended-flat']
  },
  {
    name: 'custom-js',
    languageOptions,
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules
  }
]

export { jsConfig }
