# @santi020k/eslint-config-santi020k

Welcome to @santi020k/eslint-config-santi020k, a comprehensive and opinionated ESLint configuration package for JavaScript, TypeScript, and React projects. This repository was born out of my frustration with starting or working on projects that suffer from bad practices and poor quality code. By automating code quality and reducing the cognitive load during code reviews, this package aims to enforce a consistent coding style across your projects.

## Why Use This Configuration?

- Consistency: Enforces a uniform coding style, minimizing code differences and easing collaboration.
- Quality: Promotes best practices and helps avoid common pitfalls in JavaScript, TypeScript, and React development.
- Automation: Reduces the need for manual code reviews by catching issues early in the development process.
- Customization: While opinionated, it can be tailored to fit your project's specific needs.

## Links to Configurations

- [jsEslint](./src/js/README.md): For JavaScript projects.
- [tsEslint](./src/ts/README.md): For TypeScript projects.
- [reactEslint](./src/react/README.md): For JavaScript and React projects.
- [reactTsEslint](./src/react-ts/README.md): For TypeScript and React projects.
- NextJS: Pending
- Astro: Pending
- NX: Pending

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

### For JavaScript Projects

Create an `eslint.config.js` file (or use your existing one) and extend `@santi020k/eslint-config-santi020k`:

```js
  import { jsEslint } from '@santi020k/eslint-config-santi020k'

  export default [
    ...jsEslint,
    {
      // Other rules or overrides
    }
  ]
```

### For TypeScript Projects

Create an `eslint.config.js` file (or use your existing one) and extend `@santi020k/eslint-config-santi020k` with TypeScript support:

```js
  import { tsConfig } from '@santi020k/eslint-config-santi020k'

  export default [
    ...tsConfig,
    {
      // Other rules or overrides
    }
  ]
```

### For JavaScript and React Projects

Create an `eslint.config.js` file (or use your existing one) and extend `@santi020k/eslint-config-santi020k`:

```js
  import { reactEslint } from '@santi020k/eslint-config-santi020k'

  export default [
    ...reactEslint,
    {
      // Other rules or overrides
    }
  ]
```

### For TypeScript and React Projects

Create an `eslint.config.js` file (or use your existing one) and extend `@santi020k/eslint-config-santi020k` with TypeScript support:


```js
  import { reactTsConfig } from '@santi020k/eslint-config-santi020k'

  export default [
    ...reactTsConfig,
    {
      // Other rules or overrides
    }
  ]
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

## Future

[ ] Unit testing
[ ] Better documentation
[ ] Additional Frameworks support

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

These tools have significantly contributed to the JavaScript and TypeScript ecosystem, and their continued development helps maintain the high standards of code quality that we all strive for.

Thank you for using @santi020k/eslint-config-santi020k. Together, let's write cleaner, more maintainable code!
