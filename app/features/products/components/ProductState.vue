<script setup lang="ts">
defineProps<{
  title: string
  description: string
  retryable?: boolean
  tone?: 'neutral' | 'danger'
}>()

defineEmits<{
  retry: []
}>()
</script>

<template>
  <section class="product-state" :class="`product-state--${tone ?? 'neutral'}`">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>

    <button v-if="retryable" type="button" @click="$emit('retry')">
      Try again
    </button>
  </section>
</template>

<style scoped>
.product-state {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-surface);
}

.product-state h2 {
  margin: 0;
  font-size: 1rem;
}

.product-state p {
  margin: 0.35rem 0 0;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.product-state button {
  min-height: 2.5rem;
  flex: 0 0 auto;
  border: 0;
  border-radius: 6px;
  padding: 0 1rem;
  background: var(--color-accent);
  color: white;
  font-weight: 700;
}

.product-state--danger {
  border-color: color-mix(in srgb, var(--color-danger), white 70%);
}

.product-state--danger h2 {
  color: var(--color-danger);
}

@media (max-width: 540px) {
  .product-state {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
