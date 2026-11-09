import { useInventory } from '../../hooks/useInventory.js'
import { PATHS } from '../../routes/paths.js'
import { getCartUnits } from '../../state/selectors.js'
import { CartIcon, ListIcon, PlusIcon } from '../ui/Icons.jsx'
import NavItem from './NavItem.jsx'

const ITEMS = [
  { to: PATHS.addProduct, label: 'Agregar artículos', Icon: PlusIcon },
  { to: PATHS.products, label: 'Lista de artículos', Icon: ListIcon },
  { to: PATHS.cart, label: 'Carrito de compras', Icon: CartIcon, showsCartCount: true },
]

export default function InventoryNav() {
  const { cart } = useInventory()
  const cartUnits = getCartUnits(cart)

  return (
    <nav aria-label="Gestión del inventario">
      <ul className="grid grid-cols-3 gap-1 md:flex">
        {ITEMS.map(({ to, label, Icon, showsCartCount }) => (
          <li key={to}>
            <NavItem
              to={to}
              className="relative flex h-full flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-center text-xs font-semibold leading-tight transition-colors md:flex-row md:gap-2 md:px-3 md:text-sm"
              activeClassName="bg-brand text-white"
              inactiveClassName="text-ink hover:bg-brand-soft"
            >
              <Icon className="size-5 shrink-0" />
              {label}
              {showsCartCount && cartUnits > 0 && (
                <span className="absolute right-2 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-bold tabular-nums text-ink md:static">
                  <span className="sr-only">Unidades en el carrito: </span>
                  {cartUnits}
                </span>
              )}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  )
}
