import { ConfigOption } from '../index.ts'

import type { TSESLint } from '@typescript-eslint/utils'

/**
 * Adds a specific configuration if the given option is present in the configs array.
 *
 * @param configs - An array of configuration options.
 * @param option - The option to check for.
 * @param configToAdd - The configuration to add if the option is present.
 * @returns The configuration to add if the option is present, otherwise an empty array.
 */
export const applyConfigIfOptionPresent = (
  configs: ConfigOption[],
  option: ConfigOption,
  configToAdd: TSESLint.FlatConfig.ConfigArray
): TSESLint.FlatConfig.ConfigArray => {
  const isOptionIncluded = configs.includes(option)

  return isOptionIncluded ? configToAdd : []
}
