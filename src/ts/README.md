# @santi020k/eslint-config-santi020k

An ESLint configuration package that provides a comprehensive set of linting rules for your TypeScript projects. This package includes configurations from popular ESLint plugins and custom rules tailored to maintain a consistent coding style across your codebase.

## Installation

First, ensure you have ESLint installed:

```bash
  npm install eslint --save-dev
```

Then, install the configuration package:

```bash
  npm install @santi020k/eslint-config-santi020k --save-dev
```

## Usage

To use this ESLint configuration in your project, create an .eslintrc.json file (or use your existing one) and extend @santi020k/eslint-config-santi020k:

eslint.config.js

```js
import { tsEslint } from "@santi020k/eslint-config-santi020k";

export default [
  ...tsEslint,
  {
    // Other rules
  },
];
```

## Configuration

This ESLint configuration package includes the following plugins and rules:

- `eslint-config-standard`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-n`
- `eslint-plugin-promise`
- `eslint-plugin-simple-import-sort`
- `eslint-plugin-sonarjs`
- `eslint-plugin-unused-imports`
- `@stylistic/eslint-plugin`
- `typescript-eslint`

## Custom Rules

The configuration includes a set of custom rules to ensure consistency in your codebase. Some of the notable rules are:

- Enforcing single quotes for strings (@stylistic/quotes).
- Enforcing no semicolons (@stylistic/semi).
- Enforcing spacing inside curly braces (@stylistic/object-curly-spacing).
- Ensuring consistent newline style in functions (@stylistic/function-paren-newline).

## Scripts

```json
  "scripts": {
    "lint": "eslint . --report-unused-disable-directives",
    "lint:fix": "npm run lint -- --fix"
  }
```

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/santi020k/eslint-config-santi020k).
