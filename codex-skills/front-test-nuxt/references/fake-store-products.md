# Fake Store Products Reference

Source requirement: the user-provided Fake Store API Products docs.

Use `GET https://fakestoreapi.com/products` for the product catalog.

Expected product shape:

```ts
type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
```

Implementation notes:

- Treat product images as remote URLs and include meaningful `alt` text from `title`.
- Format prices for display instead of concatenating raw numbers into UI strings.
- Handle API failure with a visible retry or recovery state.
- Handle an empty array as a real state, even if the public API usually returns products.
- Keep API URL construction centralized so category, sorting, or pagination requirements can be added later.
