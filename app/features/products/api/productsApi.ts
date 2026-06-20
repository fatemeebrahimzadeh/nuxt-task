import type { Product } from '../types/product'

const PRODUCTS_ENDPOINT = 'https://fakestoreapi.com/products'

export function getProductsEndpoint() {
  return PRODUCTS_ENDPOINT
}

export async function fetchProducts() {
  return await $fetch<Product[]>(PRODUCTS_ENDPOINT)
}
