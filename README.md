# TypeScript Monorepo Template

A flexible, modern TypeScript monorepo template ready for multi-package projects.

## Prerequisites

- Node.js 18+ (see `.nvmrc`)
- pnpm 9+ (or npm/yarn)

### Setup

```bash
# Install dependencies
pnpm install

# Verify setup
pnpm type-check
pnpm lint
pnpm build
```

## Available Scripts

- `pnpm build` – Build all workspace packages
- `pnpm lint` – Run ESLint in all workspace packages
- `pnpm lint:fix` – Fix linting issues in all workspace packages
- `pnpm format` – Format all packages plus root docs/workflows
- `pnpm format:check` – Check formatting without changes
- `pnpm type-check` – TypeScript type checking for all workspace packages

## Project Structure

```txt
.
├── packages/
│   └── core/
│       ├── src/      # Source code
│       ├── tests/    # Test files
│       └── dist/     # Build output
├── .github/          # GitHub workflows & templates
├── .vscode/          # VSCode configuration
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── tsconfig.base.json
├── eslint.config.js
├── .prettierrc
└── README.md
```

## Configuration

- **TypeScript:** [tsconfig.json](tsconfig.json), [tsconfig.base.json](tsconfig.base.json)
- **ESLint:** [eslint.config.js](eslint.config.js)
- **Prettier:** [.prettierrc](.prettierrc)
- **Git Hooks:** [.lintstagedrc.json](.lintstagedrc.json)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT – See [LICENSE](LICENSE) for details.
