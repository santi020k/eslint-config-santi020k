import pluginTailwind from 'eslint-plugin-tailwindcss'

// TODO: Change the tailwind library
// import pluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

const tailwind = [...pluginTailwind.configs['flat/recommended']]

export { tailwind }
