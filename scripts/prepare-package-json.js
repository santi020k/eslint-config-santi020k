import fs from 'fs/promises'
import path from 'path'

// Define the build directory
const buildDir = './dist'

// Async function to create an ESM module package.json
const createEsmModulePackageJson = async () => {
  try {
    const packageJsonFile = path.join(buildDir, 'package.json')

    try {
      // Check if package.json already exists
      await fs.access(packageJsonFile)
    } catch {
      // If it doesn't exist, create a new package.json with module type
      await fs.writeFile(packageJsonFile, '{"type": "module"}')
    }

    console.log('ESM module package.json files have been created successfully.')
  } catch (err) {
    console.error('Error while creating ESM module package.json:', err)
  }
}

// Call the function to create ESM module package.json
createEsmModulePackageJson()
