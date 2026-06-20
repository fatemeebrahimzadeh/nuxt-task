---
name: front-test-nuxt
description: Implement or review this repo's Nuxt interview task for the Fake Store Products API and Figma design. Use for product catalog feature work, Nuxt/Vue code structure decisions, package-selection reviews, ADR updates, lint/build/release workflow changes, and agent guidance for this codebase.
---

# Front Test Nuxt

## Overview

Use this skill to keep the interview implementation focused, reviewable, and aligned with the repository tooling decisions.

## Workflow

1. Read `AGENTS.md`, `package.json`, and the ADRs under `docs/adr` before changing dependencies or workflow.
2. Read the relevant references in this skill:
   - `references/fake-store-products.md` when modeling API data or product states.
   - `references/frontend-implementation.md` when building UI from the Figma design.
3. Prefer Nuxt and Vue built-ins before adding packages.
4. If a new package is necessary, update `package.json`, `pnpm-lock.yaml`, and add an ADR explaining the selection.
5. Keep source changes inside Nuxt conventions under `app/` unless there is a specific reason to add a new top-level module.
6. Run `pnpm lint` after code changes and `pnpm build` before handoff for UI or release changes.

## Coding Guidelines

- Use TypeScript types for product data and API responses.
- Isolate API access in a composable or server route instead of fetching directly from many components.
- Model loading, error, empty, and success states before styling polish.
- Keep components small enough to review: page orchestration, product list/grid, product card, and shared UI states should be separate when implementation grows.
- Use semantic HTML and accessible labels for interactive controls.
- Match the Figma design without adding decorative complexity that is not in the design.

## Package Rules

- Do not add state management unless product state becomes shared across unrelated routes/components.
- Do not add UI kits unless the Figma design cannot be implemented efficiently with local Vue components and CSS.
- Do not add data-fetching libraries before trying Nuxt `useFetch`/`useAsyncData`.
- Document every package addition in `docs/adr`.
