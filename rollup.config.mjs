import packageJson from './package.json' with { type: 'json' }

import { nodeResolve } from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.exports.require.default,
      format: 'cjs'
    },
    {
      file: packageJson.exports.import.default,
      format: 'esm',
      banner: '// @ts-self-types="./index.d.ts"'
    }
  ],
  external: [/node_modules/],
  plugins: [
    esbuild({
      minify: false
    }),
    // @ts-ignore
    copy({
      targets: [
        { src: 'src/types.ts', dest: 'dist/cjs' },
        { src: 'src/types.ts', dest: 'dist/esm' }
      ]
    }),
    nodeResolve()
  ]
}
