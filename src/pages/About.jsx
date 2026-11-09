import Card from '../components/ui/Card.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { STORE } from '../data/store.js'

const VALUES = [
  { title: 'Frescura diaria', text: 'Recibimos frutas, verduras y carnes cada mañana para que lleguen a tu mesa en su mejor momento.' },
  { title: 'Precios claros', text: 'Cada producto muestra su precio y disponibilidad para que planifiques tu compra sin sorpresas.' },
  { title: 'Cercanía', text: 'Trabajamos con productores de la región y conocemos a los vecinos que atendemos.' },
]

const DEPARTMENTS = [
  { name: 'Despensa', text: 'Cereales, galletas, arroz y básicos para todos los días.' },
  { name: 'Frescos', text: 'Verduras de la huerta y cortes de carne seleccionados.' },
  { name: 'Lácteos', text: 'Leche y productos refrigerados de consumo diario.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="Nosotros"
        description={`${STORE.name} es un supermercado de barrio dedicado a ofrecer productos de calidad, atención amable y un inventario siempre ordenado.`}
      />

      <section aria-labelledby="values-title">
        <h2 id="values-title" className="mb-3 text-xl font-bold">Lo que nos mueve</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {VALUES.map(({ title, text }) => (
            <Card key={title} className="p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="departments-title" className="mt-8">
        <h2 id="departments-title" className="mb-3 text-xl font-bold">Nuestras secciones</h2>
        <Card as="ul" className="divide-y divide-line">
          {DEPARTMENTS.map(({ name, text }) => (
            <li key={name} className="flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
              <span className="font-bold sm:w-32">{name}</span>
              <span className="text-muted">{text}</span>
            </li>
          ))}
        </Card>
      </section>
    </>
  )
}
