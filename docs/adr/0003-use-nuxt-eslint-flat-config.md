# 0003. Use Nuxt ESLint Flat Config

## Status

Accepted

## Context

The project needs linting before feature implementation begins. Nuxt generates project-aware ESLint configuration for Vue, TypeScript, Nuxt auto imports, and framework-specific globals.

Manual ESLint configuration would duplicate framework knowledge and be easier to misconfigure.

## Decision

Use `@nuxt/eslint` with a root `eslint.config.mjs`.

Add `eslint-config-prettier` at the end of the flat config to disable formatting-oriented ESLint rules if they are introduced by shared configs later.

Expose scripts:

- `pnpm lint`
- `pnpm lint:fix`

## Consequences

Linting depends on Nuxt's generated `.nuxt/eslint.config.mjs`, so `pnpm install` or `pnpm postinstall` must run before linting in a fresh checkout.

Formatting is not handled by this ADR. If Prettier is added later, it needs its own ADR and scripts.
