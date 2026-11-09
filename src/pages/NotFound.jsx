import ButtonLink from '../components/ui/ButtonLink.jsx'
import Card from '../components/ui/Card.jsx'
import { PATHS } from '../routes/paths.js'

export default function NotFound() {
  return (
    <Card className="p-10 text-center">
      <h1 className="text-2xl font-bold">No encontramos esta página</h1>
      <p className="mt-1 text-muted">El contenido que buscas no existe o cambió de lugar.</p>
      <ButtonLink to={PATHS.home} className="mt-5">
        Volver al inicio
      </ButtonLink>
    </Card>
  )
}
