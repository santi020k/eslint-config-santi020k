import { FlatCompat } from '@eslint/eslintrc'
import { getDirname } from 'cross-dirname'

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
