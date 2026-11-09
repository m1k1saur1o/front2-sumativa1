import FormField from '../ui/FormField.jsx'

export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <FormField
      id="category-filter"
      label="Filtrar por categoría"
      as="select"
      className="w-full sm:w-64"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="all">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </FormField>
  )
}
