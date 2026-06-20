<script setup lang="ts">
import type { Product } from '../types/product'
import { formatProductPrice } from '../utils/formatProductPrice'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article class="product-card">
    <div class="product-card__media">
      <img :src="product.image" :alt="product.title" loading="lazy">
    </div>

    <div class="product-card__body">
      <p class="product-card__category">{{ product.category }}</p>
      <h2 class="product-card__title">{{ product.title }}</h2>
      <p class="product-card__description">{{ product.description }}</p>
    </div>

    <footer class="product-card__footer">
      <strong class="product-card__price">{{ formatProductPrice(product.price) }}</strong>
      <span class="product-card__rating" :aria-label="`${product.rating.rate} out of 5 stars`">
        {{ product.rating.rate }} / 5
      </span>
    </footer>
  </article>
</template>

<style scoped>
.product-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.product-card__media {
  display: grid;
  min-height: 220px;
  place-items: center;
  padding: 1.5rem;
  background: var(--color-surface-muted);
}

.product-card__media img {
  width: min(100%, 180px);
  height: 180px;
  object-fit: contain;
}

.product-card__body {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  padding: 1.25rem;
}

.product-card__category {
  margin: 0;
  color: var(--color-accent-strong);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.product-card__title {
  display: -webkit-box;
  min-height: 3.25rem;
  margin: 0;
  overflow: hidden;
  color: var(--color-text);
  font-size: 1.1rem;
  line-height: 1.45;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.product-card__description {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem 1.25rem;
}

.product-card__price {
  color: var(--color-text);
  font-size: 1.1rem;
}

.product-card__rating {
  white-space: nowrap;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
</style>
