import pluginTailwind from 'eslint-plugin-tailwindcss'

const tailwind = [{
  name: 'tailwind',
  ...pluginTailwind.configs['flat/recommended']
}]

export { tailwind }
