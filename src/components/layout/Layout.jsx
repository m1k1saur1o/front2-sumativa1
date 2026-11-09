import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BottomNav from '../navigation/BottomNav.jsx'
import InventoryNav from '../navigation/InventoryNav.jsx'
import Logo from '../ui/Logo.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between sm:px-6">
          <Logo />
          <InventoryNav />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 sm:px-6 sm:pt-8">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  )
}
