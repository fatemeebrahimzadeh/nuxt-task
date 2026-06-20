<script setup lang="ts">
import ProductGrid from '../components/ProductGrid.vue'
import ProductState from '../components/ProductState.vue'
import { useProducts } from '../composables/useProducts'

useSeoMeta({
  title: 'Products | Fake Store'
})

const { data: products, error, pending, refresh } = await useProducts()
</script>

<template>
  <main class="products-page">
    <header class="products-page__header">
      <p class="products-page__eyebrow">Fake Store</p>
      <div class="products-page__intro">
        <h1>Products</h1>
        <p>
          A feature-based Nuxt catalog scaffold ready for the Figma visual pass.
        </p>
      </div>
    </header>

    <ProductState
      v-if="pending"
      title="Loading products"
      description="Fetching the catalog from Fake Store API."
    />

    <ProductState
      v-else-if="error"
      title="Products could not be loaded"
      description="Check the API connection and try again."
      retryable
      tone="danger"
      @retry="refresh"
    />

    <ProductState
      v-else-if="products.length === 0"
      title="No products found"
      description="The product catalog is currently empty."
    />

    <ProductGrid v-else :products="products" />
  </main>
</template>

<style scoped>
.products-page {
  display: grid;
  gap: 2rem;
  width: min(100%, 1180px);
  margin: 0 auto;
  padding: 3rem var(--space-page-inline);
}

.products-page__header {
  display: grid;
  gap: 0.75rem;
}

.products-page__eyebrow {
  margin: 0;
  color: var(--color-accent-strong);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.products-page__intro {
  display: grid;
  gap: 0.75rem;
  max-width: 42rem;
}

.products-page__intro h1 {
  margin: 0;
  color: var(--color-text);
  font-size: clamp(2.25rem, 6vw, 4.75rem);
  line-height: 0.95;
}

.products-page__intro p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .products-page {
    padding-block: 2rem;
  }
}
</style>
