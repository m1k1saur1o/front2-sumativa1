export default function StockBadge({ stock, compact = false }) {
  const soldOut = stock === 0

  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums ${
        soldOut ? 'bg-danger-soft text-danger' : 'bg-brand-soft text-brand'
      }`}
    >
      {soldOut ? (
        'Agotado'
      ) : (
        <>
          {stock}
          <span className={compact ? 'hidden sm:inline' : undefined}> disponibles</span>
        </>
      )}
    </span>
  )
}
