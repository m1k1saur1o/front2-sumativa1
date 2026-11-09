import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductImage from '../components/products/ProductImage.jsx'
import StockBadge from '../components/products/StockBadge.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { ArrowLeftIcon, CartIcon } from '../components/ui/Icons.jsx'
import QuantityControl from '../components/ui/QuantityControl.jsx'
import { useInventory } from '../hooks/useInventory.js'
import { PATHS } from '../routes/paths.js'
import { addToCart } from '../state/actions.js'
import { formatPrice } from '../utils/format.js'
import NotFound from './NotFound.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const { inventory, cart, dispatch } = useInventory()
  const [selected, setSelected] = useState(1)
  const [lastAdded, setLastAdded] = useState(0)

  const product = inventory.find((item) => item.id === Number(id))
  if (!product) return <NotFound />

  const soldOut = product.stock === 0
  const quantity = soldOut ? 0 : Math.min(selected, product.stock)
  const inCart = cart.find((item) => item.productId === product.id)?.quantity ?? 0

  const handleAdd = () => {
    dispatch(addToCart(product.id, quantity))
    setLastAdded(quantity)
    setSelected(1)
  }

  const details = [
    { label: 'Marca', value: product.brand },
    { label: 'Categoría', value: product.category },
    { label: 'Precio', value: formatPrice(product.price) },
    { label: 'Cantidad disponible', value: product.stock },
  ]

  return (
    <>
      <Link to={PATHS.products} className="mb-4 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand">
        <ArrowLeftIcon className="size-4" />
        Volver a la lista
      </Link>

      <Card as="article" className="grid overflow-hidden md:grid-cols-2">
        <ProductImage product={product} className="aspect-[4/3] w-full md:aspect-auto md:h-full md:max-h-[36rem]" />

        <div className="p-5 sm:p-8">
          <StockBadge stock={product.stock} />
          <h1 className="mt-3 text-3xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-3 text-muted">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            {details.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="text-lg font-semibold tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-6">
            <QuantityControl
              value={quantity}
              label={product.name}
              onDecrease={() => setSelected(quantity - 1)}
              onIncrease={() => setSelected(quantity + 1)}
              canDecrease={quantity > 1}
              canIncrease={quantity < product.stock}
            />
            <Button onClick={handleAdd} disabled={soldOut} className="flex-1 sm:flex-none">
              <CartIcon className="size-4" />
              {soldOut ? 'Agotado' : 'Agregar al carrito'}
            </Button>
          </div>

          <p role="status" className="mt-4 min-h-5 text-sm">
            {lastAdded > 0 && `Agregaste ${lastAdded} al carrito. `}
            {inCart > 0 && (
              <>
                Tienes {inCart} en el carrito.{' '}
                <Link to={PATHS.cart} className="font-semibold text-brand underline underline-offset-4">
                  Ver carrito
                </Link>
              </>
            )}
          </p>
        </div>
      </Card>
    </>
  )
}
