<template>
  <section class="product-hero" aria-labelledby="front-test-title">
    <p class="product-hero__ghost product-hero__ghost--top" aria-hidden="true">
      Front Test
    </p>
    <div class="product-hero__content">
      <h1 id="front-test-title">Front Test</h1>
      <p>Are You Ready?</p>
    </div>
    <p class="product-hero__ghost product-hero__ghost--bottom" aria-hidden="true">
      Front Test
    </p>
  </section>
</template>

<style scoped>
.product-hero {
  position: relative;
  display: grid;
  min-height: 100svh;
  overflow: hidden;
  place-items: center;
  padding: 4rem var(--space-page-inline);
  background: #ffffff;
  isolation: isolate;
}

.product-hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.55rem;
  text-align: center;
}

.product-hero__content h1 {
  margin: 0;
  color: #06265c;
  font-size: clamp(3.2rem, 7.15vw, 5.35rem);
  font-weight: 800;
  line-height: 0.95;
}

.product-hero__content p {
  margin: 0;
  color: #b8c7df;
  font-size: clamp(2.35rem, 5.15vw, 4.25rem);
  font-weight: 300;
  line-height: 1;
}

.product-hero__ghost {
  position: absolute;
  left: 50%;
  z-index: 0;
  width: max-content;
  margin: 0;
  color: var(--color-ghost-text);
  font-size: clamp(8.5rem, 24vw, 18rem);
  font-weight: 800;
  line-height: 0.8;
  pointer-events: none;
  transform: translateX(-50%);
  user-select: none;
  white-space: nowrap;
}

.product-hero__ghost--top {
  top: clamp(-4.1rem, -8vw, -2rem);
}

.product-hero__ghost--bottom {
  bottom: clamp(-4.6rem, -9vw, -2.5rem);
}

@media (max-width: 640px) {
  .product-hero__content {
    gap: 1rem;
  }

  .product-hero__ghost {
    font-size: clamp(7rem, 34vw, 10rem);
  }
}
</style>
