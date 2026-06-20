# Frontend Implementation Reference

Use the provided Figma design as the visual source of truth.

Implementation approach:

- Build the actual product experience as the first screen, not a marketing landing page.
- Translate Figma spacing, type scale, color, and component states into local CSS or scoped component styles.
- Use the Fake Store product images as primary visual assets when product cards are shown.
- Keep responsive behavior explicit for mobile, tablet, and desktop widths.
- Avoid adding UI kits for this task unless the design contains complex controls that local components cannot cover cleanly.
- Keep repeated UI as components once there are at least two usages or when it clarifies review.
- Verify that text does not overflow buttons, cards, or product titles on narrow widths.
