# Agent Instructions

## Project

This is a Nuxt interview task for implementing the Fake Store products experience from the provided API and Figma design.

Use the repo-local skill at `codex-skills/front-test-nuxt` for product feature work, implementation reviews, or package-selection changes.

## Runtime And Package Manager

- Use Node `^22.13.0 || ^24.11.0 || >=26.0.0`.
- Use `pnpm@10.15.1` or newer in the 10.x line.
- Keep `pnpm-lock.yaml` as the only package lockfile.
- Do not add npm, Yarn, or Bun lockfiles.
- If the interactive shell still points at Node 18, run commands with a Node 22+ runtime first in `PATH`.

## Quality Gates

- Run `pnpm lint` before committing source changes.
- Run `pnpm build` before handing off UI or release-related changes.
- Use `pnpm release:dry` to validate release configuration without creating commits or tags.

## Commits And Releases

- Use Conventional Commits, for example `feat(products): add catalog grid`.
- Husky runs `pnpm lint` on pre-commit.
- Husky runs commitlint on commit messages.
- `pnpm release` uses `release-it` to update the app version, changelog, release commit, and local Git tag. It does not publish to npm, GitHub, or push tags by default.

## ADR Policy

Every new package, framework, or tooling choice needs an ADR under `docs/adr`.

Use this structure:

- Status
- Context
- Decision
- Consequences

Prefer project and framework defaults before adding packages. If a package is added, document why built-in Nuxt/Vue capabilities were not enough.
