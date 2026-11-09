const fieldClasses =
  'w-full rounded-lg border border-line bg-white px-3 py-2.5 text-base text-ink placeholder:text-muted/70 transition-colors hover:border-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25'

export default function FormField({ id, label, as: Control = 'input', className = '', children, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <Control id={id} name={id} className={fieldClasses} {...props}>
        {children}
      </Control>
    </div>
  )
}
