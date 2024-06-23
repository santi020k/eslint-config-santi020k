import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    name: 'eslintConfig',
    format: 'iife'
  },
  plugins: [
    typescript({
      target: 'ES5',
      declaration: true,
      outDir: './dist/',
      rootDir: './src'
    })
  ]
}
