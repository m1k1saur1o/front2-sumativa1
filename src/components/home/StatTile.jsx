import Card from '../ui/Card.jsx'

export default function StatTile({ value, label }) {
  return (
    <Card className="p-4 sm:p-5">
      <p className="text-3xl font-bold tabular-nums sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </Card>
  )
}
