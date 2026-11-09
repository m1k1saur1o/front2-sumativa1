import { useMemo, useReducer } from 'react'
import { initialProducts } from '../data/products.js'
import { inventoryReducer } from '../state/reducer.js'
import { InventoryContext } from './inventoryContext.js'

const initialState = { inventory: initialProducts, cart: [] }

export default function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(inventoryReducer, initialState)
  const value = useMemo(() => ({ ...state, dispatch }), [state])

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>
}
