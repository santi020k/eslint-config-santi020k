import { getDirname } from 'cross-dirname'

import { FlatCompat } from '@eslint/eslintrc'

// Initialize FlatCompat with the base directory and recommended configurations
const flatCompat = new FlatCompat({
  baseDirectory: getDirname(),
  recommendedConfig: {}
})

/**
 * Exporting the compat object for use in other modules
 */
export {
  flatCompat
}
