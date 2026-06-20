const productPriceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export function formatProductPrice(price: number) {
  return productPriceFormatter.format(price)
}
