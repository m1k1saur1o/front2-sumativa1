import { Link } from 'react-router-dom'
import { PATHS } from '../../routes/paths.js'
import { formatPrice } from '../../utils/format.js'
import Card from '../ui/Card.jsx'
import ProductImage from './ProductImage.jsx'
import StockBadge from './StockBadge.jsx'

const headClasses = 'px-2 py-3 text-left text-xs font-semibold uppercase text-muted sm:px-4 sm:tracking-wide'
const cellClasses = 'px-2 py-3 sm:px-4'

export default function InventoryTable({ products }) {
  return (
    <Card className="relative overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead className="border-b border-line">
          <tr>
            <th scope="col" className={headClasses}>Imagen</th>
            <th scope="col" className={headClasses}>Nombre</th>
            <th scope="col" className={`${headClasses} hidden md:table-cell`}>Marca</th>
            <th scope="col" className={`${headClasses} hidden md:table-cell`}>Categoría</th>
            <th scope="col" className={headClasses}>Precio</th>
            <th scope="col" className={headClasses}>
              <abbr title="Cantidad" className="no-underline sm:hidden">Cant.</abbr>
              <span className="hidden sm:inline">Cantidad</span>
            </th>
            <th scope="col" className={headClasses}>
              <span className="sr-only">Acción</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {products.map((product) => (
            <tr key={product.id}>
              <td className={cellClasses}>
                <ProductImage product={product} className="size-12 rounded-lg sm:size-14" />
              </td>
              <td className={cellClasses}>
                <span className="font-semibold">{product.name}</span>
                {/* En móvil, marca y categoría se muestran bajo el nombre. */}
                <span className="mt-0.5 block text-xs text-muted md:hidden">
                  {product.brand} · {product.category}
                </span>
              </td>
              <td className={`${cellClasses} hidden md:table-cell`}>{product.brand}</td>
              <td className={`${cellClasses} hidden md:table-cell`}>{product.category}</td>
              <td className={`${cellClasses} font-semibold tabular-nums`}>{formatPrice(product.price)}</td>
              <td className={cellClasses}>
                <StockBadge stock={product.stock} compact />
              </td>
              <td className={`${cellClasses} text-right`}>
                <Link
                  to={PATHS.productDetail(product.id)}
                  aria-label={`Ver detalle de ${product.name}`}
                  className="inline-block whitespace-nowrap rounded-md py-1 font-semibold text-brand underline-offset-4 hover:underline"
                >
                  Ver detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
