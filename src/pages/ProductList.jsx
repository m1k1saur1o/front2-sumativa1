import { useState } from 'react'
import CategoryFilter from '../components/products/CategoryFilter.jsx'
import InventoryTable from '../components/products/InventoryTable.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useInventory } from '../hooks/useInventory.js'
import { filterByCategory, getCategories } from '../state/selectors.js'

export default function ProductList() {
  const { inventory } = useInventory()
  const [category, setCategory] = useState('all')

  // Lista derivada: `inventory` nunca se modifica al filtrar.
  const visibleProducts = filterByCategory(inventory, category)

  return (
    <>
      <PageHeader
        title="Lista de artículos"
        description={`Mostrando ${visibleProducts.length} de ${inventory.length} artículos.`}
      >
        <CategoryFilter categories={getCategories(inventory)} value={category} onChange={setCategory} />
      </PageHeader>

      <InventoryTable products={visibleProducts} />
    </>
  )
}
