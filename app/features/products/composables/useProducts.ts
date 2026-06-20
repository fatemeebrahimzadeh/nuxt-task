import { getProductsEndpoint } from '../api/productsApi'
import type { Product } from '../types/product'

export function useProducts() {
  return useFetch<Product[]>(getProductsEndpoint(), {
    key: 'products',
    default: () => []
  })
}
