# @santi020k/eslint-config-santi020k

Welcome to **@santi020k/eslint-config-santi020k**, a comprehensive and opinionated ESLint configuration package for JavaScript, TypeScript, React, and other frameworks. Born from a desire to eliminate bad practices and ensure high-quality code, this configuration automates code quality checks and reduces cognitive load during code reviews by enforcing a consistent coding style across your projects.

## Why Use This Configuration?

- **Consistency:** Enforces a uniform coding style, reducing code discrepancies and easing collaboration.
- **Quality:** Promotes best practices and helps avoid common pitfalls in JavaScript, TypeScript, Frameworks, Libraries, Tools and more.
- **Automation:** Catches issues early in the development process, minimizing manual code review effort.
- **Customization:** While it comes with strong opinions, you can tailor it to suit your project's specific needs.

## Installation

Before installing, make sure you have ESLint (version 9.0.0 or later) installed:

```bash
npm install eslint --save-dev
```

Then, install the configuration package. **Important:** I recommend using a fixed version (do not use `^` or `~`), as any new functionality or change may introduce new linter errors that require manual updates.

```bash
npm install @santi020k/eslint-config-santi020k --save-dev
```

## Usage

Create an `eslint.config.js` file (or update your existing one) and extend **@santi020k/eslint-config-santi020k** based on your project type.

### Basic Usage

For a basic JavaScript/Node.js project:

```js
import { eslintConfig } from '@santi020k/eslint-config-santi020k'

export default [
  ...eslintConfig()
  // Your custom config
]
```

### Advanced Usage

For projects that require specific configurations (e.g., TypeScript, React, Next.js, ...Etc), use the appropriate options:

```js
import { ConfigOption, eslintConfig } from '@santi020k/eslint-config-santi020k'

// TypeScript project
export default [
  ...eslintConfig({ config: [ConfigOption.Ts] })
  // Your custom config
]

// React project
export default [
  ...eslintConfig({ config: [ConfigOption.React] })
  // Your custom config
]

// TypeScript and React project
export default [
  ...eslintConfig({ config: [ConfigOption.React, ConfigOption.Ts] })
  // Your custom config
]

// Next.js project
export default [
  ...eslintConfig({ config: [ConfigOption.Next] })
  // Your custom config
]

// Expo project (Beta)
export default [
  ...eslintConfig({ config: [ConfigOption.Expo] })
  // Your custom config
]

// Astro project (beta, supports Astro with React)
export default [
  ...eslintConfig({ config: [ConfigOption.Astro] })
  // Your custom config
]
```

### Optional Usage

There are additional optional parameters to add support for other front-end/back-end technologies. This enables you to extend support as needed:

```js
import { ConfigOption, eslintConfig, OptionalOption } from '@santi020k/eslint-config-santi020k'

export default [
  ...eslintConfig({
    config: [ConfigOption.Next, ConfigOption.Ts],
    optionals: [
      // Spell checker
      OptionalOption.Cspell,
      // TailwindCss
      OptionalOption.Tailwind,
      // Vitest and testing-library
      OptionalOption.Vitest,
      // I18next
      OptionalOption.I18next,
      // Mdx
      OptionalOption.Mdx,
      // Markdown
      OptionalOption.Markdown,
      // Stencil
      OptionalOption.Stencil
    ]
  })
  // Your custom config
]
```

### Settings Usage (Experimental)

This experimental option allows ESLint to honor your `.gitignore` file:

```js
import { eslintConfig, SettingOption } from '@santi020k/eslint-config-santi020k'

export default [
  ...eslintConfig({
    // ESLint will ignore files specified in .gitignore
    settings: [SettingOption.Gitignore]
  })
  // Your custom config
]
```

## Opinionated but Flexible

This ESLint configuration is based on my personal preferences and practices, and it may evolve over time. **Important:** I recommend using a fixed version to avoid unexpected changes that might introduce new linter errors. To ensure stability, do not use `^` or `~` when specifying the version. If a rule feels too strict, consider changing it from an error to a warning to allow more flexibility during development.

## Scripts

Add the following useful scripts to your `package.json`:

```json
"scripts": {
  "lint": "eslint . --report-unused-disable-directives",
  "lint:fix": "npm run lint -- --fix"
}
```

## How to Implement in an Existing Project

1. **Install the Dependencies:** Ensure that both ESLint and this configuration package are installed.
2. **Update Your ESLint Configuration:** Extend **@santi020k/eslint-config-santi020k** in your ESLint configuration file as shown above.
3. **Run ESLint:** Lint your project files and automatically fix issues if possible:

   ```bash
   npm run lint
   npm run lint:fix
   ```

4. **Adjust as Necessary:** Review and modify the linting rules based on your project's needs. Some rules might be too strict or not applicable; feel free to disable or adjust them.

## Future Features

- [ ] Unit testing
- [ ] Enhanced documentation
- [ ] Additional framework support:
  - [ ] Vue
  - [ ] Angular
  - [ ] Astro (Process)
- [X] Refactored rules structure (previously duplicated configurations)

## Contributing

If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/santi020k/eslint-config-santi020k).

## Acknowledgements

Special thanks to the developers and maintainers of the following libraries, which form the backbone of this ESLint configuration:

- eslint-config-standard
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-n
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-simple-import-sort
- eslint-plugin-sonarjs
- eslint-plugin-unused-imports
- @stylistic/eslint-plugin
- @typescript-eslint
- @cspell/eslint-plugin
- eslint-plugin-tailwindcss
- eslint-plugin-vitest
- ...and many others

Their ongoing contributions help maintain the high standards of code quality we all strive for.

Thank you for using **@santi020k/eslint-config-santi020k**. Together, let's write cleaner, more maintainable code!
