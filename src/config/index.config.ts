import { astroConfig, jsConfig, nextConfig, reactConfig, tsConfig } from '../settings/index.ts'

import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

export enum ConfigOptions {
  Ts = 'ts',
  React = 'react',
  Next = 'next',
  Astro = 'astro'
}

// !important: The array order is important, the lower the more important
export const eslintConfig = (config?: ConfigOptions[]): FlatConfig.ConfigArray => {
  const hasReact = config?.includes(ConfigOptions.React) || config?.includes(ConfigOptions.Next)

  return [
    ...jsConfig,
    ...(config?.includes(ConfigOptions.Ts) ? tsConfig : []),
    ...(hasReact ? reactConfig : []),
    ...(config?.includes(ConfigOptions.Next) ? nextConfig : []),
    ...(config?.includes(ConfigOptions.Astro) ? astroConfig : [])
  ] as FlatConfig.ConfigArray
}
