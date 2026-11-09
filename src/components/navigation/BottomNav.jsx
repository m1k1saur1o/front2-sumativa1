import { PATHS } from '../../routes/paths.js'
import { ChatIcon, HomeIcon, InfoIcon } from '../ui/Icons.jsx'
import NavItem from './NavItem.jsx'

const ITEMS = [
  { to: PATHS.home, label: 'Home', Icon: HomeIcon, end: true },
  { to: PATHS.contact, label: 'Contáctanos', Icon: ChatIcon, end: true },
  { to: PATHS.about, label: 'Nosotros', Icon: InfoIcon, end: true },
]

export default function BottomNav() {
  return (
    <nav aria-label="Menú principal" className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)]">
      <ul className="mx-auto grid max-w-md grid-cols-3 gap-1 px-2 py-1.5">
        {ITEMS.map(({ to, label, Icon, end }) => (
          <li key={to}>
            <NavItem
              to={to}
              end={end}
              className="flex flex-col items-center gap-0.5 rounded-lg py-1.5 text-xs font-semibold transition-colors"
              activeClassName="bg-brand-soft text-brand"
              inactiveClassName="text-muted hover:text-ink"
            >
              <Icon />
              {label}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  )
}
