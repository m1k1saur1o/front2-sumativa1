import { BrowserRouter } from 'react-router-dom'
import InventoryProvider from './context/InventoryProvider.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

export default function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </InventoryProvider>
  )
}
