import type { Options } from 'tsup'

const env = process.env.NODE_ENV

export const tsup: Options = {
  splitting: true,
  clean: false, // clean up the dist folder
  dts: false, // generate dts files
  format: ['esm'], // generate esm files
  minify: false,
  // bundle: env === 'production',
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: env === 'development',
  target: 'es2020',
  outDir: 'dist',
  entry: ['src/**/*.ts'] // include all files under src
}
