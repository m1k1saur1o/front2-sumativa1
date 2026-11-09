import { Link } from 'react-router-dom'
import { PATHS } from '../../routes/paths.js'
import { formatPrice } from '../../utils/format.js'
import Card from '../ui/Card.jsx'
import ProductImage from './ProductImage.jsx'
import StockBadge from './StockBadge.jsx'

export default function ProductCard({ product }) {
  return (
    <Card as="article" className="overflow-hidden transition-colors hover:border-brand">
      <Link to={PATHS.productDetail(product.id)} className="block">
        <ProductImage product={product} className="aspect-[4/3] w-full" />
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{product.category}</p>
          <h3 className="mt-1 text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-muted">{product.brand}</p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-lg font-bold tabular-nums">{formatPrice(product.price)}</span>
            <StockBadge stock={product.stock} />
          </div>
        </div>
      </Link>
    </Card>
  )
}
