import { astroConfig, expoConfig, jsConfig, nextConfig, reactConfig, tsConfig } from './configs'
import { cspell, tailwind, vitest } from './optionals'

import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

enum ConfigOptions {
  Ts = 'ts',
  React = 'react',
  Next = 'next',
  Expo = 'expo',
  Astro = 'astro'
}

enum OptionalOptions {
  Cspell = 'cspell',
  Tailwind = 'tailwind',
  Vitest = 'vitest',
  I18next = 'i18next'
}

const ReactConfigs = [
  ConfigOptions.React,
  ConfigOptions.Next,
  ConfigOptions.Expo
]

interface EslintConfig {
  config?: ConfigOptions[]
  optionals?: OptionalOptions[]
}

// !important: The array order is important, the lower the more important
const eslintConfig = ({ config, optionals }: EslintConfig): FlatConfig.ConfigArray => {
  const hasReact = ReactConfigs.some(reactConfig => config?.includes(reactConfig))

  return [
    // ConfigOptions
    ...jsConfig,
    ...(hasReact ? reactConfig : []),
    ...(config?.includes(ConfigOptions.Ts) ? tsConfig : []),
    ...(config?.includes(ConfigOptions.Next) ? nextConfig : []),
    ...(config?.includes(ConfigOptions.Astro) ? astroConfig : []),
    ...(config?.includes(ConfigOptions.Expo) ? expoConfig : []),
    // OptionalOptions
    ...(optionals?.includes(OptionalOptions.Cspell) ? cspell : []),
    ...(optionals?.includes(OptionalOptions.Tailwind) ? tailwind : []),
    ...(optionals?.includes(OptionalOptions.Vitest) ? vitest : [])
    // ...(optionals?.includes(OptionalOptions.I18next) ? i18next : [])
  ] as FlatConfig.ConfigArray
}

export { ConfigOptions, eslintConfig, OptionalOptions }
