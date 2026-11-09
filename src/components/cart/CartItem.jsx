import { useInventory } from '../../hooks/useInventory.js'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../state/actions.js'
import { formatPrice } from '../../utils/format.js'
import ProductImage from '../products/ProductImage.jsx'
import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'
import { TrashIcon } from '../ui/Icons.jsx'
import QuantityControl from '../ui/QuantityControl.jsx'

export default function CartItem({ line }) {
  const { dispatch } = useInventory()
  const { product, quantity, subtotal } = line

  return (
    <Card as="li" className="flex gap-4 p-4">
      <ProductImage product={product} className="size-20 shrink-0 rounded-xl sm:size-24" />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-bold">{product.name}</h2>
            <p className="text-sm text-muted">{product.brand}</p>
            <p className="mt-1 text-sm tabular-nums">
              Precio unitario: <span className="font-semibold">{formatPrice(product.price)}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted">Subtotal</p>
            <p className="font-bold tabular-nums">{formatPrice(subtotal)}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <QuantityControl
              value={quantity}
              label={product.name}
              onDecrease={() => dispatch(decreaseQuantity(product.id))}
              onIncrease={() => dispatch(increaseQuantity(product.id))}
              canIncrease={product.stock > 0}
            />
            <span className="text-xs text-muted">
              {product.stock > 0 ? `Quedan ${product.stock}` : 'Sin más stock'}
            </span>
          </div>
          <Button
            variant="danger"
            className="px-3"
            onClick={() => dispatch(removeFromCart(product.id))}
            aria-label={`Eliminar ${product.name} del carrito`}
          >
            <TrashIcon className="size-4" />
            Eliminar
          </Button>
        </div>
      </div>
    </Card>
  )
}
