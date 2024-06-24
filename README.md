# @santi020k/eslint-config-santi020k

Welcome to @santi020k/eslint-config-santi020k, a comprehensive and opinionated ESLint configuration package for JavaScript, TypeScript, React, and various other frameworks. This repository was born out of my frustration with projects that suffer from bad practices and poor code quality. By automating code quality and reducing cognitive load during code reviews, this package aims to enforce a consistent coding style across your projects.

## Why Use This Configuration?

- **Consistency**: Enforces a uniform coding style, minimizing code differences and easing collaboration.
- **Quality**: Promotes best practices and helps avoid common pitfalls in JavaScript, TypeScript, and React development.
- **Automation**: Reduces the need for manual code reviews by catching issues early in the development process.
- **Customization**: While opinionated, it can be tailored to fit your project's specific needs.

## Installation

First, ensure you have ESLint (9.3.0) installed:

```bash
  npm install eslint --save-dev
```

Then, install the configuration package:

```bash
  npm install @santi020k/eslint-config-santi020k --save-dev
```

## Usage

Create an eslint.config.js file (or use your existing one) and extend @santi020k/eslint-config-santi020k based on your project type:

### Basic Usage

For a basic JavaScript project:

```js
  import { eslintConfig } from './dist/index.mjs'

  export default [
    ...eslintConfig(),
    // Your custom config
  ]
```

### Advanced Usage

For projects with specific configurations (TypeScript, React, Next.js, etc.), use the appropriate options:

```js
  import { ConfigOptions, eslintConfig } from '@santi020k/eslint-config-santi020k';

  // Examples of different configurations

  // TypeScript project
  export default [
    ...eslintConfig({ config: [ConfigOptions.Ts] }),
    // Your custom config
  ];

  // React project
  export default [
    ...eslintConfig({ config: [ConfigOptions.React] }),
    // Your custom config
  ];

  // TypeScript and React project
  export default [
    ...eslintConfig({ config: [ConfigOptions.React, ConfigOptions.Ts] }),
    // Your custom config
  ];

  // Next.js project
  export default [
    ...eslintConfig({ config: [ConfigOptions.Next] }),
    // Your custom config
  ];

  // TypeScript and Next.js project
  export default [
    ...eslintConfig({ config: [ConfigOptions.Next, ConfigOptions.Ts] }),
    // Your custom config
  ];

  // Expo project (Beta)
  export default [
    ...eslintConfig({ config: [ConfigOptions.Expo] }),
    // Your custom config
  ];

  // TypeScript and Expo project (Beta)
  export default [
    ...eslintConfig({ config: [ConfigOptions.Expo, ConfigOptions.Ts] }),
    // Your custom config
  ];

  // Astro project (beta, supports Astro with React)
  export default [
    ...eslintConfig({ config: [ConfigOptions.Astro] }),
    // Your custom config
  ];

  // TypeScript and Astro project (beta, supports Astro with React)
  export default [
    ...eslintConfig({ config: [ConfigOptions.Astro, ConfigOptions.Ts] }),
    // Your custom config
  ];
```

### Optionals Usage

Additionally, there are some optional parameters that add support to other technologies that could be needed in a front-end project. The idea is to add support for more options in the future. Here is an example of how to use these optionals:

```js
  import { ConfigOptions, eslintConfig, OptionalOptions } from '@santi020k/eslint-config-santi020k';

  export default [
    ...eslintConfig({
      config: [ConfigOptions.Next, ConfigOptions.Ts],
      optionals: [
        // Spell checker
        OptionalOptions.Cspell,
        // TailwindCss
        OptionalOptions.Tailwind,
        // Vitest and testing-library
        OptionalOptions.Vitest,
        // I18next
        OptionalOptions.I18next
      ]
    }),
    // Your custom config
  ];
```

## Opinionated but Flexible

This ESLint configuration is based on my personal preferences and practices. As such, it may evolve over time. I recommend using a fixed version to avoid unexpected changes. If a rule is too strict, consider changing it from an error to a warning to allow for more flexibility during development.

## Scripts

Here are some useful scripts you can add to your `package.json`:

```json
  "scripts": {
    "lint": "eslint . --report-unused-disable-directives",
    "lint:fix": "npm run lint -- --fix"
  }
```

## How to Implement in an Existing Project

1. Install the Dependencies: Ensure you have ESLint and this configuration package installed in your project.

2. Update Your ESLint Configuration: Extend `@santi020k/eslint-config-santi020k` in your ESLint configuration file as shown above.

3. Run ESLint: Run ESLint to lint your project files and fix issues:

    ```bash
      npm run lint
      npm run lint:fix
    ```

4. Adjust as Necessary: Review the linting rules and adjust them based on your project's needs. Since this configuration is opinionated, some rules might be too strict or not applicable to your project. Feel free to disable or modify them.

## Future Features

- [ ] Unit testing
- [ ] Better documentation
- [ ] Additional Frameworks support
  - [ ] Vue
  - [ ] Angular
  - [ ] Astro (Process)
- [X] Refactor rules structure (eslint configurations are currently duplicated)

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/santi020k/eslint-config-santi020k).

## Acknowledgements

I would like to express my gratitude to the developers and maintainers of the following libraries, which form the backbone of this ESLint configuration:

- `eslint-config-standard`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-n`
- `eslint-plugin-promise`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-simple-import-sort`
- `eslint-plugin-sonarjs`
- `eslint-plugin-unused-imports`
- `@stylistic/eslint-plugin`
- `@typescript-eslint`
- `@cspell/eslint-plugin`
- `eslint-plugin-tailwindcss`
- `eslint-plugin-vitest`
- `etc...`

These tools have significantly contributed to the JavaScript and TypeScript ecosystem, and their continued development helps maintain the high standards of code quality that we all strive for.

Thank you for using @santi020k/eslint-config-santi020k. Together, let's write cleaner, more maintainable code!
