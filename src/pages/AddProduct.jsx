import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import DemoFormNote from '../components/ui/DemoFormNote.jsx'
import FormField from '../components/ui/FormField.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'

const CATEGORY_OPTIONS = ['Despensa', 'Frescos', 'Lácteos', 'Bebidas', 'Limpieza']

export default function AddProduct() {
  return (
    <>
      <PageHeader title="Agregar artículos" description="Completa los datos del nuevo producto para el inventario." />

      <Card as="form" className="grid max-w-3xl gap-4 p-5 sm:grid-cols-2 sm:p-6" onSubmit={(event) => event.preventDefault()}>
        <FormField id="product-name" label="Nombre del producto" placeholder="Ej. Pasta" />
        <FormField id="product-brand" label="Marca" placeholder="Ej. Trigo Dorado" />
        <FormField id="product-category" label="Categoría o tipo de producto" as="select" defaultValue="" className="sm:col-span-2">
          <option value="" disabled>Selecciona una categoría</option>
          {CATEGORY_OPTIONS.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </FormField>
        <FormField id="product-description" label="Descripción" as="textarea" rows={4} placeholder="Describe brevemente el producto" className="sm:col-span-2" />
        <FormField id="product-price" label="Precio" type="number" min="0" step="1" inputMode="numeric" placeholder="0" />
        <FormField id="product-stock" label="Cantidad disponible" type="number" min="0" step="1" inputMode="numeric" placeholder="0" />
        <FormField id="product-image" label="URL o referencia de imagen" placeholder="img/producto.jpg" className="sm:col-span-2" />

        <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
          <Button type="submit">Guardar artículo</Button>
          <Button type="reset" variant="secondary">Limpiar</Button>
          <DemoFormNote>Formulario de demostración: no registra productos.</DemoFormNote>
        </div>
      </Card>
    </>
  )
}
