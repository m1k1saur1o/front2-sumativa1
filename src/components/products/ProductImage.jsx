export default function ProductImage({ product, className = '' }) {
  return (
    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      decoding="async"
      className={`bg-line object-cover ${className}`}
    />
  )
}
