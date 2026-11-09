const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-line disabled:text-muted'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'border border-brand bg-surface text-brand hover:bg-brand-soft',
  accent: 'bg-accent text-ink hover:bg-accent-dark',
  danger: 'text-danger hover:bg-danger-soft',
}

export const buttonClasses = (variant = 'primary', className = '') =>
  `${base} ${variants[variant]} ${className}`
