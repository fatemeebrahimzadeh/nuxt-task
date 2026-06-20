# 0004. Use Husky And Commitlint

## Status

Accepted

## Context

The repository needs local safeguards for code quality and consistent commit messages. Release notes are generated from Conventional Commits, so commit message format affects release quality.

## Decision

Use Husky for Git hooks and commitlint for Conventional Commit validation.

Packages:

- `husky`
- `@commitlint/cli`
- `@commitlint/config-conventional`

Hooks:

- `pre-commit`: `pnpm lint`
- `commit-msg`: `pnpm commitlint --edit "$1"`

The shared Husky helper prepends `/opt/homebrew/bin` when a Homebrew Node binary is available, so local hooks can use the Node 22+ runtime required by the project even if an older NVM shell appears first in `PATH`.

## Consequences

Invalid commit messages are rejected locally.

Developers can bypass hooks only with Git's explicit bypass flags, but CI should still run equivalent checks when CI is added.
