# 0006. Use Repo-local Agent Guidance And Skill

## Status

Accepted

## Context

The task asks for agent and code skills before feature implementation. The guidance should be reviewable with the codebase and should not depend on a developer's global Codex configuration.

The sandbox does not allow writing to the repo's hidden `.codex` path, so a visible versioned directory is needed.

## Decision

Add:

- `AGENTS.md` for repo-wide agent rules.
- `codex-skills/front-test-nuxt` for a task-specific Codex skill.

The skill captures the Fake Store/Nuxt implementation workflow, package-selection rules, and validation expectations.

## Consequences

Future agents and developers have a documented operating model inside the repository.

If the team later wants automatic Codex skill discovery, the skill can be copied or symlinked into a supported Codex skills location.
