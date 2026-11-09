import { MinusIcon, PlusIcon } from './Icons.jsx'

const stepClasses =
  'flex size-11 items-center justify-center text-brand transition-colors hover:bg-brand-soft disabled:cursor-not-allowed disabled:text-line disabled:hover:bg-transparent'

export default function QuantityControl({ value, label, onDecrease, onIncrease, canDecrease = true, canIncrease = true }) {
  return (
    <div role="group" aria-label={`Cantidad de ${label}`} className="inline-flex items-center overflow-hidden rounded-lg border border-line bg-white">
      <button type="button" className={stepClasses} onClick={onDecrease} disabled={!canDecrease} aria-label={`Disminuir cantidad de ${label}`}>
        <MinusIcon className="size-4" />
      </button>
      <output aria-live="polite" className="w-10 text-center font-semibold tabular-nums">
        {value}
      </output>
      <button type="button" className={stepClasses} onClick={onIncrease} disabled={!canIncrease} aria-label={`Aumentar cantidad de ${label}`}>
        <PlusIcon className="size-4" />
      </button>
    </div>
  )
}
