import { Link } from 'react-router-dom'

export default function QuickAction({ to, title, description, Icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-brand"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
        <Icon />
      </span>
      <span>
        <span className="block font-bold">{title}</span>
        <span className="block text-sm text-muted">{description}</span>
      </span>
    </Link>
  )
}
