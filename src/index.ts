import { applyConfigIfOptionPresent } from 'utils/apply-config-if-option-present.ts'
import { hasReactConfig } from 'utils/has-react-config.ts'

import { astroConfig, expoConfig, jsConfig, nextConfig, reactConfig, tsConfig } from 'configs/index.ts'
import { cspell, i18next, mdx, tailwind, vitest } from 'optionals/index.ts'

import type { TSESLint } from '@typescript-eslint/utils'

// Enum to define configuration options
enum ConfigOption {
  Ts = 'ts',
  React = 'react',
  Next = 'next',
  Expo = 'expo',
  Astro = 'astro'
}

// Enum to define optional features
enum OptionalOption {
  Cspell = 'cspell',
  Tailwind = 'tailwind',
  Vitest = 'vitest',
  I18next = 'i18next',
  Mdx = 'mdx'
}

// Array of configurations that involve React
export const ReactConfigs: ConfigOption[] = [
  ConfigOption.React,
  ConfigOption.Astro,
  ConfigOption.Next,
  ConfigOption.Expo
]

// Interface to define ESLint configuration structure
interface EslintConfig {
  config?: ConfigOption[]
  optionals?: OptionalOption[]
}

/**
 * Main function to generate ESLint configuration array.
 * !important: The array order is important, the lower the more important
 */
const eslintConfig = ({ config = [], optionals = [] }: EslintConfig = {}): TSESLint.FlatConfig.ConfigArray => {
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
    ...(optionals.includes(OptionalOption.Mdx) ? mdx : [])
  ]
}

export { ConfigOption, eslintConfig, OptionalOption }
