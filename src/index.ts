import { applyConfigIfOptionPresent } from 'utils/apply-config-if-option-present.ts'
import { hasReactConfig } from 'utils/has-react-config.ts'

import { astroConfig, expoConfig, jsConfig, nextConfig, reactConfig, tsConfig } from 'configs/index.ts'
import { cspell, i18next, markdown, mdx, tailwind, vitest } from 'optionals/index.ts'

import type { TSESLint } from '@typescript-eslint/utils'

/**
 * Enum for configuration options in ESLint
 */
enum ConfigOption {
  Ts = 'ts',
  React = 'react',
  Next = 'next',
  Expo = 'expo',
  Astro = 'astro'
}

/**
 * Enum for optional features that can be included in ESLint
 */
enum OptionalOption {
  Cspell = 'cspell',
  Tailwind = 'tailwind',
  Vitest = 'vitest',
  I18next = 'i18next',
  Mdx = 'mdx',
  Markdown = 'markdown'
}

/**
 * Array of configurations that require React
 */
export const ReactConfigs: ConfigOption[] = [
  ConfigOption.React,
  ConfigOption.Astro,
  ConfigOption.Next,
  ConfigOption.Expo
]

/**
 * ESLint configuration interface
 */
interface EslintConfig {
  config?: ConfigOption[]
  optionals?: OptionalOption[]
}

/**
 * Generates the ESLint configuration array, applying configurations
 * and optional settings based on the input configuration.
 *
 * @param {EslintConfig} options - Configuration and optional settings
 * @returns {TSESLint.FlatConfig.ConfigArray} The final ESLint configuration array
 */
const eslintConfig = ({
  config = [],
  optionals = []
}: EslintConfig = {}): TSESLint.FlatConfig.ConfigArray => {
  const hasReact = hasReactConfig(config)

  return [
    ...jsConfig,
    ...(hasReact ? reactConfig : []),
    ...applyConfigIfOptionPresent(config, ConfigOption.Ts, tsConfig),
    ...applyConfigIfOptionPresent(config, ConfigOption.Next, nextConfig),
    ...applyConfigIfOptionPresent(config, ConfigOption.Astro, astroConfig),
    ...applyConfigIfOptionPresent(config, ConfigOption.Expo, expoConfig),
    ...(optionals.includes(OptionalOption.Cspell) ? cspell : []),
    ...(optionals.includes(OptionalOption.Tailwind) ? tailwind : []),
    ...(optionals.includes(OptionalOption.Vitest) ? vitest : []),
    ...(optionals.includes(OptionalOption.I18next) ? i18next : []),
    ...(optionals.includes(OptionalOption.Mdx) ? mdx : []),
    ...(optionals.includes(OptionalOption.Markdown) ? markdown : [])
  ]
}

export { ConfigOption, eslintConfig, OptionalOption }
