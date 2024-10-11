import fs from 'fs/promises'
import path from 'path'

// Define the build directory
const buildDir = './dist'

const copyPackageJson = async () => {
  try {
    const src = path.resolve('./package.json')
    const dest = path.resolve(buildDir, 'package.json')

    await fs.copyFile(src, dest)

    console.log('package.json copied to build directory.')
  } catch (err) {
    console.error('Error copying package.json:', err)
  }
}

copyPackageJson()
