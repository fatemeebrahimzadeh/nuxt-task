# Nuxt Interview Task

Frontend interview task built with Nuxt for the Fake Store Products API and the provided Figma design.

## Project Tooling

- Runtime: Node `^22.13.0 || ^24.11.0 || >=26.0.0`
- Package manager: `pnpm@10.15.1`
- Linter: Nuxt ESLint flat config
- Git hooks: Husky
- Commit messages: Conventional Commits enforced by commitlint
- Releases: `release-it` with conventional changelog generation
- ADRs: `docs/adr`
- Agent guidance: `AGENTS.md` and `codex-skills/front-test-nuxt`

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Quality Checks

```bash
pnpm lint
pnpm build
pnpm release:dry
```

`pnpm release:dry` requires a clean working tree. For config-only validation while changes are still uncommitted:

```bash
pnpm exec release-it --dry-run --ci --git.requireCleanWorkingDir=false --git.requireUpstream=false
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
