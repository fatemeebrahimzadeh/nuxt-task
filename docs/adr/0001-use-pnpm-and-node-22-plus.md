# 0001. Use pnpm And Node 22+

## Status

Accepted

## Context

The project is a Nuxt 4 application. The installed Nuxt and tooling packages declare modern Node engine requirements, and the repository already had a real `pnpm-lock.yaml` plus an empty npm lockfile.

Using multiple package managers would create lockfile drift and make interview review less reliable.

## Decision

Use pnpm as the only package manager and commit only `pnpm-lock.yaml`.

Declare:

- `packageManager: pnpm@10.15.1`
- Node engine: `^22.13.0 || ^24.11.0 || >=26.0.0`
- `.nvmrc`: `22.13.0`

## Consequences

Install and script commands should use `pnpm`.

The empty `package-lock.json` is removed. Developers on Node 18 need to switch Node versions before running Nuxt, commitlint, or release scripts.
