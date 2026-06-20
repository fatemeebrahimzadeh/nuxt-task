# 0002. Use Nuxt 4 And Vue 3 Stack

## Status

Accepted

## Context

The starter project is already a Nuxt app and the interview task is a frontend implementation against the Fake Store Products API and a Figma design.

Nuxt provides routing, server/client rendering options, data fetching, auto imports, and build tooling without adding a separate application framework.

## Decision

Use the existing Nuxt 4, Vue 3, and Vue Router stack.

Prefer Nuxt primitives for app structure, routing, data fetching, SEO metadata, and runtime configuration. Avoid adding separate routing, state, or API-client packages unless a future requirement makes the built-in Nuxt/Vue capabilities insufficient.

## Consequences

Feature work should follow Nuxt conventions under `app/`.

The explicit `vue-router` dependency is retained from the starter for now, but direct usage should be revisited after implementation. If the app never imports it directly, it can be removed in a later cleanup ADR.
