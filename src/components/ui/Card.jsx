export default function Card({ as: Tag = 'div', className = '', ...props }) {
  return <Tag className={`rounded-2xl border border-line bg-surface ${className}`} {...props} />
}
