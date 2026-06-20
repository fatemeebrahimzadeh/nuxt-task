<script setup lang="ts">
import ProductGrid from '../components/ProductGrid.vue'
import ProductHero from '../components/ProductHero.vue'
import ProductState from '../components/ProductState.vue'
import { useProducts } from '../composables/useProducts'

useSeoMeta({
  title: 'Products | Fake Store'
})

const { data: products, error, pending, refresh } = await useProducts()
</script>

<template>
  <main class="products-page">
    <ProductHero />

    <section class="products-page__catalog" aria-labelledby="products-title">
      <header class="products-page__catalog-header">
        <p>Fake Store API</p>
        <h2 id="products-title">Products</h2>
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
    </section>
  </main>
</template>

<style scoped>
.products-page {
  min-height: 100vh;
}

.products-page__catalog {
  display: grid;
  gap: 2rem;
  width: min(100%, 1180px);
  margin: 0 auto;
  padding: 4.5rem var(--space-page-inline);
}

.products-page__catalog-header {
  display: grid;
  gap: 0.55rem;
}

.products-page__catalog-header p {
  margin: 0;
  color: var(--color-accent-strong);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.products-page__catalog-header h2 {
  margin: 0;
  color: var(--color-text);
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: 1;
}

@media (max-width: 640px) {
  .products-page__catalog {
    padding-block: 3rem;
  }
}
</style>
