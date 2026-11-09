import { ACTIONS } from './actions.js'

// El stock vive solo en `inventory`; el carrito guarda únicamente
// { productId, quantity }. Cada operación actualiza ambas listas a la vez
// y sin mutarlas, para que las cantidades nunca se desincronicen.

const findCartItem = (cart, productId) =>
  cart.find((item) => item.productId === productId)

const adjustStock = (inventory, productId, delta) =>
  inventory.map((product) =>
    product.id === productId
      ? { ...product, stock: product.stock + delta }
      : product,
  )

function reserveUnits(state, productId, quantity) {
  const product = state.inventory.find((item) => item.id === productId)
  const isValid = Number.isInteger(quantity) && quantity > 0

  if (!product || !isValid || quantity > product.stock) return state

  const cart = findCartItem(state.cart, productId)
    ? state.cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      )
    : [...state.cart, { productId, quantity }]

  return { inventory: adjustStock(state.inventory, productId, -quantity), cart }
}

function releaseUnits(state, productId, quantity) {
  const cartItem = findCartItem(state.cart, productId)
  if (!cartItem) return state

  const released = Math.min(quantity, cartItem.quantity)
  const remaining = cartItem.quantity - released

  const cart =
    remaining === 0
      ? state.cart.filter((item) => item.productId !== productId)
      : state.cart.map((item) =>
          item.productId === productId ? { ...item, quantity: remaining } : item,
        )

  return { inventory: adjustStock(state.inventory, productId, released), cart }
}

export function inventoryReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return reserveUnits(state, action.payload.productId, action.payload.quantity)

    case ACTIONS.INCREASE_QUANTITY:
      return findCartItem(state.cart, action.payload.productId)
        ? reserveUnits(state, action.payload.productId, 1)
        : state

    case ACTIONS.DECREASE_QUANTITY:
      return releaseUnits(state, action.payload.productId, 1)

    case ACTIONS.REMOVE_FROM_CART:
      return releaseUnits(state, action.payload.productId, Infinity)

    default:
      return state
  }
}
