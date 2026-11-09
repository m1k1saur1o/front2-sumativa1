export const getCategories = (inventory) => [
  ...new Set(inventory.map((product) => product.category)),
]

export const filterByCategory = (inventory, category) =>
  category === 'all'
    ? inventory
    : inventory.filter((product) => product.category === category)

export const getTotalStock = (inventory) =>
  inventory.reduce((total, product) => total + product.stock, 0)

export const getCartUnits = (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0)

export const getCartLines = (inventory, cart) =>
  cart.map((item) => {
    const product = inventory.find(({ id }) => id === item.productId)
    return { product, quantity: item.quantity, subtotal: product.price * item.quantity }
  })

export const getCartTotal = (lines) =>
  lines.reduce((total, line) => total + line.subtotal, 0)
