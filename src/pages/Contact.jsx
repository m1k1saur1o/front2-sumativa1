import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import DemoFormNote from '../components/ui/DemoFormNote.jsx'
import FormField from '../components/ui/FormField.jsx'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/ui/Icons.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { STORE } from '../data/store.js'

const CONTACT_DETAILS = [
  { label: 'Dirección', value: STORE.address, Icon: PinIcon },
  { label: 'Correo electrónico', value: STORE.email, Icon: MailIcon },
  { label: 'Teléfono', value: STORE.phone, Icon: PhoneIcon },
]

export default function Contact() {
  return (
    <>
      <PageHeader title="Contáctanos" description={`Estamos para ayudarte. Visítanos en ${STORE.name} o escríbenos.`} />

      <div className="grid gap-4 lg:grid-cols-[2fr_3fr]">
        <div className="space-y-4">
          <Card className="p-5">
            <h2 className="text-lg font-bold">Información de contacto</h2>
            <ul className="mt-4 space-y-4">
              {CONTACT_DETAILS.map(({ label, value, Icon }) => (
                <li key={label} className="flex gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div className="min-w-0">
                    <p className="text-sm text-muted">{label}</p>
                    <p className="font-semibold break-words">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-5">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <ClockIcon className="size-5 text-brand" />
              Horarios de atención
            </h2>
            <dl className="mt-4 space-y-2 text-sm">
              {STORE.hours.map(({ days, time }) => (
                <div key={days} className="flex justify-between gap-4">
                  <dt className="text-muted">{days}</dt>
                  <dd className="font-semibold tabular-nums">{time}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>

        <Card as="form" className="grid gap-4 p-5 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
          <h2 className="text-lg font-bold sm:col-span-2">Escríbenos</h2>
          <FormField id="contact-name" label="Nombre" placeholder="Tu nombre" autoComplete="name" />
          <FormField id="contact-email" label="Correo electrónico" type="email" placeholder="tu@correo.com" autoComplete="email" />
          <FormField id="contact-subject" label="Asunto" placeholder="¿En qué podemos ayudarte?" className="sm:col-span-2" />
          <FormField id="contact-message" label="Mensaje" as="textarea" rows={5} placeholder="Escribe tu mensaje" className="sm:col-span-2" />
          <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
            <Button type="submit">Enviar mensaje</Button>
            <DemoFormNote>Formulario de demostración: no envía información.</DemoFormNote>
          </div>
        </Card>
      </div>
    </>
  )
}
