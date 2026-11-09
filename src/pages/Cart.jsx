import CartItem from '../components/cart/CartItem.jsx'
import CartSummary from '../components/cart/CartSummary.jsx'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Card from '../components/ui/Card.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useInventory } from '../hooks/useInventory.js'
import { PATHS } from '../routes/paths.js'
import { getCartLines, getCartTotal, getCartUnits } from '../state/selectors.js'

export default function Cart() {
  const { inventory, cart } = useInventory()
  const lines = getCartLines(inventory, cart)

  return (
    <>
      <PageHeader title="Carrito de compras" description="Ajusta las cantidades; el inventario se actualiza al instante." />

      {lines.length === 0 ? (
        <Card className="p-10 text-center">
          <h2 className="text-lg font-bold">Tu carrito está vacío</h2>
          <p className="mt-1 text-muted">Elige un producto de la lista para agregarlo.</p>
          <ButtonLink to={PATHS.products} className="mt-5">
            Ver lista de artículos
          </ButtonLink>
        </Card>
      ) : (
        <div className="grid items-start gap-4 lg:grid-cols-[2fr_1fr]">
          <ul className="space-y-3">
            {lines.map((line) => (
              <CartItem key={line.product.id} line={line} />
            ))}
          </ul>
          <CartSummary units={getCartUnits(cart)} total={getCartTotal(lines)} />
        </div>
      )}
    </>
  )
}
