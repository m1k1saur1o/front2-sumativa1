import Card from '../ui/Card.jsx'

export default function StockOverview({ products }) {
  const maxStock = Math.max(...products.map((product) => product.stock), 1)

  return (
    <Card className="p-5">
      <h2 className="text-lg font-bold">Unidades disponibles por producto</h2>
      <ul className="mt-4 space-y-3">
        {products.map((product) => (
          <li key={product.id} className="grid grid-cols-[4.5rem_1fr_4.5rem] items-center gap-3 text-sm">
            <span className="font-semibold">{product.name}</span>
            <span className="h-2 overflow-hidden rounded-full bg-canvas" aria-hidden="true">
              <span
                className="block h-full rounded-full bg-brand transition-[width] duration-300"
                style={{ width: `${(product.stock / maxStock) * 100}%` }}
              />
            </span>
            <span className={`text-right tabular-nums ${product.stock === 0 ? 'font-semibold text-danger' : ''}`}>
              {product.stock === 0 ? 'Agotado' : product.stock}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
