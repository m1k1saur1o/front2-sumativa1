import { Link } from 'react-router-dom'
import { STORE } from '../../data/store.js'
import { PATHS } from '../../routes/paths.js'

export function LogoMark({ className = 'size-10' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-brand text-white ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3/4" aria-hidden="true">
        <path d="m11 13 3-6M21 13l-3-6" />
        <path d="M6 13h20l-2.4 10a2 2 0 0 1-2 1.5H10.4a2 2 0 0 1-2-1.5z" />
        <path d="M13 17v3.5M19 17v3.5" />
      </svg>
    </span>
  )
}

export default function Logo() {
  return (
    <Link to={PATHS.home} className="flex items-center gap-3 rounded-xl">
      <LogoMark />
      <span className="leading-tight">
        <span className="block text-lg font-bold tracking-tight">{STORE.name}</span>
        <span className="block text-xs text-muted">{STORE.tagline}</span>
      </span>
    </Link>
  )
}
