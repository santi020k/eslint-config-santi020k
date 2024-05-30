import { FlatCompat } from '@eslint/eslintrc' // Importing FlatCompat from @eslint/eslintrc
import path from 'path' // Importing path module from Node.js
import { fileURLToPath } from 'url' // Importing fileURLToPath function from url module

// Get the resolved path to the current file
const __filename = fileURLToPath(import.meta.url)
// Get the name of the directory containing the current file
const __dirname = path.dirname(__filename)

// Initialize FlatCompat with the base directory and recommended configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {}
})

/**
 * Exporting the compat object for use in other modules
 */
export {
  compat
}
