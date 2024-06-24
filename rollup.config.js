import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    name: 'eslintConfig',
    format: 'es'
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
