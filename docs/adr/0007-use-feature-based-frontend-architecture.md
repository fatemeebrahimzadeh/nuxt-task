# 0007. Use Feature-based Frontend Architecture

## Status

Accepted

## Context

The interview task will grow around product catalog behavior and Figma-driven UI. A flat component directory is fine for a starter, but it becomes harder to review once API access, product types, pages, and repeated components appear.

The app currently has one main product feature, so a domain-first structure keeps related code close without adding framework complexity.

## Decision

Use feature-based folders under `app/features`.

For products, use:

- `api` for endpoint constants and API access helpers.
- `composables` for Nuxt data orchestration.
- `components` for feature-owned UI.
- `pages` for feature page composition.
- `types` for product data contracts.
- `utils` for feature-local formatting helpers.

Keep Nuxt route files in `app/pages`, and have them compose feature pages instead of carrying feature logic directly.

## Consequences

Figma implementation can focus on feature-owned product components without moving files later.

Shared UI should not be extracted until there are at least two real usages or the extraction removes meaningful complexity.
