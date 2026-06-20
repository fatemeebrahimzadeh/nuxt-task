# 0005. Use release-it For Versioning

## Status

Accepted

## Context

The project is a private interview application, not an npm library. It still benefits from repeatable version bumps, changelog generation, and release tags.

Changesets is useful for package publishing and monorepos, but this repository currently needs a lightweight single-app release flow.

## Decision

Use `release-it` with `@release-it/conventional-changelog`.

Configuration:

- Run `pnpm lint` and `pnpm build` before release.
- Generate `CHANGELOG.md` from Conventional Commits.
- Create a release commit and local tag.
- Do not publish to npm.
- Do not create GitHub releases.
- Do not push tags by default.

Expose scripts:

- `pnpm release`
- `pnpm release:dry`

## Consequences

The release flow is safe for local interview review because it does not publish or push by default.

If this app later gets CI/CD, push and GitHub release behavior should be revisited in a new ADR.
