// @ts-check
import { ConfigOptions, eslintConfig } from '../../../dist/index.js'

export default eslintConfig({ config: [ConfigOptions.Ts, ConfigOptions.Astro] })
