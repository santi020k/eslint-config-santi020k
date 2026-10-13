# Development

See **[https://github.com/santi020k/eslint-config-santi020k/README.md](https://github.com/santi020k/eslint-config-santi020k/README.md)** for our development instructions.
Thanks! 💖

## Release checks

`Node.js CI` runs the existing build check for pull requests and pushes to `main`.
Only a successful build from a push to `main` calls the reusable `Releases`
workflow from the same commit. A failed, cancelled, or skipped build prevents
changelog, tag, and GitHub Release work. Pull requests never call that workflow.
The existing release version rules and NPM publishing steps remain unchanged.

The build check keeps its existing name. Release work now appears as
`release / changelog` inside `Node.js CI`, rather than as a separate push-triggered
`Releases` run. Independent security and issue-management workflows still run.
