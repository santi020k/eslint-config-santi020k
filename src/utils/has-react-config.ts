import { ConfigOption, ReactConfigs } from '../index.ts'

/**
 * Checks if the provided configs array includes any React-specific configurations.
 *
 * @param configs - An optional array of configuration options.
 * @returns True if any React configuration is found, false otherwise.
 */
export const hasReactConfig = (configs?: ConfigOption[]): boolean => {
  if (!configs) return false

  return ReactConfigs.some(reactConfig => configs.includes(reactConfig))
}
