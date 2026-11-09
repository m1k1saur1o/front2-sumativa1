import { Link, useMatch } from 'react-router-dom'

export default function NavItem({ to, end = false, className, activeClassName, inactiveClassName, children }) {
  const isActive = Boolean(useMatch({ path: to, end }))

  return (
    <Link
      to={to}
      aria-current={isActive ? 'page' : undefined}
      className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
    >
      {children}
    </Link>
  )
}
