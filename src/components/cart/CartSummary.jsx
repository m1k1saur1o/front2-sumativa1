import { PATHS } from '../../routes/paths.js'
import { formatPrice } from '../../utils/format.js'
import ButtonLink from '../ui/ButtonLink.jsx'
import Card from '../ui/Card.jsx'

export default function CartSummary({ units, total }) {
  return (
    <Card as="aside" aria-label="Resumen de la compra" className="p-5 lg:sticky lg:top-6">
      <h2 className="text-lg font-bold">Resumen</h2>
      <dl className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <dt className="text-muted">Unidades</dt>
          <dd className="font-semibold tabular-nums">{units}</dd>
        </div>
        <div className="flex items-baseline justify-between border-t border-line pt-3">
          <dt className="font-bold">Total general</dt>
          <dd className="text-2xl font-bold tabular-nums">{formatPrice(total)}</dd>
        </div>
      </dl>
      <ButtonLink to={PATHS.products} variant="secondary" className="mt-5 w-full">
        Seguir agregando
      </ButtonLink>
    </Card>
  )
}
