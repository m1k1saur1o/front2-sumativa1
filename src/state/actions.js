export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}

export const addToCart = (productId, quantity = 1) => ({
  type: ACTIONS.ADD_TO_CART,
  payload: { productId, quantity },
})

export const increaseQuantity = (productId) => ({
  type: ACTIONS.INCREASE_QUANTITY,
  payload: { productId },
})

export const decreaseQuantity = (productId) => ({
  type: ACTIONS.DECREASE_QUANTITY,
  payload: { productId },
})

export const removeFromCart = (productId) => ({
  type: ACTIONS.REMOVE_FROM_CART,
  payload: { productId },
})
