import QuickAction from '../components/home/QuickAction.jsx'
import StatTile from '../components/home/StatTile.jsx'
import StockOverview from '../components/home/StockOverview.jsx'
import ProductCard from '../components/products/ProductCard.jsx'
import ProductImage from '../components/products/ProductImage.jsx'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import { CartIcon, ListIcon, PlusIcon } from '../components/ui/Icons.jsx'
import { LogoMark } from '../components/ui/Logo.jsx'
import { STORE } from '../data/store.js'
import { useInventory } from '../hooks/useInventory.js'
import { PATHS } from '../routes/paths.js'
import { getCartUnits, getCategories, getTotalStock } from '../state/selectors.js'

const QUICK_ACTIONS = [
  { to: PATHS.addProduct, title: 'Agregar artículos', description: 'Ingresa un nuevo producto', Icon: PlusIcon },
  { to: PATHS.products, title: 'Lista de artículos', description: 'Consulta y filtra el inventario', Icon: ListIcon },
  { to: PATHS.cart, title: 'Carrito de compras', description: 'Revisa la compra en curso', Icon: CartIcon },
]

export default function Home() {
  const { inventory, cart } = useInventory()

  const stats = [
    { label: 'Unidades disponibles', value: getTotalStock(inventory) },
    { label: 'Productos en catálogo', value: inventory.length },
    { label: 'Categorías', value: getCategories(inventory).length },
    { label: 'Unidades en el carrito', value: getCartUnits(cart) },
  ]

  return (
    <div className="space-y-8">
      <section className="grid overflow-hidden rounded-3xl bg-brand text-white md:grid-cols-[3fr_2fr]">
        <div className="p-6 sm:p-10">
          <LogoMark className="size-14 bg-white/15" />
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">{STORE.name}</h1>
          <p className="mt-3 max-w-lg text-lg text-white/85">
            Bienvenido al panel del supermercado. Aquí puedes revisar el inventario, consultar cada producto y preparar el carrito de compras.
          </p>
          <ButtonLink to={PATHS.products} variant="accent" className="mt-6">
            Ver inventario
          </ButtonLink>
        </div>
        <div className="hidden grid-cols-2 gap-0.5 md:grid">
          <ProductImage product={inventory[0]} className="row-span-2 size-full" />
          <ProductImage product={inventory[2]} className="size-full" />
          <ProductImage product={inventory[3]} className="size-full" />
        </div>
      </section>

      <section aria-label="Resumen del inventario" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatTile key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[3fr_2fr]">
        <StockOverview products={inventory} />
        <div>
          <h2 className="mb-3 text-lg font-bold">Accesos rápidos</h2>
          <div className="space-y-3">
            {QUICK_ACTIONS.map((action) => (
              <QuickAction key={action.to} {...action} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Productos disponibles</h2>
        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {inventory.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
